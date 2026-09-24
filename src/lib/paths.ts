/** GitHub Pages の base（例: /tutorials）付きパスを返す */
export function sitePath(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalized}`
}
