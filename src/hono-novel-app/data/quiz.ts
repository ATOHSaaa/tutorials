import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「プロジェクト概要」について、正しい説明はどれですか？',
    options: [
      'ルートで Git を管理し、client / server を1リポジトリにまとめます。',
      'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
      'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
      '小説サイトに必要な3つの主要ページを定義します。',
    ],
    correctIndex: 1,
    explanation: 'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
  },
  {
    id: 'setup',
    question: '「環境セットアップ」について、正しい説明はどれですか？',
    options: [
      'SNS 型の短い投稿ではなく、**長文コンテンツ**と**章構造**が中心です。',
      'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
      'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
      'ルートで Git を管理し、client / server を1リポジトリにまとめます。',
    ],
    correctIndex: 1,
    explanation: 'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
  },
  {
    id: 'github',
    question: '「GitHub で管理」について、正しい説明はどれですか？',
    options: [
      'ルートで Git を管理し、client / server を1リポジトリにまとめます。',
      'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
      'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
      'SNS 型の短い投稿ではなく、**長文コンテンツ**と**章構造**が中心です。',
    ],
    correctIndex: 0,
    explanation: 'ルートで Git を管理し、client / server を1リポジトリにまとめます。',
  },
  {
    id: 'frontend',
    question: '「フロントエンド基礎」について、正しい説明はどれですか？',
    options: [
      'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
      '小説サイトに必要な3つの主要ページを定義します。',
      'SNS 型の短い投稿ではなく、**長文コンテンツ**と**章構造**が中心です。',
      'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
    ],
    correctIndex: 1,
    explanation: '小説サイトに必要な3つの主要ページを定義します。',
  },
  {
    id: 'database',
    question: '「D1 スキーマ設計」について、正しい説明はどれですか？',
    options: [
      'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
      'SNS 型の短い投稿ではなく、**長文コンテンツ**と**章構造**が中心です。',
      'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
      '**novels** — 作品（タイトル、あらすじ、ジャンル、ステータス）',
    ],
    correctIndex: 3,
    explanation: '**novels** — 作品（タイトル、あらすじ、ジャンル、ステータス）',
  },
  {
    id: 'routing',
    question: '「Hono ルーティング」について、正しい説明はどれですか？',
    options: [
      'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
      'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
      'SNS 型の短い投稿ではなく、**長文コンテンツ**と**章構造**が中心です。',
      'GET /api/novels — 作品一覧',
    ],
    correctIndex: 3,
    explanation: 'GET /api/novels — 作品一覧',
  },
  {
    id: 'novels-crud',
    question: '「作品 CRUD」について、正しい説明はどれですか？',
    options: [
      'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
      'ログイン中の作者のみ POST できます。',
      'SNS 型の短い投稿ではなく、**長文コンテンツ**と**章構造**が中心です。',
      'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
    ],
    correctIndex: 1,
    explanation: 'ログイン中の作者のみ POST できます。',
  },
  {
    id: 'chapters',
    question: '「章の管理」について、正しい説明はどれですか？',
    options: [
      'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
      'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
      'SNS 型の短い投稿ではなく、**長文コンテンツ**と**章構造**が中心です。',
      '新しい章番号は MAX(chapter_number) + 1 で採番します。',
    ],
    correctIndex: 3,
    explanation: '新しい章番号は MAX(chapter_number) + 1 で採番します。',
  },
  {
    id: 'auth',
    question: '「ログイン・認証」について、正しい説明はどれですか？',
    options: [
      'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
      'SNS 版と同じく username + password_hash + セッション Cookie 方式です。',
      'SNS 型の短い投稿ではなく、**長文コンテンツ**と**章構造**が中心です。',
      'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
    ],
    correctIndex: 1,
    explanation: 'SNS 版と同じく username + password_hash + セッション Cookie 方式です。',
  },
  {
    id: 'search',
    question: '「検索・タグ」について、正しい説明はどれですか？',
    options: [
      'Hono 投稿サイトチュートリアルと同様、Node.js 20+、Git、Cloudflare / GitHub アカウントが必要です。',
      'SNS 型の短い投稿ではなく、**長文コンテンツ**と**章構造**が中心です。',
      'タイトルとあらすじを LIKE 検索します（小規模なら十分。',
      'このチュートリアルでは、**小説投稿・読書サイト**を一から作ります。',
    ],
    correctIndex: 2,
    explanation: 'タイトルとあらすじを LIKE 検索します（小規模なら十分。',
  },
]
