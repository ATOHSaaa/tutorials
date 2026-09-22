import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { QuizPage } from '../components/quiz/QuizPage'
import { quizByCourseId } from '../data/quizRegistry'

export function CourseQuiz() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const course = courseId ? quizByCourseId[courseId] : undefined

  if (!course) {
    return <Navigate to="/quizzes" replace />
  }

  return (
    <div className="tutorial-theme">
      <QuizPage
        courseTitle={course.title}
        storageKey={course.storageKey}
        questions={course.questions}
        onBack={() => navigate('/quizzes')}
        backLabel="← クイズ一覧"
      />
    </div>
  )
}
