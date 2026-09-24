import fs from 'fs'
import path from 'path'

const courseAppFiles = fs.readdirSync('src').flatMap((dir) => {
  const appPath = path.join('src', dir, 'App.tsx')
  if (dir === 'pages' || dir === 'components' || dir === 'data' || dir === 'hooks' || dir === 'lib') return []
  return fs.existsSync(appPath) ? [appPath] : []
})

function updateCourseApp(file) {
  let content = fs.readFileSync(file, 'utf8')
  if (content.includes('SiteLink')) return false

  content = content.replace(
    /import \{ Link, useNavigate, useParams \} from 'react-router-dom'/,
    `import { useParams } from 'react-router-dom'\nimport { SiteLink } from '../components/SiteLink'\nimport { sitePath } from '../lib/paths'`,
  )
  content = content.replace(
    /import \{ useNavigate, useParams \} from 'react-router-dom'/,
    `import { useParams } from 'react-router-dom'\nimport { SiteLink } from '../components/SiteLink'\nimport { sitePath } from '../lib/paths'`,
  )

  content = content.replace(/\n  const navigate = useNavigate\(\)/, '')
  content = content.replace(/navigate\(BASE, \{ replace: true \}\)/g, 'window.location.replace(sitePath(BASE))')
  content = content.replace(
    /navigate\(`\$\{BASE\}\/\$\{id\}`\)/g,
    'window.location.href = sitePath(`${BASE}/${id}`)',
  )
  content = content.replace(/navigate\(BASE\)/g, 'window.location.href = sitePath(BASE)')
  content = content.replace(
    /navigate\(`\$\{BASE\}\/quiz`\)/g,
    'window.location.href = sitePath(`${BASE}/quiz`)',
  )

  content = content.replace(
    /const goToLesson = \(id: string\) => navigate\(`\$\{BASE\}\/\$\{id\}`\)/,
    'const goToLesson = (id: string) => { window.location.href = sitePath(`${BASE}/${id}`) }',
  )
  content = content.replace(/const goHome = \(\) => navigate\(BASE\)/, 'const goHome = () => { window.location.href = sitePath(BASE) }')
  content = content.replace(
    /const goToQuiz = \(\) => navigate\(`\$\{BASE\}\/quiz`\)/,
    'const goToQuiz = () => { window.location.href = sitePath(`${BASE}/quiz`) }',
  )

  content = content.replace(/<Link to="/g, '<SiteLink href="')
  content = content.replace(/<\/Link>/g, '</SiteLink>')
  content = content.replace(
    /<button className="home-link" onClick=\{goHome\}>← チュートリアルトップ<\/button>/,
    '<SiteLink href={BASE} className="home-link">← チュートリアルトップ</SiteLink>',
  )

  content = content.replace(
    /<Sidebar\n          currentId=/,
    '<Sidebar\n          basePath={BASE}\n          currentId=',
  )
  content = content.replace(
    /<Home\n            completed=/,
    '<Home\n            basePath={BASE}\n            completed=',
  )

  content = content.replace(/}, \[lessonId, navigate\]\)/, '}, [lessonId])')

  fs.writeFileSync(file, content)
  return true
}

function updateSidebar(file) {
  let content = fs.readFileSync(file, 'utf8')
  if (content.includes('basePath')) return false

  if (!content.includes("import { sitePath }")) {
    content = content.replace(
      "import { lessons } from '../data/lessons'",
      "import { sitePath } from '../../lib/paths'\nimport { lessons } from '../data/lessons'",
    )
  }

  content = content.replace(
    'interface SidebarProps {\n  currentId: string',
    'interface SidebarProps {\n  basePath: string\n  currentId: string',
  )
  content = content.replace(
    'export function Sidebar({\n  currentId,',
    'export function Sidebar({\n  basePath,\n  currentId,',
  )

  content = content.replace(
    /            <button\n              key=\{lesson\.id\}\n              className=\{`lesson-nav-item \$\{isActive \? 'active' : ''\} \$\{isDone \? 'done' : ''\}`\}\n              onClick=\{\(\) => onSelect\(lesson\.id\)\}\n            >/,
    `            <a
              key={lesson.id}
              href={sitePath(\`\${basePath}/\${lesson.id}\`)}
              className={\`lesson-nav-item \${isActive ? 'active' : ''} \${isDone ? 'done' : ''}\`}
            >`,
  )
  content = content.replace(
    /            <\/button>\n          \)\n        \}\)\}/,
    `            </a>
          )
        })}`,
  )

  content = content.replace(
    /<button type="button" className="lesson-nav-item quiz-nav-item" onClick=\{onOpenQuiz\}>/,
    `<a href={sitePath(\`\${basePath}/quiz\`)} className="lesson-nav-item quiz-nav-item">`,
  )
  content = content.replace(
    /<\/button>\n      <\/nav>/,
    `</a>
      </nav>`,
  )

  fs.writeFileSync(file, content)
  return true
}

function updateHome(file) {
  let content = fs.readFileSync(file, 'utf8')
  if (content.includes('basePath')) return false

  if (!content.includes("import { sitePath }")) {
    content = content.replace(
      "import { lessons } from '../data/lessons'",
      "import { sitePath } from '../../lib/paths'\nimport { lessons } from '../data/lessons'",
    )
  }

  content = content.replace(
    'interface HomeProps {\n  completed: Set<string>',
    'interface HomeProps {\n  basePath: string\n  completed: Set<string>',
  )
  content = content.replace(
    'export function Home({ completed, progressPercent, onStart, onSelectLesson, onOpenQuiz }: HomeProps) {',
    'export function Home({ basePath, completed, progressPercent, onStart, onSelectLesson, onOpenQuiz }: HomeProps) {',
  )

  content = content.replace(
    /            <button\n              key=\{lesson\.id\}\n              className=\{`lesson-card \$\{completed\.has\(lesson\.id\) \? 'done' : ''\}`\}\n              onClick=\{\(\) => onSelectLesson\(lesson\.id\)\}\n            >/,
    `            <a
              key={lesson.id}
              href={sitePath(\`\${basePath}/\${lesson.id}\`)}
              className={\`lesson-card \${completed.has(lesson.id) ? 'done' : ''}\`}
            >`,
  )

  // Replace closing button for lesson cards - need careful match
  content = content.replace(
    /              <\/div>\n            <\/button>\n          \)\)\}/,
    `              </div>
            </a>
          ))}`,
  )

  content = content.replace(
    /<button type="button" className="btn-secondary" onClick=\{onOpenQuiz\}>\n            クイズに挑戦 →\n          <\/button>/,
    `<a href={sitePath(\`\${basePath}/quiz\`)} className="btn-secondary">
            クイズに挑戦 →
          </a>`,
  )

  fs.writeFileSync(file, content)
  return true
}

let appCount = 0
let sidebarCount = 0
let homeCount = 0

for (const file of courseAppFiles) {
  if (updateCourseApp(file)) appCount++
}

const sidebarFiles = fs.readdirSync('src').flatMap((dir) => {
  const file = path.join('src', dir, 'components', 'Sidebar.tsx')
  return fs.existsSync(file) ? [file] : []
})
for (const file of sidebarFiles) {
  if (updateSidebar(file)) sidebarCount++
}

const homeFiles = fs.readdirSync('src').flatMap((dir) => {
  const file = path.join('src', dir, 'components', 'Home.tsx')
  return fs.existsSync(file) ? [file] : []
})
for (const file of homeFiles) {
  if (updateHome(file)) homeCount++
}

console.log(`✓ updated ${appCount} App.tsx, ${sidebarCount} Sidebar.tsx, ${homeCount} Home.tsx`)
