import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Node.js」について、正しい説明はどれですか？',
    options: [
      'export function add(a, b) { return a + b; }',
      'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
      'ES Modules は `import` と `export` を使う標準形式です。',
      '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
    ],
    correctIndex: 1,
    explanation: 'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
  },
  {
    id: 'setup',
    question: '「セットアップ」について、正しい説明はどれですか？',
    options: [
      'ブラウザには DOM や window がありませんが、代わりに fs（ファイル）、http（ネットワーク）、process（環境変数）などのモジュールが使えます。',
      'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
      'export function add(a, b) { return a + b; }',
      '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
    ],
    correctIndex: 3,
    explanation: '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
  },
  {
    id: 'modules',
    question: '「モジュールシステム」について、正しい説明はどれですか？',
    options: [
      '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
      'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
      'ES Modules は `import` と `export` を使う標準形式です。',
      'ブラウザには DOM や window がありませんが、代わりに fs（ファイル）、http（ネットワーク）、process（環境変数）などのモジュールが使えます。',
    ],
    correctIndex: 2,
    explanation: 'ES Modules は `import` と `export` を使う標準形式です。',
  },
  {
    id: 'fs',
    question: '「ファイル操作」について、正しい説明はどれですか？',
    options: [
      '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
      'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
      'ブラウザには DOM や window がありませんが、代わりに fs（ファイル）、http（ネットワーク）、process（環境変数）などのモジュールが使えます。',
      'fs/promises の `readFile` と `writeFile` は Promise を返すため async/await と相性が良いです。',
    ],
    correctIndex: 3,
    explanation: 'fs/promises の `readFile` と `writeFile` は Promise を返すため async/await と相性が良いです。',
  },
  {
    id: 'http-server',
    question: '「HTTP サーバー」について、正しい説明はどれですか？',
    options: [
      'ブラウザには DOM や window がありませんが、代わりに fs（ファイル）、http（ネットワーク）、process（環境変数）などのモジュールが使えます。',
      'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
      'Node.js 組み込みの http モジュールで、追加ライブラリなしにサーバーを立てられます。',
      '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
    ],
    correctIndex: 2,
    explanation: 'Node.js 組み込みの http モジュールで、追加ライブラリなしにサーバーを立てられます。',
  },
  {
    id: 'env',
    question: '「環境変数」について、正しい説明はどれですか？',
    options: [
      '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
      'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
      '環境変数は `process.env.PORT` のようにアクセスします。',
      'ブラウザには DOM や window がありませんが、代わりに fs（ファイル）、http（ネットワーク）、process（環境変数）などのモジュールが使えます。',
    ],
    correctIndex: 2,
    explanation: '環境変数は `process.env.PORT` のようにアクセスします。',
  },
  {
    id: 'async',
    question: '「非同期処理」について、正しい説明はどれですか？',
    options: [
      'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
      '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
      'Node.js の I/O はほぼすべて非同期です。',
      'ブラウザには DOM や window がありませんが、代わりに fs（ファイル）、http（ネットワーク）、process（環境変数）などのモジュールが使えます。',
    ],
    correctIndex: 2,
    explanation: 'Node.js の I/O はほぼすべて非同期です。',
  },
  {
    id: 'express-intro',
    question: '「Express 入門」について、正しい説明はどれですか？',
    options: [
      'Express は Node.js 最大手の Web フレームワークです。',
      '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
      'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
      'ブラウザには DOM や window がありませんが、代わりに fs（ファイル）、http（ネットワーク）、process（環境変数）などのモジュールが使えます。',
    ],
    correctIndex: 0,
    explanation: 'Express は Node.js 最大手の Web フレームワークです。',
  },
  {
    id: 'npm-scripts',
    question: '「npm スクリプト連携」について、正しい説明はどれですか？',
    options: [
      'ブラウザには DOM や window がありませんが、代わりに fs（ファイル）、http（ネットワーク）、process（環境変数）などのモジュールが使えます。',
      'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
      '`scripts: { dev: "node --watch index.js", start: "node index.js" }` で `npm run dev` として実行できます。',
      '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
    ],
    correctIndex: 2,
    explanation: '`scripts: { dev: "node --watch index.js", start: "node index.js" }` で `npm run dev` として実行できます。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'ブラウザには DOM や window がありませんが、代わりに fs（ファイル）、http（ネットワーク）、process（環境変数）などのモジュールが使えます。',
      '公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。',
      'Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。',
      '① npm 入門 — パッケージ管理の詳細 ② 認証入門 — JWT・セッション ③ Prisma 入門 — ORM で DB 操作 ④ Docker 入門 — コンテナでデプロイ',
    ],
    correctIndex: 3,
    explanation: '① npm 入門 — パッケージ管理の詳細 ② 認証入門 — JWT・セッション ③ Prisma 入門 — ORM で DB 操作 ④ Docker 入門 — コンテナでデプロイ',
  },
]
