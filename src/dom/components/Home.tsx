import { lessons } from '../data/lessons'

interface HomeProps {
  completed: Set<string>
  progressPercent: number
  onStart: () => void
  onSelectLesson: (id: string) => void
  onOpenQuiz: () => void
}

export function Home({ completed, progressPercent, onStart, onSelectLesson, onOpenQuiz }: HomeProps) {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-badge">無料 · ブラウザで学べる</div>
        <h1>
          <span className="hero-accent">DOM 操作</span> 入門
        </h1>
        <p className="hero-sub">
          要素の取得・変更・イベント処理まで。JavaScript で Web ページを直接操作する DOM 操作を10レッスンで学びます。
          環境構築不要、今すぐ始められます。
        </p>
        <button className="btn-primary btn-large" onClick={onStart}>
          {progressPercent > 0 ? '学習を続ける' : '学習を始める'} →
        </button>
        {progressPercent > 0 && (
          <p className="hero-progress">進捗: {progressPercent}% 完了</p>
        )}
      </div>

      <div className="home-features">
        <div className="feature-card">
          <span className="feature-icon">🔍</span>
          <h3>要素を取得</h3>
          <p>querySelector や getElementById で目的の要素を見つける方法を学べます。</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">✏️</span>
          <h3>内容を変更</h3>
          <p>テキスト、HTML、クラス、スタイルを動的に書き換える方法を学べます。</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">👆</span>
          <h3>イベント処理</h3>
          <p>クリックや入力に反応し、イベント委譲まで実践的に学べます。</p>
        </div>
      </div>


      <div className="home-lessons">
        <h2>レッスン一覧</h2>
        <div className="lesson-grid">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              className={`lesson-card ${completed.has(lesson.id) ? 'done' : ''}`}
              onClick={() => onSelectLesson(lesson.id)}
            >
              <span className="lesson-card-number">
                {completed.has(lesson.id) ? '✓' : index + 1}
              </span>
              <div>
                <strong>{lesson.title}</strong>
                <p>{lesson.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="home-quiz">
        <div className="home-quiz-card">
          <span className="home-quiz-icon">📝</span>
          <div>
            <h2>理解度チェック</h2>
            <p>レッスンの内容をクイズで確認できます。</p>
          </div>
          <button type="button" className="btn-secondary" onClick={onOpenQuiz}>
            クイズに挑戦 →
          </button>
        </div>
      </div>
    </div>
  )
}
