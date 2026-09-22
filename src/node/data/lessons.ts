export interface Lesson {
  id: string
  title: string
  description: string
  sections: Section[]
}

export interface Section {
  heading: string
  content: string
  code?: string
  tip?: string
}

export const lessons: Lesson[] = [
  {
    id: "intro",
    title: "Node.js とは？",
    description: "Node.js の特徴とブラウザ JS との違いを理解します",
    sections: [
      {
        heading: "Node.js の位置づけ",
        content: "Node.js は Chrome の V8 エンジン上で JavaScript を実行するランタイムです。2009年の登場以降、フロントエンドと同じ言語でサーバー・CLI・ツールを書けるようになり、Web 開発の景色が変わりました。\n\nブラウザには DOM や window がありませんが、代わりに fs（ファイル）、http（ネットワーク）、process（環境変数）などのモジュールが使えます。"
      },
      {
        heading: "イベント駆動とノンブロッキング I/O",
        content: "Node.js の核心はイベントループです。ファイル読み込みや DB クエリの待ち時間に CPU を止めず、他の処理を進めます。1スレッドで多数の接続を扱えるため、I/O 中心の Web API に向いています。\n\nCPU を大量に使う画像処理や動画エンコードは、Worker Threads や別サービスに任せるのが一般的です。",
        tip: "デモで同期処理と非同期処理の実行順序の違いを確認してみてください。"
      },
      {
        heading: "Node.js の用途",
        content: "• REST API サーバー（Express、Fastify）\n• SSR（Next.js のサーバー側）\n• CLI ツール（eslint、prettier、vite）\n• ビルドツール・バンドラー\n• WebSocket サーバー\n\nフロントエンド開発者にとって、Node.js は「開発ツールの実行環境」でも「API を書く環境」でもあります。"
      }
    ]
  },
  {
    id: "setup",
    title: "セットアップ",
    description: "Node.js のインストールとプロジェクト初期化を学びます",
    sections: [
      {
        heading: "インストール方法",
        content: "公式サイト（nodejs.org）から LTS 版をインストールするのが基本です。macOS では nvm（Node Version Manager）で複数バージョンを切り替えるのが開発者に人気です。\n\n`node -v` と `npm -v` でバージョンを確認します。チーム開発では `.nvmrc` や `engines` フィールドでバージョンを揃えます。",
        code: "# nvm の例\nnvm install 20\nnvm use 20\nnode -v  # v20.x.x\nnpm -v   # 10.x.x"
      },
      {
        heading: "プロジェクトの作成",
        content: "`npm init -y` で package.json を生成し、プロジェクトのルートを作ります。TypeScript を使う場合は `npm init -y` の後に tsconfig.json を追加します。\n\n`\type\: \"module\"` を package.json に書くと ES Modules（import/export）がデフォルトになります。近年の新規プロジェクトは ESM を選ぶことが多いです。",
        code: "mkdir my-api && cd my-api\nnpm init -y\n# package.json に追加\n# \type\: \"module\""
      },
      {
        heading: "実行とデバッグ",
        content: "`node index.js` でスクリプトを実行します。開発中は `node --watch index.js`（Node 18+）でファイル変更時に自動再起動できます。nodemon も広く使われています。\n\nVS Code のデバッガーでブレークポイントを置き、変数の値を確認する習慣をつけましょう。console.log だけに頼らない開発ができます。"
      }
    ]
  },
  {
    id: "modules",
    title: "モジュールシステム",
    description: "CommonJS と ES Modules の import/export を学びます",
    sections: [
      {
        heading: "ES Modules（推奨）",
        content: "ES Modules は `import` と `export` を使う標準形式です。ブラウザと同じ構文で、Tree Shaking も効きやすく、現代の Node.js プロジェクトのデフォルトです。\n\n`export function greet(name) { ... }` で公開し、`import { greet } from \"./utils.js\"` で読み込みます。拡張子 `.js` を省略できない点に注意（TypeScript では設定で解決）。",
        code: "// utils.js\nexport function add(a, b) { return a + b; }\nexport default function main() { console.log(\"start\"); }\n\n// index.js\nimport main, { add } from \"./utils.js\";"
      },
      {
        heading: "CommonJS（レガシー）",
        content: "CommonJS は `require()` と `module.exports` を使います。古い npm パッケージや Node.js の歴史的なコードに残っています。\n\n`const fs = require(\"fs\")` の形式です。ESM プロジェクトから CJS パッケージを import することはできますが、逆は難しい場合があります。新規コードは ESM を使いましょう。"
      },
      {
        heading: "組み込みモジュール",
        content: "Node.js には標準モジュールが付属しています。`node:fs`、`node:path`、`node:http` のように `node:` プレフィックスで明示的に import するのが推奨されます。\n\nサードパーティパッケージと名前が衝突しないよう、組み込みモジュールには `node:` を付ける習慣をつけてください。",
        code: "import fs from \"node:fs/promises\";\nimport path from \"node:path\";\nimport { fileURLToPath } from \"node:url\";\n\nconst __dirname = path.dirname(fileURLToPath(import.meta.url));"
      }
    ]
  },
  {
    id: "fs",
    title: "ファイル操作",
    description: "fs モジュールでファイルの読み書きを学びます",
    sections: [
      {
        heading: "非同期ファイル I/O",
        content: "fs/promises の `readFile` と `writeFile` は Promise を返すため async/await と相性が良いです。同期的な `readFileSync` はスクリプトや起動時のみに限定し、通常の API 処理では使いません。\n\nファイルが存在しない場合は ENOENT エラーが throw されます。try/catch で捕捉し、適切な HTTP ステータス（404 など）に変換します。",
        code: "import fs from \"node:fs/promises\";\n\nconst data = await fs.readFile(\"config.json\", \"utf-8\");\nconst config = JSON.parse(data);\n\nawait fs.writeFile(\"output.txt\", \"Hello, Node!\", \"utf-8\");"
      },
      {
        heading: "ディレクトリ操作",
        content: "`mkdir` でディレクトリ作成、`readdir` で一覧取得、`stat` でファイル情報取得が基本操作です。`{ recursive: true }` オプションで親ディレクトリもまとめて作成できます。\n\nアップロード機能では、一時ディレクトリに保存してから本番パスへ移動するパターンがよく使われます。",
        code: "await fs.mkdir(\"uploads/images\", { recursive: true });\nconst files = await fs.readdir(\"uploads\");\nconst info = await fs.stat(\"uploads/images/photo.jpg\");\nconsole.log(info.size, info.mtime);"
      },
      {
        heading: "パスの扱い",
        content: "path モジュールで OS 差異を吸収します。`path.join(\"dir\", \"file.txt\")` は `/` と `\\` を正しく結合し、`path.resolve` は絶対パスを返します。\n\nユーザー入力のファイル名をそのまま使うとパストラバーサル攻撃の危険があります。`path.basename` でファイル名だけ取り出し、許可リストで検証しましょう。",
        tip: "デモで相対パスと絶対パスの違いを確認してみてください。"
      }
    ]
  },
  {
    id: "http-server",
    title: "HTTP サーバー",
    description: "node:http でシンプルな Web サーバーを作ります",
    sections: [
      {
        heading: "最小の HTTP サーバー",
        content: "Node.js 組み込みの http モジュールで、追加ライブラリなしにサーバーを立てられます。本番では Express や Fastify を使いますが、HTTP の仕組みを理解するには組み込みモジュールが最適です。\n\n`createServer` にリクエストハンドラを渡し、`listen` でポートを開きます。",
        code: "import http from \"node:http\";\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { \Content-Type\: \"text/plain; charset=utf-8\" });\n  res.end(\"Hello, Node.js!\");\n});\n\nserver.listen(3000, () => console.log(\"http://localhost:3000\"));"
      },
      {
        heading: "ルーティングの基本",
        content: "req.url と req.method でパスとメソッドを判定し、分岐します。本格的なルーティングはフレームワークに任せますが、仕組みは同じです。\n\nJSON API では `Content-Type: application/json` を設定し、`JSON.stringify` でボディを返します。",
        code: "if (req.method === \"GET\" && req.url === \"/api/health\") {\n  res.writeHead(200, { \Content-Type\: \"application/json\" });\n  res.end(JSON.stringify({ status: \"ok\" }));\n} else {\n  res.writeHead(404);\n  res.end(\"Not Found\");\n}"
      },
      {
        heading: "リクエストボディの読み取り",
        content: "POST のボディはストリームとして届きます。chunk を結合してから JSON.parse します。Express では `express.json()` ミドルウェアがこれを自動化します。\n\n大きなボディにはサイズ制限を设けるべきです。メモリに全部載せる前に、ストリーム処理や multer などのライブラリを検討しましょう。"
      }
    ]
  },
  {
    id: "env",
    title: "環境変数",
    description: "process.env と .env ファイルの管理を学びます",
    sections: [
      {
        heading: "process.env",
        content: "環境変数は `process.env.PORT` のようにアクセスします。本番と開発で DB の接続先や API キーを切り替える標準的な方法です。\n\n`PORT` や `NODE_ENV` は Node.js エコシステムで広く使われる名前です。`NODE_ENV=production` で本番モードを示します。",
        code: "const port = process.env.PORT ?? 3000;\nconst dbUrl = process.env.DATABASE_URL;\n\nif (!dbUrl) {\n  throw new Error(\"DATABASE_URL が設定されていません\");\n}"
      },
      {
        heading: ".env ファイル",
        content: "dotenv パッケージで `.env` ファイルを読み込みます。`.env` は Git にコミットせず、`.env.example` にキー名だけ記載して共有します。\n\n本番環境ではプラットフォーム（Vercel、Railway など）の環境変数設定 UI を使い、ファイルではなく環境変数として注入します。",
        code: "# .env\nPORT=3000\nDATABASE_URL=postgresql://localhost:5432/mydb\nJWT_SECRET=your-secret-here\n\n# index.js\nimport \"dotenv/config\";"
      },
      {
        heading: "シークレット管理",
        content: "API キー・DB パスワード・JWT シークレットは絶対にコードにハードコードしません。漏洩時は即座にローテーション（再発行）します。\n\n`.gitignore` に `.env` を必ず追加し、pre-commit フックでシークレット検出ツール（gitleaks など）を使うのも有効です。"
      }
    ]
  },
  {
    id: "async",
    title: "非同期処理",
    description: "Promise、async/await、エラーハンドリングを学びます",
    sections: [
      {
        heading: "Promise と async/await",
        content: "Node.js の I/O はほぼすべて非同期です。コールバック地獄を避けるため、Promise と async/await を使います。\n\n`async function` は常に Promise を返し、`await` は Promise の解決を待ちます。try/catch で同期的なスタイルでエラーハンドリングできます。",
        code: "async function fetchUser(id) {\n  try {\n    const res = await fetch(`https://api.example.com/users/${id}`);\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    return await res.json();\n  } catch (err) {\n    console.error(\"ユーザー取得失敗:\", err);\n    throw err;\n  }\n}"
      },
      {
        heading: "並列処理",
        content: "複数の非同期処理を並列実行するには `Promise.all` を使います。順番に await すると遅くなるため、独立した処理は並列化しましょう。\n\n1つが失敗したら全体を失敗させる `Promise.all`、最初の1つだけ欲しい `Promise.race`、すべて完了を待つ `Promise.allSettled` を使い分けます。",
        code: "const [users, posts] = await Promise.all([\n  fetchUsers(),\n  fetchPosts(),\n]);\n\nconst results = await Promise.allSettled(tasks);\nresults.forEach(r => {\n  if (r.status === \"rejected\") console.error(r.reason);\n});"
      },
      {
        heading: "イベントループの注意点",
        content: "同期的な重い処理（大きな JSON の parse、暗号化ループ）はイベントループをブロックし、他のリクエストを止めます。\n\nCPU バウンドな処理は Worker Threads やキュー（BullMQ など）に逃がす設計を検討してください。",
        tip: "デモで await の前後で console.log の出力順序を確認してみてください。"
      }
    ]
  },
  {
    id: "express-intro",
    title: "Express 入門",
    description: "Express でルーティングとミドルウェアを学びます",
    sections: [
      {
        heading: "Express とは",
        content: "Express は Node.js 最大手の Web フレームワークです。ルーティング、ミドルウェア、テンプレート連携などを簡潔な API で提供します。\n\n`npm install express` で追加し、数行で REST API を立ち上げられます。Fastify や Hono など軽量な代替もありますが、Express の知識はどこでも活きます。",
        code: "import express from \"express\";\nconst app = express();\napp.use(express.json());\n\napp.get(\"/api/users\", (req, res) => {\n  res.json([{ id: 1, name: \"太郎\" }]);\n});\n\napp.listen(3000);"
      },
      {
        heading: "ミドルウェア",
        content: "ミドルウェアはリクエスト→レスポンスの途中で実行される関数です。`app.use(express.json())` はボディをパースし、`req.body` を使えるようにします。\n\n認証チェック、ログ出力、CORS 設定もミドルウェアで実装します。順序が重要——json パーサーの後にルートハンドラを置きます。",
        code: "app.use((req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next(); // 次のミドルウェアへ\n});\n\napp.use(\"/api\", authMiddleware);\napp.use(\"/api\", apiRouter);"
      },
      {
        heading: "ルーターの分割",
        content: "大きなアプリでは `express.Router()` でルートをファイル分割します。`routes/users.js`、`routes/posts.js` のようにモジュール化し、`app.use(\"/api/users\", usersRouter)` でマウントします。\n\nコントローラー・サービス層にロジックを分離すると、テストと保守が楽になります。"
      }
    ]
  },
  {
    id: "npm-scripts",
    title: "npm スクリプト連携",
    description: "package.json の scripts と Node.js を組み合わせます",
    sections: [
      {
        heading: "scripts の定義",
        content: "`\scripts\: { \dev\: \"node --watch index.js\", \start\: \"node index.js\" }` で `npm run dev` として実行できます。チーム全員が同じコマンドで開発を始められます。\n\n`npm start` は `start` スクリプトの省略形です。`npm test` は `test` スクリプトの省略形です。"
      },
      {
        heading: "開発と本番の切り替え",
        content: "cross-env で OS 差異のない環境変数設定、`concurrently` で複数プロセスの同時起動がよく使われます。\n\n`\dev\: \"node --watch --env-file=.env index.js\"` のように Node 20+ の組み込み .env サポートも活用できます。",
        code: "\scripts\: {\n  \dev\: \"node --watch index.js\",\n  \start\: \"NODE_ENV=production node index.js\",\n  \lint\: \"eslint .\",\n  \test\: \"node --test\"\n}"
      },
      {
        heading: "次のステップへの橋渡し",
        content: "Node.js の基礎ができたら、npm 入門でパッケージ管理を深掘りし、Prisma や Supabase で DB 連携を学びましょう。フロントエンドとバックエンドを同じ言語で書けるのが Node.js の大きな魅力です。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "Node.js の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① npm 入門 — パッケージ管理の詳細\n② 認証入門 — JWT・セッション\n③ Prisma 入門 — ORM で DB 操作\n④ Docker 入門 — コンテナでデプロイ"
      },
      {
        heading: "学習の道筋",
        content: "Node.js はツールチェーンもアプリケーションも支える基盤です。小さな CLI スクリプトを書くことから始め、HTTP サーバー、DB 連携へ段階的に進みましょう。\n\nおめでとうございます！Node.js 入門をすべて学びました 🎉",
        tip: "自分だけの API サーバーを立ち上げて、フロントエンドから fetch してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• ESM（import/export）を使っているか\n• 環境変数でシークレットを管理しているか\n• async/await で非同期エラーを捕捉しているか\n• ルートをファイル分割して保守性を保っているか"
      }
    ]
  }
]
