import { lessons } from '../data/lessons'
import { createUseProgress } from '../../hooks/useTutorialProgress'

export const useProgress = createUseProgress('cloudflare-tutorial-progress', lessons.length, 'cloudflare')
