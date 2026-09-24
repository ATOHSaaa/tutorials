import { SiteLink } from '../components/SiteLink'
import { coreTutorials, frameworkTutorials, practiceTutorials, totalLessons, tutorials } from '../data/tutorials'
import { getCourseProgressPercent } from '../lib/globalStats'
import { SiteTitle } from '../components/SiteTitle'
import './Hub.css'

function TutorialCardList({ tutorials: list }: { tutorials: typeof tutorials }) {
  return (
    <div className="hub-cards">
      {list.map((t) => {
        const progress = getCourseProgressPercent(t.storageKey, t.lessons)
        return (
          <SiteLink key={t.path} href={t.path} className="hub-card">
            <div className="hub-card-icon" style={{ background: t.gradient }}>
              {t.icon}
            </div>
            <div className="hub-card-body">
              <div className="hub-card-header">
                <h2>{t.title}</h2>
                <span className="hub-card-sub">{t.subtitle}</span>
              </div>
              <p>{t.description}</p>
              <div className="hub-card-footer">
                <span>{t.lessons} レッスン</span>
                {progress > 0 && (
                  <span className="hub-card-progress">{progress}% 完了</span>
                )}
              </div>
              {progress > 0 && (
                <div className="hub-progress-bar">
                  <div className="hub-progress-fill" style={{ width: `${progress}%`, background: t.gradient }} />
                </div>
              )}
            </div>
            <span className="hub-card-arrow">→</span>
          </SiteLink>
        )
      })}
    </div>
  )
}

export function Hub() {
  const courseCount = tutorials.length

  return (
    <div className="hub">
      <header className="hub-hero">
        <div className="hub-badge">無料 · ブラウザで学べる</div>
        <h1><SiteTitle /></h1>
        <p className="hub-sub">
          基礎からフレームワーク、実践スキルまで。全{courseCount}コース・{totalLessons}レッスンのインタラクティブなチュートリアル集。
          環境構築不要、今すぐ始められます。
        </p>
      </header>

      <div className="hub-roadmap">
        {['HTML', 'CSS', 'Tailwind', 'JS', 'TS', 'Git', 'DB', 'SQL', 'React'].map((step, i, arr) => (
          <span key={step} className="hub-roadmap-item">
            <span className="hub-roadmap-step">{step}</span>
            {i < arr.length - 1 && <span className="hub-roadmap-arrow" aria-hidden="true">→</span>}
          </span>
        ))}
      </div>

      <section className="hub-section">
        <h2 className="hub-section-title">基礎</h2>
        <TutorialCardList tutorials={coreTutorials} />
      </section>

      <section className="hub-section">
        <h2 className="hub-section-title">フレームワーク & React 応用</h2>
        <TutorialCardList tutorials={frameworkTutorials} />
      </section>

      <section className="hub-section">
        <h2 className="hub-section-title">実践スキル</h2>
        <TutorialCardList tutorials={practiceTutorials} />
      </section>

      <section className="hub-quiz-banner">
        <SiteLink href="/quizzes" className="hub-quiz-banner-card">
          <span className="hub-quiz-banner-icon">📝</span>
          <div>
            <h2>理解度チェック</h2>
            <p>全{tutorials.length}コースのクイズを一覧から挑戦できます</p>
          </div>
          <span className="hub-quiz-banner-arrow">→</span>
        </SiteLink>
      </section>

      <footer className="hub-footer">
        <p>おすすめの学習順: HTML → CSS → Tailwind → JS → DOM → TS → Git → npm → HTTP → DB → SQL → Node.js → Linter → React → 状態管理 → フォーム → shadcn/ui → テスト → Playwright → Storybook → 認証 → Prisma → Next → GraphQL → Supabase → Canvas → Three.js → CSSアニメーション → エッジ → Cloudflare → Webセキュリティ → Docker → CI/CD</p>
      </footer>
    </div>
  )
}
