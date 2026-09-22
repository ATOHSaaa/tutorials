import { useNavigate } from 'react-router-dom'
import { useGlobalLevel } from '../hooks/useGlobalLevel'
import './LevelButton.css'

export function LevelButton() {
  const stats = useGlobalLevel()
  const navigate = useNavigate()

  return (
    <div className="level-button-wrap">
      <button
        type="button"
        className="level-button"
        onClick={() => navigate('/mypage')}
        aria-label={`レベル ${stats.level.level}。マイページを開く`}
      >
        <span className="level-button-ring" />
        <span className="level-button-inner">
          <span className="level-button-lv">Lv</span>
          <span className="level-button-num">{stats.level.level}</span>
        </span>
      </button>

      <div className="level-popover" role="tooltip">
        <div className="level-popover-header">
          <span className="level-popover-badge">Lv.{stats.level.level}</span>
          <span className="level-popover-xp">{stats.xp} XP</span>
        </div>
        {stats.nextLevel && (
          <div className="level-popover-bar">
            <div className="level-popover-bar-fill" style={{ width: `${stats.progressPercent}%` }} />
          </div>
        )}
        {stats.nextLevel && (
          <p className="level-popover-next">
            次のレベルまで {stats.xpToNext - stats.xpInLevel} XP
          </p>
        )}
        <div className="level-popover-stats">
          <span>完了 {stats.uniqueLessonsCompleted}/{stats.totalLessons}</span>
          <span>実施 {stats.totalCompletions} 回</span>
        </div>
      </div>
    </div>
  )
}
