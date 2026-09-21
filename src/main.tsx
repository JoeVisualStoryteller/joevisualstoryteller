// Vite app entry.
import { StrictMode } from 'react'
import './design-system/tokens.css'
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
