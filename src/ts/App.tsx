import { useEffect, useLayoutEffect, useRef } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { lessons } from './data/lessons'
import { useProgress } from './hooks/useProgress'
import { Home } from './components/Home'
import { Sidebar } from './components/Sidebar'
import { LessonView } from './components/LessonView'
import { QuizPage } from '../components/quiz/QuizPage'
import { quizQuestions } from './data/quiz'
import './App.css'

const BASE = '/ts'

export default function TsTutorial() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { completed, markComplete, resetProgress, progressPercent } = useProgress()

  const isQuizView = lessonId === 'quiz'
  const isLessonView = lessonId !== undefined && !isQuizView
  const currentLessonId = lessonId ?? lessons[0].id
  const currentIndex = lessons.findIndex((l) => l.id === currentLessonId)

  const mainAreaRef = useRef<HTMLDivElement>(null)
  const lessonTopRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lessonId && lessonId !== 'quiz' && !lessons.find((l) => l.id === lessonId)) {
      navigate(BASE, { replace: true })
    }
  }, [lessonId, navigate])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    mainAreaRef.current?.scrollTo({ top: 0, behavior: 'instant' })
    lessonTopRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }

  useLayoutEffect(() => {
    if (isLessonView) scrollToTop()
  }, [currentLessonId, isLessonView, isQuizView])

  const goToLesson = (id: string) => navigate(`${BASE}/${id}`)
  const goHome = () => navigate(BASE)
  const goToQuiz = () => navigate(`${BASE}/quiz`)

  const startLearning = () => {
    const firstIncomplete = lessons.find((l) => !completed.has(l.id))
    goToLesson(firstIncomplete?.id ?? lessons[0].id)
  }

  if (isQuizView) {
    return (
      <div className="tutorial-theme">
        <QuizPage
          courseTitle="TypeScript"
          storageKey="ts-tutorial-quiz"
          questions={quizQuestions}
          onBack={goHome}
        />
      </div>
    )
  }

  if (!isLessonView) {
    return (
      <div className="tutorial-theme">
        <Link to="/" className="hub-back-link">← チュートリアル一覧</Link>
        <div className="app app-home">
          <Home
            completed={completed}
            progressPercent={progressPercent}
            onStart={startLearning}
            onSelectLesson={goToLesson}
            onOpenQuiz={goToQuiz}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="tutorial-theme">
      <div className="app">
        <Sidebar
          currentId={currentLessonId}
          completed={completed}
          progressPercent={progressPercent}
          onSelect={goToLesson}
          onReset={resetProgress}
          onOpenQuiz={goToQuiz}
        />
        <div className="main-area" ref={mainAreaRef}>
          <div ref={lessonTopRef} />
          <div className="top-links">
            <button className="home-link" onClick={goHome}>← チュートリアルトップ</button>
            <Link to="/" className="home-link">チュートリアル一覧</Link>
          </div>
          <LessonView
            lessonId={currentLessonId}
            onComplete={() => {
              markComplete(currentLessonId)
              if (currentIndex < lessons.length - 1) {
                goToLesson(lessons[currentIndex + 1].id)
              }
            }}
            onNext={() => goToLesson(lessons[currentIndex + 1].id)}
            onPrev={() => goToLesson(lessons[currentIndex - 1].id)}
            hasNext={currentIndex < lessons.length - 1}
            hasPrev={currentIndex > 0}
            isCompleted={completed.has(currentLessonId)}
          />
        </div>
      </div>
    </div>
  )
}
