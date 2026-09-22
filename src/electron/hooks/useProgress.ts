import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('electron-tutorial-progress', lessons.length, 'electron')
