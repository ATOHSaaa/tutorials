import { Link } from 'react-router-dom'
import { coreTutorials, frameworkTutorials, practiceTutorials, tutorials } from '../data/tutorials'
import { quizByCourseId } from '../data/quizRegistry'
import { getQuizResult } from '../lib/quizStats'
import type { TutorialMeta } from '../data/tutorials'
import './QuizHub.css'

function QuizCardList({ list }: { list: TutorialMeta[] }) {
  return (
    <div className="quiz-hub-cards">
      {list.map((t) => {
        const quiz = quizByCourseId[t.id]
        if (!quiz) return null
        const result = getQuizResult(quiz.storageKey)
        const questionCount = quiz.questions.length

        return (
          <Link key={t.id} to={`/quizzes/${t.id}`} className="quiz-hub-card">
            <div className="quiz-hub-card-icon" style={{ background: t.gradient }}>
              {t.icon}
            </div>
            <div className="quiz-hub-card-body">
              <div className="quiz-hub-card-header">
                <h2>{t.title}</h2>
                <span className="quiz-hub-card-sub">{t.subtitle}</span>
              </div>
              <p className="quiz-hub-card-meta">{questionCount} 問</p>
              {result ? (
                <p className="quiz-hub-card-score">
                  ベスト: {result.bestScore}/{result.totalQuestions}
                  {result.bestScore === result.totalQuestions && ' 🎉'}
                </p>
              ) : (
                <p className="quiz-hub-card-score muted">未挑戦</p>
              )}
            </div>
            <span className="quiz-hub-card-arrow">→</span>
          </Link>
        )
      })}
    </div>
  )
}

export function QuizHub() {
  const totalQuestions = tutorials.reduce((sum, t) => {
    const quiz = quizByCourseId[t.id]
    return sum + (quiz?.questions.length ?? 0)
  }, 0)

  const attempted = tutorials.filter((t) => {
    const quiz = quizByCourseId[t.id]
    return quiz && getQuizResult(quiz.storageKey)
  }).length

  return (
    <div className="quiz-hub">
      <header className="quiz-hub-hero">
        <Link to="/" className="quiz-hub-back">← チュートリアル一覧</Link>
        <div className="quiz-hub-badge">📝 理解度チェック</div>
        <h1>クイズ一覧</h1>
        <p className="quiz-hub-sub">
          全{tutorials.length}コース・{totalQuestions}問のクイズで、学んだ内容を確認できます。
          {attempted > 0 && `（${attempted} コース挑戦済み）`}
        </p>
      </header>

      <section className="quiz-hub-section">
        <h2 className="quiz-hub-section-title">基礎</h2>
        <QuizCardList list={coreTutorials} />
      </section>

      <section className="quiz-hub-section">
        <h2 className="quiz-hub-section-title">フレームワーク & React 応用</h2>
        <QuizCardList list={frameworkTutorials} />
      </section>

      <section className="quiz-hub-section">
        <h2 className="quiz-hub-section-title">実践スキル</h2>
        <QuizCardList list={practiceTutorials} />
      </section>
    </div>
  )
}
