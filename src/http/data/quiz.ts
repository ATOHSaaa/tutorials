import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「HTTP」について、正しい説明はどれですか？',
    options: [
      'GET /api/articles?tag=javascript&sort=desc HTTP/1.1',
      'メソッドは「動詞」、URL は「名詞（リソース）」と考えると RESTful な設計に近づきます。',
      'リクエストの最初の行は「メソッド + パス + HTTP バージョン」です。',
      'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
    ],
    correctIndex: 3,
    explanation: 'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
  },
  {
    id: 'request-response',
    question: '「リクエストとレスポンスの構造」について、正しい説明はどれですか？',
    options: [
      'リクエストの最初の行は「メソッド + パス + HTTP バージョン」です。',
      'メソッドは「動詞」、URL は「名詞（リソース）」と考えると RESTful な設計に近づきます。',
      'HTTP はステートレス（状態を持たない）プロトコルです。',
      'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
    ],
    correctIndex: 0,
    explanation: 'リクエストの最初の行は「メソッド + パス + HTTP バージョン」です。',
  },
  {
    id: 'methods',
    question: '「HTTP メソッド」について、正しい説明はどれですか？',
    options: [
      'メソッドは「動詞」、URL は「名詞（リソース）」と考えると RESTful な設計に近づきます。',
      'GET /api/articles?tag=javascript&sort=desc HTTP/1.1',
      'HTTP はステートレス（状態を持たない）プロトコルです。',
      'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
    ],
    correctIndex: 0,
    explanation: 'メソッドは「動詞」、URL は「名詞（リソース）」と考えると RESTful な設計に近づきます。',
  },
  {
    id: 'status-codes',
    question: '「ステータスコード」について、正しい説明はどれですか？',
    options: [
      'GET /api/articles?tag=javascript&sort=desc HTTP/1.1',
      'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
      'HTTP はステートレス（状態を持たない）プロトコルです。',
      'ステータスコードは3桁の数字で、先頭1桁がカテゴリを示します。',
    ],
    correctIndex: 3,
    explanation: 'ステータスコードは3桁の数字で、先頭1桁がカテゴリを示します。',
  },
  {
    id: 'headers',
    question: '「HTTP ヘッダー」について、正しい説明はどれですか？',
    options: [
      'HTTP はステートレス（状態を持たない）プロトコルです。',
      'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
      'ヘッダーはリクエストやレスポンスの「メタデータ」です。',
      'GET /api/articles?tag=javascript&sort=desc HTTP/1.1',
    ],
    correctIndex: 2,
    explanation: 'ヘッダーはリクエストやレスポンスの「メタデータ」です。',
  },
  {
    id: 'rest',
    question: '「REST API の設計」について、正しい説明はどれですか？',
    options: [
      'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
      'HTTP はステートレス（状態を持たない）プロトコルです。',
      'REST（Representational State Transfer）は、リソースを URL で表現し、HTTP メソッドで操作する設計スタイルです。',
      'GET /api/articles?tag=javascript&sort=desc HTTP/1.1',
    ],
    correctIndex: 2,
    explanation: 'REST（Representational State Transfer）は、リソースを URL で表現し、HTTP メソッドで操作する設計スタイルです。',
  },
  {
    id: 'fetch',
    question: '「fetch API」について、正しい説明はどれですか？',
    options: [
      'fetch はブラウザ標準の HTTP クライアント API です。',
      'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
      'HTTP はステートレス（状態を持たない）プロトコルです。',
      'GET /api/articles?tag=javascript&sort=desc HTTP/1.1',
    ],
    correctIndex: 0,
    explanation: 'fetch はブラウザ標準の HTTP クライアント API です。',
  },
  {
    id: 'cors',
    question: '「CORS」について、正しい説明はどれですか？',
    options: [
      'ブラウザはセキュリティのため、JavaScript から別オリジン（ドメイン・ポート・プロトコルの組み合わせ）へのリクエストを制限します。',
      'HTTP はステートレス（状態を持たない）プロトコルです。',
      'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
      'GET /api/articles?tag=javascript&sort=desc HTTP/1.1',
    ],
    correctIndex: 0,
    explanation: 'ブラウザはセキュリティのため、JavaScript から別オリジン（ドメイン・ポート・プロトコルの組み合わせ）へのリクエストを制限します。',
  },
  {
    id: 'caching',
    question: '「HTTP キャッシュ」について、正しい説明はどれですか？',
    options: [
      'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
      'GET /api/articles?tag=javascript&sort=desc HTTP/1.1',
      'HTTP キャッシュは、同じリソースへの再リクエストを省略し、表示速度を上げる仕組みです。',
      'HTTP はステートレス（状態を持たない）プロトコルです。',
    ],
    correctIndex: 2,
    explanation: 'HTTP キャッシュは、同じリソースへの再リクエストを省略し、表示速度を上げる仕組みです。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      '① Node.js 入門 — サーバー側で HTTP を扱う ② 認証入門 — Cookie・JWT・OAuth ③ Webセキュリティ — XSS・CSRF・HTTPS ④…',
      'GET /api/articles?tag=javascript&sort=desc HTTP/1.1',
      'HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。',
      'HTTP はステートレス（状態を持たない）プロトコルです。',
    ],
    correctIndex: 0,
    explanation: '① Node.js 入門 — サーバー側で HTTP を扱う ② 認証入門 — Cookie・JWT・OAuth ③ Webセキュリティ — XSS・CSRF・HTTPS ④…',
  },
]
