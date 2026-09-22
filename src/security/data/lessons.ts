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
    title: "Webセキュリティとは？",
    description: "セキュリティの重要性と OWASP Top 10 を理解します",
    sections: [
      {
        heading: "なぜセキュリティが重要か",
        content: "Web アプリの脆弱性は、個人情報漏洩、不正アクセス、サービス停止など深刻な被害を引き起こします。Equifax や Heartland など、大企業のデータ漏洩事件も脆弱な Web アプリが原因でした。\n\n開発者は「機能を作る」だけでなく「安全に作る」責任があります。セキュリティは後付けではなく、設計段階から組み込むべきです。"
      },
      {
        heading: "OWASP Top 10",
        content: "OWASP（Open Web Application Security Project）が定期的に更新する、Web アプリの最重要リスク10選です。2021年版の上位は: ①アクセス制御の不備 ②暗号化の失敗 ③インジェクション ④安全でない設計 ⑤セキュリティの設定ミス。\n\nこのチュートリアルでは、特にインジェクション（XSS、SQLi）、認証の不備、設定ミスを重点的に学びます。",
        tip: "デモで OWASP Top 10 の各項目と具体例の対応を確認してみてください。"
      },
      {
        heading: "セキュリティの基本原則",
        content: "最小権限の原則——必要最小限の権限だけを付与。防御の深層化——複数の防御層を重ねる。安全なデフォルト——設定なしで安全な状態。入力は信用しない——すべてのユーザー入力を検証・サニタイズします。"
      }
    ]
  },
  {
    id: "xss",
    title: "XSS（クロスサイトスクリプティング）",
    description: "反射型・格納型 XSS の攻撃と防御を学びます",
    sections: [
      {
        heading: "XSS の仕組み",
        content: "XSS は攻撃者が悪意のある JavaScript をページに注入し、他のユーザーのブラウザで実行させる攻撃です。Cookie の窃取、キーロガー、ページ改ざんが可能になります。\n\n反射型（URL パラメータに含まれる）、格納型（DB に保存され他ユーザーに表示）、DOM 型（クライアント側 JS の脆弱性）の3種類があります。"
      },
      {
        heading: "防御策",
        content: "①出力時のエスケープ——HTML エンティティに変換。②Content-Security-Policy（CSP）ヘッダー——許可されたソースのスクリプトのみ実行。③HttpOnly Cookie——JS から Cookie にアクセス不可。",
        code: "// 危険: innerHTML にユーザー入力を直接挿入\nelement.innerHTML = userInput;\n\n// 安全: textContent を使うか、DOMPurify でサニタイズ\nelement.textContent = userInput;\n// または\nelement.innerHTML = DOMPurify.sanitize(userInput);"
      },
      {
        heading: "React での XSS",
        content: "React はデフォルトで JSX 内の値をエスケープしますが、dangerouslySetInnerHTML は危険です。ユーザー入力を HTML として表示する必要がある場合のみ DOMPurify を使います。\n\nCSP ヘッダーを設定し、インラインスクリプトを禁止するのが最強の防御です。",
        code: "Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'"
      }
    ]
  },
  {
    id: "csrf",
    title: "CSRF（クロスサイトリクエストフォージェリ）",
    description: "CSRF 攻撃の仕組みと防御を学びます",
    sections: [
      {
        heading: "CSRF の仕組み",
        content: "CSRF は、ログイン済みユーザーのブラウザを利用して、意図しないリクエストを送信させる攻撃です。悪意のあるサイトに <img src=\"https://bank.com/transfer?to=attacker&amount=10000\"> を埋め込む例が古典的です。\n\nCookie ベースのセッション認証では、ブラウザが自動的に Cookie を送信するため CSRF の影響を受けます。"
      },
      {
        heading: "防御策",
        content: "①CSRF トークン——フォームにランダムトークンを埋め込み、サーバーが照合。②SameSite Cookie——クロスサイトリクエストでの Cookie 送信を制限。③重要操作に再認証を要求。",
        code: "// サーバー側: トークン生成\nconst csrfToken = crypto.randomBytes(32).toString(\"hex\");\nreq.session.csrfToken = csrfToken;\n\n// フォーム: hidden フィールド\n<input type=\"hidden\" name=\"_csrf\" value={csrfToken} />\n\n// 検証\nif (req.body._csrf !== req.session.csrfToken) {\n  return res.status(403).json({ error: \"CSRF token invalid\" });\n}"
      },
      {
        heading: "SameSite の設定",
        content: "SameSite=Strict は最も厳格（クロスサイトからの Cookie 送信を完全禁止）。Lax は GET ナビゲーションのみ許可（デフォルト推奨）。None は Secure 必須で、クロスサイトでも送信（サードパーティ Cookie 用）。\n\n新規プロジェクトでは SameSite=Lax が安全なデフォルトです。"
      }
    ]
  },
  {
    id: "sql-injection",
    title: "SQL インジェクション",
    description: "SQL インジェクションの攻撃と防御を学びます",
    sections: [
      {
        heading: "SQL インジェクションの仕組み",
        content: "ユーザー入力を SQL クエリに直接埋め込むと、攻撃者が SQL コマンドを注入できます。`' OR 1=1 --` で全ユーザーのデータを取得、`; DROP TABLE users;` でテーブル削除も可能です。\n\nOWASP Top 10 で長年上位にランクされる、最も有名な Web 脆弱性です。"
      },
      {
        heading: "防御策: パラメータ化クエリ",
        content: "プレースホルダー（? や $1）を使い、ユーザー入力を SQL 構造の一部として扱わせません。ORM（Prisma 等）を使うと自動的にパラメータ化されます。",
        code: "// 危険: 文字列連結\nconst query = `SELECT * FROM users WHERE email = '${email}'`;\n\n// 安全: パラメータ化クエリ\nconst query = \"SELECT * FROM users WHERE email = $1\";\nconst result = await db.query(query, [email]);"
      },
      {
        heading: "ORM とバリデーション",
        content: "Prisma や Drizzle などの ORM はパラメータ化クエリを自動使用します。生 SQL を使う場合は必ず $queryRaw のプレースホルダーを使います。\n\n入力バリデーション（Zod 等）も重要ですが、SQL インジェクションの主防御はパラメータ化クエリです。バリデーションだけでは不十分な場合があります。",
        tip: "デモで SQL インジェクションのペイロードを入力し、パラメータ化クエリが防御することを確認してみてください。"
      }
    ]
  },
  {
    id: "https",
    title: "HTTPS と暗号化",
    description: "TLS/SSL と通信の暗号化を学びます",
    sections: [
      {
        heading: "HTTPS の重要性",
        content: "HTTPS（HTTP over TLS）は通信を暗号化し、盗聴・改ざん・なりすましを防ぎます。パスワード、Cookie、個人情報は平文 HTTP では丸見えです。\n\n2018年以降、主要ブラウザは HTTP サイトに「安全ではありません」警告を表示します。HTTPS は必須です。"
      },
      {
        heading: "TLS ハンドシェイク",
        content: "①クライアントが ClientHello（対応する暗号スイート）を送信 → ②サーバーが証明書と ServerHello を返す → ③クライアントが証明書を検証 → ④共通の暗号鍵を交換 → ⑤暗号化通信開始。\n\nLet's Encrypt で無料の SSL 証明書を取得でき、Vercel/Netlify 等のホスティングは自動で HTTPS を提供します。"
      },
      {
        heading: "HSTS",
        content: "HTTP Strict Transport Security ヘッダーで、ブラウザに「このサイトは常に HTTPS でアクセスすること」を指示します。中間者攻撃（SSL stripping）を防ぎます。",
        code: "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload"
      }
    ]
  },
  {
    id: "headers",
    title: "セキュリティヘッダー",
    description: "重要な HTTP セキュリティヘッダーを学びます",
    sections: [
      {
        heading: "主要ヘッダー一覧",
        content: "• Content-Security-Policy — XSS 防御\n• X-Content-Type-Options: nosniff — MIME スニッフィング防止\n• X-Frame-Options: DENY — クリックジャッキング防止\n• Referrer-Policy — リファラー情報の制御\n• Permissions-Policy — ブラウザ機能の制限"
      },
      {
        heading: "CSP の設定",
        content: "Content-Security-Policy は許可するリソースのソースを制限します。最も効果的な XSS 防御策の1つです。",
        code: "Content-Security-Policy:\n  default-src 'self';\n  script-src 'self' https://cdn.example.com;\n  style-src 'self' 'unsafe-inline';\n  img-src 'self' data: https:;\n  frame-ancestors 'none';"
      },
      {
        heading: "helmet.js",
        content: "Express では helmet ミドルウェアでセキュリティヘッダーを一括設定できます。Next.js では next.config.js の headers 設定で追加します。\n\nsecurityheaders.com でヘッダーの設定を評価できます。A+ 評価を目指しましょう。",
        code: "import helmet from \"helmet\";\napp.use(helmet());\n// または個別設定\napp.use(helmet.contentSecurityPolicy({ directives: { ... } }));"
      }
    ]
  },
  {
    id: "auth-security",
    title: "認証のセキュリティ",
    description: "認証関連の脆弱性と対策を学びます",
    sections: [
      {
        heading: "よくある認証の脆弱性",
        content: "弱いパスワードポリシー、ブルートフォース攻撃への無防備、セッション固定攻撃、JWT の秘密鍵漏洩、OAuth のリダイレクト URI 検証不足。\n\n認証はアプリの「扉」です。ここが脆弱だとすべてのデータが危険にさらされます。"
      },
      {
        heading: "セッション固定攻撃",
        content: "攻撃者が自分のセッション ID を被害者に使わせ、ログイン後にそのセッションを乗っ取る攻撃です。ログイン成功時にセッション ID を再生成（regenerate）することで防御します。",
        code: "app.post(\"/login\", async (req, res) => {\n  const user = await authenticate(req.body);\n  if (!user) return res.status(401).json({ error: \"認証失敗\" });\n  req.session.regenerate(() => {\n    req.session.userId = user.id;\n    res.json({ success: true });\n  });\n});"
      },
      {
        heading: "レート制限と MFA",
        content: "ログイン・パスワードリセットにレート制限を設け、ブルートフォースを防ぎます。重要なアカウントには多要素認証（MFA）を必須化します。\n\nパスワードリセットトークンは短い有効期限（15分程度）と1回限りの使用を設定します。"
      }
    ]
  },
  {
    id: "dependencies",
    title: "依存関係のセキュリティ",
    description: "サプライチェーン攻撃と脆弱性管理を学びます",
    sections: [
      {
        heading: "npm audit",
        content: "`npm audit` で依存パッケージの既知の脆弱性を検出します。`npm audit fix` で自動修正可能なものを更新します。\n\nCI で `npm audit --audit-level=high` を実行し、高 severity の脆弱性がある PR をブロックするのが一般的です。"
      },
      {
        heading: "Dependabot / Renovate",
        content: "GitHub Dependabot や Renovate で依存パッケージの更新 PR を自動作成します。セキュリティパッチは早めにマージする文化を作りましょう。\n\nlockfile を Git 管理し、npm ci で再現性を確保することも重要です。"
      },
      {
        heading: "サプライチェーン攻撃",
        content: "悪意のあるパッケージや、正規パッケージの侵害（アカウント乗っ取り）が増えています。パッケージインストール前に名前とダウンロード数を確認し、不要な依存を減らすことが防御になります。",
        tip: "デモで npm audit の出力を確認し、脆弱性の severity と修正方法を読み解いてみてください。"
      }
    ]
  },
  {
    id: "owasp-practice",
    title: "実践: セキュリティチェックリスト",
    description: "リリース前のセキュリティ確認項目を学びます",
    sections: [
      {
        heading: "入力検証",
        content: "すべてのユーザー入力（フォーム、URL パラメータ、API ボディ、ファイルアップロード）をサーバー側で検証します。クライアント側のバリデーションは UX 用であり、セキュリティにはなりません。\n\n許可リスト（ホワイトリスト）方式で、許可された形式・値だけを受け入れます。"
      },
      {
        heading: "アクセス制御",
        content: "すべての API エンドポイントで認証・認可をチェックします。「管理者 API に認証なし」は最も多い脆弱性の1つです。\n\n水平権限昇格（他人のデータにアクセス）と垂直権限昇格（一般ユーザーが管理者機能にアクセス）の両方を防ぎます。"
      },
      {
        heading: "ログとモニタリング",
        content: "認証失敗、権限エラー、異常なアクセスパターンをログに記録します。SIEM ツールやアラートでリアルタイム監視し、インシデントに迅速に対応できる体制を整えます。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "セキュリティの学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① 認証入門 — 安全な認証実装\n② HTTP 入門 — セキュリティヘッダーの詳細\n③ Docker 入門 — コンテナのセキュリティ\n④ Playwright 入門 — セキュリティテストの自動化"
      },
      {
        heading: "学習の道筋",
        content: "セキュリティは一度学んで終わりではなく、新しい攻撃手法が常に登場します。OWASP Top 10 を定期的に確認し、自分のアプリを見直す習慣をつけましょう。\n\nおめでとうございます！Webセキュリティ入門をすべて学びました 🎉",
        tip: "自分のアプリに securityheaders.com でヘッダーをチェックしてみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• すべてのユーザー入力をエスケープ/サニタイズしているか\n• SQL はパラメータ化クエリを使っているか\n• HTTPS と HSTS を設定しているか\n• CSP とセキュリティヘッダーを設定しているか\n• npm audit を CI で実行しているか"
      }
    ]
  }
]
