import { useCallback, useEffect, useState } from 'react'
import type { QuizResult } from '../lib/quiz'

export function useQuizProgress(storageKey: string, totalQuestions: number) {
  const [result, setResult] = useState<QuizResult | null>(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      return saved ? (JSON.parse(saved) as QuizResult) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (result) {
      localStorage.setItem(storageKey, JSON.stringify(result))
    }
  }, [result, storageKey])

  const saveScore = useCallback(
    (score: number) => {
      setResult((prev) => {
        const bestScore = Math.max(score, prev?.bestScore ?? 0)
        return {
          bestScore,
          totalQuestions,
          lastAttemptAt: new Date().toISOString(),
        }
      })
    },
    [totalQuestions],
  )

  const resetQuiz = useCallback(() => {
    setResult(null)
    localStorage.removeItem(storageKey)
  }, [storageKey])

  return { result, saveScore, resetQuiz }
}
