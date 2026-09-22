import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('i18n-tutorial-progress', lessons.length, 'i18n')
