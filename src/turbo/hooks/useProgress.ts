import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('turbo-tutorial-progress', lessons.length, 'turbo')
