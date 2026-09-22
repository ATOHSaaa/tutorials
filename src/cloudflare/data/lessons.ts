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
    id: 'intro',
    title: 'Cloudflare とは？',
    description: 'Cloudflare のサービス全体像と Workers エコシステムを学びます',
    sections: [
      {
        heading: 'Cloudflare とは何か？',
        content:
          'Cloudflare は、CDN（コンテンツ配信ネットワーク）、DNS、セキュリティ、サーバーレスコンピューティングなどを提供するプラットフォームです。世界中にデータセンターがあり、ユーザーの近くでコンテンツを配信・処理できます。\n\n開発者向けには Workers（サーバーレス関数）、D1（SQL データベース）、R2（オブジェクトストレージ）などが提供されています。',
      },
      {
        heading: 'なぜ Cloudflare なのか？',
        content:
          '• エッジで実行 — ユーザーに近い場所でコードが動くため高速\n• ゼロコールドスタート — Workers は起動が速い\n• 従量課金 — 使った分だけ（無料枠も充実）\n• egress 無料 — R2 からのデータ転送料が無料\n• Vercel/Next.js 以外の選択肢として人気が上昇',
        tip: 'デモで Cloudflare の3大サービス（Workers / D1 / R2）の関係を確認してください。',
      },
      {
        heading: 'このチュートリアルの範囲',
        content:
          'Workers で API を作り、D1 にデータを保存し、R2 にファイルを置く — この3つを組み合わせたフルスタック構成を学びます。Next.js や TanStack Start の「サーバー側」の代替としても使えます。',
      },
    ],
  },
  {
    id: 'workers',
    title: 'Workers 入門',
    description: 'Cloudflare Workers の基本とプロジェクト作成を学びます',
    sections: [
      {
        heading: 'Workers とは？',
        content:
          'Cloudflare Workers は、Cloudflare のエッジネットワーク上で JavaScript/TypeScript を実行するサーバーレスランタイムです。Node.js とは異なる V8  isolate 上で動き、リクエストごとに高速に起動します。\n\n「サーバーを管理しない」「世界中どこでも低レイテンシ」が最大の特徴です。',
      },
      {
        heading: 'プロジェクトを作る',
        content:
          'create-cloudflare（C3）CLI でプロジェクトを作成します。Worker テンプレートを選び、TypeScript がデフォルトで含まれます。',
        code: `npm create cloudflare@latest my-app

# 開発サーバー起動
cd my-app
npm run dev`,
        tip: 'npm run dev は wrangler dev のラッパーです。Wrangler レッスンで詳しく学びます。',
      },
      {
        heading: '最小の Worker',
        content:
          'fetch イベントを受け取り、Response を返すのが基本形です。Hono などのフレームワークを使うのが一般的ですが、まずは素の形を理解しましょう。',
        code: `export default {
  async fetch(request: Request): Promise<Response> {
    return new Response('Hello from Cloudflare Workers!');
  },
};`,
      },
    ],
  },
  {
    id: 'workers-routing',
    title: 'ルーティングとリクエスト',
    description: 'HTTP メソッドとパスで処理を分岐する方法を学びます',
    sections: [
      {
        heading: 'リクエストの処理',
        content:
          'Workers は HTTP リクエストを受け取り、URL・メソッド・ヘッダー・ボディを読んで処理します。REST API を作るイメージです。',
        code: `export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/hello') {
      return Response.json({ message: 'Hello!' });
    }

    if (request.method === 'POST' && url.pathname === '/api/users') {
      const body = await request.json();
      return Response.json({ created: body });
    }

    return new Response('Not Found', { status: 404 });
  },
};`,
      },
      {
        heading: 'Hono フレームワーク',
        content:
          '実務では Hono がよく使われます。Express 風の API で、Workers・D1・R2 との相性が良いです。',
        code: `import { Hono } from 'hono';

const app = new Hono();

app.get('/api/hello', (c) => c.json({ message: 'Hello!' }));
app.post('/api/users', async (c) => {
  const body = await c.req.json();
  return c.json({ created: body });
});

export default app;`,
        tip: 'デモでルーティングの分岐を試してみてください。',
      },
    ],
  },
  {
    id: 'wrangler',
    title: 'Wrangler とデプロイ',
    description: 'wrangler dev、wrangler.jsonc、デプロイの流れを学びます',
    sections: [
      {
        heading: 'Wrangler とは？',
        content:
          'Wrangler は Cloudflare Workers の公式 CLI です。ローカル開発（`wrangler dev`）、本番デプロイ（`wrangler deploy`）、D1/R2 の管理、シークレットの設定などを一手に担います。\n\nC3（create-cloudflare）で作ったプロジェクトでは、`npm run dev` が内部で `wrangler dev` を呼び出しています。どちらを使っても同じ開発サーバーが起動します。',
      },
      {
        heading: 'wrangler dev — ローカル開発',
        content:
          '`wrangler dev` は Worker をローカルで実行する開発サーバーです。本番と同じ workerd ランタイム上で動くため、「ローカルでは動くが本番で壊れる」リスクが少ないのが利点です。\n\n起動すると通常 `http://localhost:8787` で API にアクセスできます。コードを保存するとホットリロードされ、すぐに変更を確認できます。\n\nD1 はローカル SQLite、R2 はローカルエミュレーションが使われます。本番の D1/R2 に接続したい場合は `--remote` フラグを付けます。',
        code: `# 開発サーバー起動（デフォルト: localhost:8787）
npx wrangler dev

# ポートを変更
npx wrangler dev --port 3000

# 本番の D1/R2 に接続して開発
npx wrangler dev --remote

# package.json の scripts 経由（C3 プロジェクト）
npm run dev`,
        tip: 'ターミナルに表示される URL をブラウザや curl で叩いて動作確認しましょう。',
      },
      {
        heading: 'wrangler.jsonc とデプロイ',
        content:
          'wrangler.jsonc はプロジェクトの設定ファイルです。Worker 名、エントリポイント、互換性日付、D1/R2 のバインディングを定義します。`wrangler dev` もこのファイルを読み込んでローカル環境を構築します。\n\n開発が終わったら `wrangler deploy`（または `npm run deploy`）で Cloudflare のエッジに公開します。シークレットは `wrangler secret put` で本番環境にのみ設定します（ローカルでは `.dev.vars` を使います）。',
        code: `{
  "name": "my-app",
  "main": "src/index.ts",
  "compatibility_date": "2024-01-01",
  "d1_databases": [
    {
      "binding": "DB",
      "database_name": "my-db",
      "database_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    }
  ],
  "r2_buckets": [
    {
      "binding": "BUCKET",
      "bucket_name": "my-files"
    }
  ]
}

# 本番デプロイ
npx wrangler deploy

# シークレット設定（本番）
npx wrangler secret put API_KEY`,
        tip: 'binding 名は Worker 内で env.DB、env.BUCKET として参照します。ローカルのシークレットは .dev.vars に KEY=value 形式で書きます。',
      },
    ],
  },
  {
    id: 'd1-intro',
    title: 'D1 入門',
    description: 'Cloudflare D1 サーバーレス SQL データベースを学びます',
    sections: [
      {
        heading: 'D1 とは？',
        content:
          'D1 は Cloudflare のサーバーレス SQL データベースです。SQLite ベースで、Workers からバインディングで直接アクセスできます。PostgreSQL や MySQL のようにサーバーを管理する必要がありません。\n\nDB 入門・SQL チュートリアルで学んだ SQL がそのまま使えます。',
      },
      {
        heading: 'D1 を作成する',
        content:
          'Wrangler でデータベースを作成し、wrangler.jsonc にバインディングを追加します。',
        code: `# データベース作成
npx wrangler d1 create my-db

# wrangler.jsonc に binding を追加後...
# ローカルでマイグレーション適用
npx wrangler d1 migrations apply my-db --local`,
      },
      {
        heading: 'スキーマとマイグレーション',
        content:
          'migrations/ フォルダに SQL ファイルを置き、テーブルを作成します。Git でスキーマ変更を管理できるのが利点です。',
        code: `-- migrations/0001_create_users.sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);`,
      },
    ],
  },
  {
    id: 'd1-crud',
    title: 'D1 で CRUD',
    description: 'Workers から D1 にデータを読み書きする方法を学びます',
    sections: [
      {
        heading: 'D1 バインディング',
        content:
          'wrangler.jsonc で binding: "DB" を設定すると、Worker 内で env.DB としてアクセスできます。',
        code: `// SELECT
const { results } = await env.DB.prepare(
  'SELECT * FROM users WHERE id = ?'
).bind(userId).all();

// INSERT
await env.DB.prepare(
  'INSERT INTO users (name, email) VALUES (?, ?)'
).bind(name, email).run();

// UPDATE
await env.DB.prepare(
  'UPDATE users SET name = ? WHERE id = ?'
).bind(newName, userId).run();

// DELETE
await env.DB.prepare(
  'DELETE FROM users WHERE id = ?'
).bind(userId).run();`,
      },
      {
        heading: 'Hono + D1 の例',
        content:
          'Hono では c.env.DB でバインディングにアクセスします。型定義を追加すると型安全になります。',
        code: `app.get('/api/users', async (c) => {
  const { results } = await c.env.DB.prepare(
    'SELECT id, name, email FROM users'
  ).all();
  return c.json(results);
});

app.post('/api/users', async (c) => {
  const { name, email } = await c.req.json();
  await c.env.DB.prepare(
    'INSERT INTO users (name, email) VALUES (?, ?)'
  ).bind(name, email).run();
  return c.json({ ok: true }, 201);
});`,
        tip: 'デモで D1 の CRUD 操作を体験してください。',
      },
    ],
  },
  {
    id: 'r2-intro',
    title: 'R2 入門',
    description: 'Cloudflare R2 オブジェクトストレージを学びます',
    sections: [
      {
        heading: 'R2 とは？',
        content:
          'R2 は Cloudflare のオブジェクトストレージです。AWS S3 と互換性があり、画像・動画・PDF などのファイルを保存します。\n\n最大の特徴は egress（データ転送）料金が無料。S3 では転送量に課金されますが、R2 ではかかりません。',
      },
      {
        heading: 'R2 バケットを作る',
        content:
          'Wrangler でバケットを作成し、wrangler.jsonc にバインディングを追加します。',
        code: `# バケット作成
npx wrangler r2 bucket create my-files

# wrangler.jsonc
{
  "r2_buckets": [
    {
      "binding": "BUCKET",
      "bucket_name": "my-files"
    }
  ]
}`,
      },
      {
        heading: '基本的な操作',
        content:
          'put で保存、get で取得、delete で削除。キー（ファイル名）でオブジェクトを識別します。',
        code: `// ファイルを保存
await env.BUCKET.put('images/photo.png', fileData, {
  httpMetadata: { contentType: 'image/png' },
});

// ファイルを取得
const object = await env.BUCKET.get('images/photo.png');
if (object) {
  return new Response(object.body);
}

// ファイルを削除
await env.BUCKET.delete('images/photo.png');`,
      },
    ],
  },
  {
    id: 'r2-api',
    title: 'R2 でファイル API',
    description: 'アップロード・ダウンロード API を作る方法を学びます',
    sections: [
      {
        heading: 'ファイルのダウンロード',
        content:
          'URL パスをキーにして R2 からファイルを返す API を作れます。画像配信やドキュメントダウンロードに使います。',
        code: `app.get('/files/*', async (c) => {
  const key = c.req.path.replace('/files/', '');
  const object = await c.env.BUCKET.get(key);

  if (!object) {
    return c.text('Not Found', 404);
  }

  return new Response(object.body, {
    headers: { 'Content-Type': object.httpMetadata?.contentType ?? 'application/octet-stream' },
  });
});`,
      },
      {
        heading: 'ファイルのアップロード',
        content:
          'PUT リクエストでファイルを受け取り、R2 に保存します。認証（Bearer トークン）を付けるのが一般的です。',
        code: `app.put('/upload/*', async (c) => {
  const auth = c.req.header('Authorization');
  if (auth !== \`Bearer \${c.env.UPLOAD_SECRET}\`) {
    return c.text('Unauthorized', 401);
  }

  const key = c.req.path.replace('/upload/', '');
  await c.env.BUCKET.put(key, c.req.raw.body);

  return c.json({ ok: true, key });
});`,
        tip: 'シークレットは wrangler secret put UPLOAD_SECRET で設定します。',
      },
    ],
  },
  {
    id: 'fullstack',
    title: 'Workers + D1 + R2',
    description: '3つのサービスを組み合わせたフルスタック構成を学びます',
    sections: [
      {
        heading: '典型的な構成',
        content:
          'D1 — メタデータ（ユーザー、投稿のタイトル・日付など構造化データ）\nR2 — ファイル本体（画像、PDF、動画）\nWorkers — API レイヤー（両方にアクセスして統合）\n\n例：ファイル共有アプリ\n• D1: files テーブル（id, name, r2_key, user_id, created_at）\n• R2: 実際のファイルデータ\n• Workers: アップロード API、一覧 API、ダウンロード API',
        code: `// アップロードの流れ
// 1. R2 にファイル保存 → key を取得
// 2. D1 にメタデータ INSERT（r2_key を保存）
// 3. クライアントに { id, name, url } を返す

app.post('/api/files', async (c) => {
  const formData = await c.req.formData();
  const file = formData.get('file') as File;
  const key = \`uploads/\${crypto.randomUUID()}-\${file.name}\`;

  await c.env.BUCKET.put(key, file.stream());
  const result = await c.env.DB.prepare(
    'INSERT INTO files (name, r2_key) VALUES (?, ?) RETURNING id'
  ).bind(file.name, key).first();

  return c.json({ id: result.id, name: file.name });
});`,
      },
      {
        heading: 'ローカル開発の流れ',
        content:
          '1. wrangler dev でローカル Worker 起動\n2. D1 は --local フラグでローカル SQLite を使用\n3. R2 はローカルエミュレーションまたは remote バインディング\n4. 問題なければ wrangler deploy で本番へ',
        tip: 'デモで3サービスの連携フローを確認してください。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'Cloudflare の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          'Workers KV — キーバリューストア（設定、キャッシュ）\nQueues — バックグラウンドジョブ\nPages — 静的サイト + Functions\nDurable Objects — ステートフルな Worker\nHyperdrive — 既存 PostgreSQL への高速接続',
      },
      {
        heading: '学習の道筋',
        content:
          '① DB 入門 → ② SQL → ③ Cloudflare 入門（今ここ）→ ④ 実際に Workers + D1 + R2 でアプリを作ってデプロイ\n\nCloudflare は Vercel/Next.js と併用もできます。画像は R2、API は Workers、フロントは Pages という構成も人気です。',
        tip: 'おめでとうございます！Cloudflare 入門をすべて学びました 🎉',
      },
    ],
  },
]
