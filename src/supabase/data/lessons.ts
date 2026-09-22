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
    title: "Supabase とは？",
    description: "BaaS の概念と Supabase の機能を理解します",
    sections: [
      {
        heading: "BaaS とは",
        content: "BaaS（Backend as a Service）は、バックエンドのインフラ（DB、認証、ストレージ）をクラウドで提供するサービスです。サーバー構築・運用を省略し、アプリ開発に集中できます。\n\nSupabase は「オープンソースの Firebase 代替」として2020年に登場。PostgreSQL ベースで、SQL の力を活かせます。"
      },
      {
        heading: "主要機能",
        content: "• Database — PostgreSQL（SQL、リレーション、全文検索）\n• Auth — メール、OAuth、Magic Link\n• Storage — ファイルアップロード（S3 互換）\n• Realtime — DB 変更の WebSocket 配信\n• Edge Functions — Deno ベースのサーバーレス関数",
        tip: "デモで Supabase Dashboard の Table Editor を開き、データを直接操作してみてください。"
      },
      {
        heading: "Firebase との比較",
        content: "Firebase は NoSQL（Firestore）、Supabase は SQL（PostgreSQL）。リレーショナルデータや複雑なクエリが必要なら Supabase が有利です。リアルタイム、認証、ホスティングは両者とも提供します。"
      }
    ]
  },
  {
    id: "setup",
    title: "セットアップ",
    description: "プロジェクト作成とクライアント初期化を学びます",
    sections: [
      {
        heading: "プロジェクト作成",
        content: "supabase.com でアカウント作成し、New Project からプロジェクトを作成します。リージョン（東京: ap-northeast-1）と DB パスワードを設定します。",
        code: "npm install @supabase/supabase-js\n\nimport { createClient } from \"@supabase/supabase-js\";\nconst supabase = createClient(\n  process.env.SUPABASE_URL,\n  process.env.SUPABASE_ANON_KEY\n);"
      },
      {
        heading: "環境変数",
        content: "SUPABASE_URL と SUPABASE_ANON_KEY を .env に設定します。anon key はフロントエンドに公開可能ですが、RLS でデータアクセスを制御します。\n\nservice_role key はサーバー側のみで使用し、RLS をバイパスします。絶対にフロントに露出しないでください。"
      },
      {
        heading: "ローカル開発",
        content: "Supabase CLI でローカルに Supabase スタックを起動できます。`npx supabase init` → `npx supabase start` で Docker 上に PostgreSQL + Auth + Storage が立ち上がります。"
      }
    ]
  },
  {
    id: "database",
    title: "データベース操作",
    description: "テーブル作成と CRUD クエリを学びます",
    sections: [
      {
        heading: "テーブル作成",
        content: "Dashboard の Table Editor または SQL Editor でテーブルを作成します。RLS を有効にするのが Supabase の鉄則です。",
        code: "create table posts (\n  id uuid default gen_random_uuid() primary key,\n  title text not null,\n  content text,\n  user_id uuid references auth.users(id),\n  created_at timestamptz default now()\n);\nalter table posts enable row level security;"
      },
      {
        heading: "CRUD 操作",
        content: "supabase-js のチェーン API でデータ操作します。型安全にするには supabase gen types で TypeScript 型を生成します。",
        code: "const { data, error } = await supabase\n  .from(\"posts\")\n  .select(\"*, profiles(name, avatar_url)\")\n  .eq(\"user_id\", userId)\n  .order(\"created_at\", { ascending: false });"
      },
      {
        heading: "フィルタとページネーション",
        content: ".eq()、.gt()、.like()、.in() でフィルタ。.range(from, to) でページネーション。.single() で1件取得します。\n\n複雑なクエリは RPC（ストアドプロシージャ）を Database Functions として定義し、.rpc() で呼び出します。"
      }
    ]
  },
  {
    id: "auth",
    title: "認証",
    description: "メール認証と OAuth ログインを学びます",
    sections: [
      {
        heading: "メール認証",
        content: "signUp でユーザー登録、signInWithPassword でログインします。確認メールは Dashboard の Auth 設定でカスタマイズできます。",
        code: "const { data, error } = await supabase.auth.signUp({\n  email: \"user@example.com\",\n  password: \"secure-password\",\n});\n\nconst { data: session } = await supabase.auth.signInWithPassword({\n  email, password,\n});"
      },
      {
        heading: "OAuth プロバイダー",
        content: "Dashboard → Authentication → Providers で Google、GitHub 等を有効化します。signInWithOAuth でリダイレクトベースのログインを実装します。",
        code: "await supabase.auth.signInWithOAuth({\n  provider: \"github\",\n  options: { redirectTo: \"https://myapp.com/auth/callback\" },\n});"
      },
      {
        heading: "セッション管理",
        content: "onAuthStateChange でログイン/ログアウトを監視します。getSession() で現在のセッションを取得。signOut() でログアウトします。\n\nReact では Supabase Auth Helpers（@supabase/auth-helpers-nextjs）で SSR 対応のセッション管理が簡単です。",
        tip: "デモでログイン → セッション取得 → ログアウトのフローを追跡してみてください。"
      }
    ]
  },
  {
    id: "rls",
    title: "Row Level Security",
    description: "データベースレベルのアクセス制御を学びます",
    sections: [
      {
        heading: "RLS の概念",
        content: "Row Level Security は PostgreSQL の機能で、行単位のアクセス制御を SQL ポリシーで定義します。Supabase では anon key でも RLS により安全にデータアクセスできます。\n\nRLS を有効にしないテーブルは anon key で全データが読み書き可能——必ず有効化してください。"
      },
      {
        heading: "ポリシーの作成",
        content: "auth.uid() で現在のユーザー ID を参照し、自分のデータだけアクセス可能にします。",
        code: "create policy \"Users can read own posts\"\n  on posts for select\n  using (auth.uid() = user_id);\n\ncreate policy \"Users can insert own posts\"\n  on posts for insert\n  with check (auth.uid() = user_id);"
      },
      {
        heading: "ポリシーのテスト",
        content: "Dashboard の RLS ポリシーエディタでテストできます。異なるロール（anon、authenticated、service_role）でクエリを試し、期待通りのアクセス制御を確認します。\n\n複雑なポリシーは段階的に追加し、各ポリシーを個別にテストしましょう。"
      }
    ]
  },
  {
    id: "storage",
    title: "ファイルストレージ",
    description: "画像・ファイルのアップロードを学びます",
    sections: [
      {
        heading: "バケット作成",
        content: "Dashboard → Storage でバケットを作成します。public バケットは URL で直接アクセス可能、private は認証が必要です。",
        code: "const { data, error } = await supabase.storage\n  .from(\"avatars\")\n  .upload(`${userId}/avatar.png`, file, {\n    cacheControl: \"3600\",\n    upsert: true,\n  });"
      },
      {
        heading: "ファイル取得",
        content: "getPublicUrl() で公開 URL を取得。private バケットは createSignedUrl() で期限付き URL を生成します。\n\n画像リサイズは Supabase Storage の transform 機能（Pro プラン）や、Edge Function で処理するパターンがあります。"
      },
      {
        heading: "Storage ポリシー",
        content: "RLS と同様、Storage にもポリシーを設定します。ユーザーは自分のフォルダにのみアップロード可能にするのが一般的です。",
        code: "create policy \"Users can upload own avatar\"\n  on storage.objects for insert\n  with check (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);"
      }
    ]
  },
  {
    id: "realtime",
    title: "リアルタイム機能",
    description: "DB 変更の WebSocket 配信を学びます",
    sections: [
      {
        heading: "Realtime の仕組み",
        content: "Supabase Realtime は PostgreSQL の変更（INSERT、UPDATE、DELETE）を WebSocket でクライアントに配信します。チャット、通知、共同編集に最適です。",
        code: "const channel = supabase\n  .channel(\"posts-changes\")\n  .on(\"postgres_changes\", {\n    event: \"INSERT\",\n    schema: \"public\",\n    table: \"posts\",\n  }, (payload) => {\n    console.log(\"新しい投稿:\", payload.new);\n    setPosts(prev => [payload.new, ...prev]);\n  })\n  .subscribe();"
      },
      {
        heading: "Presence",
        content: "チャンネルに参加しているユーザーのオンライン状態を共有できます。共同編集アプリで「誰が今見ているか」を表示するのに使います。"
      },
      {
        heading: "Broadcast",
        content: "クライアント間でカスタムメッセージを送受信します。カーソル位置の共有やタイピングインジケーターなど、DB を介さないリアルタイム通信に使います。",
        tip: "デモで2つのブラウザタブを開き、一方でデータを追加して他方にリアルタイム反映されることを確認してみてください。"
      }
    ]
  },
  {
    id: "edge-functions",
    title: "Edge Functions",
    description: "サーバーレス関数の作成を学びます",
    sections: [
      {
        heading: "Edge Functions とは",
        content: "Deno ベースのサーバーレス関数で、グローバルに低レイテンシで実行されます。Webhook 処理、サードパーティ API 連携、複雑なビジネスロジックに使います。",
        code: "npx supabase functions new hello-world\nnpx supabase functions serve hello-world\nnpx supabase functions deploy hello-world"
      },
      {
        heading: "関数の実装",
        content: "Deno.serve で HTTP ハンドラを定義します。CORS ヘッダーの設定、Supabase クライアントの初期化が基本パターンです。",
        code: "import { createClient } from \"https://esm.sh/@supabase/supabase-js@2\";\n\nDeno.serve(async (req) => {\n  const supabase = createClient(url, serviceKey);\n  const { data } = await supabase.from(\"posts\").select(\"*\");\n  return new Response(JSON.stringify(data), {\n    headers: { \Content-Type\: \"application/json\" },\n  });\n});"
      },
      {
        heading: "Webhook と Cron",
        content: "Stripe の Webhook を Edge Function で受信し、DB を更新するパターンが一般的です。pg_cron と組み合わせて定期処理も可能です。"
      }
    ]
  },
  {
    id: "deployment",
    title: "デプロイと運用",
    description: "本番環境のセットアップを学びます",
    sections: [
      {
        heading: "マイグレーション",
        content: "Supabase CLI でスキーマ変更をマイグレーションファイルとして管理します。`npx supabase db diff` で差分を生成し、Git で管理します。",
        code: "npx supabase migration new add_comments_table\nnpx supabase db push  # ローカル → リモート\nnpx supabase db pull  # リモート → ローカル"
      },
      {
        heading: "環境の分離",
        content: "開発・ステージング・本番で別プロジェクトを作成するのがベストプラクティスです。マイグレーションをステージングで検証してから本番に適用します。\n\nSupabase Branching（Pro プラン）で Git ブランチと DB ブランチを連携できます。"
      },
      {
        heading: "モニタリング",
        content: "Dashboard の Logs で API、Auth、Storage、Realtime のログを確認します。Database の Query Performance で遅いクエリを特定し、インデックスを追加します。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "Supabase の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① 認証入門 — 認証の理論を深掘り\n② Prisma 入門 — Supabase PostgreSQL + Prisma\n③ WebSocket 入門 — Realtime の仕組み\n④ Docker 入門 — ローカル Supabase スタック"
      },
      {
        heading: "学習の道筋",
        content: "Supabase は「バックエンドを素早く立ち上げる」最強のツールです。RLS でセキュリティを担保し、Realtime でリアルタイム機能を追加——フルスタック開発の速度が劇的に上がります。\n\nおめでとうございます！Supabase 入門をすべて学びました 🎉",
        tip: "小さな TODO アプリを Supabase で作り、認証 + CRUD + Realtime を一通り実装してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• 全テーブルで RLS を有効化しているか\n• service_role key をフロントに露出していないか\n• マイグレーションを Git 管理しているか\n• Storage ポリシーを設定しているか\n• 本番と開発でプロジェクトを分離しているか"
      }
    ]
  }
]
