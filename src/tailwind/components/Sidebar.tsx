import { lessons } from '../data/lessons'

interface SidebarProps {
  currentId: string
  completed: Set<string>
  progressPercent: number
  onSelect: (id: string) => void
  onReset: () => void
  onOpenQuiz: () => void
}

export function Sidebar({
  currentId,
  completed,
  progressPercent,
  onSelect,
  onReset,
  onOpenQuiz,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-icon">TW</span>
          <div>
            <strong>Tailwind チュートリアル</strong>
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
            <button
              key={lesson.id}
              className={`lesson-nav-item ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
              onClick={() => onSelect(lesson.id)}
            >
              <span className="lesson-number">
                {isDone ? '✓' : index + 1}
              </span>
              <span className="lesson-nav-text">{lesson.title}</span>
            </button>
          )
        })}

      <button type="button" className="lesson-nav-item quiz-nav-item" onClick={onOpenQuiz}>
        <span className="lesson-number">📝</span>
        <span className="lesson-nav-text">クイズ</span>
      </button>
      </nav>

      <button className="reset-btn" onClick={onReset}>
        進捗をリセット
      </button>
    </aside>
  )
}
