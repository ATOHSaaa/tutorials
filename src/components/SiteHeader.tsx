import { Link } from 'react-router-dom'
import { SITE_NAME } from '../lib/site'
import { LevelButton } from './LevelButton'
import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="site-header-logo">
          <span className="site-header-logo-text">{SITE_NAME}</span>
        </Link>
        <nav className="site-header-nav">
          <Link to="/quizzes" className="site-header-link">クイズ</Link>
          <LevelButton />
        </nav>
      </div>
    </header>
  )
}
