import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('hono-post-app-tutorial-progress', lessons.length, 'hono-post-app')
