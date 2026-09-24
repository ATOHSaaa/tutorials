import { sitePath } from '../../lib/paths'
import { lessons } from '../data/lessons'

interface SidebarProps {
  basePath: string
  currentId: string
  completed: Set<string>
  progressPercent: number
  onReset: () => void
}

export function Sidebar({
  basePath,
  currentId,
  completed,
  progressPercent,
  onReset,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">◎</span>
          <div>
            <strong>Tauri チュートリアル</strong>
            <span>ブラウザで学ぶ</span>
          </div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>
        <span className="progress-label">{progressPercent}% 完了</span>
      </div>

      <nav className="lesson-nav">
        {lessons.map((lesson, index) => {
          const isActive = lesson.id === currentId
          const isDone = completed.has(lesson.id)
          return (
            <a
              key={lesson.id}
              href={sitePath(`${basePath}/${lesson.id}`)}
              className={`lesson-nav-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
            >
              <span className="lesson-number">
                {isDone ? '✓' : index + 1}
              </span>
              <span className="lesson-nav-text">{lesson.title}</span>
            </a>
          )
        })}

      <a href={sitePath(`${basePath}/quiz`)} className="lesson-nav-item quiz-nav-item">
        <span className="lesson-number">📝</span>
        <span className="lesson-nav-text">クイズ</span>
      </a>
      </nav>

      <button className="reset-btn" onClick={onReset}>
        進捗をリセット
      </button>
    </aside>
  )
}
