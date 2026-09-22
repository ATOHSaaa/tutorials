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
    title: 'データベースとは？',
    description: 'データベースの役割と、なぜ必要なのかを学びます',
    sections: [
      {
        heading: 'データベースとは何か？',
        content:
          'データベース（DB）は、データを整理して保存・管理するシステムです。ユーザー情報、商品データ、投稿、注文履歴など、アプリが扱うほぼすべての「永続的なデータ」はデータベースに保存されます。\n\nブラウザを閉じても、サーバーを再起動しても、データは消えません。これがファイル保存やメモリ上の変数との大きな違いです。',
      },
      {
        heading: 'なぜ DB が必要なのか？',
        content:
          'Excel や JSON ファイルでもデータは保存できます。しかし、ユーザーが100万人になったら？ 同時に1000人がアクセスしたら？\n\nデータベースは「大量のデータ」「同時アクセス」「高速な検索」「データの整合性」を効率的に処理するために設計されています。',
        tip: 'デモで「ファイル保存 vs データベース」の違いを確認してみてください。',
      },
      {
        heading: 'フロントエンドとの関係',
        content:
          'フロントエンド（React など）は直接 DB に触れません。通常の流れは：\n\nブラウザ → API（Next.js 等）→ データベース\n\nフロントエンドは API を呼び、API が DB に問い合わせて結果を返します。DB の仕組みを理解すると、API のレスポンスがなぜそうなっているかがわかるようになります。',
      },
    ],
  },
  {
    id: 'rdbms',
    title: 'RDBMS の基本',
    description: 'リレーショナルデータベースの考え方を学びます',
    sections: [
      {
        heading: 'RDBMS とは？',
        content:
          'RDBMS（Relational Database Management System）は、データを「テーブル」の形で管理し、テーブル間の「関係（リレーション）」でデータを結びつけるデータベースです。\n\nPostgreSQL、MySQL、SQLite が代表的な RDBMS です。Web 開発では圧倒的に RDBMS が使われています。',
      },
      {
        heading: 'テーブルで管理する理由',
        content:
          'データを1つの巨大な表に入れるのではなく、意味のある単位でテーブルに分割します。\n\n• users — ユーザー情報\n• posts — 投稿\n• comments — コメント\n\n分割することで、データの重複を減らし、更新や検索が効率的になります。',
        code: `users テーブル        posts テーブル
┌────┬──────┐        ┌────┬─────────┬────────┐
│ id │ name │        │ id │ user_id │ title  │
├────┼──────┤        ├────┼─────────┼────────┤
│ 1  │ 田中 │        │ 1  │ 1       │ こんにちは│
│ 2  │ 鈴木 │        │ 2  │ 1       │ 今日の日記│
└────┴──────┘        └────┴─────────┴────────┘`,
      },
    ],
  },
  {
    id: 'tables',
    title: 'テーブル・行・列',
    description: 'データベースの基本単位を学びます',
    sections: [
      {
        heading: '行（レコード）と列（カラム）',
        content:
          'テーブルは Excel のシートに似ています。\n\n• 行（レコード）— 1件のデータ（1人のユーザー、1つの商品）\n• 列（カラム）— データの属性（名前、メール、価格）\n\n各行は独立したデータで、列はそのデータの「種類」を定義します。',
      },
      {
        heading: 'データ型',
        content:
          '各カラムにはデータ型を指定します。型によって保存できる値とサイズが決まります。',
        code: `INTEGER  — 整数（id, age, price）
TEXT     — 文字列（name, email, title）
BOOLEAN  — 真偽値（is_active）
TIMESTAMP— 日時（created_at）
DECIMAL  — 小数（rating）`,
        tip: 'デモでテーブルの構造をクリックして確認してみてください。',
      },
    ],
  },
  {
    id: 'keys',
    title: '主キー・外部キー',
    description: 'データを一意に識別し、テーブルを結びつける鍵を学びます',
    sections: [
      {
        heading: '主キー（Primary Key）',
        content:
          '主キーは各行を一意に識別する列です。通常は id という自動採番の整数を使います。主キーは重複も NULL（空）も許されません。\n\n「ユーザーID = 3 の人」はテーブル内で1人だけ、と確実に特定できます。',
        code: `users テーブル
id (PK) | name
--------|--------
1       | 田中
2       | 鈴木
3       | 佐藤`,
      },
      {
        heading: '外部キー（Foreign Key）',
        content:
          '外部キーは、他のテーブルの主キーを参照する列です。posts テーブルの user_id が users テーブルの id を指すことで、「この投稿は誰のものか」が明確になります。',
        code: `posts テーブル
id (PK) | user_id (FK → users.id) | title
--------|-------------------------|--------
1       | 1                       | こんにちは
2       | 3                       | 今日の日記`,
        tip: '外部キーはデータの整合性を保つ「約束」です。存在しない user_id は登録できません。',
      },
    ],
  },
  {
    id: 'relations',
    title: 'リレーションの種類',
    description: '1対1、1対多、多対多の関係を学びます',
    sections: [
      {
        heading: '1対多（One-to-Many）',
        content:
          '最も一般的な関係です。1人のユーザーが複数の投稿を持てますが、1つの投稿は1人のユーザーにしか属しません。\n\nusers (1) ←→ (多) posts\n\n外部キー user_id で表現します。',
      },
      {
        heading: '1対1（One-to-One）',
        content:
          '1人のユーザーに1つのプロフィール詳細、という関係です。あまり使われませんが、users テーブルが大きくなりすぎるときに、詳細情報を別テーブルに分ける場合に使います。',
      },
      {
        heading: '多対多（Many-to-Many）',
        content:
          '1人のユーザーが複数のタグを持ち、1つのタグが複数のユーザーに付けられる場合です。直接は表現できないので、中間テーブル（user_tags）を作ります。',
        code: `users ←→ user_tags ←→ tags

user_tags テーブル
user_id (FK) | tag_id (FK)
-------------|------------
1            | 3
1            | 5
2            | 3`,
        tip: 'デモで3種類のリレーションを図で確認してください。',
      },
    ],
  },
  {
    id: 'transactions',
    title: 'トランザクション',
    description: '複数の操作をまとめて安全に実行する仕組みを学びます',
    sections: [
      {
        heading: 'トランザクションとは？',
        content:
          'トランザクションは、データベースに対する複数の操作を「1つのまとまり」として扱う仕組みです。すべて成功したときだけ変更を確定し、途中で失敗したらすべて取り消します。\n\nたとえば銀行の送金では「A さんの口座から引く」と「B さんの口座に入れる」の2つの操作が必要です。片方だけ成功して片方が失敗すると、お金が消えたり増えたりしてしまいます。トランザクションは、このような不整合を防ぎます。',
        tip: 'デモで送金が成功する場合と失敗する場合の違いを確認してみてください。',
      },
      {
        heading: 'COMMIT と ROLLBACK',
        content:
          'トランザクションの結果は、次の2つのどちらかで終わります。\n\n• COMMIT（コミット）— すべての変更を確定して保存する\n• ROLLBACK（ロールバック）— 変更をすべて取り消して、開始前の状態に戻す\n\n途中でエラーが起きたら自動的に ROLLBACK され、データは壊れません。',
        code: `BEGIN;  -- トランザクション開始

UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
UPDATE accounts SET balance = balance + 1000 WHERE id = 2;

COMMIT;  -- 成功したら確定
-- エラー時は ROLLBACK; で取り消し`,
      },
      {
        heading: 'ACID という4つの性質',
        content:
          'RDBMS のトランザクションは、ACID という4つの性質を満たすよう設計されています。\n\n• Atomicity（原子性）— すべて成功か、すべて失敗か。中途半端な状態にならない\n• Consistency（一貫性）— ルール（外部キーなど）を守った状態が保たれる\n• Isolation（独立性）— 同時に動く別のトランザクションに影響されない\n• Durability（永続性）— COMMIT したデータは消えない\n\n入門段階では「途中で失敗したら全部戻る」という Atomicity のイメージが特に重要です。',
      },
      {
        heading: 'いつ必要になる？',
        content:
          '次のような処理では、トランザクションがほぼ必須です。\n\n• 送金・決済 — 複数口座の残高を同時に更新\n• 注文処理 — 在庫を減らし、注文レコードを作成\n• ユーザー登録 — users と profiles を同時に作成\n\nAPI や ORM（Prisma など）でも、裏側でトランザクションが使われています。SQL チュートリアルでは、実際の書き方も学べます。',
      },
    ],
  },
  {
    id: 'normalization',
    title: '正規化の基礎',
    description: 'データの重複を減らす設計手法を学びます',
    sections: [
      {
        heading: '正規化とは？',
        content:
          '正規化は、データの重複を減らしてテーブルを整理する設計手法です。同じデータが複数箇所にあると、更新漏れや不整合が起きやすくなります。',
      },
      {
        heading: '悪い例 vs 良い例',
        content:
          '悪い例：注文テーブルにユーザー名も一緒に保存\n→ ユーザーが名前を変えたら、過去の注文データも全部更新が必要\n\n良い例：注文テーブルには user_id だけ保存\n→ ユーザー名は users テーブルで1箇所だけ管理',
        code: `❌ 非正規化（重複あり）
orders: id | user_name | product
        1  | 田中太郎  | PC

✅ 正規化（重複なし）
orders: id | user_id | product
        1  | 1       | PC
users:  id | name
        1  | 田中太郎`,
        tip: '最初は正規化しすぎず、必要に応じて非正規化（パフォーマンス向上）もします。',
      },
    ],
  },
  {
    id: 'indexes',
    title: 'インデックスの基本',
    description: 'フルスキャンと B-tree インデックスの仕組みを学びます',
    sections: [
      {
        heading: 'フルテーブルスキャンとは',
        content:
          'インデックスがない状態で WHERE email = \'taro@example.com\' を実行すると、DB は users テーブルの先頭行から順に email を比較します。これを「フルテーブルスキャン（Full Table Scan）」と呼びます。\n\n100万行あれば、最悪の場合100万回比較が必要です。行数に比例して遅くなるため、ユーザー数が増える Web アプリでは致命的になります。',
        tip: 'デモでインデックスあり・なしの「スキャン行数」の差を確認してみてください。',
      },
      {
        heading: 'B-tree インデックスの仕組み',
        content:
          'PostgreSQL や MySQL の標準インデックスは、B-tree（平衡木）で実装されています。値がソートされた木構造を持ち、二分探索のように「中央より大きいか小さいか」を繰り返して目的の行を特定します。\n\nたとえば100万行のテーブルでも、木の深さは数段程度。比較回数はおおよそ log₂(1,000,000) ≈ 20 回で済みます。本の巻末索引と同じ発想で、「どのページ（行）にあるか」を素早く辿れます。',
        code: `users テーブル（実データ）     email インデックス（B-tree）
id | email                    [a@...] → 行 42
1  | taro@example.com         [m@...] → 行 158
2  | hanako@example.com       [t@...] → 行 1, 873 ...
...                           ↓
1,000,000 | ...               木を辿って該当行の位置を特定`,
      },
      {
        heading: '主キーと UNIQUE インデックス',
        content:
          '主キー（PRIMARY KEY）には、多くの DB で自動的にユニークなインデックスが作られます。id で検索するクエリは、最初から高速です。\n\nUNIQUE 制約を付けた列（email など）にもインデックスが自動作成されます。重複チェックと高速検索を同時に実現する仕組みです。\n\n一方、name や status など制約のない列には、自分で CREATE INDEX を実行する必要があります。',
        code: `-- 主キー: 自動でインデックス
CREATE TABLE users (
  id    SERIAL PRIMARY KEY,  -- インデックス自動作成
  email TEXT UNIQUE          -- これも自動でインデックス
);

-- 制約のない列は手動で作成
CREATE INDEX idx_users_status ON users(status);`,
      },
      {
        heading: 'インデックスの作成',
        content:
          'インデックスは「別テーブルのような追加データ構造」です。元のテーブルとは独立してディスク上に保存され、指定した列の値と行の位置（ポインタ）の対応を保持します。\n\nログイン画面で email を検索するなら、その列にインデックスを張ります。実際の運用では、遅いクエリの WHERE / JOIN / ORDER BY に使われる列を洗い出してから設計します。',
        code: `-- 単一列インデックス
CREATE INDEX idx_users_email ON users(email);

-- インデックスを使った検索（Index Scan）
SELECT * FROM users WHERE email = 'taro@example.com';

-- インデックスを削除（不要になった場合）
DROP INDEX idx_users_email;`,
      },
      {
        heading: '読み取りと書き込みのトレードオフ',
        content:
          'インデックスは SELECT を速くしますが、INSERT / UPDATE / DELETE のたびにインデックス側も更新が必要です。1つのテーブルに10個のインデックスがあれば、1行の挿入で10個の木構造を書き換えることになります。\n\nディスク容量も増えます。インデックスは「よく読むが、あまり書き換えない列」に絞って作るのが基本です。すべての列に張る必要はありません。',
      },
    ],
  },
  {
    id: 'index-queries',
    title: 'インデックスとクエリ',
    description: 'インデックスが効く条件と効かない条件を学びます',
    sections: [
      {
        heading: '等値検索と範囲検索',
        content:
          'インデックスが最も効くのは、等値検索（=）です。WHERE id = 42 や WHERE email = \'taro@example.com\' は、B-tree から直接該当行を辿れます。\n\n範囲検索（>, <, BETWEEN）もインデックスを使えます。WHERE created_at >= \'2024-01-01\' は、ソート済みの木上で「2024-01-01 以降」の連続した範囲を読み取ります。\n\nIN 句（WHERE status IN (\'active\', \'pending\')）も、複数の等値検索としてインデックスが使われることが多いです。',
        code: `-- ✅ インデックスが使える
SELECT * FROM users WHERE email = 'taro@example.com';
SELECT * FROM posts WHERE created_at >= '2024-01-01';
SELECT * FROM users WHERE age BETWEEN 20 AND 30;

-- ❌ インデックスが効きにくい
SELECT * FROM users WHERE age + 1 = 30;  -- 列に計算式`,
        tip: 'デモでクエリごとにインデックスが使われるかを確認してみてください。',
      },
      {
        heading: 'ORDER BY と JOIN',
        content:
          'ORDER BY created_at DESC で日付順に並べるクエリは、created_at にインデックスがあればソートを省略できる場合があります（すでに木上でソート済み）。\n\nJOIN でもインデックスが重要です。posts.user_id にインデックスがないと、users と結合するたびに posts 全行をスキャンします。外部キー列（user_id, post_id など）へのインデックスは、リレーション設計とセットで考えるべき定番です。',
        code: `-- posts.user_id にインデックスがあると JOIN が速い
SELECT u.name, p.title
FROM users u
JOIN posts p ON u.id = p.user_id
WHERE u.id = 1;

CREATE INDEX idx_posts_user_id ON posts(user_id);`,
      },
      {
        heading: 'インデックスが効かない典型例',
        content:
          'すべての WHERE がインデックスを使うわけではありません。よくある「効かない」パターンを知っておくと、遅いクエリの原因を特定しやすくなります。\n\n• LIKE \'%example.com\' — 前方一致ではないため木を辿れない\n• WHERE LOWER(email) = \'taro@...\' — 列に関数をかけると元のインデックスが使えない\n• WHERE CAST(age AS TEXT) = \'30\' — 型変換も同様\n• カーディナリティが低い列だけ — status が \'active\' / \'inactive\' の2値だけなど、絞り込み効果が薄い\n• テーブルが小さい — 数百行程度ならフルスキャンの方が速いこともある',
        code: `-- ❌ 前方一致なしの LIKE
SELECT * FROM users WHERE email LIKE '%@example.com';

-- ❌ 関数を列にかける（インデックス未使用）
SELECT * FROM users WHERE LOWER(email) = 'taro@example.com';

-- ✅ 前方一致ならインデックスが使える場合がある
SELECT * FROM users WHERE email LIKE 'taro%';`,
      },
      {
        heading: 'カーディナリティ — 選択性の高い列を選ぶ',
        content:
          'カーディナリティ（Cardinality）は、列に含まれる「異なる値の数」です。email はユーザーごとにほぼ一意なのでカーディナリティが高く、インデックスの効果が大きいです。\n\n一方 gender や is_active のような列は値の種類が少なく、インデックスで絞り込んでも残る行が多いため効果が限定的です。複数列の条件があるときは、より絞り込める列（カーディナリティが高い列）を先に使う設計が有効です。',
      },
      {
        heading: '実行計画の確認（EXPLAIN）',
        content:
          'クエリがインデックスを使っているかは、EXPLAIN で確認できます。PostgreSQL では次のように実行します。\n\n• Seq Scan — フルテーブルスキャン（インデックス未使用）\n• Index Scan — インデックスを使って行を取得\n• Index Only Scan — インデックスだけで結果が完結（カバリングインデックス）\n\n本番で遅い API があったら、まず EXPLAIN で実行計画を見るのが定番の調査手順です。SQL チュートリアルでも実際に EXPLAIN を試せます。',
        code: `EXPLAIN SELECT * FROM users WHERE email = 'taro@example.com';

-- 結果の例（インデックス使用）
-- Index Scan using idx_users_email on users
--   Index Cond: (email = 'taro@example.com'::text)`,
      },
    ],
  },
  {
    id: 'composite-indexes',
    title: '複合インデックスと設計',
    description: '複数列のインデックスと実務での設計手順を学びます',
    sections: [
      {
        heading: '複合インデックスとは',
        content:
          '複合インデックス（Composite Index）は、複数の列をまとめて1つのインデックスにするものです。たとえば EC サイトの注文一覧で「ユーザーごとに日付順で表示」するなら、(user_id, created_at) の複合インデックスが有効です。\n\n単一列のインデックスを2つ作るのとは違います。複合インデックスは列の組み合わせでソートされた1本の B-tree です。',
        code: `-- 複合インデックスの作成
CREATE INDEX idx_orders_user_created
  ON orders(user_id, created_at);

-- このクエリに最適化される
SELECT * FROM orders
WHERE user_id = 42
ORDER BY created_at DESC;`,
        tip: 'デモで複合インデックス (user_id, created_at) がどのクエリに効くか試してみてください。',
      },
      {
        heading: '左端一致の原則',
        content:
          '複合インデックス (A, B, C) は、左端の列から順に条件が使われるときに効きます。これを「左端一致（Leftmost Prefix）」と呼びます。\n\n• WHERE A = 1 — ✅ 使える\n• WHERE A = 1 AND B = 2 — ✅ 使える\n• WHERE A = 1 ORDER BY B — ✅ 使える\n• WHERE B = 2 だけ — ❌ A がないので使えない\n• WHERE A = 1 AND C = 3 — △ A だけ使える（B を飛ばすため C までは使えない）\n\nよく絞り込む列・等値検索に使う列を左に、範囲検索やソートに使う列を右に置くのが一般的です。',
        code: `-- インデックス: (user_id, status, created_at)

-- ✅ user_id で絞り込み → インデックス使用
WHERE user_id = 1 AND status = 'active'

-- ❌ status だけ → user_id がないので未使用
WHERE status = 'active'

-- △ user_id + created_at 範囲 → status を飛ばすため created_at まで効かない場合あり
WHERE user_id = 1 AND created_at > '2024-01-01'`,
      },
      {
        heading: 'カバリングインデックス',
        content:
          'SELECT で取得する列がすべてインデックスに含まれていれば、テーブル本体（ヒープ）にアクセスせずインデックスだけで結果を返せます。これを「カバリングインデックス」や Index Only Scan と呼びます。\n\nたとえば user_id と created_at だけ欲しいなら、CREATE INDEX idx ON orders(user_id, created_at) で SELECT user_id, created_at FROM orders WHERE user_id = 1 が高速化されます。ただしインデックスが大きくなり、書き込みコストも増えるため、よく使うクエリに限定して設計します。',
        code: `-- インデックスに含まれる列だけ SELECT → Index Only Scan の可能性
SELECT user_id, created_at
FROM orders
WHERE user_id = 42
ORDER BY created_at DESC;

-- title も必要ならテーブル本体へのアクセスが必要
SELECT user_id, created_at, title FROM orders WHERE user_id = 42;`,
      },
      {
        heading: '実務でのインデックス設計手順',
        content:
          'インデックスは「思いつきで作る」のではなく、実際のクエリに基づいて設計します。おおよそ次の流れです。\n\n1. 遅いクエリを特定する（ログ、APM、EXPLAIN ANALYZE）\n2. WHERE / JOIN / ORDER BY に使われる列を洗い出す\n3. 既存のインデックスと重複しないか確認する\n4. 複合インデックスの列順を決める（左端一致を意識）\n5. 作成後に EXPLAIN で効果を確認する\n6. 書き込みが増えすぎていないかモニタリングする\n\nPrisma や Drizzle では schema に @@index を書いてマイグレーションで反映します。',
        code: `// Prisma の例
model Post {
  id        Int      @id @default(autoincrement())
  userId    Int
  createdAt DateTime @default(now())

  @@index([userId, createdAt])  // 複合インデックス
}`,
      },
      {
        heading: '作らない方がよい場合',
        content:
          'インデックスは万能ではありません。次のような場合は作らない・削除を検討します。\n\n• テーブルが小さい（数千行以下）— フルスキャンの方が速いことが多い\n• 書き込みが圧倒的に多い — ログテーブルなど\n• ほとんど使われない列 — ディスクと更新コストの無駄\n• 既に似た複合インデックスがある — (A) と (A, B) が両方あると (A) は冗長な場合がある\n\n「遅いからとりあえずインデックス」は避け、EXPLAIN で根拠を持って追加するのがプロのやり方です。',
      },
    ],
  },
  {
    id: 'nosql',
    title: 'NoSQL とは',
    description: 'RDBMS 以外のデータベースの選択肢を学びます',
    sections: [
      {
        heading: 'NoSQL の特徴',
        content:
          'NoSQL は「Not Only SQL」の略で、テーブル形式以外のデータ保存方式です。柔軟なスキーマ、水平スケール（分散）に強いのが特徴です。',
      },
      {
        heading: '主な種類',
        content:
          'ドキュメント型（MongoDB）— JSON のような形式で保存。スキーマが柔軟\nキーバリュー型（Redis）— キャッシュ、セッション管理に最適\nグラフ型（Neo4j）— SNS の友達関係など、つながりのデータ\n\nWeb 開発の入門では RDBMS から始めるのがおすすめです。NoSQL は用途が決まってから検討します。',
        tip: 'デモで RDBMS と NoSQL の使い分けを比較してください。',
      },
    ],
  },
  {
    id: 'web-app',
    title: 'WebアプリとDB',
    description: 'フロントエンドからDBまでのデータの流れを学びます',
    sections: [
      {
        heading: 'データの流れ',
        content:
          '1. ユーザーがフォームに入力（フロントエンド）\n2. API に POST リクエスト送信\n3. API がバリデーション後、DB に INSERT\n4. DB から取得したデータを API が JSON で返す\n5. フロントエンドが画面に表示',
        code: `ブラウザ (React)
    ↓ fetch('/api/users')
API サーバー (Next.js)
    ↓ SELECT * FROM users
データベース (PostgreSQL)
    ↑ 結果を返す
API → JSON → ブラウザ`,
      },
      {
        heading: 'ORM とは',
        content:
          'ORM（Object-Relational Mapping）は、SQL を直接書かずに TypeScript/JavaScript のコードで DB を操作するツールです。\n\nPrisma、Drizzle が React/Next.js でよく使われます。裏側では SQL が実行されていますが、型安全で書きやすくなります。',
        tip: 'デモでデータの流れをステップごとに追ってみてください。',
      },
    ],
  },
  {
    id: 'tools',
    title: 'よく使う DB とツール',
    description: 'PostgreSQL、SQLite、管理ツールを学びます',
    sections: [
      {
        heading: 'PostgreSQL',
        content:
          '本番環境で最も使われるオープンソース RDBMS です。Vercel、Supabase、Neon などのホスティングサービスで簡単に使えます。機能が豊富で、JSON 型のサポートなどモダンな機能も備えています。',
      },
      {
        heading: 'SQLite と開発ツール',
        content:
          'SQLite — ファイル1つで動く軽量 DB。ローカル開発やモバイルアプリ向き\n\nPrisma — スキーマ定義 + マイグレーション + 型安全なクエリ\nDrizzle — より軽量な TypeScript ORM\nTablePlus / pgAdmin — DB を GUI で確認・操作するツール',
        code: `# Prisma の例
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
  posts Post[]
}`,
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'DB 入門を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: '次に学ぶこと',
        content:
          '① SQL チュートリアル — SELECT、JOIN などクエリを実際に書く\n② Prisma を使ったプロジェクト — 型安全な DB 操作を体験\n③ PostgreSQL をローカル or クラウドで触る\n④ API ルート + DB の CRUD アプリを作る',
      },
      {
        heading: '学習の道筋',
        content:
          '① DB 入門（今ここ）→ ② SQL → ③ React/Next.js → ④ API + DB でアプリを作る\n\nトランザクションやリレーションの概念がわかれば、SQL や ORM の学習がスムーズになります。まずは SQL チュートリアルに進みましょう！',
        tip: 'おめでとうございます！DB 入門をすべて学びました 🎉',
      },
    ],
  },
]
