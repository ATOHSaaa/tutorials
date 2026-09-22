export interface LevelInfo {
  level: number
  minXp: number
}

export interface LevelProgress {
  level: LevelInfo
  nextLevel: LevelInfo | null
  xp: number
  xpInLevel: number
  xpToNext: number
  progressPercent: number
  uniqueLessonsCompleted: number
  totalCompletions: number
  coursesCompleted: number
  totalLessons: number
}

export const LEVELS: LevelInfo[] = [
  { level: 1, minXp: 0 },
  { level: 2, minXp: 15 },
  { level: 3, minXp: 40 },
  { level: 4, minXp: 80 },
  { level: 5, minXp: 140 },
  { level: 6, minXp: 220 },
  { level: 7, minXp: 320 },
  { level: 8, minXp: 450 },
  { level: 9, minXp: 600 },
  { level: 10, minXp: 800 },
]

const XP_PER_LESSON = 10
const XP_PER_REPEAT = 2

export function calculateXp(uniqueLessonsCompleted: number, totalCompletions: number): number {
  const repeats = Math.max(0, totalCompletions - uniqueLessonsCompleted)
  return uniqueLessonsCompleted * XP_PER_LESSON + repeats * XP_PER_REPEAT
}

export function getLevelFromXp(xp: number): LevelProgress {
  let current = LEVELS[0]
  let next: LevelInfo | null = LEVELS[1] ?? null

  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXp) {
      current = LEVELS[i]
      next = LEVELS[i + 1] ?? null
      break
    }
  }

  const xpInLevel = xp - current.minXp
  const xpToNext = next ? next.minXp - current.minXp : 0
  const progressPercent = next
    ? Math.min(100, Math.round((xpInLevel / xpToNext) * 100))
    : 100

  return {
    level: current,
    nextLevel: next,
    xp,
    xpInLevel,
    xpToNext,
    progressPercent,
    uniqueLessonsCompleted: 0,
    totalCompletions: 0,
    coursesCompleted: 0,
    totalLessons: 0,
  }
}
