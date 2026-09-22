import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('supabase-tutorial-progress', lessons.length, 'supabase')
