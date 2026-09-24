import { lessons } from '../data/lessons'
import { LessonParagraph, renderLessonText } from '../../components/LessonRichText'
import { CodeBlock } from './CodeBlock'
import { LessonDemo } from './demos/LessonDemos'

interface LessonViewProps {
  lessonId: string
  onComplete: () => void
  onNext: () => void
  onPrev: () => void
  hasNext: boolean
  hasPrev: boolean
  isCompleted: boolean
}

export function LessonView({
  lessonId,
  onComplete,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
  isCompleted,
}: LessonViewProps) {
  const lesson = lessons.find((l) => l.id === lessonId)
  if (!lesson) return null

  const index = lessons.findIndex((l) => l.id === lessonId)

  return (
    <main className="lesson-view">
      <header className="lesson-header">
        <span className="lesson-badge">レッスン {index + 1} / {lessons.length}</span>
        <h1>{lesson.title}</h1>
        <p className="lesson-description">{lesson.description}</p>
      </header>

      <div className="lesson-demo-section">
        <h2 className="section-label">
          <span className="section-icon">▶</span> インタラクティブデモ
        </h2>
        <LessonDemo lessonId={lessonId} />
      </div>

      <div className="lesson-content">
        {lesson.sections.map((section, i) => (
          <section key={i} className="content-section">
            <h2>{section.heading}</h2>
            {section.content.split('\n\n').map((paragraph, j) => (
              <LessonParagraph key={j} text={paragraph} />
            ))}
            {section.code && <CodeBlock code={section.code} />}
            {section.tip && (
              <div className="tip-box">
                <span className="tip-icon">💡</span>
                {renderLessonText(section.tip)}
              </div>
            )}
          </section>
        ))}
      </div>

      <footer className="lesson-footer">
        <div className="lesson-nav-buttons">
          <button className="nav-btn" onClick={onPrev} disabled={!hasPrev}>
            ← 前のレッスン
          </button>
          {!isCompleted && (
            <button className="btn-primary complete-btn" onClick={onComplete}>
              完了にする ✓
            </button>
          )}
          {isCompleted && hasNext && (
            <button className="btn-primary" onClick={onNext}>
              次のレッスン →
            </button>
          )}
          {isCompleted && !hasNext && (
            <div className="finish-message">
              🎉 全レッスン完了！おめでとうございます！
            </div>
          )}
          {!isCompleted && hasNext && (
            <button className="nav-btn" onClick={onNext}>
              次へ →
            </button>
          )}
        </div>
      </footer>
    </main>
  )
}
