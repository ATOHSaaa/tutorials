import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「死活監視」について、正しい説明はどれですか？',
    options: [
      '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
      'URL — 監視対象（https://example.com/health）',
      '監視専用の URL を用意します。200 OK とシンプルな JSON を返すのが基本です。',
      'export async function GET() {',
    ],
    correctIndex: 0,
    explanation: '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
  },
  {
    id: 'health-check',
    question: '「ヘルスチェック」について、正しい説明はどれですか？',
    options: [
      'URL — 監視対象（https://example.com/health）',
      '監視専用の URL を用意します。200 OK とシンプルな JSON を返すのが基本です。',
      '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
      'デプロイ後の確認 — CI/CD でデプロイした直後の動作確認',
    ],
    correctIndex: 1,
    explanation: '監視専用の URL を用意します。200 OK とシンプルな JSON を返すのが基本です。',
  },
  {
    id: 'http-monitoring',
    question: '「HTTP 監視」について、正しい説明はどれですか？',
    options: [
      'デプロイ後の確認 — CI/CD でデプロイした直後の動作確認',
      'URL — 監視対象（https://example.com/health）',
      '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
      'export async function GET() {',
    ],
    correctIndex: 1,
    explanation: 'URL — 監視対象（https://example.com/health）',
  },
  {
    id: 'intervals',
    question: '「監視間隔と判定」について、正しい説明はどれですか？',
    options: [
      'デプロイ後の確認 — CI/CD でデプロイした直後の動作確認',
      '1分、5分、15分など。短いほど早く気づけるが、監視サーバーからのアクセスが増えます。',
      '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
      'export async function GET() {',
    ],
    correctIndex: 1,
    explanation: '1分、5分、15分など。短いほど早く気づけるが、監視サーバーからのアクセスが増えます。',
  },
  {
    id: 'alerting',
    question: '「アラートと通知」について、正しい説明はどれですか？',
    options: [
      '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
      'Slack / Discord — チーム開発で人気',
      'export async function GET() {',
      'デプロイ後の確認 — CI/CD でデプロイした直後の動作確認',
    ],
    correctIndex: 1,
    explanation: 'Slack / Discord — チーム開発で人気',
  },
  {
    id: 'status-page',
    question: '「ステータスページ」について、正しい説明はどれですか？',
    options: [
      'デプロイ後の確認 — CI/CD でデプロイした直後の動作確認',
      'サービスの稼働状況をユーザーに公開するページです。',
      '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
      'export async function GET() {',
    ],
    correctIndex: 1,
    explanation: 'サービスの稼働状況をユーザーに公開するページです。',
  },
  {
    id: 'synthetic',
    question: '「外形監視と内部監視」について、正しい説明はどれですか？',
    options: [
      'デプロイ後の確認 — CI/CD でデプロイした直後の動作確認',
      'インターネット上の複数地点からアクセス。',
      '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
      'export async function GET() {',
    ],
    correctIndex: 1,
    explanation: 'インターネット上の複数地点からアクセス。',
  },
  {
    id: 'tools',
    question: '「監視ツール」について、正しい説明はどれですか？',
    options: [
      'デプロイ後の確認 — CI/CD でデプロイした直後の動作確認',
      '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
      'Better Stack（旧 Better Uptime）— ステータスページ付き',
      'export async function GET() {',
    ],
    correctIndex: 2,
    explanation: 'Better Stack（旧 Better Uptime）— ステータスページ付き',
  },
  {
    id: 'incident',
    question: '「障害対応」について、正しい説明はどれですか？',
    options: [
      'export async function GET() {',
      '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
      'アラート受信 → 2. 影響範囲の確認 → 3. ステータスページ更新 → 4. 原因調査 → 5. 復旧 → 6. ポストモーテム（振り返り）',
      'デプロイ後の確認 — CI/CD でデプロイした直後の動作確認',
    ],
    correctIndex: 2,
    explanation: 'アラート受信 → 2. 影響範囲の確認 → 3. ステータスページ更新 → 4. 原因調査 → 5. 復旧 → 6. ポストモーテム（振り返り）',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'export async function GET() {',
      'デプロイ後の確認 — CI/CD でデプロイした直後の動作確認',
      'SLA / SLO / SLI — サービス品質の指標設計',
      '死活監視（アップタイムモニタリング）は、Web サービスや API が「生きているか（Up）」「死んでいるか（Down）」を定期的に確認する仕組みです。',
    ],
    correctIndex: 2,
    explanation: 'SLA / SLO / SLI — サービス品質の指標設計',
  },
]
