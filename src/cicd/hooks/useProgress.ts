import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('cicd-tutorial-progress', lessons.length, 'cicd')
