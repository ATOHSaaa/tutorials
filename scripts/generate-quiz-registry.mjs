import fs from 'fs'
import path from 'path'

const SRC = path.resolve('src')
const tutorialsPath = path.join(SRC, 'data/tutorials.ts')
const tutorialsContent = fs.readFileSync(tutorialsPath, 'utf8')

const courses = []
for (const match of tutorialsContent.matchAll(
  /\{\s*id:\s*'([^']+)',\s*path:\s*'([^']+)',\s*title:\s*'([^']+)',\s*subtitle:\s*'([^']+)'[^}]*icon:\s*'([^']+)'[^}]*storageKey:\s*'([^']+)'[^}]*gradient:\s*'([^']+)'[^}]*section:\s*'(core|framework|practice)'/g,
)) {
  const [, id, , title, subtitle, icon, storageKey, gradient, section] = match
  const quizPath = path.join(SRC, id, 'data/quiz.ts')
  if (!fs.existsSync(quizPath)) {
    console.warn(`Skip ${id}: quiz.ts not found`)
    continue
  }
  courses.push({ id, title, subtitle, icon, storageKey, gradient, section })
}

function toImportName(id) {
  return id.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

const imports = courses
  .map((c) => `import { quizQuestions as ${toImportName(c.id)}Quiz } from '../${c.id}/data/quiz'`)
  .join('\n')

const entries = courses
  .map((c) => {
    const name = toImportName(c.id)
    return `  {
    id: '${c.id}',
    title: '${c.title}',
    subtitle: '${c.subtitle}',
    icon: '${c.icon}',
    gradient: '${c.gradient}',
    section: '${c.section}',
    storageKey: '${c.id}-tutorial-quiz',
    questions: ${name}Quiz,
  }`
  })
  .join(',\n')

const output = `import type { QuizQuestion } from '../lib/quiz'
${imports}

export interface QuizCourse {
  id: string
  title: string
  subtitle: string
  icon: string
  gradient: string
  section: 'core' | 'framework' | 'practice'
  storageKey: string
  questions: QuizQuestion[]
}

export const quizCourses: QuizCourse[] = [
${entries},
]

export const quizByCourseId: Record<string, QuizCourse> = Object.fromEntries(
  quizCourses.map((c) => [c.id, c]),
)
`

fs.writeFileSync(path.join(SRC, 'data/quizRegistry.ts'), output)
console.log(`✓ quizRegistry.ts (${courses.length} courses)`)
