import { useState } from 'react'
import type { QuizQuestion } from '../../lib/quiz'
import { useQuizProgress } from '../../hooks/useQuizProgress'
import './QuizPage.css'

type Phase = 'intro' | 'question' | 'result'

interface QuizPageProps {
  courseTitle: string
  storageKey: string
  questions: QuizQuestion[]
  onBack: () => void
  backLabel?: string
}

const OPTION_LABELS = ['A', 'B', 'C', 'D']

function getResultMessage(score: number, total: number): string {
  const percent = Math.round((score / total) * 100)
  if (percent === 100) return '完璧です！このコースの内容をしっかり理解できています。'
  if (percent >= 80) return 'よくできました！あと少し復習すれば完璧です。'
  if (percent >= 60) return 'まずまずの理解度です。間違えた問題をレッスンで確認してみましょう。'
  return 'もう一度レッスンを見直してから、再挑戦してみましょう。'
}

export function QuizPage({ courseTitle, storageKey, questions, onBack, backLabel = '← チュートリアルトップ' }: QuizPageProps) {
  const { result, saveScore, resetQuiz } = useQuizProgress(storageKey, questions.length)
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showExplanation, setShowExplanation] = useState(false)
  const [finalScore, setFinalScore] = useState(0)

  const currentQuestion = questions[currentIndex]

  const calculateScore = (answerMap: Record<string, number>) =>
    Object.entries(answerMap).reduce((sum, [id, idx]) => {
      const q = questions.find((item) => item.id === id)
      return sum + (q && q.correctIndex === idx ? 1 : 0)
    }, 0)

  const answeredCount = Object.keys(answers).length
  const score = calculateScore(answers)

  const startQuiz = () => {
    setPhase('question')
    setCurrentIndex(0)
    setSelectedIndex(null)
    setAnswers({})
    setShowExplanation(false)
  }

  const selectOption = (index: number) => {
    if (showExplanation) return
    setSelectedIndex(index)
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: index }))
    setShowExplanation(true)
  }

  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedIndex(null)
      setShowExplanation(false)
    } else {
      const resultScore = calculateScore(answers)
      setFinalScore(resultScore)
      saveScore(resultScore)
      setPhase('result')
    }
  }

  const retry = () => {
    setPhase('intro')
    setCurrentIndex(0)
    setSelectedIndex(null)
    setAnswers({})
    setShowExplanation(false)
  }

  if (phase === 'intro') {
    return (
      <div className="quiz-page">
        <div className="quiz-page-inner">
          <button type="button" className="quiz-back" onClick={onBack}>
            {backLabel}
          </button>
          <header className="quiz-header">
            <h1>{courseTitle} クイズ</h1>
            <p>{questions.length} 問の理解度チェック。レッスンの内容を確認しましょう。</p>
            {result && (
              <span className="quiz-best">
                ベストスコア: {result.bestScore} / {result.totalQuestions}
              </span>
            )}
          </header>
          <button type="button" className="quiz-start-btn" onClick={startQuiz}>
            クイズを始める →
          </button>
        </div>
      </div>
    )
  }

  if (phase === 'result') {
    const percent = Math.round((finalScore / questions.length) * 100)
    const scoreClass = percent === 100 ? 'great' : percent >= 60 ? 'good' : 'low'

    return (
      <div className="quiz-page">
        <div className="quiz-page-inner">
          <button type="button" className="quiz-back" onClick={onBack}>
            {backLabel}
          </button>
          <div className="quiz-result">
            <div className={`quiz-result-score ${scoreClass}`}>
              {finalScore}/{questions.length}
            </div>
            <p className="quiz-result-label">正解数</p>
            <p className="quiz-result-message">{getResultMessage(finalScore, questions.length)}</p>
            <div className="quiz-result-actions">
              <button type="button" className="quiz-start-btn" onClick={retry}>
                もう一度挑戦
              </button>
              <button type="button" className="quiz-secondary-btn" onClick={onBack}>
                トップに戻る
              </button>
              {result && (
                <button type="button" className="quiz-secondary-btn" onClick={resetQuiz}>
                  ベストスコアをリセット
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const isCorrect = selectedIndex === currentQuestion.correctIndex

  return (
    <div className="quiz-page">
      <div className="quiz-page-inner">
        <button type="button" className="quiz-back" onClick={onBack}>
          {backLabel}
        </button>

        <div className="quiz-progress">
          <span>問題 {currentIndex + 1} / {questions.length}</span>
          <span>正解 {score} / {answeredCount}</span>
        </div>
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${((currentIndex + (showExplanation ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>

        <div className="quiz-question">
          <h2>{currentQuestion.question}</h2>
          <div className="quiz-options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedIndex === index
              const isAnswer = currentQuestion.correctIndex === index
              let className = 'quiz-option'
              if (showExplanation) {
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
                  disabled={showExplanation}
                >
                  <span className="quiz-option-marker">
                    {showExplanation && isAnswer ? '✓' : showExplanation && isSelected ? '✗' : OPTION_LABELS[index]}
                  </span>
                  <span>{option}</span>
                </button>
              )
            })}
          </div>

          {showExplanation && (
            <div className="quiz-explanation">
              <strong>{isCorrect ? '正解！' : '不正解'}</strong>
              {currentQuestion.explanation}
            </div>
          )}

          <div className="quiz-actions">
            <button
              type="button"
              className="quiz-next-btn"
              onClick={goNext}
              disabled={!showExplanation}
            >
              {currentIndex < questions.length - 1 ? '次の問題 →' : '結果を見る'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
