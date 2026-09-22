import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('pwa-tutorial-progress', lessons.length, 'pwa')
