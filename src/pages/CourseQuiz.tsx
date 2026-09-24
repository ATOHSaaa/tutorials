import { useParams } from 'react-router-dom'
import { QuizPage } from '../components/quiz/QuizPage'
import { quizByCourseId } from '../data/quizRegistry'
import { sitePath } from '../lib/paths'

export function CourseQuiz() {
  const { courseId } = useParams()
  const course = courseId ? quizByCourseId[courseId] : undefined

  if (!course) {
    window.location.replace(sitePath('/quizzes'))
    return null
  }

  return (
    <div className="tutorial-theme">
      <QuizPage
        courseTitle={course.title}
        storageKey={course.storageKey}
        questions={course.questions}
        onBack={() => { window.location.href = sitePath('/quizzes') }}
        backLabel="← クイズ一覧"
      />
    </div>
  )
}
