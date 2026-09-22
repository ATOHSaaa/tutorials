import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「GraphQL」について、正しい説明はどれですか？',
    options: [
      'const resolvers = {',
      'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
      'GraphQL スキーマは型定義で API の形状を宣言します。',
      'クライアントは必要なフィールドだけを指定します。',
    ],
    correctIndex: 1,
    explanation: 'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
  },
  {
    id: 'schema',
    question: '「スキーマ定義」について、正しい説明はどれですか？',
    options: [
      'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
      'クライアントは必要なフィールドだけを指定します。',
      'GraphQL スキーマは型定義で API の形状を宣言します。',
      'GraphQL はクライアントが「必要なフィールドだけ」を指定して1回のリクエストで取得できるクエリ言語です。',
    ],
    correctIndex: 2,
    explanation: 'GraphQL スキーマは型定義で API の形状を宣言します。',
  },
  {
    id: 'queries',
    question: '「クエリの書き方」について、正しい説明はどれですか？',
    options: [
      'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
      'GraphQL スキーマは型定義で API の形状を宣言します。',
      'GraphQL はクライアントが「必要なフィールドだけ」を指定して1回のリクエストで取得できるクエリ言語です。',
      'クライアントは必要なフィールドだけを指定します。',
    ],
    correctIndex: 3,
    explanation: 'クライアントは必要なフィールドだけを指定します。',
  },
  {
    id: 'resolvers',
    question: '「リゾルバ」について、正しい説明はどれですか？',
    options: [
      'GraphQL スキーマは型定義で API の形状を宣言します。',
      'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
      'GraphQL はクライアントが「必要なフィールドだけ」を指定して1回のリクエストで取得できるクエリ言語です。',
      '各フィールドに対応する関数がリゾルバです。',
    ],
    correctIndex: 3,
    explanation: '各フィールドに対応する関数がリゾルバです。',
  },
  {
    id: 'mutations',
    question: '「ミューテーション」について、正しい説明はどれですか？',
    options: [
      'GraphQL はクライアントが「必要なフィールドだけ」を指定して1回のリクエストで取得できるクエリ言語です。',
      'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
      'GraphQL スキーマは型定義で API の形状を宣言します。',
      '入力は input 型でまとめ、ペイロードは作成/更新されたオブジェクトを返します。',
    ],
    correctIndex: 3,
    explanation: '入力は input 型でまとめ、ペイロードは作成/更新されたオブジェクトを返します。',
  },
  {
    id: 'apollo-server',
    question: '「Apollo Server」について、正しい説明はどれですか？',
    options: [
      'GraphQL スキーマは型定義で API の形状を宣言します。',
      'Apollo Server は Node.js 向けの GraphQL サーバーです。',
      'GraphQL はクライアントが「必要なフィールドだけ」を指定して1回のリクエストで取得できるクエリ言語です。',
      'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
    ],
    correctIndex: 1,
    explanation: 'Apollo Server は Node.js 向けの GraphQL サーバーです。',
  },
  {
    id: 'apollo-client',
    question: '「Apollo Client」について、正しい説明はどれですか？',
    options: [
      'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
      'ApolloProvider でアプリをラップし、useQuery / useMutation フックでデータ操作します。',
      'GraphQL はクライアントが「必要なフィールドだけ」を指定して1回のリクエストで取得できるクエリ言語です。',
      'GraphQL スキーマは型定義で API の形状を宣言します。',
    ],
    correctIndex: 1,
    explanation: 'ApolloProvider でアプリをラップし、useQuery / useMutation フックでデータ操作します。',
  },
  {
    id: 'pagination',
    question: '「ページネーション」について、正しい説明はどれですか？',
    options: [
      'limit と offset 引数で実装します。',
      'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
      'GraphQL はクライアントが「必要なフィールドだけ」を指定して1回のリクエストで取得できるクエリ言語です。',
      'GraphQL スキーマは型定義で API の形状を宣言します。',
    ],
    correctIndex: 0,
    explanation: 'limit と offset 引数で実装します。',
  },
  {
    id: 'best-practices',
    question: '「ベストプラクティス」について、正しい説明はどれですか？',
    options: [
      'GraphQL スキーマは型定義で API の形状を宣言します。',
      'GraphQL はクライアントが「必要なフィールドだけ」を指定して1回のリクエストで取得できるクエリ言語です。',
      'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
      'フィールド名は camelCase、型名は PascalCase。',
    ],
    correctIndex: 3,
    explanation: 'フィールド名は camelCase、型名は PascalCase。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      '① Prisma 入門 — GraphQL + Prisma の組み合わせ ② HTTP 入門 — REST との比較を深掘り ③ Supabase 入門 — GraphQL…',
      'GraphQL スキーマは型定義で API の形状を宣言します。',
      'REST API ではエンドポイントごとに固定のレスポンス構造があります。',
      'GraphQL はクライアントが「必要なフィールドだけ」を指定して1回のリクエストで取得できるクエリ言語です。',
    ],
    correctIndex: 0,
    explanation: '① Prisma 入門 — GraphQL + Prisma の組み合わせ ② HTTP 入門 — REST との比較を深掘り ③ Supabase 入門 — GraphQL…',
  },
]
