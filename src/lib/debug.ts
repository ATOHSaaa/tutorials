export type DebugCategory = 'javascript' | 'css' | 'html' | 'dom' | 'react' | 'network' | 'typescript'
export type DebugDifficulty = 'easy' | 'medium' | 'hard'

export interface DebugChallenge {
  id: string
  title: string
  category: DebugCategory
  difficulty: DebugDifficulty
  symptom: string
  code: string
  hints: string[]
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  fixedCode: string
  relatedCourse?: string
}

export interface DebugProgress {
  solvedIds: string[]
  lastSolvedAt?: string
}

export const debugCategoryLabels: Record<DebugCategory, string> = {
  javascript: 'JavaScript',
  css: 'CSS',
  html: 'HTML',
  dom: 'DOM',
  react: 'React',
  network: 'Network',
  typescript: 'TypeScript',
}

export const debugDifficultyLabels: Record<DebugDifficulty, string> = {
  easy: '初級',
  medium: '中級',
  hard: '上級',
}
