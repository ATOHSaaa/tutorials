import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('canvas-tutorial-progress', lessons.length, 'canvas')
