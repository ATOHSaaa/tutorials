import { useCallback, useEffect, useState } from 'react'
import { lessons } from '../data/lessons'

const STORAGE_KEY = 'html-tutorial-progress'

export function useProgress() {
  const [completed, setCompleted] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? new Set(JSON.parse(saved)) : new Set()
    } catch {
      return new Set()
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completed]))
  }, [completed])

  const markComplete = useCallback((lessonId: string) => {
    setCompleted((prev) => new Set([...prev, lessonId]))
  }, [])

  const resetProgress = useCallback(() => {
    setCompleted(new Set())
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const progressPercent = Math.round((completed.size / lessons.length) * 100)

  return { completed, markComplete, resetProgress, progressPercent }
}
