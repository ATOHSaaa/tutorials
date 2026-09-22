import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('websocket-tutorial-progress', lessons.length, 'websocket')
