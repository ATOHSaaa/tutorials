import { SiteLink } from '../components/SiteLink'
import { tutorials } from '../data/tutorials'
import { getAllCourseProgress } from '../lib/globalStats'
import { useGlobalLevel } from '../hooks/useGlobalLevel'
import './MyPage.css'

export function MyPage() {
  const stats = useGlobalLevel()
  const courses = getAllCourseProgress()

  const inProgress = courses.filter((c) => c.completed > 0 && c.completed < c.total)
  const completed = courses.filter((c) => c.completed >= c.total)
  const notStarted = courses.filter((c) => c.completed === 0)

  return (
    <div className="mypage">
      <div className="mypage-inner">
        <nav className="mypage-breadcrumb">
          <SiteLink href="/">← コース一覧</SiteLink>
        </nav>

        <header className="mypage-hero">
          <div className="mypage-avatar">
            <span className="mypage-avatar-lv">Lv</span>
            <span className="mypage-avatar-num">{stats.level.level}</span>
          </div>
          <div className="mypage-hero-info">
            <h1>Lv.{stats.level.level}</h1>
            <p className="mypage-xp">{stats.xp} XP</p>
            {stats.nextLevel && (
              <p className="mypage-next">
                次: Lv.{stats.nextLevel.level}
                （あと {stats.xpToNext - stats.xpInLevel} XP）
              </p>
            )}
          </div>
        </header>

        {stats.nextLevel && (
          <div className="mypage-xp-bar">
            <div className="mypage-xp-bar-fill" style={{ width: `${stats.progressPercent}%` }} />
          </div>
        )}

        <div className="mypage-stats-grid">
          <div className="mypage-stat-card">
            <span className="mypage-stat-value">{stats.uniqueLessonsCompleted}</span>
            <span className="mypage-stat-label">完了レッスン</span>
            <span className="mypage-stat-sub">/ {stats.totalLessons}</span>
          </div>
          <div className="mypage-stat-card">
            <span className="mypage-stat-value">{stats.totalCompletions}</span>
            <span className="mypage-stat-label">実施回数</span>
            <span className="mypage-stat-sub">完了ボタン押下</span>
          </div>
          <div className="mypage-stat-card">
            <span className="mypage-stat-value">{stats.coursesCompleted}</span>
            <span className="mypage-stat-label">完了コース</span>
            <span className="mypage-stat-sub">/ {tutorials.length}</span>
          </div>
        </div>

        {inProgress.length > 0 && (
          <section className="mypage-section">
            <h2>学習中のコース</h2>
            <div className="mypage-courses">
              {inProgress.map((c) => (
                <SiteLink key={c.id} href={c.path} className="mypage-course-card">
                  <div className="mypage-course-icon" style={{ background: c.gradient }}>{c.icon}</div>
                  <div className="mypage-course-body">
                    <strong>{c.title}</strong>
                    <div className="mypage-course-bar">
                      <div className="mypage-course-bar-fill" style={{ width: `${c.percent}%`, background: c.gradient }} />
                    </div>
                    <span className="mypage-course-progress">{c.completed}/{c.total} レッスン（{c.percent}%）</span>
                  </div>
                </SiteLink>
              ))}
            </div>
          </section>
        )}

        {completed.length > 0 && (
          <section className="mypage-section">
            <h2>完了したコース</h2>
            <div className="mypage-courses mypage-courses-compact">
              {completed.map((c) => (
                <SiteLink key={c.id} href={c.path} className="mypage-course-chip">
                  <span className="mypage-course-chip-icon" style={{ background: c.gradient }}>{c.icon}</span>
                  {c.title}
                  <span className="mypage-course-chip-check">✓</span>
                </SiteLink>
              ))}
            </div>
          </section>
        )}

        {notStarted.length > 0 && stats.uniqueLessonsCompleted > 0 && (
          <section className="mypage-section">
            <h2>未着手のコース</h2>
            <div className="mypage-courses mypage-courses-compact">
              {notStarted.slice(0, 8).map((c) => (
                <SiteLink key={c.id} href={c.path} className="mypage-course-chip muted">
                  <span className="mypage-course-chip-icon" style={{ background: c.gradient }}>{c.icon}</span>
                  {c.title}
                </SiteLink>
              ))}
              {notStarted.length > 8 && (
                <span className="mypage-more">他 {notStarted.length - 8} コース</span>
              )}
            </div>
          </section>
        )}

        {stats.uniqueLessonsCompleted === 0 && (
          <section className="mypage-empty">
            <p>まだレッスンを完了していません。</p>
            <SiteLink href="/" className="mypage-cta">コースを選んで学習を始める →</SiteLink>
          </section>
        )}
      </div>
    </div>
  )
}
