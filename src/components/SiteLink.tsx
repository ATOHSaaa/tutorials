import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { sitePath } from '../lib/paths'

interface SiteLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  children: ReactNode
}

export function SiteLink({ href, children, ...props }: SiteLinkProps) {
  return (
    <a href={sitePath(href)} {...props}>
      {children}
    </a>
  )
}
