import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Supabase」について、正しい説明はどれですか？',
    options: [
      'supabase.com でアカウント作成し、New Project からプロジェクトを作成します。',
      'create table posts (',
      'npm install @supabase/supabase-js',
      'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
    ],
    correctIndex: 3,
    explanation: 'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
  },
  {
    id: 'setup',
    question: '「セットアップ」について、正しい説明はどれですか？',
    options: [
      'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
      'Supabase は「オープンソースの Firebase 代替」として2020年に登場。',
      'supabase.com でアカウント作成し、New Project からプロジェクトを作成します。',
      'create table posts (',
    ],
    correctIndex: 2,
    explanation: 'supabase.com でアカウント作成し、New Project からプロジェクトを作成します。',
  },
  {
    id: 'database',
    question: '「データベース操作」について、正しい説明はどれですか？',
    options: [
      'Supabase は「オープンソースの Firebase 代替」として2020年に登場。',
      'npm install @supabase/supabase-js',
      'Dashboard の Table Editor または SQL Editor でテーブルを作成します。',
      'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
    ],
    correctIndex: 2,
    explanation: 'Dashboard の Table Editor または SQL Editor でテーブルを作成します。',
  },
  {
    id: 'auth',
    question: '「認証」について、正しい説明はどれですか？',
    options: [
      'npm install @supabase/supabase-js',
      'Supabase は「オープンソースの Firebase 代替」として2020年に登場。',
      'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
      'signUp でユーザー登録、signInWithPassword でログインします。',
    ],
    correctIndex: 3,
    explanation: 'signUp でユーザー登録、signInWithPassword でログインします。',
  },
  {
    id: 'rls',
    question: '「Row Level Security」について、正しい説明はどれですか？',
    options: [
      'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
      'npm install @supabase/supabase-js',
      'Row Level Security は PostgreSQL の機能で、行単位のアクセス制御を SQL ポリシーで定義します。',
      'Supabase は「オープンソースの Firebase 代替」として2020年に登場。',
    ],
    correctIndex: 2,
    explanation: 'Row Level Security は PostgreSQL の機能で、行単位のアクセス制御を SQL ポリシーで定義します。',
  },
  {
    id: 'storage',
    question: '「ファイルストレージ」について、正しい説明はどれですか？',
    options: [
      'Supabase は「オープンソースの Firebase 代替」として2020年に登場。',
      'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
      'npm install @supabase/supabase-js',
      'Dashboard → Storage でバケットを作成します。',
    ],
    correctIndex: 3,
    explanation: 'Dashboard → Storage でバケットを作成します。',
  },
  {
    id: 'realtime',
    question: '「リアルタイム機能」について、正しい説明はどれですか？',
    options: [
      'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
      'npm install @supabase/supabase-js',
      'Supabase は「オープンソースの Firebase 代替」として2020年に登場。',
      'Supabase Realtime は PostgreSQL の変更（INSERT、UPDATE、DELETE）を WebSocket でクライアントに配信します。',
    ],
    correctIndex: 3,
    explanation: 'Supabase Realtime は PostgreSQL の変更（INSERT、UPDATE、DELETE）を WebSocket でクライアントに配信します。',
  },
  {
    id: 'edge-functions',
    question: '「Edge Functions」について、正しい説明はどれですか？',
    options: [
      'npm install @supabase/supabase-js',
      'Supabase は「オープンソースの Firebase 代替」として2020年に登場。',
      'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
      'Deno ベースのサーバーレス関数で、グローバルに低レイテンシで実行されます。',
    ],
    correctIndex: 3,
    explanation: 'Deno ベースのサーバーレス関数で、グローバルに低レイテンシで実行されます。',
  },
  {
    id: 'deployment',
    question: '「デプロイと運用」について、正しい説明はどれですか？',
    options: [
      'npm install @supabase/supabase-js',
      'Supabase CLI でスキーマ変更をマイグレーションファイルとして管理します。',
      'Supabase は「オープンソースの Firebase 代替」として2020年に登場。',
      'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
    ],
    correctIndex: 1,
    explanation: 'Supabase CLI でスキーマ変更をマイグレーションファイルとして管理します。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'npm install @supabase/supabase-js',
      'Supabase は「オープンソースの Firebase 代替」として2020年に登場。',
      'BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。',
      '① 認証入門 — 認証の理論を深掘り ② Prisma 入門 — Supabase PostgreSQL + Prisma ③ WebSocket 入門 — Realtime…',
    ],
    correctIndex: 3,
    explanation: '① 認証入門 — 認証の理論を深掘り ② Prisma 入門 — Supabase PostgreSQL + Prisma ③ WebSocket 入門 — Realtime…',
  },
]
