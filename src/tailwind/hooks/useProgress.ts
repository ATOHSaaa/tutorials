import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('tailwind-tutorial-progress', lessons.length, 'tailwind')
