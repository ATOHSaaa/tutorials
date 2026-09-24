import type { QuizQuestion } from '../lib/quiz'
import { quizQuestions as htmlQuiz } from '../html/data/quiz'
import { quizQuestions as cssQuiz } from '../css/data/quiz'
import { quizQuestions as tailwindQuiz } from '../tailwind/data/quiz'
import { quizQuestions as jsQuiz } from '../js/data/quiz'
import { quizQuestions as domQuiz } from '../dom/data/quiz'
import { quizQuestions as tsQuiz } from '../ts/data/quiz'
import { quizQuestions as gitQuiz } from '../git/data/quiz'
import { quizQuestions as npmQuiz } from '../npm/data/quiz'
import { quizQuestions as httpQuiz } from '../http/data/quiz'
import { quizQuestions as dbQuiz } from '../db/data/quiz'
import { quizQuestions as sqlQuiz } from '../sql/data/quiz'
import { quizQuestions as nodeQuiz } from '../node/data/quiz'
import { quizQuestions as reactQuiz } from '../react/data/quiz'
import { quizQuestions as stateQuiz } from '../state/data/quiz'
import { quizQuestions as formsQuiz } from '../forms/data/quiz'
import { quizQuestions as testingQuiz } from '../testing/data/quiz'
import { quizQuestions as playwrightQuiz } from '../playwright/data/quiz'
import { quizQuestions as shadcnQuiz } from '../shadcn/data/quiz'
import { quizQuestions as storybookQuiz } from '../storybook/data/quiz'
import { quizQuestions as authQuiz } from '../auth/data/quiz'
import { quizQuestions as nextQuiz } from '../next/data/quiz'
import { quizQuestions as prismaQuiz } from '../prisma/data/quiz'
import { quizQuestions as graphqlQuiz } from '../graphql/data/quiz'
import { quizQuestions as supabaseQuiz } from '../supabase/data/quiz'
import { quizQuestions as tanstackStartQuiz } from '../tanstack-start/data/quiz'
import { quizQuestions as vueQuiz } from '../vue/data/quiz'
import { quizQuestions as astroQuiz } from '../astro/data/quiz'
import { quizQuestions as viteQuiz } from '../vite/data/quiz'
import { quizQuestions as electronQuiz } from '../electron/data/quiz'
import { quizQuestions as canvasQuiz } from '../canvas/data/quiz'
import { quizQuestions as threeQuiz } from '../three/data/quiz'
import { quizQuestions as tauriQuiz } from '../tauri/data/quiz'
import { quizQuestions as a11yQuiz } from '../a11y/data/quiz'
import { quizQuestions as devtoolsQuiz } from '../devtools/data/quiz'
import { quizQuestions as linterQuiz } from '../linter/data/quiz'
import { quizQuestions as webfontsQuiz } from '../webfonts/data/quiz'
import { quizQuestions as animationQuiz } from '../animation/data/quiz'
import { quizQuestions as pwaQuiz } from '../pwa/data/quiz'
import { quizQuestions as perfQuiz } from '../perf/data/quiz'
import { quizQuestions as seoQuiz } from '../seo/data/quiz'
import { quizQuestions as securityQuiz } from '../security/data/quiz'
import { quizQuestions as edgeQuiz } from '../edge/data/quiz'
import { quizQuestions as cloudflareQuiz } from '../cloudflare/data/quiz'
import { quizQuestions as websocketQuiz } from '../websocket/data/quiz'
import { quizQuestions as dockerQuiz } from '../docker/data/quiz'
import { quizQuestions as i18nQuiz } from '../i18n/data/quiz'
import { quizQuestions as cicdQuiz } from '../cicd/data/quiz'
import { quizQuestions as turboQuiz } from '../turbo/data/quiz'
import { quizQuestions as uptimeQuiz } from '../uptime/data/quiz'
import { quizQuestions as honoPostAppQuiz } from '../hono-post-app/data/quiz'

export interface QuizCourse {
  id: string
  title: string
  subtitle: string
  icon: string
  gradient: string
  section: 'core' | 'framework' | 'practice'
  storageKey: string
  questions: QuizQuestion[]
}

