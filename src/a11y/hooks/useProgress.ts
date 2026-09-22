import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('a11y-tutorial-progress', lessons.length, 'a11y')
