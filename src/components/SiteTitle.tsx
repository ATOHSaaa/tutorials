import { SITE_NAME_LINE1, SITE_NAME_LINE2 } from '../lib/site'

interface SiteTitleProps {
  className?: string
}

export function SiteTitle({ className }: SiteTitleProps) {
  return (
    <span className={className}>
      {SITE_NAME_LINE1}
      <br />
      {SITE_NAME_LINE2}
    </span>
  )
}
