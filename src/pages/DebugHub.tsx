import { SiteLink } from '../components/SiteLink'
import { debugChallenges, debugChallengesByCategory } from '../data/debugChallenges'
import { debugCategoryLabels, debugDifficultyLabels } from '../lib/debug'
import type { DebugCategory } from '../lib/debug'
import { useDebugProgress } from '../hooks/useDebugProgress'
import './DebugHub.css'

const categoryOrder: DebugCategory[] = [
  'javascript',
  'css',
  'html',
  'dom',
  'react',
  'network',
  'typescript',
]

export function DebugHub() {
  const { solvedSet, solvedCount, resetProgress } = useDebugProgress()
  const total = debugChallenges.length

  return (
    <div className="debug-hub">
      <header className="debug-hub-hero">
        <SiteLink href="/" className="debug-hub-back">← チュートリアル一覧</SiteLink>
        <div className="debug-hub-badge">🐛 実践デバッグ</div>
        <h1>デバッグ問題集</h1>
        <p className="debug-hub-sub">
          実際のコードに潜むバグを見つけて修正する力を鍛えましょう。
          症状・コード・ヒントから原因を推理し、4択で答えを確認できます。
        </p>
        {solvedCount > 0 && (
          <p className="debug-hub-progress">
            {solvedCount} / {total} 問 解決済み
            {solvedCount === total && ' 🎉'}
          </p>
        )}
      </header>

      {categoryOrder.map((category) => {
        const challenges = debugChallengesByCategory[category]
        if (!challenges?.length) return null

        return (
          <section key={category} className="debug-hub-section">
            <h2 className="debug-hub-section-title">{debugCategoryLabels[category]}</h2>
            <div className="debug-hub-cards">
              {challenges.map((challenge) => {
                const solved = solvedSet.has(challenge.id)
                return (
                  <SiteLink
                    key={challenge.id}
                    href={`/debug/${challenge.id}`}
                    className={`debug-hub-card${solved ? ' solved' : ''}`}
                  >
                    <div className="debug-hub-card-icon">{solved ? '✓' : '🐛'}</div>
                    <div className="debug-hub-card-body">
                      <div className="debug-hub-card-header">
                        <h2>{challenge.title}</h2>
                        <span className="debug-hub-card-difficulty">
                          {debugDifficultyLabels[challenge.difficulty]}
                        </span>
                      </div>
                      <p className={`debug-hub-card-status${solved ? ' solved' : ''}`}>
                        {solved ? '解決済み' : '未挑戦'}
                      </p>
                    </div>
                    <span className="debug-hub-card-arrow">→</span>
                  </SiteLink>
                )
              })}
            </div>
          </section>
        )
      })}

      {solvedCount > 0 && (
        <footer className="debug-hub-footer">
          <button type="button" className="debug-hub-reset" onClick={resetProgress}>
            進捗をリセット
          </button>
        </footer>
      )}
    </div>
  )
}
