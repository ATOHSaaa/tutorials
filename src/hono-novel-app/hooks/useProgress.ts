import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('hono-novel-app-tutorial-progress', lessons.length, 'hono-novel-app')
