import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Canvas」について、正しい説明はどれですか？',
    options: [
      '<canvas id="myCanvas" width="400" height="300"></canvas>',
      '`<canvas>` 要素を HTML に置き、JavaScript で 2D コンテキストを取得します。',
      'ctx.fillStyle = "#a855f7";',
      'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
    ],
    correctIndex: 3,
    explanation: 'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
  },
  {
    id: 'setup',
    question: '「基本セットアップ」について、正しい説明はどれですか？',
    options: [
      'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
      '`<canvas>` 要素を HTML に置き、JavaScript で 2D コンテキストを取得します。',
      'ctx.fillStyle = "#a855f7";',
      'CSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。',
    ],
    correctIndex: 1,
    explanation: '`<canvas>` 要素を HTML に置き、JavaScript で 2D コンテキストを取得します。',
  },
  {
    id: 'shapes',
    question: '「図形の描画」について、正しい説明はどれですか？',
    options: [
      '<canvas id="myCanvas" width="400" height="300"></canvas>',
      'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
      '`fillRect` は塗りつぶし、`strokeRect` は枠線だけ描きます。',
      'CSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。',
    ],
    correctIndex: 2,
    explanation: '`fillRect` は塗りつぶし、`strokeRect` は枠線だけ描きます。',
  },
  {
    id: 'paths',
    question: '「パスと曲線」について、正しい説明はどれですか？',
    options: [
      'CSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。',
      'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
      '`beginPath()` で新しいパスを開始します。',
      '<canvas id="myCanvas" width="400" height="300"></canvas>',
    ],
    correctIndex: 2,
    explanation: '`beginPath()` で新しいパスを開始します。',
  },
  {
    id: 'colors',
    question: '「色とスタイル」について、正しい説明はどれですか？',
    options: [
      'fillStyle と strokeStyle には CSS と同じ色指定（#hex、rgb、rgba、hsl）が使えます。',
      'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
      '<canvas id="myCanvas" width="400" height="300"></canvas>',
      'CSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。',
    ],
    correctIndex: 0,
    explanation: 'fillStyle と strokeStyle には CSS と同じ色指定（#hex、rgb、rgba、hsl）が使えます。',
  },
  {
    id: 'text',
    question: '「テキスト描画」について、正しい説明はどれですか？',
    options: [
      '<canvas id="myCanvas" width="400" height="300"></canvas>',
      '`fillText` と `strokeText` でテキストを描きます。',
      'CSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。',
      'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
    ],
    correctIndex: 1,
    explanation: '`fillText` と `strokeText` でテキストを描きます。',
  },
  {
    id: 'images',
    question: '「画像の描画」について、正しい説明はどれですか？',
    options: [
      'Image オブジェクトを作り、load イベント後に `drawImage` します。',
      '<canvas id="myCanvas" width="400" height="300"></canvas>',
      'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
      'CSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。',
    ],
    correctIndex: 0,
    explanation: 'Image オブジェクトを作り、load イベント後に `drawImage` します。',
  },
  {
    id: 'transform',
    question: '「座標変換」について、正しい説明はどれですか？',
    options: [
      '<canvas id="myCanvas" width="400" height="300"></canvas>',
      'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
      'CSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。',
      'Canvas は描画前に座標系を変換できます。',
    ],
    correctIndex: 3,
    explanation: 'Canvas は描画前に座標系を変換できます。',
  },
  {
    id: 'animation',
    question: '「アニメーション」について、正しい説明はどれですか？',
    options: [
      '<canvas id="myCanvas" width="400" height="300"></canvas>',
      'CSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。',
      'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
      '`requestAnimationFrame` で毎フレーム描画を更新します。',
    ],
    correctIndex: 3,
    explanation: '`requestAnimationFrame` で毎フレーム描画を更新します。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。',
      '① Three.js 入門 — 3D グラフィックス ② Web パフォーマンス — Canvas の最適化 ③ CSSアニメーション — DOM と Canvas の使い分…',
      '<canvas id="myCanvas" width="400" height="300"></canvas>',
      'CSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。',
    ],
    correctIndex: 1,
    explanation: '① Three.js 入門 — 3D グラフィックス ② Web パフォーマンス — Canvas の最適化 ③ CSSアニメーション — DOM と Canvas の使い分…',
  },
]
