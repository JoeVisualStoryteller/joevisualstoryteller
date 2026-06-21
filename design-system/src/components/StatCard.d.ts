import type { StatDetailItem } from '../data/content'

export interface StatCardProps {
  value: string
  label: string
  /** Terminal-style eyebrow shown at the top of the hover dossier */
  detailLabel: string
  /** Items that back the headline number — powers the hover tooltip */
  detail: StatDetailItem[]
  /** Grid column — drives tooltip anchoring so it never runs off-screen on mobile */
  column: 'left' | 'right'
}

export default function StatCard(props: StatCardProps): JSX.Element
