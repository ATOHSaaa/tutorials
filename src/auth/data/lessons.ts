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
    title: "認証とは？",
    description: "認証と認可の違い、Web アプリでの役割を理解します",
    sections: [
      {
        heading: "認証の基本",
        content: "認証（Authentication）は「この人は誰か」を確認する仕組みです。メールとパスワード、OAuth、生体認証などが手段になります。認可（Authorization）は「この人は何をしてよいか」を決める別のレイヤーです。\n\nログイン画面でパスワードを入力するのは認証、管理者だけが設定画面に入れるのは認可です。混同すると設計ミスが起きやすいので、最初に区別を覚えましょう。"
      },
      {
        heading: "ステートレス vs ステートフル",
        content: "HTTP はステートレスですが、ログイン状態を維持するにはサーバー側セッション（ステートフル）か JWT トークン（ステートレス寄り）が必要です。どちらも「本人確認済み」という証明をリクエスト間で引き継ぎます。\n\n小規模アプリは JWT、従来型の Web アプリは Cookie セッションが多いですが、SPA + API では JWT やセッション Cookie のどちらも使われます。",
        tip: "デモでログイン前後のリクエストヘッダーの違いを確認してみてください。"
      },
      {
        heading: "認証の全体像",
        content: "典型的なフローは①ユーザーが認証情報を送信 → ②サーバーが検証 → ③セッション ID や JWT を発行 → ④以降のリクエストでその証明を提示 → ⑤サーバーが有効性を確認します。\n\nフロントエンドは「トークンを安全に保持し、API に付与する」、バックエンドは「検証と権限チェック」を担当します。"
      }
    ]
  },
  {
    id: "passwords",
    title: "パスワードの安全な扱い",
    description: "ハッシュ化、ソルト、bcrypt の実践を学びます",
    sections: [
      {
        heading: "平文保存は絶対禁止",
        content: "パスワードを DB に平文で保存すると、漏洩時に全ユーザーのアカウントが危険にさらされます。必ず一方向ハッシュ関数で変換し、元のパスワードは復元できない形で保存します。\n\nbcrypt、scrypt、Argon2 が推奨されます。Node.js では bcrypt や argon2 パッケージが広く使われています。",
        code: "import bcrypt from \"bcrypt\";\n\nconst hash = await bcrypt.hash(password, 12);\nconst isValid = await bcrypt.compare(inputPassword, hash);"
      },
      {
        heading: "ソルトの役割",
        content: "ソルトはハッシュ前に付加するランダム文字列です。同じパスワードでもユーザーごとに異なるハッシュになり、レインボーテーブル攻撃を防ぎます。bcrypt はソルトをハッシュ文字列に含めるため、別カラム管理が不要です。\n\nコストファクター（bcrypt の rounds）を上げると計算時間が増え、ブルートフォース攻撃に強くなりますが、ログイン処理も遅くなります。12 前後が一般的なバランスです。"
      },
      {
        heading: "パスワードポリシー",
        content: "最低8文字以上、大小英数字の混在を推奨するサイトは多いですが、NIST の最新ガイドラインは「長さを優先し、複雑さの強制は控えめに」としています。\n\nパスワードリセットはワンタイムトークン（有効期限付き）で行い、メールにパスワードそのものを送ることはありません。",
        tip: "デモで同じパスワードでもハッシュ値が毎回異なることを確認してみてください。"
      }
    ]
  },
  {
    id: "sessions",
    title: "セッションと Cookie",
    description: "サーバー側セッション管理の仕組みを学びます",
    sections: [
      {
        heading: "セッションの流れ",
        content: "ログイン成功時、サーバーはセッション ID を生成してサーバー側ストア（メモリ、Redis など）にユーザー情報を保存します。クライアントには Set-Cookie でセッション ID だけを返します。\n\n以降のリクエストで Cookie が自動送信され、サーバーはセッション ID でユーザーを特定します。ログアウトはセッションをサーバー側で削除します。"
      },
      {
        heading: "Cookie のセキュリティ属性",
        content: "HttpOnly — JavaScript から Cookie にアクセス不可（XSS 対策）。Secure — HTTPS 通信のみ送信。SameSite — クロスサイトリクエストでの送信を制限（CSRF 対策）。\n\n本番環境では3つすべてを適切に設定するのが基本です。開発環境の localhost では Secure が効かない場合があるため注意します。",
        code: "res.cookie(\"sessionId\", id, {\n  httpOnly: true,\n  secure: process.env.NODE_ENV === \"production\",\n  sameSite: \"lax\",\n  maxAge: 7 * 24 * 60 * 60 * 1000,\n});"
      },
      {
        heading: "セッションストアの選択",
        content: "開発時はメモリストアで十分ですが、本番では Redis が定番です。複数サーバーでセッションを共有でき、再起動でもセッションが失われません。\n\nセッションの有効期限（TTL）を設定し、一定時間操作がなければ自動ログアウトさせるのが一般的です。"
      }
    ]
  },
  {
    id: "jwt",
    title: "JWT（JSON Web Token）",
    description: "JWT の構造と署名検証を学びます",
    sections: [
      {
        heading: "JWT の3部構成",
        content: "JWT は Header.Payload.Signature の3部分を Base64URL エンコードして `.` で結合した文字列です。Payload にユーザー ID やロールを含めますが、暗号化されていないため機密情報は入れません。\n\nSignature はサーバーの秘密鍵（またはシークレット）で署名され、改ざんを検出できます。",
        code: "import jwt from \"jsonwebtoken\";\n\nconst token = jwt.sign(\n  { userId: 42, role: \"admin\" },\n  process.env.JWT_SECRET,\n  { expiresIn: \"1h\" }\n);\nconst payload = jwt.verify(token, process.env.JWT_SECRET);"
      },
      {
        heading: "アクセストークンとリフレッシュトークン",
        content: "アクセストークンは短命（15分〜1時間）で API 認証に使います。リフレッシュトークンは長命で、アクセストークン期限切れ時に新しいものを発行します。\n\nリフレッシュトークンは HttpOnly Cookie に保存し、アクセストークンはメモリ（変数）に保持するパターンが XSS に強い設計です。localStorage に JWT を置くのはリスクが高いとされています。"
      },
      {
        heading: "JWT の注意点",
        content: "JWT は「ログアウト」が難しい——トークンが有効期限内ならサーバーは受け付けます。ブラックリストや短命トークン + リフレッシュで対処します。\n\n秘密鍵の漏洩は全トークンが危険になるため、環境変数で管理し、定期的にローテーションを検討してください。",
        tip: "jwt.io でトークンをデコードし、Payload の内容を確認してみてください。"
      }
    ]
  },
  {
    id: "oauth",
    title: "OAuth 2.0 とソーシャルログイン",
    description: "Google・GitHub ログインの仕組みを学びます",
    sections: [
      {
        heading: "OAuth の登場人物",
        content: "リソースオーナー（ユーザー）、クライアント（あなたのアプリ）、認可サーバー（Google 等）、リソースサーバー（API）の4者が関わります。ユーザーはパスワードをクライアントに渡さず、認可サーバー経由でアクセス権を委譲します。\n\n「Google でログイン」は OAuth 2.0 の Authorization Code フローが最も一般的です。"
      },
      {
        heading: "Authorization Code フロー",
        content: "①アプリが Google の認可画面にリダイレクト → ②ユーザーが許可 → ③認可コードがコールバック URL に返る → ④サーバーがコードをアクセストークンに交換 → ⑤トークンでユーザー情報を取得。\n\n認可コードの交換はサーバー側で行います（client_secret が必要）。フロントエンドだけで完結させないのが鉄則です。",
        code: "const { tokens } = await oauth2Client.getToken(code);\nconst userInfo = await fetch(\"https://www.googleapis.com/oauth2/v2/userinfo\", {\n  headers: { Authorization: `Bearer ${tokens.access_token}` },\n});"
      },
      {
        heading: "実装ライブラリ",
        content: "Next.js では Auth.js（旧 NextAuth.js）、Passport.js（Express）、Supabase Auth などが定番です。自前で OAuth フローを実装するより、実績のあるライブラリを使う方が安全です。\n\nリダイレクト URI の登録ミスは OAuth エラーの最多原因です。開発用と本番用を正確に登録しましょう。"
      }
    ]
  },
  {
    id: "middleware",
    title: "認証ミドルウェア",
    description: "API ルートを保護するミドルウェアを学びます",
    sections: [
      {
        heading: "ミドルウェアの役割",
        content: "認証ミドルウェアはリクエストのたびにトークンやセッションを検証し、有効なら req.user にユーザー情報を付与して次のハンドラへ渡します。無効なら 401 を返します。\n\nルートごとに認証チェックを書くのではなく、ミドルウェアに集約するのが保守性の基本です。"
      },
      {
        heading: "Express の実装例",
        content: "Bearer トークンを Authorization ヘッダーから取り出し、JWT を検証します。エラーは統一フォーマットで返すとフロントエンドの処理が楽になります。",
        code: "function authMiddleware(req, res, next) {\n  const token = req.headers.authorization?.split(\" \")[1];\n  if (!token) return res.status(401).json({ error: \"認証が必要です\" });\n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch {\n    res.status(401).json({ error: \"トークンが無効です\" });\n  }\n}"
      },
      {
        heading: "Next.js の middleware",
        content: "Next.js 13+ では middleware.ts でルート単位の認証が可能です。Cookie のセッションを検証し、未認証なら /login にリダイレクトします。\n\nEdge Runtime で動くため、DB 直接アクセスはできません。JWT 検証やセッション Cookie の存在チェックが向いています。",
        tip: "公開 API と保護 API をルート設計で明確に分けてください。"
      }
    ]
  },
  {
    id: "frontend-auth",
    title: "フロントエンドの認証 UI",
    description: "ログインフォームと認証状態管理を学びます",
    sections: [
      {
        heading: "認証状態の管理",
        content: "React では Context や Zustand で user 状態をグローバル管理します。アプリ起動時に /api/me でセッション有効性を確認し、有効ならユーザー情報をセットします。\n\nローディング状態（checking auth）を用意し、確認中に保護ページを一瞬見せないのが UX の基本です。"
      },
      {
        heading: "ログインフォームの実装",
        content: "フォーム送信 → API 呼び出し → 成功時にユーザー状態を更新 → リダイレクト。エラー時はフィールド単位またはフォーム全体のエラーメッセージを表示します。",
        code: "const res = await fetch(\"/api/login\", {\n  method: \"POST\",\n  headers: { \Content-Type\: \"application/json\" },\n  body: JSON.stringify({ email, password }),\n  credentials: \"include\",\n});\nif (!res.ok) { setError(\"ログインに失敗しました\"); return; }"
      },
      {
        heading: "Protected Route パターン",
        content: "未認証ユーザーをログインページへリダイレクトするラッパーコンポーネントを作ります。if (!user) return <Navigate to=\"/login\" /> のようなパターンです。\n\nロールベースの制御（admin 専用ページなど）は user.role をチェックし、403 ページを表示します。"
      }
    ]
  },
  {
    id: "security-practices",
    title: "認証のセキュリティ",
    description: "レート制限、CSRF、多要素認証を学びます",
    sections: [
      {
        heading: "ブルートフォース対策",
        content: "ログイン試行にレート制限を設けます。同一 IP や同一メールアドレスから短時間に多数の失敗があったら一時ブロックします。express-rate-limit や Redis ベースのカウンターが使われます。\n\nアカウントロックアウトはユーザー体験とのトレードオフです。CAPTCHA を段階的に表示する手法も有効です。"
      },
      {
        heading: "CSRF 対策",
        content: "Cookie ベースセッションでは CSRF トークンが必須です。フォームに hidden フィールドでトークンを埋め込み、サーバーが照合します。SameSite=Lax/Strict も有効な防御層です。\n\nJWT を Authorization ヘッダーで送る方式は CSRF の影響を受けにくいですが、XSS には依然として脆弱です。"
      },
      {
        heading: "多要素認証（MFA）",
        content: "TOTP（Google Authenticator 等）や WebAuthn（パスキー）で第二要素を追加します。パスワード漏洩だけではアカウントを守れます。\n\n重要なサービスでは MFA を推奨または必須にするのが標準になりつつあります。",
        code: "import { authenticator } from \"otplib\";\nconst secret = authenticator.generateSecret();\nconst isValid = authenticator.verify({ token: userInput, secret });"
      }
    ]
  },
  {
    id: "implementation",
    title: "認証の実装パターン",
    description: "実務で使われる認証アーキテクチャを学びます",
    sections: [
      {
        heading: "BFF パターン",
        content: "Backend for Frontend はフロント専用の API 層を置き、認証・トークン管理をそこに集約します。マイクロサービスへのトークン伝播も BFF が担当します。\n\nNext.js の API Routes や Server Actions が BFF として機能するケースが増えています。"
      },
      {
        heading: "Auth.js の概要",
        content: "Auth.js は Next.js 向けの認証ライブラリです。OAuth プロバイダー、Credentials、セッション管理を設定ファイルで宣言的に定義できます。",
        code: "import NextAuth from \"next-auth\";\nimport Google from \"next-auth/providers/google\";\n\nexport const { handlers, auth } = NextAuth({\n  providers: [Google],\n});"
      },
      {
        heading: "テストとデバッグ",
        content: "認証フローは E2E テスト（Playwright）でカバーします。テスト用ユーザーを DB シードし、ログイン → 保護ページアクセス → ログアウトのシナリオを自動化します。\n\n401/403 のレスポンス形式を統一すると、フロントエンドのエラーハンドリングがシンプルになります。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "認証の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Webセキュリティ — XSS・CSRF の深掘り\n② Supabase 入門 — 認証込み BaaS\n③ OAuth 2.0 仕様書 — フローの詳細\n④ WebAuthn — パスキー認証"
      },
      {
        heading: "学習の道筋",
        content: "認証はセキュリティと直結する最重要テーマです。パスワードをハッシュ化する、Cookie に HttpOnly を付ける、JWT を localStorage に置かない——基本を守るだけで多くの事故を防げます。\n\nおめでとうございます！認証入門をすべて学びました 🎉",
        tip: "自分のアプリにログイン機能を実装し、ログアウト後に保護 API が 401 を返すことを確認してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• パスワードは bcrypt/Argon2 でハッシュ化しているか\n• Cookie に HttpOnly・Secure・SameSite を設定しているか\n• JWT の秘密鍵を環境変数で管理しているか\n• ログインにレート制限を設けているか\n• OAuth の client_secret をフロントに露出していないか"
      }
    ]
  }
]
