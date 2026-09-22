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
    title: 'SQL とは？',
    description: 'データベースと SQL の基本を学びます',
    sections: [
      {
        heading: 'SQL とは何か？',
        content:
          'SQL（Structured Query Language）は、データベースを操作するための言語です。Web アプリのユーザー情報、商品データ、注文履歴など、ほとんどのアプリはデータベースにデータを保存しています。\n\nSQL を使えば、データの取得・追加・更新・削除ができます。フロントエンド開発者にとっても、API の裏側で何が起きているかを理解するために重要なスキルです。',
      },
      {
        heading: 'データベースの基本構造',
        content:
          'データベースは「テーブル」の集まりです。テーブルは Excel のシートのようなもので、行（レコード）と列（カラム）でデータを管理します。\n\n例：users テーブル\n• id — ユーザーの識別番号\n• name — 名前\n• email — メールアドレス\n• age — 年齢',
        code: `-- users テーブルの例
| id | name     | email           | age |
|----|----------|-----------------|-----|
| 1  | 田中太郎 | taro@example.com| 28  |
| 2  | 鈴木花子 | hanako@ex.com   | 34  |`,
        tip: 'デモでテーブルの構造を確認してみてください。',
      },
      {
        heading: 'RDBMS とは',
        content:
          'SQL は PostgreSQL、MySQL、SQLite などの RDBMS（リレーショナルデータベース管理システム）で使われます。基本の SQL 文法はどの DB でもほぼ同じです。\n\nNext.js や TanStack Start の API から、Prisma や Drizzle などの ORM を通じて SQL が実行されています。',
      },
    ],
  },
  {
    id: 'select',
    title: 'SELECT — データを取得',
    description: 'テーブルからデータを読み取る基本を学びます',
    sections: [
      {
        heading: 'SELECT の基本',
        content:
          'SELECT はデータを「取得」する命令です。最もよく使う SQL 文で、フロントエンドが API から受け取るデータも、裏側では SELECT で取得されています。',
        code: `-- すべての列を取得
SELECT * FROM users;

-- 特定の列だけ取得
SELECT name, email FROM users;`,
      },
      {
        heading: '列を指定する理由',
        content:
          '*（すべての列）を使うのは手軽ですが、必要な列だけ指定する方がパフォーマンスが良いです。本番環境では SELECT name, email のように必要最小限の列を指定するのがベストプラクティスです。',
        tip: 'デモで SELECT * と SELECT name の違いを試してみてください。',
      },
    ],
  },
  {
    id: 'where',
    title: 'WHERE — 条件で絞り込み',
    description: '特定の条件に合うデータだけを取得する方法を学びます',
    sections: [
      {
        heading: 'WHERE 句',
        content:
          'WHERE を使うと条件に合う行だけを取得できます。「東京に住むユーザーだけ」「価格が1000円以上の商品だけ」といった絞り込みが可能です。',
        code: `SELECT * FROM users WHERE city = '東京';

SELECT * FROM products WHERE price >= 1000;

SELECT * FROM users WHERE age > 25 AND city = '大阪';`,
      },
      {
        heading: '比較演算子',
        content:
          '=（等しい）、<> または !=（等しくない）、>、<、>=、<= が使えます。文字列はシングルクォートで囲みます。\n\nAND（かつ）、OR（または）、NOT（否定）で条件を組み合わせられます。',
        code: `SELECT * FROM users WHERE age >= 20 AND age <= 30;
SELECT * FROM users WHERE city = '東京' OR city = '大阪';
SELECT * FROM products WHERE name LIKE '%ノート%';`,
        tip: 'LIKE は部分一致検索。% はワイルドカードです。',
      },
    ],
  },
  {
    id: 'order-limit',
    title: 'ORDER BY / LIMIT',
    description: '結果の並び替えと件数制限を学びます',
    sections: [
      {
        heading: 'ORDER BY — 並び替え',
        content:
          'ORDER BY で結果を昇順（ASC）または降順（DESC）に並べ替えられます。「最新の投稿から」「価格の安い順」など、表示順を制御します。',
        code: `-- 年齢の昇順（若い順）
SELECT * FROM users ORDER BY age ASC;

-- 価格の降順（高い順）
SELECT * FROM products ORDER BY price DESC;

-- 複数列で並べ替え
SELECT * FROM users ORDER BY city ASC, age DESC;`,
      },
      {
        heading: 'LIMIT — 件数制限',
        content:
          'LIMIT で取得件数を制限できます。「最新5件」「トップ10」など、ページネーションの基礎にもなります。',
        code: `-- 最新3件
SELECT * FROM posts ORDER BY created_at DESC LIMIT 3;

-- オフセット付き（2件目から3件）
SELECT * FROM users LIMIT 3 OFFSET 1;`,
        tip: 'デモで並び替えと件数制限を試してみてください。',
      },
    ],
  },
  {
    id: 'joins',
    title: 'JOIN — テーブルを結合',
    description: '複数のテーブルを関連付けてデータを取得する方法を学びます',
    sections: [
      {
        heading: 'JOIN とは？',
        content:
          '実際のアプリではデータは複数のテーブルに分かれています。users テーブルと orders テーブルを「ユーザーID」で結びつけて、「誰が何を注文したか」を一度に取得できます。',
        code: `SELECT users.name, orders.product, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;`,
      },
      {
        heading: 'JOIN の種類',
        content:
          'INNER JOIN — 両方のテーブルにマッチする行だけ\nLEFT JOIN — 左テーブルの全行 + 右のマッチ\nRIGHT JOIN — 右テーブルの全行 + 左のマッチ\n\nフロントエンドで API から「ユーザー名と注文商品名」を一緒に受け取るとき、裏側では JOIN が使われていることが多いです。',
        code: `-- 注文がないユーザーも含める
SELECT users.name, orders.product
FROM users
LEFT JOIN orders ON users.id = orders.user_id;`,
        tip: 'デモで JOIN の結果を確認してください。',
      },
    ],
  },
  {
    id: 'aggregate',
    title: '集計関数',
    description: 'COUNT、SUM、AVG などでデータを集計する方法を学びます',
    sections: [
      {
        heading: 'よく使う集計関数',
        content:
          '集計関数は複数の行を1つの値にまとめます。レポートやダッシュボードでよく使われます。',
        code: `SELECT COUNT(*) FROM users;           -- ユーザー数
SELECT SUM(amount) FROM orders;        -- 売上合計
SELECT AVG(price) FROM products;       -- 平均価格
SELECT MAX(age) FROM users;            -- 最大年齢
SELECT MIN(price) FROM products;       -- 最低価格`,
      },
      {
        heading: '実務での使いどころ',
        content:
          '管理画面の「総ユーザー数」「今月の売上」「平均注文額」などは、すべて集計関数で取得しています。API のレスポンスに含まれる stats オブジェクトの中身も、多くはこの種のクエリです。',
        tip: 'デモで集計結果を確認してみてください。',
      },
    ],
  },
  {
    id: 'group-by',
    title: 'GROUP BY / HAVING',
    description: 'グループごとに集計する方法を学びます',
    sections: [
      {
        heading: 'GROUP BY',
        content:
          'GROUP BY は指定した列の値ごとにグループ分けして集計します。「都市ごとのユーザー数」「カテゴリごとの売上」などが取得できます。',
        code: `-- 都市ごとのユーザー数
SELECT city, COUNT(*) AS user_count
FROM users
GROUP BY city;

-- カテゴリごとの平均価格
SELECT category, AVG(price) AS avg_price
FROM products
GROUP BY category;`,
      },
      {
        heading: 'HAVING',
        content:
          'HAVING は GROUP BY した結果に条件を付けます。WHERE は行を絞り、HAVING はグループを絞ります。',
        code: `-- ユーザーが2人以上いる都市だけ
SELECT city, COUNT(*) AS cnt
FROM users
GROUP BY city
HAVING COUNT(*) >= 2;`,
        tip: 'WHERE → GROUP BY → HAVING の順で処理されます。',
      },
    ],
  },
  {
    id: 'mutations',
    title: 'INSERT / UPDATE / DELETE',
    description: 'データの追加・更新・削除を学びます',
    sections: [
      {
        heading: 'INSERT — データを追加',
        content:
          '新しい行をテーブルに追加します。ユーザー登録、商品追加、注文作成など、データを「作る」操作です。',
        code: `INSERT INTO users (name, email, age, city)
VALUES ('山田太郎', 'yamada@example.com', 25, '名古屋');

-- 複数行を一度に
INSERT INTO users (name, email, age, city) VALUES
  ('A', 'a@ex.com', 20, '東京'),
  ('B', 'b@ex.com', 30, '大阪');`,
      },
      {
        heading: 'UPDATE と DELETE',
        content:
          'UPDATE は既存データを変更、DELETE はデータを削除します。どちらも必ず WHERE を付けて、意図しない全件更新・削除を防ぎましょう。',
        code: `-- 更新
UPDATE users SET age = 29 WHERE id = 1;

-- 削除
DELETE FROM users WHERE id = 4;`,
        tip: 'WHERE なしの UPDATE/DELETE は全行に影響します。本番では絶対に注意！',
      },
    ],
  },
  {
    id: 'schema',
    title: 'テーブル設計',
    description: 'CREATE TABLE とデータベース設計の基本を学びます',
    sections: [
      {
        heading: 'CREATE TABLE',
        content:
          'テーブルを新規作成する SQL です。各列のデータ型と制約を定義します。',
        code: `CREATE TABLE users (
  id         INTEGER PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT UNIQUE NOT NULL,
  age        INTEGER,
  city       TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
      },
      {
        heading: '設計の基本',
        content:
          'PRIMARY KEY — 各行を一意に識別する列\nNOT NULL — 空を許さない\nUNIQUE — 重複を許さない\nFOREIGN KEY — 他テーブルへの参照（リレーション）\n\n正規化（データの重複を減らす）と、必要に応じた非正規化（パフォーマンス）のバランスが設計の鍵です。',
        code: `CREATE TABLE orders (
  id       INTEGER PRIMARY KEY,
  user_id  INTEGER NOT NULL,
  product  TEXT NOT NULL,
  amount   INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);`,
        tip: 'Prisma の schema.prisma は、この CREATE TABLE を宣言的に書くものです。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'SQL の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: '次に学ぶこと',
        content:
          'Prisma / Drizzle — TypeScript から型安全に DB 操作\nPostgreSQL — 本番で最も使われる DB の深掘り\nインデックス — クエリを高速化する技術\nトランザクション — 複数操作をまとめて安全に実行',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML → ② CSS → ③ JS → ④ SQL（今ここ）→ ⑤ React → ⑥ Next.js\n\nSQL の基礎ができたら、API のレスポンスがどう DB から来ているか理解できるようになります。実際に SQLite や PostgreSQL を触ってみましょう！',
        tip: 'おめでとうございます！SQL の基礎をすべて学びました 🎉',
      },
    ],
  },
]
