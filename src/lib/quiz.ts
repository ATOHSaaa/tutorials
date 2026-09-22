export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface QuizResult {
  bestScore: number
  totalQuestions: number
  lastAttemptAt: string
}
