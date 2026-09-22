import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('graphql-tutorial-progress', lessons.length, 'graphql')
