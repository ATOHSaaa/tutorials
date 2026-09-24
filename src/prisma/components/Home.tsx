import { sitePath } from '../../lib/paths'
import { lessons } from '../data/lessons'

interface HomeProps {
  basePath: string
  completed: Set<string>
  progressPercent: number
  onStart: () => void
}

export function Home({ basePath, completed, progressPercent, onStart }: HomeProps) {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="hero-badge">無料 · ブラウザで学べる</div>
        <h1>
          <span className="hero-accent">Prisma ORM</span>
          入門
        </h1>
        <p className="hero-sub">スキーマ定義からマイグレーション、リレーション、トランザクションまで。型安全な DB 操作を10レッスンで学びます。</p>
        <button className="btn-primary btn-large" onClick={onStart}>
          {progressPercent > 0 ? '学習を続ける' : '学習を始める'} →
        </button>
        {progressPercent > 0 && (
          <p className="hero-progress">進捗: {progressPercent}% 完了</p>
        )}
      </div>

      <div className="home-features">
        <div className="feature-card">
          <span className="feature-icon">🎮</span>
          <h3>インタラクティブ</h3>
          <p>スキーマ変更とクエリ結果をデモでリアルタイム確認できます。</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📖</span>
          <h3>日本語で解説</h3>
          <p>初心者向けにわかりやすく、コード例も豊富です。</p>
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
            <a
              key={lesson.id}
              href={sitePath(`${basePath}/${lesson.id}`)}
              className={`lesson-card ${completed.has(lesson.id) ? 'done' : ''}`}
            >
              <span className="lesson-card-number">
                {completed.has(lesson.id) ? '✓' : index + 1}
              </span>
              <div>
                <strong>{lesson.title}</strong>
                <p>{lesson.description}</p>
              </div>
            </a>
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
          <a href={sitePath(`${basePath}/quiz`)} className="btn-secondary">
            クイズに挑戦 →
          </a>
        </div>
      </div>
    </div>
  )
}
