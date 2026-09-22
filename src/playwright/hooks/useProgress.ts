import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('playwright-tutorial-progress', lessons.length, 'playwright')
