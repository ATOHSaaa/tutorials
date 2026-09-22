import { useEffect, useState } from 'react'
import { computeGlobalLevel, STATS_EVENT } from '../lib/globalStats'
import type { LevelProgress } from '../lib/levels'

export function useGlobalLevel(): LevelProgress {
  const [level, setLevel] = useState<LevelProgress>(() => computeGlobalLevel())

  useEffect(() => {
    const refresh = () => setLevel(computeGlobalLevel())
    window.addEventListener(STATS_EVENT, refresh)
    window.addEventListener('storage', refresh)
    return () => {
      window.removeEventListener(STATS_EVENT, refresh)
      window.removeEventListener('storage', refresh)
    }
  }, [])

  return level
}
