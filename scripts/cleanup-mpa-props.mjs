import fs from 'fs'
import path from 'path'

function updateSidebar(file) {
  let content = fs.readFileSync(file, 'utf8')
  content = content.replace(/\n  onSelect: \(id: string\) => void/, '')
  content = content.replace(/\n  onOpenQuiz: \(\) => void/, '')
  content = content.replace(/\n  onSelect,/, '')
  content = content.replace(/\n  onOpenQuiz,/, '')
  fs.writeFileSync(file, content)
}

function updateHome(file) {
  let content = fs.readFileSync(file, 'utf8')
  content = content.replace(/\n  onSelectLesson: \(id: string\) => void/, '')
  content = content.replace(/\n  onOpenQuiz: \(\) => void/, '')
  content = content.replace(/, onSelectLesson, onOpenQuiz/g, '')
  fs.writeFileSync(file, content)
}

function updateCourseApp(file) {
  let content = fs.readFileSync(file, 'utf8')
  content = content.replace(/\n            onSelectLesson=\{goToLesson\}/, '')
  content = content.replace(/\n            onOpenQuiz=\{goToQuiz\}/, '')
  content = content.replace(/\n          onSelect=\{goToLesson\}/, '')
  content = content.replace(/\n          onOpenQuiz=\{goToQuiz\}/, '')
  content = content.replace(/}, \[lessonId, navigate\]\)/, '}, [lessonId])')
  content = content.replace(/navigate\(BASE, \{ replace: true \}\)/g, 'window.location.replace(sitePath(BASE))')
  fs.writeFileSync(file, content)
}

const dirs = fs.readdirSync('src').filter((d) => {
  return fs.existsSync(path.join('src', d, 'App.tsx'))
})

for (const dir of dirs) {
  const sidebar = path.join('src', dir, 'components', 'Sidebar.tsx')
  const home = path.join('src', dir, 'components', 'Home.tsx')
  const app = path.join('src', dir, 'App.tsx')
  if (fs.existsSync(sidebar)) updateSidebar(sidebar)
  if (fs.existsSync(home)) updateHome(home)
  updateCourseApp(app)
}

console.log(`✓ cleaned up ${dirs.length} courses`)
