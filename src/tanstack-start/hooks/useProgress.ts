import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('tanstack-start-tutorial-progress', lessons.length, 'tanstack-start')
