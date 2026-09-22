import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('prisma-tutorial-progress', lessons.length, 'prisma')
