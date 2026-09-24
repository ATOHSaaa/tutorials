import fs from 'fs'
import path from 'path'
import { globSync } from 'fs'

const lessonViews = globSync('src/*/components/LessonView.tsx')

const demoBlock = `
      <div className="lesson-demo-section">
        <h2 className="section-label">
          <span className="section-icon">▶</span> インタラクティブデモ
        </h2>
        <LessonDemo lessonId={lessonId} />
      </div>

`

for (const file of lessonViews) {
  let content = fs.readFileSync(file, 'utf8')
  content = content.replace("import { LessonDemo } from './demos/LessonDemos'\n", '')
  content = content.replace(demoBlock, '\n')
  fs.writeFileSync(file, content)
  console.log('Updated', file)
}

for (const dir of globSync('src/*/components/demos')) {
  fs.rmSync(dir, { recursive: true, force: true })
  console.log('Removed', dir)
}

console.log('Done')
