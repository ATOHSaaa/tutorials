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
    title: "Prisma とは？",
    description: "ORM の概念と Prisma の3つのコンポーネントを理解します",
    sections: [
      {
        heading: "ORM とは",
        content: "ORM（Object-Relational Mapping）は、オブジェクト指向のコードでリレーショナル DB を操作する仕組みです。SQL を直接書く代わりに、型安全な API でデータを扱えます。\n\nPrisma は Node.js/TypeScript エコシステムで最も人気の ORM です。自動生成される型により、コンパイル時にクエリのミスを検出できます。"
      },
      {
        heading: "Prisma の3コンポーネント",
        content: "Prisma Schema — DB 構造を宣言的に定義。Prisma Client — 自動生成される型安全なクエリ API。Prisma Migrate — スキーマ変更を SQL マイグレーションとして管理。\n\nこの3つが連携し、「スキーマを書く → マイグレーション → 型安全にクエリ」という開発フローを実現します。",
        tip: "デモで schema.prisma のモデル定義と生成される TypeScript 型の対応を確認してみてください。"
      },
      {
        heading: "対応データベース",
        content: "PostgreSQL、MySQL、SQLite、SQL Server、MongoDB などに対応しています。開発時は SQLite、本番は PostgreSQL という切り替えも datasource の URL 変更だけで可能です。"
      }
    ]
  },
  {
    id: "setup",
    title: "セットアップ",
    description: "Prisma のインストールと初期化を学びます",
    sections: [
      {
        heading: "インストール",
        content: "`npm install prisma --save-dev` と `npm install @prisma/client` で導入します。`npx prisma init` で schema.prisma と .env が生成されます。",
        code: "npm install prisma --save-dev\nnpm install @prisma/client\nnpx prisma init"
      },
      {
        heading: "接続設定",
        content: ".env に DATABASE_URL を設定し、schema.prisma の datasource で参照します。PostgreSQL の例: postgresql://user:pass@localhost:5432/mydb",
        code: "datasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider = \"prisma-client-js\"\n}"
      },
      {
        heading: "クライアント生成",
        content: "スキーマを変更したら `npx prisma generate` で Prisma Client を再生成します。CI では postinstall スクリプトに含めるのが一般的です。\n\n`npx prisma studio` で GUI の DB ブラウザが使え、開発中のデータ確認に便利です。"
      }
    ]
  },
  {
    id: "schema",
    title: "スキーマ設計",
    description: "モデル、フィールド型、制約の定義を学びます",
    sections: [
      {
        heading: "モデルの基本",
        content: "model はテーブルに対応します。フィールドはカラムで、@id は主キー、@default はデフォルト値、@unique は一意制約です。",
        code: "model User {\n  id        Int      @id @default(autoincrement())\n  email     String   @unique\n  name      String?\n  createdAt DateTime @default(now())\n  posts     Post[]\n}"
      },
      {
        heading: "フィールド型",
        content: "String、Int、Float、Boolean、DateTime、Json などが使えます。? を付けるとオプショナル（NULL 許可）になります。\n\n@default(now()) は作成日時、@updatedAt は更新時に自動セットされるタイムスタンプです。"
      },
      {
        heading: "命名規則",
        content: "モデル名は PascalCase、フィールド名は camelCase が Prisma の慣習です。DB のテーブル名は @@map(\"users\") でスネークケースにマッピングできます。\n\n既存 DB からスキーマを生成するには `npx prisma db pull`（introspection）を使います。",
        tip: "スキーマを先に設計し、マイグレーションで DB に反映する「スキーマファースト」が Prisma の基本フローです。"
      }
    ]
  },
  {
    id: "crud",
    title: "CRUD 操作",
    description: "作成・読取・更新・削除の基本クエリを学びます",
    sections: [
      {
        heading: "Create",
        content: "prisma.model.create() で1件作成、createMany() で複数作成します。戻り値は作成されたレコードのオブジェクトです。",
        code: "const user = await prisma.user.create({\n  data: { email: \"taro@example.com\", name: \"太郎\" },\n});"
      },
      {
        heading: "Read",
        content: "findUnique() は一意フィールドで1件取得、findMany() は条件に合う複数件、findFirst() は最初の1件です。存在しない場合は null が返ります。",
        code: "const user = await prisma.user.findUnique({ where: { email: \"taro@example.com\" } });\nconst admins = await prisma.user.findMany({\n  where: { role: \"admin\" },\n  orderBy: { createdAt: \"desc\" },\n  take: 10,\n});"
      },
      {
        heading: "Update と Delete",
        content: "update() は1件更新、updateMany() は条件に合う複数件を更新。delete() と deleteMany() も同様です。",
        code: "await prisma.user.update({ where: { id: 1 }, data: { name: \"花子\" } });\nawait prisma.user.delete({ where: { id: 1 } });"
      }
    ]
  },
  {
    id: "relations",
    title: "リレーション",
    description: "1対多、多対多のモデル関係を学びます",
    sections: [
      {
        heading: "1対多（One-to-Many）",
        content: "Post に author User への参照を持たせます。User 側には posts Post[] の逆参照を定義します。",
        code: "model Post {\n  id       Int  @id @default(autoincrement())\n  title    String\n  author   User @relation(fields: [authorId], references: [id])\n  authorId Int\n}"
      },
      {
        heading: "リレーションを含むクエリ",
        content: "include で関連データを一緒に取得します。N+1 問題を防ぐため、必要なリレーションは1クエリで include しましょう。",
        code: "const userWithPosts = await prisma.user.findUnique({\n  where: { id: 1 },\n  include: { posts: true },\n});"
      },
      {
        heading: "多対多（Many-to-Many）",
        content: "暗黙の多対多は Prisma が中間テーブルを自動生成します。明示的な多対多は中間モデルを自分で定義し、追加フィールド（createdAt など）を持たせられます。\n\nカスケード削除は onDelete: Cascade で親削除時に子も削除されます。",
        tip: "include のネストは深くしすぎないでください。必要なフィールドだけ select で絞るのがパフォーマンスの基本です。"
      }
    ]
  },
  {
    id: "migrations",
    title: "マイグレーション",
    description: "スキーマ変更のバージョン管理を学びます",
    sections: [
      {
        heading: "開発フロー",
        content: "schema.prisma を編集 → `npx prisma migrate dev --name add_user_role` でマイグレーション SQL を生成・適用 → Prisma Client が自動再生成されます。\n\nマイグレーションファイルは prisma/migrations/ に保存され、Git で管理します。"
      },
      {
        heading: "本番デプロイ",
        content: "本番では `npx prisma migrate deploy` で未適用のマイグレーションを順に実行します。CI/CD パイプラインに組み込むのが定番です。\n\n`prisma db push` はマイグレーション履歴なしでスキーマを直接反映する開発用コマンドです。本番では使いません。",
        code: "npx prisma migrate dev --name add_comments\nnpx prisma migrate deploy"
      },
      {
        heading: "マイグレーションのベストプラクティス",
        content: "破壊的変更（カラム削除、型変更）は段階的に行います。まず新カラム追加 → データ移行 → 旧カラム削除の3ステップが安全です。\n\nマイグレーションのコンフリクトはチーム開発で起きがちです。早めにマージし、ローカルで解決してから push しましょう。"
      }
    ]
  },
  {
    id: "queries",
    title: "高度なクエリ",
    description: "フィルタ、ページネーション、集計を学びます",
    sections: [
      {
        heading: "フィルタリング",
        content: "where に複合条件を指定できます。AND、OR、NOT、contains、startsWith、gt/gte/lt/lte など豊富なオペレータがあります。",
        code: "const results = await prisma.post.findMany({\n  where: {\n    AND: [\n      { published: true },\n      { title: { contains: \"Prisma\", mode: \"insensitive\" } },\n    ],\n  },\n});"
      },
      {
        heading: "ページネーション",
        content: "take（取得件数）と skip（オフセット）でページネーションします。cursor ベースは cursor と skip: 1 を組み合わせます。",
        code: "const page = await prisma.post.findMany({\n  take: 20,\n  skip: (pageNum - 1) * 20,\n  orderBy: { createdAt: \"desc\" },\n});"
      },
      {
        heading: "集計",
        content: "count、aggregate（sum、avg、min、max）、groupBy でデータ集計ができます。レポート機能やダッシュボードで活きます。",
        code: "const stats = await prisma.order.aggregate({\n  _sum: { amount: true },\n  _avg: { amount: true },\n  _count: true,\n});"
      }
    ]
  },
  {
    id: "transactions",
    title: "トランザクション",
    description: "複数操作の原子性を保証する方法を学びます",
    sections: [
      {
        heading: "interactive transactions",
        content: "$transaction に async 関数を渡し、複数の操作を1つのトランザクションで実行します。途中でエラーが起きればすべてロールバックされます。",
        code: "await prisma.$transaction(async (tx) => {\n  const order = await tx.order.create({ data: { userId: 1, total: 5000 } });\n  await tx.product.update({\n    where: { id: productId },\n    data: { stock: { decrement: 1 } },\n  });\n});"
      },
      {
        heading: "バッチトランザクション",
        content: "配列にクエリを並べて一括実行するシンプルな形式もあります。すべて成功かすべて失敗のどちらかです。",
        code: "await prisma.$transaction([\n  prisma.account.update({ where: { id: 1 }, data: { balance: { decrement: 100 } } }),\n  prisma.account.update({ where: { id: 2 }, data: { balance: { increment: 100 } } }),\n]);"
      },
      {
        heading: "分離レベル",
        content: "デフォルトの分離レベルは DB に依存します。高い分離レベルは整合性が強いがデッドロックのリスクも上がります。決済や在庫管理ではトランザクションの理解が必須です。",
        tip: "デモでトランザクション途中のエラー時にデータがロールバックされることを確認してみてください。"
      }
    ]
  },
  {
    id: "advanced",
    title: "応用テクニック",
    description: "ミドルウェア、生 SQL、シーディングを学びます",
    sections: [
      {
        heading: "Prisma Middleware",
        content: "$use でクエリ前後に処理を挟めます。ログ出力、ソフトデリート、マルチテナントのフィルタリングなどに使います。",
        code: "prisma.$use(async (params, next) => {\n  const before = Date.now();\n  const result = await next(params);\n  console.log(`Query took ${Date.now() - before}ms`);\n  return result;\n});"
      },
      {
        heading: "生 SQL",
        content: "$queryRaw と $executeRaw で Prisma がカバーしない複雑なクエリを実行できます。SQL インジェクション防止のため、必ずプレースホルダーを使います。",
        code: "const result = await prisma.$queryRaw`\n  SELECT u.name, COUNT(p.id) as post_count\n  FROM \"User\" u LEFT JOIN \"Post\" p ON u.id = p.\"authorId\"\n  GROUP BY u.id\n`;"
      },
      {
        heading: "シーディング",
        content: "prisma/seed.ts で初期データを投入します。package.json に prisma.seed を設定し、`npx prisma db seed` で実行します。\n\n開発環境の再現性とテストデータの準備に不可欠です。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "Prisma の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Supabase 入門 — Prisma なしの DB + 認証\n② Docker 入門 — DB コンテナの運用\n③ GraphQL 入門 — Prisma + GraphQL API\n④ 認証入門 — ユーザー管理との連携"
      },
      {
        heading: "学習の道筋",
        content: "Prisma はスキーマ駆動開発の強力なツールです。型安全なクエリ、マイグレーション管理、Prisma Studio——これらを使いこなせば DB 操作の生産性が大幅に上がります。\n\nおめでとうございます！Prisma 入門をすべて学びました 🎉",
        tip: "小さなブログ API を Prisma で作り、CRUD + リレーションを一通り実装してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• schema.prisma を Git 管理しているか\n• マイグレーションファイルをコミットしているか\n• N+1 を include で回避しているか\n• トランザクションで整合性を保っているか\n• 本番で migrate deploy を CI に組み込んでいるか"
      }
    ]
  }
]
