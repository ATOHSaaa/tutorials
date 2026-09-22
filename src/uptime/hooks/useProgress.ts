import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('uptime-tutorial-progress', lessons.length, 'uptime')
