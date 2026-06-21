// @ds-bundle-skip — Vite app entry; not a design system component.
// react-dom/client loaded dynamically so the DS in-browser bundler doesn't
// try to resolve it as a static dependency.
import { StrictMode } from 'react'
import './index.css'
import App from './App.tsx'

const rootEl = document.getElementById('root')!
import('react-dom/client').then(({ createRoot }) => {
  createRoot(rootEl).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
