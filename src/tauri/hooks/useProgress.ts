import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('tauri-tutorial-progress', lessons.length, 'tauri')
