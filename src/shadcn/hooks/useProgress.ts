import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('shadcn-tutorial-progress', lessons.length, 'shadcn')
