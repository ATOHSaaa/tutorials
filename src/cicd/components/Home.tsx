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
          <span className="hero-accent">CI/CD</span> 入門
        </h1>
        <p className="hero-sub">
          GitHub Actions を中心に、テスト・ビルド・デプロイを自動化する CI/CD を10レッスンで学びます。
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
          <span className="feature-icon">🔄</span>
          <h3>CI で品質を守る</h3>
          <p>push や PR でテスト・Lint を自動実行し、壊れたコードを本番に届けない仕組みを学べます。</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🚀</span>
          <h3>CD で自動デプロイ</h3>
          <p>main マージで Vercel や Cloudflare に自動デプロイする流れを体験できます。</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">💾</span>
          <h3>進捗を保存</h3>
          <p>ブラウザに自動保存。いつでも続きから学べます。</p>
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
