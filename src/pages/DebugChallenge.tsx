import { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { debugChallenges } from '../data/debugChallenges'
import { DebugChallengeView } from '../components/debug/DebugChallengeView'
import { useDebugProgress } from '../hooks/useDebugProgress'

export function DebugChallenge() {
  const { challengeId } = useParams()
  const navigate = useNavigate()
  const { solvedSet, markSolved } = useDebugProgress()

  const index = debugChallenges.findIndex((c) => c.id === challengeId)
  const challenge = index >= 0 ? debugChallenges[index] : null

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [challengeId])

  if (!challenge) {
    return <Navigate to="/debug" replace />
  }

  const goToChallenge = (id: string) => navigate(`/debug/${id}`)

  return (
    <DebugChallengeView
      challenge={challenge}
      isSolved={solvedSet.has(challenge.id)}
      onSolved={() => markSolved(challenge.id)}
      onBack={() => navigate('/debug')}
      hasPrev={index > 0}
      hasNext={index < debugChallenges.length - 1}
      onPrev={() => goToChallenge(debugChallenges[index - 1].id)}
      onNext={() => goToChallenge(debugChallenges[index + 1].id)}
    />
  )
}
