import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('devtools-tutorial-progress', lessons.length, 'devtools')
