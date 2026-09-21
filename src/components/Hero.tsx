import { useEffect, useRef } from 'react'
import { heroContent, impactMetrics } from '../data/content'

interface PhysicsNode {
  x: number
  y: number
  vx: number
  vy: number
  width: number
  height: number
}

function overlaps(a: PhysicsNode, b: PhysicsNode) {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y
}

function resolveCollision(a: PhysicsNode, b: PhysicsNode) {
  const overlapX = Math.min(a.x + a.width - b.x, b.x + b.width - a.x)
  const overlapY = Math.min(a.y + a.height - b.y, b.y + b.height - a.y)

  if (overlapX <= 0 || overlapY <= 0) return

  if (overlapX < overlapY) {
    const direction = a.x + a.width / 2 < b.x + b.width / 2 ? -1 : 1
    a.x += direction * overlapX / 2
    b.x -= direction * overlapX / 2
    const relativeVelocity = (a.vx - b.vx) * direction
    if (relativeVelocity < 0) {
      const velocity = a.vx
      a.vx = b.vx * 0.96
      b.vx = velocity * 0.96
    }
  } else {
    const direction = a.y + a.height / 2 < b.y + b.height / 2 ? -1 : 1
    a.y += direction * overlapY / 2
    b.y -= direction * overlapY / 2
    const relativeVelocity = (a.vy - b.vy) * direction
    if (relativeVelocity < 0) {
      const velocity = a.vy
      a.vy = b.vy * 0.96
      b.vy = velocity * 0.96
    }
  }
}

function resolveAgainstCore(node: PhysicsNode, core: PhysicsNode) {
  if (!overlaps(node, core)) return

  const overlapX = Math.min(node.x + node.width - core.x, core.x + core.width - node.x)
  const overlapY = Math.min(node.y + node.height - core.y, core.y + core.height - node.y)

  if (overlapX < overlapY) {
    const direction = node.x + node.width / 2 < core.x + core.width / 2 ? -1 : 1
    node.x += direction * overlapX
    node.vx = Math.abs(node.vx) * direction
  } else {
    const direction = node.y + node.height / 2 < core.y + core.height / 2 ? -1 : 1
    node.y += direction * overlapY
    node.vy = Math.abs(node.vy) * direction
  }
}

function SystemMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const map = mapRef.current
    const nodes = nodeRefs.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!map || reduceMotion.matches) return

    let physicsNodes: PhysicsNode[] = []
    let animationFrame = 0
    let lastTime = performance.now()

    const layout = () => {
      const width = map.clientWidth
      const height = map.clientHeight
      const elements = nodes.filter((node): node is HTMLDivElement => node !== null)

      if (!width || !height || elements.length !== 4) return

      const dimensions = elements.map((element) => ({ width: element.offsetWidth, height: element.offsetHeight }))
      const left = 22
      const top = 76
      const right = width - 22
      const bottom = height - 58

      elements.forEach((element) => {
        element.style.left = '0px'
        element.style.top = '0px'
      })

      if (physicsNodes.length === 0) {
        physicsNodes = [
          { x: width / 2 - dimensions[0].width / 2, y: 92, vx: 24, vy: 20, ...dimensions[0] },
          { x: right - dimensions[1].width, y: height / 2 + 18, vx: -27, vy: 14, ...dimensions[1] },
          { x: width / 2 - dimensions[2].width / 2, y: bottom - dimensions[2].height, vx: -22, vy: -17, ...dimensions[2] },
          { x: left, y: height / 2 + 18, vx: 28, vy: -12, ...dimensions[3] },
        ]
      } else {
        physicsNodes.forEach((node, index) => {
          node.width = dimensions[index].width
          node.height = dimensions[index].height
          node.x = Math.max(left, Math.min(node.x, right - node.width))
          node.y = Math.max(top, Math.min(node.y, bottom - node.height))
        })
      }
    }

    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.032)
      lastTime = time
      layout()

      if (physicsNodes.length === 4) {
        const width = map.clientWidth
        const height = map.clientHeight
        const left = 22
        const top = 76
        const right = width - 22
        const bottom = height - 58
        const coreElement = map.querySelector('.map-core')
        const core: PhysicsNode = {
          x: width / 2 - (coreElement?.clientWidth ?? 132) / 2,
          y: height / 2 - (coreElement?.clientHeight ?? 132) / 2,
          width: coreElement?.clientWidth ?? 132,
          height: coreElement?.clientHeight ?? 132,
          vx: 0,
          vy: 0,
        }

        physicsNodes.forEach((node) => {
          node.x += node.vx * delta
          node.y += node.vy * delta

          if (node.x <= left || node.x + node.width >= right) {
            node.x = Math.max(left, Math.min(node.x, right - node.width))
            node.vx *= -1
          }
          if (node.y <= top || node.y + node.height >= bottom) {
            node.y = Math.max(top, Math.min(node.y, bottom - node.height))
            node.vy *= -1
          }
          resolveAgainstCore(node, core)
        })

        for (let index = 0; index < physicsNodes.length; index += 1) {
          for (let otherIndex = index + 1; otherIndex < physicsNodes.length; otherIndex += 1) {
            const first = physicsNodes[index]
            const second = physicsNodes[otherIndex]
            if (overlaps(first, second)) resolveCollision(first, second)
          }
        }

        physicsNodes.forEach((node, index) => {
          const element = nodes[index]
          if (element) element.style.transform = `translate3d(${node.x}px, ${node.y}px, 0)`
        })
      }

      animationFrame = requestAnimationFrame(animate)
    }

    const resizeObserver = new ResizeObserver(layout)
    resizeObserver.observe(map)
    layout()
    animationFrame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrame)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div ref={mapRef} className="system-map" role="img" aria-label="Operational footprint: 746 physical hosts, 1,500 plus virtual machines, 10,000 plus documents, and zero data loss during recovery">
      <div className="system-map__chrome" aria-hidden="true">
        <div className="window-dots"><i /><i /><i /></div>
        <span>ops / production footprint</span>
        <span>⌁</span>
      </div>
      <div className="system-map__orb system-map__orb--outer" aria-hidden="true" />
      <div className="system-map__orb system-map__orb--inner" aria-hidden="true" />
      <div className="system-map__grid" aria-hidden="true" />
      <svg className="system-map__lines" viewBox="0 0 600 500" fill="none" aria-hidden="true">
        <path d="M298 250H112M302 250H488M300 246V80M300 254V420" />
        <path d="M112 250L62 200M488 250L538 200M300 80L250 30M300 420L350 470" />
      </svg>

      <div className="map-core">
        <span className="map-core__pulse" />
        <strong>OPS</strong>
        <span>production<br />systems</span>
      </div>

      <div ref={(node) => { nodeRefs.current[0] = node }} className="map-node map-node--top map-node--floating">
        <strong>746</strong>
        <span>physical hosts</span>
      </div>
      <div ref={(node) => { nodeRefs.current[1] = node }} className="map-node map-node--right map-node--floating">
        <strong>1,500+</strong>
        <span>virtual machines</span>
      </div>
      <div ref={(node) => { nodeRefs.current[2] = node }} className="map-node map-node--bottom map-node--floating">
        <strong>10K+</strong>
        <span>documents in RAG</span>
      </div>
      <div ref={(node) => { nodeRefs.current[3] = node }} className="map-node map-node--left map-node--floating">
        <strong>0</strong>
        <span>data loss</span>
      </div>

      <div className="system-map__legend">
        <span><i className="legend-dot legend-dot--blue" /> architecture</span>
        <span><i className="legend-dot legend-dot--white" /> reliability</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{heroContent.eyebrow}</p>
          <p className="hero__name">{heroContent.name}</p>
          <h1>{heroContent.title}</h1>
          <p className="hero__principle">{heroContent.principle}</p>
          <p className="hero__philosophy">{heroContent.philosophy}</p>
          <p className="hero__summary">{heroContent.summary}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#work">See selected work <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#contact">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero__meta">
            <span className="status-dot" aria-hidden="true" />
            <span>{heroContent.currentRole}</span>
            <span className="hero__meta-divider" aria-hidden="true">/</span>
            <span>{heroContent.location}</span>
          </div>
        </div>

        <div className="hero__visual-wrap">
          <SystemMap />
          <div className="hero__visual-caption">
            <span>Operational footprint</span>
            <span>Current signal / 01</span>
          </div>
        </div>
      </div>

      <div className="shell hero__metrics" aria-label="Selected career metrics">
        {impactMetrics.slice(0, 4).map((metric) => (
          <div className="hero-metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
