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
        <div className="hero-badge">実践プロジェクト · 手を動かして学ぶ</div>
        <h1>
          <span className="hero-accent">Hono 小説投稿サイト</span>
        </h1>
        <p className="hero-sub">React + Hono + D1 で小説投稿・読書サイトを一から構築します。作品管理、章の追加、検索・タグ、ブックマーク、ログイン、CI/CD、Cloudflare デプロイまで13レッスンで学びます。</p>
        <button className="btn-primary btn-large" onClick={onStart}>
          {progressPercent > 0 ? '学習を続ける' : '学習を始める'} →
        </button>
        {progressPercent > 0 && (
          <p className="hero-progress">進捗: {progressPercent}% 完了</p>
        )}
      </div>

      <div className="home-features">
        <div className="feature-card">
          <span className="feature-icon">📖</span>
          <h3>作品と章</h3>
          <p>novels / chapters の2層構造で、連載小説を管理する設計を学べます。</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔍</span>
          <h3>検索・タグ</h3>
          <p>ジャンル・キーワード・タグで作品を探す API と UI を実装できます。</p>
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
