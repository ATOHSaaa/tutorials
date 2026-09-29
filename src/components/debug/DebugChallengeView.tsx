import { useState } from 'react'
import { SiteLink } from '../SiteLink'
import type { DebugChallenge } from '../../lib/debug'
import { debugCategoryLabels, debugDifficultyLabels } from '../../lib/debug'
import './DebugChallengeView.css'

const OPTION_LABELS = ['A', 'B', 'C', 'D']

interface DebugChallengeViewProps {
  challenge: DebugChallenge
  isSolved: boolean
  onSolved: () => void
  onBack: () => void
  hasPrev: boolean
  hasNext: boolean
  onPrev: () => void
  onNext: () => void
}

export function DebugChallengeView({
  challenge,
  isSolved,
  onSolved,
  onBack,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}: DebugChallengeViewProps) {
  const [revealedHints, setRevealedHints] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(isSolved)

  const revealHint = () => {
    if (revealedHints < challenge.hints.length) {
      setRevealedHints((n) => n + 1)
    }
  }

  const selectOption = (index: number) => {
    if (showAnswer) return
    setSelectedIndex(index)
    setShowAnswer(true)
    if (index === challenge.correctIndex) {
      onSolved()
    }
  }

  const isCorrect = selectedIndex === challenge.correctIndex

  return (
    <div className="debug-challenge-page">
      <button type="button" className="debug-back" onClick={onBack}>
        ← デバッグ問題集
      </button>

      <header className="debug-challenge-header">
        <div className="debug-challenge-meta">
          <span className="debug-badge">{debugCategoryLabels[challenge.category]}</span>
          <span className={`debug-badge difficulty-${challenge.difficulty}`}>
            {debugDifficultyLabels[challenge.difficulty]}
          </span>
          {(isSolved || (showAnswer && isCorrect)) && (
            <span className="debug-badge solved">解決済み ✓</span>
          )}
        </div>
        <h1>{challenge.title}</h1>
        <p className="debug-symptom">
          <strong>症状:</strong> {challenge.symptom}
        </p>
      </header>

      <section className="debug-code-section">
        <h2>バグのあるコード</h2>
        <pre className="debug-code-block"><code>{challenge.code}</code></pre>
      </section>

      <section className="debug-hints">
        <button
          type="button"
          className="debug-hint-btn"
          onClick={revealHint}
          disabled={revealedHints >= challenge.hints.length}
        >
          💡 ヒントを見る ({revealedHints}/{challenge.hints.length})
        </button>
        {revealedHints > 0 && (
          <div className="debug-hint-list">
            {challenge.hints.slice(0, revealedHints).map((hint, i) => (
              <div key={i} className="debug-hint-item">
                ヒント {i + 1}: {hint}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="debug-question-section">
        <h2>{challenge.question}</h2>
        <div className="debug-options">
          {challenge.options.map((option, index) => {
            const isSelected = selectedIndex === index
            const isAnswer = challenge.correctIndex === index
            let className = 'debug-option'
            if (showAnswer) {
              if (isAnswer) className += ' correct'
              else if (isSelected) className += ' incorrect'
            } else if (isSelected) {
              className += ' selected'
            }

            return (
              <button
                key={index}
                type="button"
                className={className}
                onClick={() => selectOption(index)}
                disabled={showAnswer}
              >
                <span className="debug-option-marker">
                  {showAnswer && isAnswer ? '✓' : showAnswer && isSelected ? '✗' : OPTION_LABELS[index]}
                </span>
                <span>{option}</span>
              </button>
            )
          })}
        </div>
      </section>

      {showAnswer && (
        <div className="debug-explanation">
          <strong>{isCorrect ? '正解！' : '不正解'}</strong>
          {challenge.explanation}
          <div className="debug-fixed-code">
            <h3>修正後のコード</h3>
            <pre className="debug-code-block"><code>{challenge.fixedCode}</code></pre>
          </div>
        </div>
      )}

      <div className="debug-nav">
        <button
          type="button"
          className="debug-nav-btn secondary"
          onClick={onPrev}
          disabled={!hasPrev}
        >
          ← 前の問題
        </button>
        {hasNext ? (
          <button type="button" className="debug-nav-btn primary" onClick={onNext}>
            次の問題 →
          </button>
        ) : (
          <button type="button" className="debug-nav-btn primary" onClick={onBack}>
            問題一覧に戻る
          </button>
        )}
      </div>

      {challenge.relatedCourse && (
        <p className="debug-related">
          関連チュートリアル:{' '}
          <SiteLink href={`/${challenge.relatedCourse}`}>
            {challenge.relatedCourse.toUpperCase()} コース
          </SiteLink>
        </p>
      )}
    </div>
  )
}
