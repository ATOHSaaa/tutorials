import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('webfonts-tutorial-progress', lessons.length, 'webfonts')
