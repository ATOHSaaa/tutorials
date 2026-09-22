import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「認証」について、正しい説明はどれですか？',
    options: [
      '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
      'import bcrypt from "bcrypt";',
      'パスワードを DB に平文で保存すると、漏洩時に全ユーザーのアカウントが危険にさらされます。',
      'ログイン成功時、サーバーはセッション ID を生成してサーバー側ストア（メモリ、Redis など）にユーザー情報を保存します。',
    ],
    correctIndex: 0,
    explanation: '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
  },
  {
    id: 'passwords',
    question: '「パスワードの安全な扱い」について、正しい説明はどれですか？',
    options: [
      'ログイン画面でパスワードを入力するのは認証、管理者だけが設定画面に入れるのは認可です。',
      'ログイン成功時、サーバーはセッション ID を生成してサーバー側ストア（メモリ、Redis など）にユーザー情報を保存します。',
      '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
      'パスワードを DB に平文で保存すると、漏洩時に全ユーザーのアカウントが危険にさらされます。',
    ],
    correctIndex: 3,
    explanation: 'パスワードを DB に平文で保存すると、漏洩時に全ユーザーのアカウントが危険にさらされます。',
  },
  {
    id: 'sessions',
    question: '「セッションと Cookie」について、正しい説明はどれですか？',
    options: [
      '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
      'ログイン成功時、サーバーはセッション ID を生成してサーバー側ストア（メモリ、Redis など）にユーザー情報を保存します。',
      'import bcrypt from "bcrypt";',
      'ログイン画面でパスワードを入力するのは認証、管理者だけが設定画面に入れるのは認可です。',
    ],
    correctIndex: 1,
    explanation: 'ログイン成功時、サーバーはセッション ID を生成してサーバー側ストア（メモリ、Redis など）にユーザー情報を保存します。',
  },
  {
    id: 'jwt',
    question: '「JWT（JSON Web Token）」について、正しい説明はどれですか？',
    options: [
      'ログイン画面でパスワードを入力するのは認証、管理者だけが設定画面に入れるのは認可です。',
      '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
      'import bcrypt from "bcrypt";',
      'JWT は Header.Payload.Signature の3部分を Base64URL エンコードして `.` で結合した文字列です。',
    ],
    correctIndex: 3,
    explanation: 'JWT は Header.Payload.Signature の3部分を Base64URL エンコードして `.` で結合した文字列です。',
  },
  {
    id: 'oauth',
    question: '「OAuth 2.0 とソーシャルログイン」について、正しい説明はどれですか？',
    options: [
      'import bcrypt from "bcrypt";',
      'ログイン画面でパスワードを入力するのは認証、管理者だけが設定画面に入れるのは認可です。',
      'リソースオーナー（ユーザー）、クライアント（あなたのアプリ）、認可サーバー（Google 等）、リソースサーバー（API）の4者が関わります。',
      '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
    ],
    correctIndex: 2,
    explanation: 'リソースオーナー（ユーザー）、クライアント（あなたのアプリ）、認可サーバー（Google 等）、リソースサーバー（API）の4者が関わります。',
  },
  {
    id: 'middleware',
    question: '「認証ミドルウェア」について、正しい説明はどれですか？',
    options: [
      'import bcrypt from "bcrypt";',
      '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
      '認証ミドルウェアはリクエストのたびにトークンやセッションを検証し、有効なら req.user にユーザー情報を付与して次のハンドラへ渡します。',
      'ログイン画面でパスワードを入力するのは認証、管理者だけが設定画面に入れるのは認可です。',
    ],
    correctIndex: 2,
    explanation: '認証ミドルウェアはリクエストのたびにトークンやセッションを検証し、有効なら req.user にユーザー情報を付与して次のハンドラへ渡します。',
  },
  {
    id: 'frontend-auth',
    question: '「フロントエンドの認証 UI」について、正しい説明はどれですか？',
    options: [
      'import bcrypt from "bcrypt";',
      '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
      'React では Context や Zustand で user 状態をグローバル管理します。',
      'ログイン画面でパスワードを入力するのは認証、管理者だけが設定画面に入れるのは認可です。',
    ],
    correctIndex: 2,
    explanation: 'React では Context や Zustand で user 状態をグローバル管理します。',
  },
  {
    id: 'security-practices',
    question: '「認証のセキュリティ」について、正しい説明はどれですか？',
    options: [
      'ログイン試行にレート制限を設けます。同一 IP や同一メールアドレスから短時間に多数の失敗があったら一時ブロックします。',
      '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
      'ログイン画面でパスワードを入力するのは認証、管理者だけが設定画面に入れるのは認可です。',
      'import bcrypt from "bcrypt";',
    ],
    correctIndex: 0,
    explanation: 'ログイン試行にレート制限を設けます。同一 IP や同一メールアドレスから短時間に多数の失敗があったら一時ブロックします。',
  },
  {
    id: 'implementation',
    question: '「認証の実装パターン」について、正しい説明はどれですか？',
    options: [
      'import bcrypt from "bcrypt";',
      '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
      'ログイン画面でパスワードを入力するのは認証、管理者だけが設定画面に入れるのは認可です。',
      'Backend for Frontend はフロント専用の API 層を置き、認証・トークン管理をそこに集約します。',
    ],
    correctIndex: 3,
    explanation: 'Backend for Frontend はフロント専用の API 層を置き、認証・トークン管理をそこに集約します。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      '認証（Authentication）は「この人は誰か」を確認する仕組みです。',
      'ログイン画面でパスワードを入力するのは認証、管理者だけが設定画面に入れるのは認可です。',
      '① Webセキュリティ — XSS・CSRF の深掘り ② Supabase 入門 — 認証込み BaaS ③ OAuth 2.0 仕様書 — フローの詳細 ④ WebAut…',
      'import bcrypt from "bcrypt";',
    ],
    correctIndex: 2,
    explanation: '① Webセキュリティ — XSS・CSRF の深掘り ② Supabase 入門 — 認証込み BaaS ③ OAuth 2.0 仕様書 — フローの詳細 ④ WebAut…',
  },
]
