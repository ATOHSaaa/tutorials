import { tutorials, totalLessons } from '../data/tutorials'
import { calculateXp, getLevelFromXp, type LevelProgress } from './levels'

const STATS_KEY = 'tutorial-global-stats'
const STATS_EVENT = 'tutorial-stats-updated'

interface StoredStats {
  totalCompletions: number
}

function loadStats(): StoredStats {
  try {
    const saved = localStorage.getItem(STATS_KEY)
    if (!saved) return { totalCompletions: 0 }
    const parsed = JSON.parse(saved) as StoredStats
    return { totalCompletions: parsed.totalCompletions ?? 0 }
  } catch {
    return { totalCompletions: 0 }
  }
}

function saveStats(stats: StoredStats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats))
}

export function notifyStatsUpdated() {
  window.dispatchEvent(new Event(STATS_EVENT))
}

export function recordLessonComplete(_courseId: string, _lessonId: string) {
  const stats = loadStats()
  stats.totalCompletions += 1
  saveStats(stats)
  notifyStatsUpdated()
}

export function getCompletedLessonIds(storageKey: string): string[] {
  try {
    const saved = localStorage.getItem(storageKey)
    if (!saved) return []
    return JSON.parse(saved) as string[]
  } catch {
    return []
  }
}

export function getCourseProgressPercent(storageKey: string, lessonCount: number): number {
  const completed = getCompletedLessonIds(storageKey)
  return Math.round((completed.length / lessonCount) * 100)
}

export interface CourseProgress {
  id: string
  path: string
  title: string
  icon: string
  gradient: string
  completed: number
  total: number
  percent: number
}

export function getAllCourseProgress(): CourseProgress[] {
  return tutorials.map((t) => {
    const completed = getCompletedLessonIds(t.storageKey).length
    return {
      id: t.id,
      path: t.path,
      title: t.title,
      icon: t.icon,
      gradient: t.gradient,
      completed,
      total: t.lessons,
      percent: Math.round((completed / t.lessons) * 100),
    }
  })
}

function migrateStats(uniqueLessonsCompleted: number) {
  const stats = loadStats()
  if (stats.totalCompletions < uniqueLessonsCompleted) {
    stats.totalCompletions = uniqueLessonsCompleted
    saveStats(stats)
  }
}

export function computeGlobalLevel(): LevelProgress {
  let uniqueLessonsCompleted = 0
  let coursesCompleted = 0

  for (const tutorial of tutorials) {
    const completed = getCompletedLessonIds(tutorial.storageKey)
    uniqueLessonsCompleted += completed.length
    if (completed.length >= tutorial.lessons) {
      coursesCompleted += 1
    }
  }

  migrateStats(uniqueLessonsCompleted)

  const stats = loadStats()
  const xp = calculateXp(uniqueLessonsCompleted, stats.totalCompletions)
  const progress = getLevelFromXp(xp)

  return {
    ...progress,
    uniqueLessonsCompleted,
    totalCompletions: stats.totalCompletions,
    coursesCompleted,
    totalLessons,
  }
}

export { STATS_EVENT }
