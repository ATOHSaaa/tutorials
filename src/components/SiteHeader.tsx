import { SiteLink } from './SiteLink'
import { SITE_NAME } from '../lib/site'
import { LevelButton } from './LevelButton'
import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <SiteLink href="/" className="site-header-logo">
          <span className="site-header-logo-text">{SITE_NAME}</span>
        </SiteLink>
        <nav className="site-header-nav">
          <SiteLink href="/quizzes" className="site-header-link">クイズ</SiteLink>
          <LevelButton />
        </nav>
      </div>
    </header>
  )
}
