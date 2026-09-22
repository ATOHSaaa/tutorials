import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「Three.js」について、正しい説明はどれですか？',
    options: [
      'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
      'Scene は 3D オブジェクトのコンテナです。',
      'npm で three をインストールし、Vite などのバンドラーで import します。',
      'const camera = new THREE.PerspectiveCamera(',
    ],
    correctIndex: 0,
    explanation: 'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
  },
  {
    id: 'setup',
    question: '「プロジェクトセットアップ」について、正しい説明はどれですか？',
    options: [
      'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
      'ポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。',
      'npm で three をインストールし、Vite などのバンドラーで import します。',
      'Scene は 3D オブジェクトのコンテナです。',
    ],
    correctIndex: 2,
    explanation: 'npm で three をインストールし、Vite などのバンドラーで import します。',
  },
  {
    id: 'scene-camera',
    question: '「シーン・カメラ・レンダラー」について、正しい説明はどれですか？',
    options: [
      'npm で three をインストールし、Vite などのバンドラーで import します。',
      'ポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。',
      'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
      'Scene は 3D オブジェクトのコンテナです。',
    ],
    correctIndex: 3,
    explanation: 'Scene は 3D オブジェクトのコンテナです。',
  },
  {
    id: 'geometry',
    question: '「ジオメトリ」について、正しい説明はどれですか？',
    options: [
      'ポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。',
      'Geometry は頂点・面・法線などの形状データです。',
      'npm で three をインストールし、Vite などのバンドラーで import します。',
      'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
    ],
    correctIndex: 1,
    explanation: 'Geometry は頂点・面・法線などの形状データです。',
  },
  {
    id: 'material',
    question: '「マテリアル」について、正しい説明はどれですか？',
    options: [
      'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
      'MeshBasicMaterial はライト不要で常に同じ色に見えます。',
      'npm で three をインストールし、Vite などのバンドラーで import します。',
      'ポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。',
    ],
    correctIndex: 1,
    explanation: 'MeshBasicMaterial はライト不要で常に同じ色に見えます。',
  },
  {
    id: 'mesh',
    question: '「メッシュ」について、正しい説明はどれですか？',
    options: [
      'ポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。',
      'npm で three をインストールし、Vite などのバンドラーで import します。',
      'Mesh = Geometry + Material。',
      'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
    ],
    correctIndex: 2,
    explanation: 'Mesh = Geometry + Material。',
  },
  {
    id: 'lights',
    question: '「ライト」で使うコマンドやコードとして正しいものはどれですか？',
    options: [
      'ポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。',
      'const ambient = new THREE.AmbientLight(0xffffff, 0.4);',
      'npm で three をインストールし、Vite などのバンドラーで import します。',
      'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
    ],
    correctIndex: 1,
    explanation: 'const ambient = new THREE.AmbientLight(0xffffff, 0.4);',
  },
  {
    id: 'controls',
    question: '「カメラ操作」について、正しい説明はどれですか？',
    options: [
      'npm で three をインストールし、Vite などのバンドラーで import します。',
      'ポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。',
      'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
      'three/examples/jsm/controls/OrbitControls を使い、マウスドラッグで回転、スクロールでズーム、右ドラッグでパンができます。',
    ],
    correctIndex: 3,
    explanation: 'three/examples/jsm/controls/OrbitControls を使い、マウスドラッグで回転、スクロールでズーム、右ドラッグでパンができます。',
  },
  {
    id: 'r3f',
    question: '「React Three Fiber」について、正しい説明はどれですか？',
    options: [
      '@react-three/fiber は Three.js の React レンダラーです。',
      'ポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。',
      'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
      'npm で three をインストールし、Vite などのバンドラーで import します。',
    ],
    correctIndex: 0,
    explanation: '@react-three/fiber は Three.js の React レンダラーです。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      '① glTF モデルの読み込み（useGLTF） ② シェーダー入門（GLSL） ③ Web パフォーマンス — 3D の最適化 ④ ポートフォリオに 3D ヒーローを追加',
      'npm で three をインストールし、Vite などのバンドラーで import します。',
      'ポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。',
      'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。',
    ],
    correctIndex: 0,
    explanation: '① glTF モデルの読み込み（useGLTF） ② シェーダー入門（GLSL） ③ Web パフォーマンス — 3D の最適化 ④ ポートフォリオに 3D ヒーローを追加',
  },
]
