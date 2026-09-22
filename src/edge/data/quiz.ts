import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「エッジコンピューティング」について、正しい説明はどれですか？',
    options: [
      'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
      'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
      'API を3回呼ぶだけで 300ms 超になることも珍しくありません。',
      'ブラウザ → API（東京）→ PostgreSQL（東京）',
    ],
    correctIndex: 0,
    explanation: 'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
  },
  {
    id: 'why-edge',
    question: '「なぜエッジなのか」について、正しい説明はどれですか？',
    options: [
      'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
      'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
      'ブラウザ → API（東京）→ PostgreSQL（東京）',
      'CDN が画像や JS を近くから配るのはエッジの一例です。',
    ],
    correctIndex: 0,
    explanation: 'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
  },
  {
    id: 'edge-vs-cloud',
    question: '「エッジ vs クラウド中心」について、正しい説明はどれですか？',
    options: [
      'CDN が画像や JS を近くから配るのはエッジの一例です。',
      'すべての API が1つのリージョン（例: 東京）で動く構成です。',
      'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
      'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
    ],
    correctIndex: 1,
    explanation: 'すべての API が1つのリージョン（例: 東京）で動く構成です。',
  },
  {
    id: 'cdn',
    question: '「CDN — エッジの土台」について、正しい説明はどれですか？',
    options: [
      'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
      'CDN が画像や JS を近くから配るのはエッジの一例です。',
      'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
      'CDN（Content Delivery Network）は、画像・CSS・JS・動画などの静的コンテンツを、ユーザー近くのサーバー（エッジキャッシュ）にコピーして配信する仕組みです。',
    ],
    correctIndex: 3,
    explanation: 'CDN（Content Delivery Network）は、画像・CSS・JS・動画などの静的コンテンツを、ユーザー近くのサーバー（エッジキャッシュ）にコピーして配信する仕組みです。',
  },
  {
    id: 'edge-functions',
    question: '「エッジ関数」について、正しい説明はどれですか？',
    options: [
      'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
      'CDN が画像や JS を近くから配るのはエッジの一例です。',
      'エッジ関数は、CDN の PoP 上で JavaScript/TypeScript などを実行するサーバーレス関数です。',
      'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
    ],
    correctIndex: 2,
    explanation: 'エッジ関数は、CDN の PoP 上で JavaScript/TypeScript などを実行するサーバーレス関数です。',
  },
  {
    id: 'edge-storage',
    question: '「エッジでのデータ」について、正しい説明はどれですか？',
    options: [
      'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
      'CDN が画像や JS を近くから配るのはエッジの一例です。',
      'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
      'エッジでコードを動かすには、データも近くに置く必要があります。',
    ],
    correctIndex: 3,
    explanation: 'エッジでコードを動かすには、データも近くに置く必要があります。',
  },
  {
    id: 'latency',
    question: '「レイテンシと地理」について、正しい説明はどれですか？',
    options: [
      'RTT（Round-Trip Time）は、パケットが送信元から宛先へ行って戻るまでの時間です。',
      'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
      'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
      'CDN が画像や JS を近くから配るのはエッジの一例です。',
    ],
    correctIndex: 0,
    explanation: 'RTT（Round-Trip Time）は、パケットが送信元から宛先へ行って戻るまでの時間です。',
  },
  {
    id: 'use-cases',
    question: '「ユースケース」について、正しい説明はどれですか？',
    options: [
      'JWT の検証や API キーチェックをエッジで行えば、不正リクエストをオリジンに届く前に弾けます。',
      'CDN が画像や JS を近くから配るのはエッジの一例です。',
      'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
      'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
    ],
    correctIndex: 0,
    explanation: 'JWT の検証や API キーチェックをエッジで行えば、不正リクエストをオリジンに届く前に弾けます。',
  },
  {
    id: 'platforms',
    question: '「主要プラットフォーム」について、正しい説明はどれですか？',
    options: [
      'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
      'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
      'CDN が画像や JS を近くから配るのはエッジの一例です。',
      'Cloudflare Workers — 最大規模のエッジネットワーク。D1/R2/KV と統合',
    ],
    correctIndex: 3,
    explanation: 'Cloudflare Workers — 最大規模のエッジネットワーク。D1/R2/KV と統合',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'HTTP リクエストの往復時間（RTT）は、物理距離に大きく依存します。',
      'CDN が画像や JS を近くから配るのはエッジの一例です。',
      '① Cloudflare 入門 — Workers / D1 / R2 を実際に触る ② Web パフォーマンス — TTFB や Core Web Vitals を測定 ③…',
      'エッジコンピューティング（Edge Computing）は、データや処理を「ユーザーに近い場所」で行う考え方です。',
    ],
    correctIndex: 2,
    explanation: '① Cloudflare 入門 — Workers / D1 / R2 を実際に触る ② Web パフォーマンス — TTFB や Core Web Vitals を測定 ③…',
  },
]
