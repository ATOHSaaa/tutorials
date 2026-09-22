import type { QuizResult } from './quiz'

export function getQuizResult(storageKey: string): QuizResult | null {
  try {
    const saved = localStorage.getItem(storageKey)
    return saved ? (JSON.parse(saved) as QuizResult) : null
  } catch {
    return null
  }
}
