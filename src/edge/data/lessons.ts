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
    title: 'エッジコンピューティングとは？',
    description: 'エッジコンピューティングの基本概念と、クラウドとの違いを学びます',
    sections: [
      {
        heading: 'エッジコンピューティングとは',
        content:
          'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。従来はブラウザ → サーバー（東京や米国のデータセンター）という1本の経路で通信していましたが、エッジでは世界中に分散した PoP（Point of Presence）でコンテンツ配信やコード実行を行います。\n\nCDN が画像や JS を近くから配るのはエッジの一例です。近年は静的ファイルだけでなく、API や認証、データベース操作までエッジで実行できるようになっています。',
        tip: 'デモで「中央のサーバー」vs「エッジ」のデータの流れを比較してみてください。',
      },
      {
        heading: 'クラウドとエッジの関係',
        content:
          'エッジはクラウドを置き換えるものではなく、クラウドの「延長」です。\n\n• クラウド（リージョン）— 重い処理、バッチ、管理画面、大規模 DB\n• エッジ — 低レイテンシが必要な API、認証、キャッシュ、パーソナライズ\n\n多くのサービスは「エッジで前処理 → 必要ならクラウドへ」というハイブリッド構成を取ります。',
      },
      {
        heading: 'Web 開発者にとっての意味',
        content:
          'フロントエンド開発者にとって、エッジは「サーバーに近い場所で動く API」です。Next.js の Middleware、Vercel Edge Functions、Cloudflare Workers などが代表例です。\n\nユーザーが大阪にいても、東京のサーバーまで往復せず、大阪近くのエッジでレスポンスを返せるため、体感速度が上がります。',
        code: `ユーザー（大阪）
    ↓ 50ms
エッジ（大阪 PoP）← API・認証・キャッシュ
    ↓ 必要なときだけ
クラウド（東京リージョン）← DB・重い処理`,
      },
    ],
  },
  {
    id: 'why-edge',
    title: 'なぜエッジなのか？',
    description: 'レイテンシ、スケール、可用性の観点からエッジのメリットを学びます',
    sections: [
      {
        heading: 'レイテンシ（遅延）の問題',
        content:
          'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。大阪から東京なら 20〜40ms、米国西海岸なら 100ms 以上かかることもあります。\n\nAPI を3回呼ぶだけで 300ms 超になることも珍しくありません。エッジで処理を完結させれば、遠いリージョンへの往復を減らし、体感速度を改善できます。',
        tip: 'デモで地理的な距離とレイテンシの関係を確認してみてください。',
      },
      {
        heading: 'スケールと可用性',
        content:
          'エッジネットワークは世界中に PoP を持ち、トラフィックを分散できます。1つのリージョンに集中させるより、各 PoP で処理・キャッシュすることで、スパイク時の負荷分散にも有利です。\n\n障害時も、他の PoP が稼働し続けるため、グローバルサービスの可用性向上に寄与します。',
      },
      {
        heading: 'コスト面のメリット',
        content:
          'エッジでキャッシュヒットすれば、オリジンサーバーへのリクエストが減り、サーバー負荷と転送コストを抑えられます。Cloudflare R2 の egress 無料など、エッジ向けサービスはデータ転送料の設計も異なります。\n\nただし「すべてをエッジに置く」わけではなく、処理の性質に応じて使い分けることが重要です。',
      },
    ],
  },
  {
    id: 'edge-vs-cloud',
    title: 'エッジ vs クラウド中心',
    description: 'どちらに処理を置くべきかの判断基準を学びます',
    sections: [
      {
        heading: 'クラウド中心の構成',
        content:
          'すべての API が1つのリージョン（例: 東京）で動く構成です。シンプルで開発しやすく、ORM や DB との接続も容易です。\n\n国内ユーザーだけのサービスなら十分なことが多いですが、海外ユーザーが増えるとレイテンシが目立ちます。',
        code: `ブラウザ → API（東京）→ PostgreSQL（東京）
         ↑________________________|
              往復 30〜50ms（国内）`,
      },
      {
        heading: 'エッジ中心の構成',
        content:
          '認証チェック、ルーティング、キャッシュ、軽い API をエッジで処理し、DB 書き込みや重い集計だけクラウドへ送る構成です。\n\nエッジ DB（Cloudflare D1、Turso など）を使えば、読み取りもエッジ近くで完結できます。',
        code: `ブラウザ → エッジ Worker（大阪 PoP）
              ├→ KV / D1（読み取り）→ 即レスポンス
              └→ クラウド API（書き込み）→ 必要時のみ`,
      },
      {
        heading: '判断のチェックリスト',
        content:
          '次の質問で、エッジ向きかどうかを判断できます。\n\n• レイテンシが UX に直結する？（リアルタイム、ゲーム、決済）\n• 読み取りが多く、データが軽い？\n• グローバルにユーザーを持つ？\n• 処理は短時間で終わる？（エッジには実行時間制限あり）\n\n逆に、長時間バッチ、大容量ファイル処理、複雑なトランザクションはクラウド向きです。',
        tip: 'デモで処理の種類ごとに「エッジ向き / クラウド向き」を確認してみてください。',
      },
    ],
  },
  {
    id: 'cdn',
    title: 'CDN — エッジの土台',
    description: 'コンテンツ配信ネットワークがエッジの基盤である理由を学びます',
    sections: [
      {
        heading: 'CDN とは',
        content:
          'CDN（Content Delivery Network）は、画像・CSS・JS・動画などの静的コンテンツを、ユーザー近くのサーバー（エッジキャッシュ）にコピーして配信する仕組みです。\n\nオリジンサーバー（自分のサーバー）から毎回取得するのではなく、一度キャッシュすれば次回はエッジから返すため、高速かつオリジン負荷を軽減できます。',
      },
      {
        heading: 'キャッシュの仕組み',
        content:
          'CDN は HTTP ヘッダー（Cache-Control、ETag）を見て、キャッシュの有効期限を判断します。適切なヘッダーを設定すれば、HTML 以外の静的アセットは長期キャッシュが可能です。',
        code: `# 静的アセットの例（1年キャッシュ）
Cache-Control: public, max-age=31536000, immutable

# API レスポンス（短いキャッシュ）
Cache-Control: public, max-age=60, s-maxage=300`,
        tip: 'デモでキャッシュヒットとミスの違いを体験してみてください。',
      },
      {
        heading: 'CDN からエッジコンピューティングへ',
        content:
          'CDN はもともと「ファイルを配る」だけでしたが、Cloudflare Workers や Fastly Compute@Edge など、CDN 上でコードを実行できるようになりました。\n\n「配信」から「配信 + 処理」へ進化したものが、いまのエッジコンピューティングです。CDN の知識はエッジ理解の土台になります。',
      },
    ],
  },
  {
    id: 'edge-functions',
    title: 'エッジ関数',
    description: 'エッジで動くサーバーレス関数の特徴を学びます',
    sections: [
      {
        heading: 'エッジ関数とは',
        content:
          'エッジ関数は、CDN の PoP 上で JavaScript/TypeScript などを実行するサーバーレス関数です。リクエストごとに起動し、短い処理を高速に返します。\n\n代表例: Cloudflare Workers、Vercel Edge Functions、Netlify Edge Functions、AWS Lambda@Edge',
      },
      {
        heading: 'サーバーレスとの違い',
        content:
          '通常のサーバーレス（AWS Lambda など）はリージョン内で動きます。コールドスタートに数百 ms かかることもあります。\n\nエッジ関数は V8 isolate など軽量ランタイムを使い、起動が速い（数 ms）のが特徴です。ただし実行時間・メモリ・利用可能 API に制限があります。',
        code: `// Cloudflare Workers の例
export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/hello') {
      return Response.json({ message: 'Hello from the edge!' });
    }
    return new Response('Not Found', { status: 404 });
  },
};`,
        tip: 'デモでエッジ関数のリクエスト処理の流れを確認してみてください。',
      },
      {
        heading: '向いている処理',
        content:
          '• 認証トークンの検証（JWT）\n• リクエストのリダイレクト・ルーティング\n• A/B テストの振り分け\n• 軽い API プロキシ\n• ボット対策・レート制限\n\n向いていない処理: 大きなファイル変換、長時間の DB 集計、機密性の高いバッチ処理',
      },
    ],
  },
  {
    id: 'edge-storage',
    title: 'エッジでのデータ',
    description: 'KV、キャッシュ、エッジ DB の使い分けを学びます',
    sections: [
      {
        heading: 'エッジでのデータ保存',
        content:
          'エッジでコードを動かすには、データも近くに置く必要があります。ただし、すべてのデータをエッジに置けるわけではありません。\n\n• KV（キーバリュー）— 設定、セッション、フラグ\n• エッジキャッシュ — API レスポンスの一時保存\n• エッジ DB — D1、Turso など、読み取り中心のデータ',
      },
      {
        heading: 'KV とキャッシュの違い',
        content:
          'KV は明示的に読み書きするストレージです。キャッシュは HTTP レスポンスを自動で保存し、同じリクエストが来たら再利用します。\n\n設定値やユーザーセッションは KV、公開 API の結果は Cache-Control でキャッシュ、という使い分けが一般的です。',
        code: `// Workers KV のイメージ
const config = await env.MY_KV.get('feature-flags');
const flags = JSON.parse(config ?? '{}');

// キャッシュのイメージ（Cache API）
const cache = caches.default;
const cached = await cache.match(request);
if (cached) return cached;`,
      },
      {
        heading: 'エッジ DB の注意点',
        content:
          'Cloudflare D1 や Turso は SQLite ベースで、エッジからアクセスできます。読み取りは高速ですが、書き込みのレプリケーションや整合性には制約があります。\n\n「すべてのデータをエッジ DB に」ではなく、読み取り多めのデータ（設定、商品カタログの一部）を置き、注文・決済は中央 DB に置くハイブリッドが現実的です。',
        tip: 'デモで KV・キャッシュ・DB の使い分けを比較してみてください。',
      },
    ],
  },
  {
    id: 'latency',
    title: 'レイテンシと地理',
    description: 'RTT、TTL、エッジ配置が速度に与える影響を学びます',
    sections: [
      {
        heading: 'RTT（往復時間）',
        content:
          'RTT（Round-Trip Time）は、パケットが送信元から宛先へ行って戻るまでの時間です。光の速度では 1ms あたり約 200km なので、物理距離は避けられません。\n\nエッジの目的は「処理をユーザーの近くで完結させ、遠いリージョンへの往復を減らす」ことです。',
      },
      {
        heading: 'TTL とキャッシュ戦略',
        content:
          'TTL（Time To Live）はキャッシュの有効期限です。短い TTL はデータが新しいがエッジヒット率が下がり、長い TTL は高速だが古いデータが返る可能性があります。\n\n商品一覧は 60秒、ユーザー固有データはキャッシュしない、静的画像は 1年 — データの性質で TTL を設計します。',
        code: `# パーソナライズ API — キャッシュしない
Cache-Control: private, no-store

# 公開 API — CDN で 5分キャッシュ
Cache-Control: public, s-maxage=300`,
        tip: 'デモでユーザーの位置とレスポンス経路の違いを確認してみてください。',
      },
      {
        heading: 'Core Web Vitals との関係',
        content:
          'TTFB（Time to First Byte）はサーバー応答までの時間で、エッジ化の効果が直接出ます。LCP や INP も、API の遅延がボトルネックになることが多いです。\n\nパフォーマンスチュートリアルと合わせて、エッジは「サーバー側の高速化」手段の1つと捉えると理解が深まります。',
      },
    ],
  },
  {
    id: 'use-cases',
    title: 'ユースケース',
    description: 'エッジコンピューティングが活きる具体的な場面を学びます',
    sections: [
      {
        heading: '認証とセキュリティ',
        content:
          'JWT の検証や API キーチェックをエッジで行えば、不正リクエストをオリジンに届く前に弾けます。WAF（Web Application Firewall）や DDoS 対策もエッジの代表的な用途です。',
        code: `// エッジで JWT を検証
const token = request.headers.get('Authorization');
if (!token || !await verifyJwt(token)) {
  return new Response('Unauthorized', { status: 401 });
}
// 検証 OK → オリジンへプロキシ`,
      },
      {
        heading: 'パーソナライズと A/B テスト',
        content:
          'Cookie やヘッダーを見て、エッジでユーザーを振り分けます。A/B テストのバリアント決定、地域別リダイレクト、言語切り替えなどがエッジ向きです。\n\nオリジンまで行かずに振り分けできるため、レスポンスが速く、オリジン負荷も減ります。',
        tip: 'デモで A/B 振り分けのイメージを確認してみてください。',
      },
      {
        heading: 'API ゲートウェイと BFF',
        content:
          '複数のバックエンド API をエッジでまとめ、フロントエンド向けに1つの API にする BFF（Backend for Frontend）パターンもエッジでよく使われます。\n\nモバイル用と Web 用でレスポンス形式を変える、GraphQL のリゾルバをエッジで動かす、などの例があります。',
      },
    ],
  },
  {
    id: 'platforms',
    title: '主要プラットフォーム',
    description: 'Cloudflare、Vercel、AWS などエッジサービスの比較を学びます',
    sections: [
      {
        heading: 'プラットフォーム一覧',
        content:
          '• Cloudflare Workers — 最大規模のエッジネットワーク。D1/R2/KV と統合\n• Vercel Edge Functions — Next.js と相性が良い。Middleware もエッジ\n• Netlify Edge Functions — Deno ベース。Jamstack 向け\n• AWS Lambda@Edge / CloudFront Functions — AWS エコシステム内\n• Fastly Compute@Edge — 低レイテンシ CDN + コンピュート',
        tip: 'デモで各プラットフォームの特徴を比較してみてください。',
      },
      {
        heading: '選び方のヒント',
        content:
          'すでに Cloudflare で DNS/CDN を使っているなら Workers が自然です。Next.js プロジェクトなら Vercel Edge が手軽です。AWS 中心の組織なら Lambda@Edge を検討します。\n\n「エッジの概念」は共通なので、1つ深く学べば他にも応用できます。',
      },
      {
        heading: 'このサイトの次のステップ',
        content:
          '概念を理解したら、Cloudflare 入門チュートリアルで Workers・D1・R2 を実際に触るのがおすすめです。エッジコンピューティングの理論と、Cloudflare の実践がセットで身につきます。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'エッジコンピューティングの学習を続けるための道筋を確認します',
    sections: [
      {
        heading: '次に学ぶこと',
        content:
          '① Cloudflare 入門 — Workers / D1 / R2 を実際に触る\n② Web パフォーマンス — TTFB や Core Web Vitals を測定\n③ Next.js — Middleware と Edge Runtime\n④ PWA — オフラインとエッジの組み合わせ',
      },
      {
        heading: '学習の道筋',
        content:
          '① エッジ入門（今ここ）→ ② Cloudflare 入門 → ③ 実際に API をデプロイ\n\nエッジは「速く届ける」「近くで処理する」という考え方が核心です。まずは Cloudflare チュートリアルで手を動かしてみましょう！',
        tip: 'おめでとうございます！エッジコンピューティング入門をすべて学びました 🎉',
      },
    ],
  },
]
