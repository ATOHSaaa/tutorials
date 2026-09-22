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
    title: "UI アニメーションとは？",
    description: "モーションの役割と原則を理解します",
    sections: [
      {
        heading: "なぜアニメーションか",
        content: "アニメーションは装飾ではなく、UI のフィードバック、状態変化の伝達、空間的な関係の理解を助ける重要な要素です。ボタンを押した感触、ページ遷移の方向性、要素の出現・消失——これらがないと UI は「硬い」と感じられます。\n\nただし過度なアニメーションは逆効果です。「意味のあるモーション」を心がけましょう。"
      },
      {
        heading: "アニメーションの原則",
        content: "①目的がある——フィードバック、注意喚起、つながりの表現。②速い——200-300ms が UI アニメーションの標準。③自然——イージングで物理的な動きを再現。④控えめ——常にアニメーションしている UI は疲れる。",
        tip: "デモでアニメーションあり/なしの UI を比較し、体験の違いを確認してみてください。"
      },
      {
        heading: "CSS vs JavaScript",
        content: "CSS アニメーション（transition、keyframes）は GPU アクセラレーションが効き、パフォーマンスが良い。JavaScript（Framer Motion、GSAP）は複雑なシーケンスや物理演算に向いています。\n\nまず CSS で実現できないか検討し、必要なら JS ライブラリを使うのが基本です。"
      }
    ]
  },
  {
    id: "transitions",
    title: "CSS Transition",
    description: "プロパティの滑らかな変化を学びます",
    sections: [
      {
        heading: "基本構文",
        content: "transition はプロパティの変化を滑らかにアニメーションします。hover、focus、クラス切り替えで状態変化を表現します。",
        code: ".button {\n  background: #3b82f6;\n  transition: background 0.2s ease, transform 0.15s ease;\n}\n.button:hover {\n  background: #2563eb;\n  transform: translateY(-2px);\n}\n.button:active {\n  transform: translateY(0);\n}"
      },
      {
        heading: "transition プロパティ",
        content: "transition-property（対象プロパティ）、transition-duration（時間）、transition-timing-function（イージング）、transition-delay（遅延）を指定します。\n\ntransition: all は全プロパティが対象になり、パフォーマンス問題を起こすことがあるため、具体的なプロパティを指定するのがベストプラクティスです。"
      },
      {
        heading: "複数プロパティの遷移",
        content: "カンマ区切りで複数の transition を指定し、プロパティごとに異なる時間・イージングを設定できます。",
        code: "transition:\n  opacity 0.3s ease,\n  transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),\n  background 0.15s ease;"
      }
    ]
  },
  {
    id: "transforms",
    title: "CSS Transform",
    description: "要素の変形を学びます",
    sections: [
      {
        heading: "基本変形",
        content: "translate（移動）、rotate（回転）、scale（拡大縮小）、skew（傾斜）で要素を変形します。transform はレイアウトを変更せず、GPU で処理されるためパフォーマンスが良いです。",
        code: ".card:hover {\n  transform: translateY(-4px) scale(1.02);\n}\n\n.icon {\n  transition: transform 0.3s ease;\n}\n.icon:hover {\n  transform: rotate(90deg);\n}"
      },
      {
        heading: "transform-origin",
        content: "変形の基準点を指定します。デフォルトは center ですが、左下基準の回転など、origin を変えると印象が大きく変わります。",
        code: ".door {\n  transform-origin: left center;\n  transition: transform 0.5s ease;\n}\n.door.open {\n  transform: perspective(800px) rotateY(-80deg);\n}"
      },
      {
        heading: "3D Transform",
        content: "perspective、rotateX/Y/Z、translateZ で3D 効果を実現します。カードのフリップ、パララックス効果などに使います。\n\ntransform-style: preserve-3d で子要素の3D 空間を保持します。"
      }
    ]
  },
  {
    id: "keyframes",
    title: "@keyframes アニメーション",
    description: "キーフレームによる複雑なアニメーションを学びます",
    sections: [
      {
        heading: "@keyframes の定義",
        content: "開始（0%/from）から終了（100%/to）のキーフレームを定義し、animation プロパティで適用します。",
        code: "@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fade-in {\n  animation: fadeInUp 0.5s ease forwards;\n}"
      },
      {
        heading: "animation プロパティ",
        content: "animation-name、animation-duration、animation-timing-function、animation-delay、animation-iteration-count（回数/infinite）、animation-direction（alternate で往復）、animation-fill-mode（forwards で終了状態を保持）。"
      },
      {
        heading: "実用的なパターン",
        content: "スピナー（回転）、パルス（拡大縮小の繰り返し）、シマー（ローディングスケルトン）、バウンス（弾む動き）など、よく使うパターンを @keyframes で定義し、ユーティリティクラスとして再利用します。",
        code: "@keyframes spin {\n  to { transform: rotate(360deg); }\n}\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}\n@keyframes shimmer {\n  0% { background-position: -200% 0; }\n  100% { background-position: 200% 0; }\n}"
      }
    ]
  },
  {
    id: "timing",
    title: "タイミング関数",
    description: "イージングとモーションの自然さを学びます",
    sections: [
      {
        heading: "イージングの種類",
        content: "ease（加速→減速）、ease-in（加速）、ease-out（減速）、ease-in-out（加速→減速）、linear（等速）。UI 要素の出現は ease-out、消失は ease-in が自然です。"
      },
      {
        heading: "cubic-bezier",
        content: "カスタムイージングを cubic-bezier(x1, y1, x2, y2) で定義します。cubic-bezier.com で視覚的に調整できます。",
        code: "/* バウンス効果 */\ntransition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n\n/* スナップ効果 */\ntransition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);"
      },
      {
        heading: "spring アニメーション",
        content: "CSS にはないバネのような動きは JavaScript ライブラリ（Framer Motion の spring）で実現します。stiffness（硬さ）と damping（減衰）でバネの挙動を調整します。\n\n物理ベースのモーションはユーザーに「生きている」感覚を与えます。",
        tip: "デモで異なるイージング関数の動きを比較してみてください。"
      }
    ]
  },
  {
    id: "css-variables",
    title: "CSS 変数とアニメーション",
    description: "動的なアニメーション制御を学びます",
    sections: [
      {
        heading: "CSS 変数のアニメーション",
        content: "CSS カスタムプロパティ（--variable）は transition でアニメーション可能です。テーマ切り替えやダイナミックな値の変化に使います。",
        code: ":root {\n  --accent: #3b82f6;\n  --radius: 8px;\n  transition: --accent 0.3s ease;\n}\n[data-theme=\"dark\"] {\n  --accent: #60a5fa;\n}\n.button {\n  background: var(--accent);\n  border-radius: var(--radius);\n}"
      },
      {
        heading: "@property",
        content: "@property で CSS 変数の型を登録し、より滑らかなアニメーションを実現します。",
        code: "@property --progress {\n  syntax: \"<percentage>\";\n  initial-value: 0%;\n  inherits: false;\n}\n.progress {\n  --progress: 0%;\n  background: conic-gradient(#3b82f6 var(--progress), #e5e7eb 0);\n  transition: --progress 0.5s ease;\n}"
      },
      {
        heading: "Tailwind CSS",
        content: "Tailwind の transition-*、animate-* ユーティリティでアニメーションを簡潔に適用できます。tailwindcss-animate プラグインで fade-in、slide-in 等のプリセットが使えます。"
      }
    ]
  },
  {
    id: "performance",
    title: "パフォーマンス",
    description: "GPU フレンドリーなアニメーションを学びます",
    sections: [
      {
        heading: "GPU アクセラレーション",
        content: "transform と opacity のアニメーションは GPU で処理され（composite レイヤー）、レイアウトやペイントを発生させません。width、height、top、left のアニメーションはレイアウト再計算を起こし、パフォーマンスが悪いです。",
        code: "/* 悪い: レイアウト再計算 */\n.element { transition: width 0.3s; }\n\n/* 良い: GPU 合成 */\n.element { transition: transform 0.3s; }\n.element.expanded { transform: scaleX(1.5); }"
      },
      {
        heading: "will-change",
        content: "will-change: transform でブラウザに事前にレイヤー作成を指示します。ただし多用するとメモリを消費するため、アニメーション直前に設定し、終了後に削除します。"
      },
      {
        heading: "フレームレート",
        content: "60fps（16.7ms/frame）を維持するには、アニメーション中の JS 処理を最小化します。Chrome DevTools の Performance タブでフレームドロップを確認できます。\n\nprefers-reduced-motion メディアクエリで、アニメーションを減らす設定のユーザーにはアニメーションを無効化します。",
        code: "@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after {\n    animation-duration: 0.01ms !important;\n    transition-duration: 0.01ms !important;\n  }\n}"
      }
    ]
  },
  {
    id: "framer-motion",
    title: "Framer Motion",
    description: "React 向けアニメーションライブラリを学びます",
    sections: [
      {
        heading: "基本",
        content: "motion コンポーネントで宣言的にアニメーションを定義します。initial（初期状態）、animate（終了状態）、exit（アンマウント時）を指定します。",
        code: "import { motion } from \"framer-motion\";\n\n<motion.div\n  initial={{ opacity: 0, y: 20 }}\n  animate={{ opacity: 1, y: 0 }}\n  exit={{ opacity: 0, y: -20 }}\n  transition={{ duration: 0.3 }}\n>\n  Hello!\n</motion.div>"
      },
      {
        heading: "layout アニメーション",
        content: "layout プロパティで、レイアウト変更（リストの並べ替え、サイズ変更）を自動アニメーションします。",
        code: "<motion.li layout transition={{ type: \"spring\", stiffness: 300 }}>\n  {item.text}\n</motion.li>"
      },
      {
        heading: "AnimatePresence",
        content: "コンポーネントのマウント/アンマウント時のアニメーションを制御します。モーダル、トースト、ページ遷移に必須です。",
        code: "import { AnimatePresence } from \"framer-motion\";\n\n<AnimatePresence>\n  {isOpen && (\n    <motion.div\n      initial={{ opacity: 0 }}\n      animate={{ opacity: 1 }}\n      exit={{ opacity: 0 }}\n    >\n      Modal content\n    </motion.div>\n  )}\n</AnimatePresence>"
      }
    ]
  },
  {
    id: "accessibility",
    title: "アクセシビリティ",
    description: "アニメーションと a11y の両立を学びます",
    sections: [
      {
        heading: "prefers-reduced-motion",
        content: "OS の「視差効果を減らす」設定を尊重し、アニメーションを無効化または最小化します。これは WCAG 2.1 の要件です。",
        code: "const prefersReduced = window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches;\n\n<motion.div\n  animate={{ opacity: 1 }}\n  transition={{ duration: prefersReduced ? 0 : 0.3 }}\n/>"
      },
      {
        heading: "アニメーションの注意点",
        content: "点滅（flash）はてんかんのトリガーになるため、1秒間に3回以上の点滅は避けます。自動再生するアニメーションは5秒以上で停止ボタンを提供します。\n\nアニメーション中もフォーカス可能な要素にアクセスできることを確認します。"
      },
      {
        heading: "意味のあるモーション",
        content: "装飾だけのアニメーションは reduced-motion ユーザーには不要です。状態変化のフィードバック（ボタン押下、フォーム送信成功）に集中し、純粋な装飾アニメーションは無効化可能にします。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "アニメーションの学習を続けるための道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Storybook 入門 — コンポーネントのアニメーション\n② SEO 入門 — CLS とアニメーション\n③ i18n 入門 — RTL アニメーション\n④ アクセシビリティ — モーション配慮"
      },
      {
        heading: "学習の道筋",
        content: "良いアニメーションは「気づかないけど、ないと寂しい」ものです。CSS transition から始め、keyframes で表現力を広げ、Framer Motion で React アプリに統合——段階的にスキルを積み上げましょう。\n\nおめでとうございます！CSSアニメーション入門をすべて学びました 🎉",
        tip: "自分のプロジェクトのボタンやカードに hover アニメーションを追加してみてください。"
      },
      {
        heading: "実践チェックリスト",
        content: "• transform/opacity を優先しているか\n• アニメーション時間は 200-300ms か\n• prefers-reduced-motion に対応しているか\n• 装飾的なアニメーションを控えめにしているか\n• 60fps を維持できているか"
      }
    ]
  }
]
