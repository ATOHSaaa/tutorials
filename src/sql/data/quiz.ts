import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「SQL」について、正しい説明はどれですか？',
    options: [
      'SELECT はデータを「取得」する命令です。',
      'SQL（Structured Query Language）は、データベースを操作するための言語です。',
      'SELECT * FROM users;',
      'SELECT * FROM users WHERE city = \'東京\';',
    ],
    correctIndex: 1,
    explanation: 'SQL（Structured Query Language）は、データベースを操作するための言語です。',
  },
  {
    id: 'select',
    question: '「SELECT — データを取得」について、正しい説明はどれですか？',
    options: [
      'SQL（Structured Query Language）は、データベースを操作するための言語です。',
      'SELECT はデータを「取得」する命令です。',
      'SELECT * FROM users WHERE city = \'東京\';',
      'SQL を使えば、データの取得・追加・更新・削除ができます。',
    ],
    correctIndex: 1,
    explanation: 'SELECT はデータを「取得」する命令です。',
  },
  {
    id: 'where',
    question: '「WHERE — 条件で絞り込み」について、正しい説明はどれですか？',
    options: [
      'SQL（Structured Query Language）は、データベースを操作するための言語です。',
      'WHERE を使うと条件に合う行だけを取得できます。',
      'SQL を使えば、データの取得・追加・更新・削除ができます。',
      'SELECT * FROM users;',
    ],
    correctIndex: 1,
    explanation: 'WHERE を使うと条件に合う行だけを取得できます。',
  },
  {
    id: 'order-limit',
    question: '「ORDER BY / LIMIT」について、正しい説明はどれですか？',
    options: [
      'SELECT * FROM users;',
      'SQL を使えば、データの取得・追加・更新・削除ができます。',
      'ORDER BY で結果を昇順（ASC）または降順（DESC）に並べ替えられます。',
      'SQL（Structured Query Language）は、データベースを操作するための言語です。',
    ],
    correctIndex: 2,
    explanation: 'ORDER BY で結果を昇順（ASC）または降順（DESC）に並べ替えられます。',
  },
  {
    id: 'joins',
    question: '「JOIN — テーブルを結合」について、正しい説明はどれですか？',
    options: [
      'SQL（Structured Query Language）は、データベースを操作するための言語です。',
      '実際のアプリではデータは複数のテーブルに分かれています。',
      'SELECT * FROM users;',
      'SQL を使えば、データの取得・追加・更新・削除ができます。',
    ],
    correctIndex: 1,
    explanation: '実際のアプリではデータは複数のテーブルに分かれています。',
  },
  {
    id: 'aggregate',
    question: '「集計関数」について、正しい説明はどれですか？',
    options: [
      'SQL を使えば、データの取得・追加・更新・削除ができます。',
      'SELECT * FROM users;',
      '集計関数は複数の行を1つの値にまとめます。',
      'SQL（Structured Query Language）は、データベースを操作するための言語です。',
    ],
    correctIndex: 2,
    explanation: '集計関数は複数の行を1つの値にまとめます。',
  },
  {
    id: 'group-by',
    question: '「GROUP BY / HAVING」について、正しい説明はどれですか？',
    options: [
      'SQL を使えば、データの取得・追加・更新・削除ができます。',
      'SQL（Structured Query Language）は、データベースを操作するための言語です。',
      'GROUP BY は指定した列の値ごとにグループ分けして集計します。',
      'SELECT * FROM users;',
    ],
    correctIndex: 2,
    explanation: 'GROUP BY は指定した列の値ごとにグループ分けして集計します。',
  },
  {
    id: 'mutations',
    question: '「INSERT / UPDATE / DELETE」について、正しい説明はどれですか？',
    options: [
      '新しい行をテーブルに追加します。ユーザー登録、商品追加、注文作成など、データを「作る」操作です。',
      'SELECT * FROM users;',
      'SQL（Structured Query Language）は、データベースを操作するための言語です。',
      'SQL を使えば、データの取得・追加・更新・削除ができます。',
    ],
    correctIndex: 0,
    explanation: '新しい行をテーブルに追加します。ユーザー登録、商品追加、注文作成など、データを「作る」操作です。',
  },
  {
    id: 'schema',
    question: '「テーブル設計」について、正しい説明はどれですか？',
    options: [
      'テーブルを新規作成する SQL です。',
      'SQL を使えば、データの取得・追加・更新・削除ができます。',
      'SQL（Structured Query Language）は、データベースを操作するための言語です。',
      'SELECT * FROM users;',
    ],
    correctIndex: 0,
    explanation: 'テーブルを新規作成する SQL です。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'SQL を使えば、データの取得・追加・更新・削除ができます。',
      'SQL（Structured Query Language）は、データベースを操作するための言語です。',
      'Prisma / Drizzle — TypeScript から型安全に DB 操作 PostgreSQL — 本番で最も使われる DB の深掘り インデックス — クエリを…',
      'SELECT * FROM users;',
    ],
    correctIndex: 2,
    explanation: 'Prisma / Drizzle — TypeScript から型安全に DB 操作 PostgreSQL — 本番で最も使われる DB の深掘り インデックス — クエリを…',
  },
]