export const quizCourses: QuizCourse[] = [
  {
    id: 'html',
    title: 'HTML',
    subtitle: '骨組みを作る',
    icon: '</>',
    gradient: 'linear-gradient(135deg, #f97316, #22c55e)',
    section: 'core',
    storageKey: 'html-tutorial-quiz',
    questions: htmlQuiz,
  },
  {
    id: 'css',
    title: 'CSS',
    subtitle: '見た目を整える',
    icon: '#',
    gradient: 'linear-gradient(135deg, #3b82f6, #ec4899)',
    section: 'core',
    storageKey: 'css-tutorial-quiz',
    questions: cssQuiz,
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    subtitle: 'ユーティリティで速く作る',
    icon: 'TW',
    gradient: 'linear-gradient(135deg, #38bdf8, #06b6d4)',
    section: 'core',
    storageKey: 'tailwind-tutorial-quiz',
    questions: tailwindQuiz,
  },
  {
    id: 'js',
    title: 'JavaScript',
    subtitle: '動きを付ける',
    icon: 'JS',
    gradient: 'linear-gradient(135deg, #f7df1e, #f59e0b)',
    section: 'core',
    storageKey: 'js-tutorial-quiz',
    questions: jsQuiz,
  },
  {
    id: 'dom',
    title: 'DOM 操作 入門',
    subtitle: 'ページを操る',
    icon: '◇',
    gradient: 'linear-gradient(135deg, #eab308, #f59e0b)',
    section: 'core',
    storageKey: 'dom-tutorial-quiz',
    questions: domQuiz,
  },
  {
    id: 'ts',
    title: 'TypeScript',
    subtitle: '型で守る',
    icon: 'TS',
    gradient: 'linear-gradient(135deg, #3178c6, #235a97)',
    section: 'core',
    storageKey: 'ts-tutorial-quiz',
    questions: tsQuiz,
  },
  {
    id: 'git',
    title: 'Git 入門',
    subtitle: 'バージョン管理',
    icon: '⎇',
    gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
    section: 'core',
    storageKey: 'git-tutorial-quiz',
    questions: gitQuiz,
  },
  {
    id: 'npm',
    title: 'npm',
    subtitle: 'パッケージ管理',
    icon: '📦',
    gradient: 'linear-gradient(135deg, #cb3837, #961a1a)',
    section: 'core',
    storageKey: 'npm-tutorial-quiz',
    questions: npmQuiz,
  },
  {
    id: 'http',
    title: 'HTTP',
    subtitle: 'Web の通信の基礎',
    icon: '🌐',
    gradient: 'linear-gradient(135deg, #2563eb, #7c3aed)',
    section: 'core',
    storageKey: 'http-tutorial-quiz',
    questions: httpQuiz,
  },
  {
    id: 'db',
    title: 'DB 入門',
    subtitle: 'データの仕組み',
    icon: 'DB',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    section: 'core',
    storageKey: 'db-tutorial-quiz',
    questions: dbQuiz,
  },
  {
    id: 'sql',
    title: 'SQL',
    subtitle: 'データベース操作',
    icon: 'SQL',
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    section: 'core',
    storageKey: 'sql-tutorial-quiz',
    questions: sqlQuiz,
  },
  {
    id: 'node',
    title: 'Node.js',
    subtitle: 'サーバー側 JavaScript',
    icon: '🟢',
    gradient: 'linear-gradient(135deg, #339933, #68a063)',
    section: 'core',
    storageKey: 'node-tutorial-quiz',
    questions: nodeQuiz,
  },
  {
    id: 'react',
    title: 'React',
    subtitle: 'アプリを作る',
    icon: '⚛',
    gradient: 'linear-gradient(135deg, #61dafb, #a855f7)',
    section: 'framework',
    storageKey: 'react-tutorial-quiz',
    questions: reactQuiz,
  },
  {
    id: 'state',
    title: '状態管理',
    subtitle: 'データの流れ',
    icon: '🔄',
    gradient: 'linear-gradient(135deg, #a855f7, #7c3aed)',
    section: 'framework',
    storageKey: 'state-tutorial-quiz',
    questions: stateQuiz,
  },
  {
    id: 'forms',
    title: 'フォーム',
    subtitle: '入力とバリデーション',
    icon: '📝',
    gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
    section: 'framework',
    storageKey: 'forms-tutorial-quiz',
    questions: formsQuiz,
  },
  {
    id: 'testing',
    title: 'テスト入門',
    subtitle: '壊れないコード',
    icon: '✓',
    gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
    section: 'framework',
    storageKey: 'testing-tutorial-quiz',
    questions: testingQuiz,
  },
  {
    id: 'playwright',
    title: 'Playwright',
    subtitle: 'E2E テスト自動化',
    icon: '🎭',
    gradient: 'linear-gradient(135deg, #2ead33, #1a7a1e)',
    section: 'framework',
    storageKey: 'playwright-tutorial-quiz',
    questions: playwrightQuiz,
  },
  {
    id: 'shadcn',
    title: 'shadcn/ui',
    subtitle: 'UI コンポーネント',
    icon: '◇',
    gradient: 'linear-gradient(135deg, #0f172a, #6366f1)',
    section: 'framework',
    storageKey: 'shadcn-tutorial-quiz',
    questions: shadcnQuiz,
  },
  {
    id: 'storybook',
    title: 'Storybook',
    subtitle: 'UI コンポーネント開発',
    icon: '📖',
    gradient: 'linear-gradient(135deg, #ff4785, #fc521f)',
    section: 'framework',
    storageKey: 'storybook-tutorial-quiz',
    questions: storybookQuiz,
  },
  {
    id: 'auth',
    title: '認証',
    subtitle: 'ログインとセッション管理',
    icon: '🔐',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    section: 'framework',
    storageKey: 'auth-tutorial-quiz',
    questions: authQuiz,
  },
  {
    id: 'next',
    title: 'Next.js',
    subtitle: 'フルスタック開発',
    icon: '▲',
    gradient: 'linear-gradient(135deg, #fafafa, #737373)',
    section: 'framework',
    storageKey: 'next-tutorial-quiz',
    questions: nextQuiz,
  },
  {
    id: 'prisma',
    title: 'Prisma',
    subtitle: '型安全な ORM',
    icon: '🗄️',
    gradient: 'linear-gradient(135deg, #2d3748, #4a5568)',
    section: 'framework',
    storageKey: 'prisma-tutorial-quiz',
    questions: prismaQuiz,
  },
  {
    id: 'graphql',
    title: 'GraphQL',
    subtitle: '宣言的な API クエリ',
    icon: '◈',
    gradient: 'linear-gradient(135deg, #e535ab, #8b2fc9)',
    section: 'framework',
    storageKey: 'graphql-tutorial-quiz',
    questions: graphqlQuiz,
  },
  {
    id: 'supabase',
    title: 'Supabase',
    subtitle: 'オープンソース BaaS',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #3ecf8e, #1a7f5a)',
    section: 'framework',
    storageKey: 'supabase-tutorial-quiz',
    questions: supabaseQuiz,
  },
  {
    id: 'tanstack-start',
    title: 'TanStack Start',
    subtitle: '型安全フルスタック',
    icon: '⬡',
    gradient: 'linear-gradient(135deg, #f97316, #ef4444)',
    section: 'framework',
    storageKey: 'tanstack-start-tutorial-quiz',
    questions: tanstackStartQuiz,
  },
  {
    id: 'vue',
    title: 'Vue.js',
    subtitle: '別の選択肢',
    icon: 'V',
    gradient: 'linear-gradient(135deg, #42b883, #35495e)',
    section: 'framework',
    storageKey: 'vue-tutorial-quiz',
    questions: vueQuiz,
  },
  {
    id: 'astro',
    title: 'Astro',
    subtitle: '高速なサイトを作る',
    icon: 'A',
    gradient: 'linear-gradient(135deg, #ff5d01, #bc52ee)',
    section: 'framework',
    storageKey: 'astro-tutorial-quiz',
    questions: astroQuiz,
  },
  {
    id: 'vite',
    title: 'Vite',
    subtitle: '高速ビルドツール',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #646cff, #bd34fe)',
    section: 'framework',
    storageKey: 'vite-tutorial-quiz',
    questions: viteQuiz,
  },
  {
    id: 'electron',
    title: 'Electron',
    subtitle: 'デスクトップアプリ',
    icon: 'e',
    gradient: 'linear-gradient(135deg, #47848f, #2f3241)',
    section: 'framework',
    storageKey: 'electron-tutorial-quiz',
    questions: electronQuiz,
  },
  {
    id: 'canvas',
    title: 'Canvas',
    subtitle: '2D グラフィックス',
    icon: '▣',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb923c)',
    section: 'framework',
    storageKey: 'canvas-tutorial-quiz',
    questions: canvasQuiz,
  },
  {
    id: 'three',
    title: 'Three.js',
    subtitle: '3D グラフィックス',
    icon: '3D',
    gradient: 'linear-gradient(135deg, #1e1b4b, #6366f1)',
    section: 'framework',
    storageKey: 'three-tutorial-quiz',
    questions: threeQuiz,
  },
  {
    id: 'tauri',
    title: 'Tauri',
    subtitle: '軽量デスクトップ',
    icon: '◎',
    gradient: 'linear-gradient(135deg, #24c8db, #ffc131)',
    section: 'framework',
    storageKey: 'tauri-tutorial-quiz',
    questions: tauriQuiz,
  },
  {
    id: 'a11y',
    title: 'アクセシビリティ',
    subtitle: 'みんなが使える Web',
    icon: '♿',
    gradient: 'linear-gradient(135deg, #3b82f6, #22c55e)',
    section: 'practice',
    storageKey: 'a11y-tutorial-quiz',
    questions: a11yQuiz,
  },
  {
    id: 'devtools',
    title: 'DevTools',
    subtitle: 'デバッグの武器',
    icon: '🔧',
    gradient: 'linear-gradient(135deg, #eab308, #f59e0b)',
    section: 'practice',
    storageKey: 'devtools-tutorial-quiz',
    questions: devtoolsQuiz,
  },
  {
    id: 'linter',
    title: 'Linter',
    subtitle: 'コード品質',
    icon: '✦',
    gradient: 'linear-gradient(135deg, #4b32c3, #997dff)',
    section: 'practice',
    storageKey: 'linter-tutorial-quiz',
    questions: linterQuiz,
  },
  {
    id: 'webfonts',
    title: 'Webフォント',
    subtitle: '美しい文字',
    icon: 'Aa',
    gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    section: 'practice',
    storageKey: 'webfonts-tutorial-quiz',
    questions: webfontsQuiz,
  },
  {
    id: 'animation',
    title: 'CSSアニメーション',
    subtitle: 'UI モーション',
    icon: '✨',
    gradient: 'linear-gradient(135deg, #f472b6, #c026d3)',
    section: 'practice',
    storageKey: 'animation-tutorial-quiz',
    questions: animationQuiz,
  },
  {
    id: 'pwa',
    title: 'PWA',
    subtitle: 'アプリのような Web',
    icon: '📱',
    gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
    section: 'practice',
    storageKey: 'pwa-tutorial-quiz',
    questions: pwaQuiz,
  },
  {
    id: 'perf',
    title: 'Web パフォーマンス',
    subtitle: '速い Web を作る',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
    section: 'practice',
    storageKey: 'perf-tutorial-quiz',
    questions: perfQuiz,
  },
  {
    id: 'seo',
    title: 'SEO',
    subtitle: '検索エンジン最適化',
    icon: '🔍',
    gradient: 'linear-gradient(135deg, #4285f4, #34a853)',
    section: 'practice',
    storageKey: 'seo-tutorial-quiz',
    questions: seoQuiz,
  },
  {
    id: 'security',
    title: 'Webセキュリティ',
    subtitle: '攻撃と防御の基礎',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, #dc2626, #991b1b)',
    section: 'practice',
    storageKey: 'security-tutorial-quiz',
    questions: securityQuiz,
  },
  {
    id: 'edge',
    title: 'エッジコンピューティング',
    subtitle: '近くで処理する',
    icon: '◈',
    gradient: 'linear-gradient(135deg, #06b6d4, #6366f1)',
    section: 'practice',
    storageKey: 'edge-tutorial-quiz',
    questions: edgeQuiz,
  },
  {
    id: 'cloudflare',
    title: 'Cloudflare 入門',
    subtitle: 'エッジで動く',
    icon: '☁',
    gradient: 'linear-gradient(135deg, #f6821f, #f59e0b)',
    section: 'practice',
    storageKey: 'cloudflare-tutorial-quiz',
    questions: cloudflareQuiz,
  },
  {
    id: 'websocket',
    title: 'WebSocket',
    subtitle: 'リアルタイム通信',
    icon: '🔌',
    gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    section: 'practice',
    storageKey: 'websocket-tutorial-quiz',
    questions: websocketQuiz,
  },
  {
    id: 'docker',
    title: 'Docker',
    subtitle: 'コンテナ技術',
    icon: '🐳',
    gradient: 'linear-gradient(135deg, #2496ed, #1a6fb5)',
    section: 'practice',
    storageKey: 'docker-tutorial-quiz',
    questions: dockerQuiz,
  },
  {
    id: 'i18n',
    title: 'i18n',
    subtitle: '国際化と多言語対応',
    icon: '🌍',
    gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    section: 'practice',
    storageKey: 'i18n-tutorial-quiz',
    questions: i18nQuiz,
  },
  {
    id: 'cicd',
    title: 'CI/CD 入門',
    subtitle: '自動で届ける',
    icon: '⚙',
    gradient: 'linear-gradient(135deg, #3b82f6, #22c55e)',
    section: 'practice',
    storageKey: 'cicd-tutorial-quiz',
    questions: cicdQuiz,
  },
  {
    id: 'turbo',
    title: 'Turborepo',
    subtitle: 'モノレポを速く',
    icon: '⊞',
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    section: 'practice',
    storageKey: 'turbo-tutorial-quiz',
    questions: turboQuiz,
  },
  {
    id: 'uptime',
    title: '死活監視 入門',
    subtitle: 'サービスを見守る',
    icon: '◉',
    gradient: 'linear-gradient(135deg, #ef4444, #f97316)',
    section: 'practice',
    storageKey: 'uptime-tutorial-quiz',
    questions: uptimeQuiz,
  },
  {
    id: 'hono-post-app',
    title: 'Hono 投稿サイト',
    subtitle: '一から作る SNS',
    icon: '💬',
    gradient: 'linear-gradient(135deg, #e11d48, #f97316)',
    section: 'practice',
    storageKey: 'hono-post-app-tutorial-quiz',
    questions: honoPostAppQuiz,
  },
]

export const quizByCourseId: Record<string, QuizCourse> = Object.fromEntries(
  quizCourses.map((c) => [c.id, c]),
)
