import { useCallback, useEffect, useState } from 'react'
import { recordLessonComplete } from '../lib/globalStats'

export function createUseProgress(storageKey: string, lessonCount: number, courseId: string) {
  return function useProgress() {
    const [completed, setCompleted] = useState<Set<string>>(() => {
      try {
        const saved = localStorage.getItem(storageKey)
        return saved ? new Set(JSON.parse(saved)) : new Set()
      } catch {
        return new Set()
      }
    })

    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify([...completed]))
    }, [completed])

    const markComplete = useCallback((lessonId: string) => {
      recordLessonComplete(courseId, lessonId)
      setCompleted((prev) => new Set([...prev, lessonId]))
    }, [])

    const resetProgress = useCallback(() => {
      setCompleted(new Set())
      localStorage.removeItem(storageKey)
    }, [])

    const progressPercent = Math.round((completed.size / lessonCount) * 100)

    return { completed, markComplete, resetProgress, progressPercent }
  }
}
