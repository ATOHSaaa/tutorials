import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Prisma」について、正しい説明はどれですか？',
    options: [
      'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
      '`npm install prisma --save-dev` と `npm install @prisma/client` で導入します。',
      'npm install prisma --save-dev',
      'model はテーブルに対応します。フィールドはカラムで、@id は主キー、@default はデフォルト値、@unique は一意制約です。',
    ],
    correctIndex: 0,
    explanation: 'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
  },
  {
    id: 'setup',
    question: '「セットアップ」について、正しい説明はどれですか？',
    options: [
      'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
      '`npm install prisma --save-dev` と `npm install @prisma/client` で導入します。',
      'model はテーブルに対応します。フィールドはカラムで、@id は主キー、@default はデフォルト値、@unique は一意制約です。',
      'Prisma は Node.js/TypeScript エコシステムで最も人気の ORM です。',
    ],
    correctIndex: 1,
    explanation: '`npm install prisma --save-dev` と `npm install @prisma/client` で導入します。',
  },
  {
    id: 'schema',
    question: '「スキーマ設計」について、正しい説明はどれですか？',
    options: [
      'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
      'npm install prisma --save-dev',
      'Prisma は Node.js/TypeScript エコシステムで最も人気の ORM です。',
      'model はテーブルに対応します。フィールドはカラムで、@id は主キー、@default はデフォルト値、@unique は一意制約です。',
    ],
    correctIndex: 3,
    explanation: 'model はテーブルに対応します。フィールドはカラムで、@id は主キー、@default はデフォルト値、@unique は一意制約です。',
  },
  {
    id: 'crud',
    question: '「CRUD 操作」について、正しい説明はどれですか？',
    options: [
      'npm install prisma --save-dev',
      'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
      'Prisma は Node.js/TypeScript エコシステムで最も人気の ORM です。',
      'prisma.model.create() で1件作成、createMany() で複数作成します。',
    ],
    correctIndex: 3,
    explanation: 'prisma.model.create() で1件作成、createMany() で複数作成します。',
  },
  {
    id: 'relations',
    question: '「リレーション」について、正しい説明はどれですか？',
    options: [
      'npm install prisma --save-dev',
      'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
      'Prisma は Node.js/TypeScript エコシステムで最も人気の ORM です。',
      'Post に author User への参照を持たせます。',
    ],
    correctIndex: 3,
    explanation: 'Post に author User への参照を持たせます。',
  },
  {
    id: 'migrations',
    question: '「マイグレーション」について、正しい説明はどれですか？',
    options: [
      'npm install prisma --save-dev',
      'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
      'schema.prisma を編集 → `npx prisma migrate dev --name add_user_role` でマイグレーション SQL を生成・適用 …',
      'Prisma は Node.js/TypeScript エコシステムで最も人気の ORM です。',
    ],
    correctIndex: 2,
    explanation: 'schema.prisma を編集 → `npx prisma migrate dev --name add_user_role` でマイグレーション SQL を生成・適用 …',
  },
  {
    id: 'queries',
    question: '「高度なクエリ」について、正しい説明はどれですか？',
    options: [
      'Prisma は Node.js/TypeScript エコシステムで最も人気の ORM です。',
      'npm install prisma --save-dev',
      'where に複合条件を指定できます。',
      'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
    ],
    correctIndex: 2,
    explanation: 'where に複合条件を指定できます。',
  },
  {
    id: 'transactions',
    question: '「トランザクション」について、正しい説明はどれですか？',
    options: [
      'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
      'npm install prisma --save-dev',
      'Prisma は Node.js/TypeScript エコシステムで最も人気の ORM です。',
      '$transaction に async 関数を渡し、複数の操作を1つのトランザクションで実行します。',
    ],
    correctIndex: 3,
    explanation: '$transaction に async 関数を渡し、複数の操作を1つのトランザクションで実行します。',
  },
  {
    id: 'advanced',
    question: '「応用テクニック」について、正しい説明はどれですか？',
    options: [
      'npm install prisma --save-dev',
      'Prisma は Node.js/TypeScript エコシステムで最も人気の ORM です。',
      '$use でクエリ前後に処理を挟めます。',
      'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
    ],
    correctIndex: 2,
    explanation: '$use でクエリ前後に処理を挟めます。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。',
      'npm install prisma --save-dev',
      'Prisma は Node.js/TypeScript エコシステムで最も人気の ORM です。',
      '① Supabase 入門 — Prisma なしの DB + 認証 ② Docker 入門 — DB コンテナの運用 ③ GraphQL 入門 — Prisma + Gra…',
    ],
    correctIndex: 3,
    explanation: '① Supabase 入門 — Prisma なしの DB + 認証 ② Docker 入門 — DB コンテナの運用 ③ GraphQL 入門 — Prisma + Gra…',
  },
]
