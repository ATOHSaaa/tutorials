import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('dom-tutorial-progress', lessons.length, 'dom')
