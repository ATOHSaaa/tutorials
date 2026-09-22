import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('storybook-tutorial-progress', lessons.length, 'storybook')
