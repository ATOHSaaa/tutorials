import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Cloudflare」について、正しい説明はどれですか？',
    options: [
      'Workers は HTTP リクエストを受け取り、URL・メソッド・ヘッダー・ボディを読んで処理します。',
      '「サーバーを管理しない」「世界中どこでも低レイテンシ」が最大の特徴です。',
      'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
      'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
    ],
    correctIndex: 2,
    explanation: 'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
  },
  {
    id: 'workers',
    question: '「Workers 入門」について、正しい説明はどれですか？',
    options: [
      'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
      'Workers は HTTP リクエストを受け取り、URL・メソッド・ヘッダー・ボディを読んで処理します。',
      'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
      '開発者向けには Workers（サーバーレス関数）、D1（SQL データベース）、R2（オブジェクトストレージ）などが提供されています。',
    ],
    correctIndex: 0,
    explanation: 'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
  },
  {
    id: 'workers-routing',
    question: '「ルーティングとリクエスト」について、正しい説明はどれですか？',
    options: [
      '開発者向けには Workers（サーバーレス関数）、D1（SQL データベース）、R2（オブジェクトストレージ）などが提供されています。',
      'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
      'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
      'Workers は HTTP リクエストを受け取り、URL・メソッド・ヘッダー・ボディを読んで処理します。',
    ],
    correctIndex: 3,
    explanation: 'Workers は HTTP リクエストを受け取り、URL・メソッド・ヘッダー・ボディを読んで処理します。',
  },
  {
    id: 'wrangler',
    question: '「Wrangler とデプロイ」について、正しい説明はどれですか？',
    options: [
      'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
      '開発者向けには Workers（サーバーレス関数）、D1（SQL データベース）、R2（オブジェクトストレージ）などが提供されています。',
      'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
      'Wrangler は Cloudflare Workers の公式 CLI です。',
    ],
    correctIndex: 3,
    explanation: 'Wrangler は Cloudflare Workers の公式 CLI です。',
  },
  {
    id: 'd1-intro',
    question: '「D1 入門」について、正しい説明はどれですか？',
    options: [
      'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
      'D1 は Cloudflare のサーバーレス SQL データベースです。',
      'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
      '開発者向けには Workers（サーバーレス関数）、D1（SQL データベース）、R2（オブジェクトストレージ）などが提供されています。',
    ],
    correctIndex: 1,
    explanation: 'D1 は Cloudflare のサーバーレス SQL データベースです。',
  },
  {
    id: 'd1-crud',
    question: '「D1 で CRUD」について、正しい説明はどれですか？',
    options: [
      'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
      '開発者向けには Workers（サーバーレス関数）、D1（SQL データベース）、R2（オブジェクトストレージ）などが提供されています。',
      'wrangler.jsonc で binding: "DB" を設定すると、Worker 内で env.DB としてアクセスできます。',
      'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
    ],
    correctIndex: 2,
    explanation: 'wrangler.jsonc で binding: "DB" を設定すると、Worker 内で env.DB としてアクセスできます。',
  },
  {
    id: 'r2-intro',
    question: '「R2 入門」について、正しい説明はどれですか？',
    options: [
      'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
      'R2 は Cloudflare のオブジェクトストレージです。',
      '開発者向けには Workers（サーバーレス関数）、D1（SQL データベース）、R2（オブジェクトストレージ）などが提供されています。',
      'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
    ],
    correctIndex: 1,
    explanation: 'R2 は Cloudflare のオブジェクトストレージです。',
  },
  {
    id: 'r2-api',
    question: '「R2 でファイル API」について、正しい説明はどれですか？',
    options: [
      'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
      'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
      '開発者向けには Workers（サーバーレス関数）、D1（SQL データベース）、R2（オブジェクトストレージ）などが提供されています。',
      'URL パスをキーにして R2 からファイルを返す API を作れます。',
    ],
    correctIndex: 3,
    explanation: 'URL パスをキーにして R2 からファイルを返す API を作れます。',
  },
  {
    id: 'fullstack',
    question: '「Workers + D1 + R2」について、正しい説明はどれですか？',
    options: [
      'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
      'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
      '開発者向けには Workers（サーバーレス関数）、D1（SQL データベース）、R2（オブジェクトストレージ）などが提供されています。',
      'D1 — メタデータ（ユーザー、投稿のタイトル・日付など構造化データ） R2 — ファイル本体（画像、PDF、動画） Workers — API レイヤー（両方にアクセスして統合）',
    ],
    correctIndex: 3,
    explanation: 'D1 — メタデータ（ユーザー、投稿のタイトル・日付など構造化データ） R2 — ファイル本体（画像、PDF、動画） Workers — API レイヤー（両方にアクセスして統合）',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。',
      'Workers KV — キーバリューストア（設定、キャッシュ） Queues — バックグラウンドジョブ Pages — 静的サイト + Functions Durable…',
      'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。',
      '開発者向けには Workers（サーバーレス関数）、D1（SQL データベース）、R2（オブジェクトストレージ）などが提供されています。',
    ],
    correctIndex: 1,
    explanation: 'Workers KV — キーバリューストア（設定、キャッシュ） Queues — バックグラウンドジョブ Pages — 静的サイト + Functions Durable…',
  },
]
