import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「UI アニメーション」について、正しい説明はどれですか？',
    options: [
      '@keyframes fadeInUp {',
      'translate（移動）、rotate（回転）、scale（拡大縮小）、skew（傾斜）で要素を変形します。',
      'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
      'transition はプロパティの変化を滑らかにアニメーションします。',
    ],
    correctIndex: 2,
    explanation: 'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
  },
  {
    id: 'transitions',
    question: '「CSS Transition」について、正しい説明はどれですか？',
    options: [
      'translate（移動）、rotate（回転）、scale（拡大縮小）、skew（傾斜）で要素を変形します。',
      'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
      'transition はプロパティの変化を滑らかにアニメーションします。',
      'ただし過度なアニメーションは逆効果です。',
    ],
    correctIndex: 2,
    explanation: 'transition はプロパティの変化を滑らかにアニメーションします。',
  },
  {
    id: 'transforms',
    question: '「CSS Transform」について、正しい説明はどれですか？',
    options: [
      'translate（移動）、rotate（回転）、scale（拡大縮小）、skew（傾斜）で要素を変形します。',
      'transition はプロパティの変化を滑らかにアニメーションします。',
      'ただし過度なアニメーションは逆効果です。',
      'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
    ],
    correctIndex: 0,
    explanation: 'translate（移動）、rotate（回転）、scale（拡大縮小）、skew（傾斜）で要素を変形します。',
  },
  {
    id: 'keyframes',
    question: '「@keyframes アニメーション」について、正しい説明はどれですか？',
    options: [
      '開始（0%/from）から終了（100%/to）のキーフレームを定義し、animation プロパティで適用します。',
      'transition はプロパティの変化を滑らかにアニメーションします。',
      'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
      'ただし過度なアニメーションは逆効果です。',
    ],
    correctIndex: 0,
    explanation: '開始（0%/from）から終了（100%/to）のキーフレームを定義し、animation プロパティで適用します。',
  },
  {
    id: 'timing',
    question: '「タイミング関数」について、正しい説明はどれですか？',
    options: [
      'transition はプロパティの変化を滑らかにアニメーションします。',
      'ただし過度なアニメーションは逆効果です。',
      'ease（加速→減速）、ease-in（加速）、ease-out（減速）、ease-in-out（加速→減速）、linear（等速）。',
      'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
    ],
    correctIndex: 2,
    explanation: 'ease（加速→減速）、ease-in（加速）、ease-out（減速）、ease-in-out（加速→減速）、linear（等速）。',
  },
  {
    id: 'css-variables',
    question: '「CSS 変数とアニメーション」について、正しい説明はどれですか？',
    options: [
      'transition はプロパティの変化を滑らかにアニメーションします。',
      'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
      'ただし過度なアニメーションは逆効果です。',
      'CSS カスタムプロパティ（--variable）は transition でアニメーション可能です。',
    ],
    correctIndex: 3,
    explanation: 'CSS カスタムプロパティ（--variable）は transition でアニメーション可能です。',
  },
  {
    id: 'performance',
    question: '「パフォーマンス」について、正しい説明はどれですか？',
    options: [
      'ただし過度なアニメーションは逆効果です。',
      'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
      'transform と opacity のアニメーションは GPU で処理され（composite レイヤー）、レイアウトやペイントを発生させません。',
      'transition はプロパティの変化を滑らかにアニメーションします。',
    ],
    correctIndex: 2,
    explanation: 'transform と opacity のアニメーションは GPU で処理され（composite レイヤー）、レイアウトやペイントを発生させません。',
  },
  {
    id: 'framer-motion',
    question: '「Framer Motion」について、正しい説明はどれですか？',
    options: [
      'transition はプロパティの変化を滑らかにアニメーションします。',
      'ただし過度なアニメーションは逆効果です。',
      'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
      'motion コンポーネントで宣言的にアニメーションを定義します。',
    ],
    correctIndex: 3,
    explanation: 'motion コンポーネントで宣言的にアニメーションを定義します。',
  },
  {
    id: 'accessibility',
    question: '「アクセシビリティ」について、正しい説明はどれですか？',
    options: [
      'ただし過度なアニメーションは逆効果です。',
      'transition はプロパティの変化を滑らかにアニメーションします。',
      'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
      'OS の「視差効果を減らす」設定を尊重し、アニメーションを無効化または最小化します。',
    ],
    correctIndex: 3,
    explanation: 'OS の「視差効果を減らす」設定を尊重し、アニメーションを無効化または最小化します。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。',
      'ただし過度なアニメーションは逆効果です。',
      '① Storybook 入門 — コンポーネントのアニメーション ② SEO 入門 — CLS とアニメーション ③ i18n 入門 — RTL アニメーション ④ アクセシ…',
      'transition はプロパティの変化を滑らかにアニメーションします。',
    ],
    correctIndex: 2,
    explanation: '① Storybook 入門 — コンポーネントのアニメーション ② SEO 入門 — CLS とアニメーション ③ i18n 入門 — RTL アニメーション ④ アクセシ…',
  },
]
