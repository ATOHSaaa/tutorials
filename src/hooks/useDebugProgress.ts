import { useCallback, useEffect, useState } from 'react'
import type { DebugProgress } from '../lib/debug'

const STORAGE_KEY = 'debug-challenges-progress'

export function useDebugProgress() {
  const [progress, setProgress] = useState<DebugProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? (JSON.parse(saved) as DebugProgress) : { solvedIds: [] }
    } catch {
      return { solvedIds: [] }
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const solvedSet = new Set(progress.solvedIds)

  const markSolved = useCallback((id: string) => {
    setProgress((prev) => {
      if (prev.solvedIds.includes(id)) return prev
      return {
        solvedIds: [...prev.solvedIds, id],
        lastSolvedAt: new Date().toISOString(),
      }
    })
  }, [])

  const resetProgress = useCallback(() => {
    setProgress({ solvedIds: [] })
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  return { solvedSet, solvedCount: progress.solvedIds.length, markSolved, resetProgress }
}
