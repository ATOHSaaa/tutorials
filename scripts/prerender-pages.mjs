import fs from 'fs'
import path from 'path'

const distDir = 'dist'
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')

function writeRoute(routePath) {
  const dir = routePath ? path.join(distDir, routePath) : distDir
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), indexHtml)
}

function parseCoursePaths() {
  const content = fs.readFileSync('src/data/tutorials.ts', 'utf8')
  const ids = [...content.matchAll(/\{\s*id:\s*'([^']+)'/g)].map((m) => m[1])
  const paths = [...content.matchAll(/path:\s*'(\/[^']+)'/g)].map((m) => m[1])
  return ids.map((id, i) => ({ id, path: paths[i] }))
}

function parseLessonIds(slug) {
  const file = path.join('src', slug, 'data', 'lessons.ts')
  if (!fs.existsSync(file)) return []
  const content = fs.readFileSync(file, 'utf8')
  return [...content.matchAll(/\{\s*\n\s*id:\s*'([^']+)'/g)].map((m) => m[1])
}

const routes = new Set([''])

for (const extra of ['mypage', 'quizzes']) {
  routes.add(extra)
}

for (const { id, path: coursePath } of parseCoursePaths()) {
  const slug = coursePath.slice(1)
  routes.add(slug)
  routes.add(`${slug}/quiz`)
  routes.add(`quizzes/${id}`)

  for (const lessonId of parseLessonIds(slug)) {
    routes.add(`${slug}/${lessonId}`)
  }
}

for (const route of routes) {
  writeRoute(route)
}

// 未知 URL 用フォールバック（GitHub Pages）
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'))

console.log(`✓ prerendered ${routes.size} routes`)
