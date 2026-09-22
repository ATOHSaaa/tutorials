import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('vite-tutorial-progress', lessons.length, 'vite')
