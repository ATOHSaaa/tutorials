import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('perf-tutorial-progress', lessons.length, 'perf')
