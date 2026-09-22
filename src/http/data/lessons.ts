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
    title: "HTTP とは？",
    description: "HTTP の役割と Web 通信の基本構造を理解します",
    sections: [
      {
        heading: "HTTP の位置づけ",
        content: "HTTP（HyperText Transfer Protocol）は、ブラウザとサーバーがデータをやり取りするための「約束事」です。URL を開く、フォームを送信する、API を呼ぶ——これらはすべて HTTP リクエストとレスポンスの往復で成り立っています。\n\nHTTP はステートレス（状態を持たない）プロトコルです。サーバーは前のリクエストを覚えていません。ログイン状態やカートの中身は、Cookie やセッション、トークンなど別の仕組みで管理します。",
        tip: "デモでブラウザがサーバーへリクエストを送る流れを追ってみてください。"
      },
      {
        heading: "リクエストとレスポンス",
        content: "通信は常に「クライアントがリクエストを送り、サーバーがレスポンスを返す」という形です。リクエストにはメソッド（GET など）、URL、ヘッダー、本文（ボディ）が含まれます。レスポンスにはステータスコード、ヘッダー、本文が含まれます。\n\n開発者ツールの Network タブを開けば、実際の HTTP 通信をリアルタイムで確認できます。どのリクエストが遅いか、どのヘッダーが付いているかを見る習慣が、デバッグの第一歩になります。"
      },
      {
        heading: "HTTP のバージョン",
        content: "現在主流は HTTP/1.1 と HTTP/2、HTTP/3 です。HTTP/1.1 は1接続あたり1リクエストが基本でしたが、HTTP/2 は多重化により1接続で複数リクエストを並列処理できます。HTTP/3 は QUIC ベースで、モバイル環境での接続安定性が向上しています。\n\nフロントエンド開発者はバージョンを直接選ぶことは少ないですが、「なぜ HTTP/2 で速くなるのか」を知ると、リソース分割やドメインシャーディングの設計判断がしやすくなります。"
      }
    ]
  },
  {
    id: "request-response",
    title: "リクエストとレスポンスの構造",
    description: "HTTP メッセージの各部分を分解して理解します",
    sections: [
      {
        heading: "リクエストライン",
        content: "リクエストの最初の行は「メソッド + パス + HTTP バージョン」です。例: `GET /api/users HTTP/1.1`。クエリ文字列はパスに含まれます（`?page=2&limit=10`）。\n\nメソッドは「何をしたいか」を表し、パスは「どのリソースに対してか」を表します。REST API ではパスの設計が API の使いやすさを大きく左右します。",
        code: "GET /api/articles?tag=javascript&sort=desc HTTP/1.1\nHost: example.com\nAccept: application/json\nAuthorization: Bearer eyJhbGciOi..."
      },
      {
        heading: "レスポンスの構造",
        content: "レスポンスも同様に、ステータスライン・ヘッダー・ボディの3部構成です。ステータスラインは `HTTP/1.1 200 OK` のように、プロトコルバージョン・ステータスコード・理由フレーズを含みます。\n\nボディの形式は Content-Type ヘッダーで示されます。JSON API では `application/json`、HTML ページでは `text/html` が一般的です。Content-Type を正しく設定しないと、ブラウザが JSON をテキストとして表示するなどの問題が起きます。"
      },
      {
        heading: "ボディの扱い",
        content: "GET リクエストは通常ボディを持ちません。POST・PUT・PATCH では JSON やフォームデータをボディに載せます。`Content-Length` や `Transfer-Encoding: chunked` でボディのサイズや分割送信を伝えます。\n\nfetch API では `body: JSON.stringify({ name: \"太郎\" })` と `headers: { \Content-Type\: \"application/json\" }` をセットで指定するのが基本パターンです。",
        code: "const res = await fetch(\"/api/users\", {\n  method: \"POST\",\n  headers: { \Content-Type\: \"application/json\" },\n  body: JSON.stringify({ name: \"太郎\", email: \"taro@example.com\" }),\n});\nconst user = await res.json();"
      }
    ]
  },
  {
    id: "methods",
    title: "HTTP メソッド",
    description: "GET・POST・PUT・DELETE などメソッドの意味と使い分けを学びます",
    sections: [
      {
        heading: "主要メソッド一覧",
        content: "• GET — リソースの取得（副作用なし、キャッシュ可能）\n• POST — リソースの新規作成\n• PUT — リソースの全体置換\n• PATCH — リソースの部分更新\n• DELETE — リソースの削除\n\nメソッドは「動詞」、URL は「名詞（リソース）」と考えると RESTful な設計に近づきます。`/deleteUser` のような動詞入り URL は避け、`DELETE /users/123` のようにします。"
      },
      {
        heading: "GET と POST の違い",
        content: "GET はデータ取得専用で、パラメータはクエリ文字列に載せます。ブラウザの戻るボタンやブックマーク、CDN キャッシュの対象になりやすいのが特徴です。\n\nPOST はサーバー側の状態を変える操作に使います。フォーム送信、ユーザー登録、決済処理など。同じ POST を繰り返すと二重登録になる可能性があるため、冪等性（何度実行しても同じ結果）には注意が必要です。",
        tip: "フォームの method 属性が GET と POST で挙動が変わることをデモで確認してみてください。"
      },
      {
        heading: "PUT / PATCH / DELETE",
        content: "PUT はリソース全体を送って置き換えます。`{ name, email, role }` すべてを含める必要があります。PATCH は変更したフィールドだけ送る部分更新です。実務では PATCH の方がよく使われます。\n\nDELETE はリソースの削除を意味しますが、実際には論理削除（deleted_at フラグ）を PATCH で行う API も多いです。API 設計時は「本当に DELETE メソッドを公開するか」をチームで決めましょう。",
        code: "// PATCH — 名前だけ変更\nawait fetch(\"/api/users/42\", {\n  method: \"PATCH\",\n  headers: { \Content-Type\: \"application/json\" },\n  body: JSON.stringify({ name: \"花子\" }),\n});"
      }
    ]
  },
  {
    id: "status-codes",
    title: "ステータスコード",
    description: "200・404・500 など、レスポンスの意味を読み解きます",
    sections: [
      {
        heading: "ステータスコードの分類",
        content: "ステータスコードは3桁の数字で、先頭1桁がカテゴリを示します。\n\n• 1xx — 情報（ほぼ見ない）\n• 2xx — 成功（200 OK、201 Created、204 No Content）\n• 3xx — リダイレクト（301 Moved、302 Found、304 Not Modified）\n• 4xx — クライアントエラー（400 Bad Request、401 Unauthorized、403 Forbidden、404 Not Found、422 Unprocessable）\n• 5xx — サーバーエラー（500 Internal Server Error、502 Bad Gateway、503 Service Unavailable）"
      },
      {
        heading: "よく使うコードの実例",
        content: "200 は一般的な成功。201 は POST でリソースが作成されたとき。204 は DELETE 成功でボディがないとき。\n\n401 は「認証が必要」、403 は「認証済みだが権限がない」という違いがあります。フロントエンドでは 401 ならログイン画面へ、403 ならエラーメッセージ表示と分岐するのが一般的です。",
        code: "if (res.status === 401) {\n  router.push(\"/login\");\n} else if (res.status === 403) {\n  showError(\"この操作は許可されていません\");\n} else if (!res.ok) {\n  showError(`エラー: ${res.status}`);\n}"
      },
      {
        heading: "エラーハンドリングの設計",
        content: "API は意味のあるステータスコードとエラーメッセージを返すべきです。すべて 200 で `{ success: false }` を返す設計は、HTTP の恩恵（キャッシュ、ミドルウェアの自動処理）を活かせません。\n\n422 Unprocessable Entity はバリデーションエラー向きです。`{ errors: { email: [\"形式が不正です\"] } }` のような構造で、フォームの各フィールドにエラーを表示できます。",
        tip: "デモで意図的に 404 や 500 を返す API を叩き、ブラウザの挙動を確認してみてください。"
      }
    ]
  },
  {
    id: "headers",
    title: "HTTP ヘッダー",
    description: "Content-Type、Authorization、Cache-Control など重要ヘッダーを学びます",
    sections: [
      {
        heading: "ヘッダーの役割",
        content: "ヘッダーはリクエストやレスポンスの「メタデータ」です。本文の形式、認証情報、キャッシュ方針、CORS 関連情報などを伝えます。\n\nカスタムヘッダーは `X-` プレフィックス（非推奨になりつつある）や、仕様で定義された名前を使います。`Authorization`、`Content-Type`、`Accept` は API 開発で毎日触るヘッダーです。"
      },
      {
        heading: "Content-Type と Accept",
        content: "Content-Type は「送るデータの形式」、Accept は「受け取りたい形式」を示します。JSON API では `Content-Type: application/json` が標準です。\n\n`Accept: application/json` を付けると、サーバーが JSON を返すことを期待できます。HTML フォーム送信では `application/x-www-form-urlencoded` や `multipart/form-data`（ファイルアップロード時）を使います。",
        code: "const res = await fetch(\"/api/search\", {\n  headers: {\n    \Content-Type\: \"application/json\",\n    \Accept\: \"application/json\",\n  },\n  body: JSON.stringify({ q: \"TypeScript\" }),\n});"
      },
      {
        heading: "Authorization と Cookie",
        content: "Authorization ヘッダーは Bearer トークン（JWT など）を載せるのが一般的です。`Authorization: Bearer <token>` の形式です。\n\nCookie はブラウザが自動で送るヘッダーです。`Set-Cookie` でサーバーが設定し、`Cookie` でクライアントが返します。HttpOnly・Secure・SameSite 属性はセキュリティ上重要です（認証チュートリアルで詳しく学びます）。"
      }
    ]
  },
  {
    id: "rest",
    title: "REST API の設計",
    description: "RESTful な API 設計の原則と実践パターンを学びます",
    sections: [
      {
        heading: "REST の基本原則",
        content: "REST（Representational State Transfer）は、リソースを URL で表現し、HTTP メソッドで操作する設計スタイルです。`/users` がユーザーコレクション、`/users/123` が特定ユーザーという命名が基本です。\n\nリソースは名詞で表し、操作は HTTP メソッドに委ねます。`/getUsers` や `/createUser` のような RPC 風 URL は REST では避けます。"
      },
      {
        heading: "コレクションとリソース",
        content: "コレクション URL（`/articles`）への GET は一覧、POST は新規作成。リソース URL（`/articles/42`）への GET は詳細、PATCH は更新、DELETE は削除。\n\nネストは深くしすぎないのが鉄則です。`/users/123/posts/456/comments` は4段階で上限に近い。`/comments/789` とフラットにする方がシンプルなことが多いです。",
        code: "GET    /api/articles          → 一覧\nPOST   /api/articles          → 新規作成\nGET    /api/articles/:id      → 詳細\nPATCH  /api/articles/:id      → 更新\nDELETE /api/articles/:id      → 削除"
      },
      {
        heading: "ページネーションとフィルタ",
        content: "一覧 API にはページネーションが必須です。`?page=2&limit=20` や cursor ベース（`?cursor=abc123`）が一般的です。レスポンスには `total` や `nextCursor` を含めます。\n\nフィルタはクエリパラメータで表現します。`?status=published&tag=react&sort=-createdAt`。複雑な検索は POST `/api/articles/search` にボディで条件を送るパターンもあります。",
        tip: "デモで REST API の URL 設計をシミュレートし、直感的かどうか検証してみてください。"
      }
    ]
  },
  {
    id: "fetch",
    title: "fetch API",
    description: "ブラウザから HTTP リクエストを送る fetch の実践を学びます",
    sections: [
      {
        heading: "fetch の基本",
        content: "fetch はブラウザ標準の HTTP クライアント API です。Promise を返すため async/await と相性が良く、XMLHttpRequest の後継として広く使われています。\n\n`fetch(url)` は GET リクエストを送り、Response オブジェクトを返します。`res.json()` で JSON をパース、`res.text()` でテキストを取得します。",
        code: "async function loadUsers() {\n  const res = await fetch(\"/api/users\");\n  if (!res.ok) throw new Error(`HTTP ${res.status}`);\n  const users = await res.json();\n  return users;\n}"
      },
      {
        heading: "オプションとエラーハンドリング",
        content: "第2引数で method、headers、body、credentials などを指定します。`credentials: \"include\"` で Cookie を送るクロスオリジンリクエストが可能になります（CORS 設定が必要）。\n\nfetch はネットワークエラーでのみ reject します。404 や 500 でも resolve するため、必ず `res.ok` または `res.status` をチェックしてください。これは初心者がよくハマるポイントです。",
        code: "try {\n  const res = await fetch(\"/api/data\", { method: \"DELETE\" });\n  if (res.status === 204) return null;\n  if (!res.ok) throw new Error(await res.text());\n  return await res.json();\n} catch (err) {\n  console.error(\"リクエスト失敗:\", err);\n}"
      },
      {
        heading: "AbortController",
        content: "長時間かかるリクエストや、コンポーネントのアンマウント時にキャンセルするには AbortController を使います。React の useEffect クリーンアップと組み合わせるのが定番パターンです。",
        code: "const controller = new AbortController();\nfetch(\"/api/slow\", { signal: controller.signal })\n  .then(res => res.json())\n  .catch(err => {\n    if (err.name === \"AbortError\") console.log(\"キャンセルされました\");\n  });\n// キャンセル: controller.abort();"
      }
    ]
  },
  {
    id: "cors",
    title: "CORS",
    description: "クロスオリジンリクエストの制約と対処法を学びます",
    sections: [
      {
        heading: "同一オリジンポリシー",
        content: "ブラウザはセキュリティのため、JavaScript から別オリジン（ドメイン・ポート・プロトコルの組み合わせ）へのリクエストを制限します。`https://app.example.com` から `https://api.example.com` への fetch は「クロスオリジン」です。\n\n`<img src>` や `<script src>` は従来制限が緩いですが、fetch や XMLHttpRequest では CORS（Cross-Origin Resource Sharing）のルールが適用されます。"
      },
      {
        heading: "プリフライトリクエスト",
        content: "POST で JSON を送る、Authorization ヘッダーを付けるなど「単純リクエスト」でない場合、ブラウザは先に OPTIONS リクエスト（プリフライト）を送ります。サーバーが `Access-Control-Allow-Origin` などを返せば、本番リクエストが実行されます。\n\n開発中に「CORS エラー」が出たら、まずサーバー側の CORS 設定を確認します。フロントだけで解決できる問題ではありません。",
        code: "// サーバー側（Express の例）\napp.use(cors({\n  origin: \"https://app.example.com\",\n  credentials: true,\n  methods: [\"GET\", \"POST\", \"PUT\", \"DELETE\"],\n}));"
      },
      {
        heading: "開発時の対処",
        content: "ローカル開発では Vite の proxy 設定で `/api` をバックエンドに転送する方法が安全です。ブラウザからは同一オリジンに見えるため CORS が発生しません。\n\n本番では API サーバーが正しい `Access-Control-Allow-Origin` を返す必要があります。`*` は credentials 付きリクエストでは使えません。",
        tip: "デモでプリフライトの OPTIONS リクエストが Network タブに表示されることを確認してみてください。"
      }
    ]
  },
  {
    id: "caching",
    title: "HTTP キャッシュ",
    description: "Cache-Control によるキャッシュ戦略を学びます",
    sections: [
      {
        heading: "キャッシュの仕組み",
        content: "HTTP キャッシュは、同じリソースへの再リクエストを省略し、表示速度を上げる仕組みです。ブラウザキャッシュと CDN キャッシュの2層があります。\n\nサーバーは `Cache-Control` ヘッダーで「どれくらいの間キャッシュしていいか」を指示します。`max-age=3600` は1時間、`no-store` はキャッシュ禁止です。"
      },
      {
        heading: "Cache-Control の主要ディレクティブ",
        content: "• `public` — CDN もキャッシュ可能\n• `private` — ブラウザのみ（ユーザー固有データ向き）\n• `no-cache` — キャッシュ前にサーバーへ再確認\n• `no-store` — 一切保存しない\n• `max-age=秒` — 有効期限\n• `immutable` — 内容が変わらない（ハッシュ付きファイル名向き）",
        code: "# 静的アセット（ビルド時ハッシュ付き）\nCache-Control: public, max-age=31536000, immutable\n\n# API（短め）\nCache-Control: public, max-age=60, s-maxage=300\n\n# ユーザー固有\nCache-Control: private, no-store"
      },
      {
        heading: "ETag と条件付きリクエスト",
        content: "ETag はリソースのバージョンを示す識別子です。クライアントが `If-None-Match: \"abc123\"` を送り、サーバーが変更なければ 304 Not Modified を返します。ボディなしで「変わってない」と伝えられるため、帯域を節約できます。\n\n静的ファイルは長期キャッシュ + ファイル名にハッシュ（`app.a1b2c3.js`）が最強の組み合わせです。HTML は短い max-age か no-cache が一般的です。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "HTTP の学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Node.js 入門 — サーバー側で HTTP を扱う\n② 認証入門 — Cookie・JWT・OAuth\n③ Webセキュリティ — XSS・CSRF・HTTPS\n④ GraphQL 入門 — REST の代替アプローチ"
      },
      {
        heading: "学習の道筋",
        content: "HTTP は Web 開発の共通言語です。fetch で API を呼ぶたびに、メソッド・ステータスコード・ヘッダーの知識が活きます。Network タブを開く習慣をつけ、実際の通信を観察し続けましょう。\n\nおめでとうございます！HTTP 入門をすべて学びました 🎉",
        tip: "次は Node.js チュートリアルでサーバー側の HTTP を体験してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• API を呼ぶとき res.ok をチェックしているか\n• 適切な HTTP メソッドを使っているか\n• Content-Type を正しく設定しているか\n• CORS エラーの原因をサーバー/クライアントどちらか特定できるか\n• Cache-Control を意識してパフォーマンスを改善できるか"
      }
    ]
  }
]
