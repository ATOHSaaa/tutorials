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
    title: 'a11y とは？',
    description: 'アクセシビリティの重要性を学びます',
    sections: [
      {
        heading: 'アクセシビリティ（a11y）とは？',
        content:
          'a11y は accessibility（アクセシビリティ）の略です。a と y の間に 11 文字あることからこの略語が生まれました。障害のある方、高齢者、一時的な障害（腕の骨折など）を持つ方も含め、誰もが Web を使えるようにする取り組みです。',
      },
      {
        heading: 'なぜ重要か？',
        content:
          '• 法的要件 — 多くの国で Web アクセシビリティが法律で求められています\n• ユーザー体験 — キーボード操作、読み上げ対応で全員が快適に\n• SEO — セマンティック HTML は検索エンジンにも好まれる\n• 品質 — アクセシブルなコードは保守性も高い',
        tip: 'デモで良い例・悪い例の違いを体感してください。',
      },
      {
        heading: 'WCAG とは',
        content:
          'Web Content Accessibility Guidelines（WCAG）は国際的なアクセシビリティ基準です。レベル A、AA、AAA の3段階があり、多くのプロジェクトは AA を目標にします。',
      },
    ],
  },
  {
    id: 'semantic',
    title: 'セマンティック HTML',
    description: '意味のある HTML タグの使い方を学びます',
    sections: [
      {
        heading: '意味のあるタグ',
        content:
          'div だけで全部作るのではなく、header、nav、main、article、section、footer など意味のあるタグを使います。スクリーンリーダーがページ構造を理解しやすくなります。',
        code: `<header>
  <nav aria-label="メインナビ">...</nav>
</header>
<main>
  <article>
    <h1>記事タイトル</h1>
    <p>本文...</p>
  </article>
</main>
<footer>...</footer>`,
      },
      {
        heading: '見出しの階層',
        content:
          'h1 はページに1つ、h2 → h3 と順番に使います。飛ばし（h1 の次に h3）は避けます。目次や読み上げのナビゲーションに使われます。',
        tip: 'デモでセマンティック構造と div だけの構造を比較してください。',
      },
      {
        heading: 'button と a の使い分け',
        content:
          'ページ遷移 → a（リンク）。アクション実行 → button。見た目は同じでも、役割が違います。button を a で、リンクを div で作るのは避けましょう。',
      },
    ],
  },
  {
    id: 'keyboard',
    title: 'キーボード操作',
    description: 'Tab キーで操作できる UI を学びます',
    sections: [
      {
        heading: 'キーボードだけで操作できること',
        content:
          'マウスを使えないユーザーは Tab（次の要素）、Shift+Tab（前）、Enter/Space（実行）、矢印キー（リスト内移動）で操作します。すべてのインタラクティブ要素にフォーカスできることが必須です。',
      },
      {
        heading: 'tabindex',
        content:
          'tabindex="0" でフォーカス可能に、tabindex="-1" でプログラムからのみフォーカス。正の tabindex（1, 2, 3...）はフォーカス順を壊すので避けます。',
        code: `<!-- 悪い例: div をクリック可能に -->
<div onclick="submit()">送信</div>

<!-- 良い例 -->
<button type="submit">送信</button>`,
        tip: 'デモで Tab キーでのフォーカス移動を試してください。',
      },
      {
        heading: 'スキップリンク',
        content:
          'ページ先頭に「メインコンテンツへスキップ」リンクを置き、毎回ナビを Tab で通過しなくて済むようにします。',
      },
    ],
  },
  {
    id: 'focus',
    title: 'フォーカス管理',
    description: 'フォーカスリングとフォーカストラップを学びます',
    sections: [
      {
        heading: 'フォーカスリング',
        content:
          'outline: none だけを指定すると、キーボードユーザーが今どこにいるかわかりません。focus-visible や focus:ring で見えるフォーカスインジケータを必ず残します。',
        code: `/* 悪い */
button:focus { outline: none; }

/* 良い */
button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}`,
      },
      {
        heading: 'フォーカストラップ',
        content:
          'モーダルを開いたとき、フォーカスをモーダル内に閉じ込め、閉じるまで背景にフォーカスが行かないようにします。Esc キーで閉じるのも標準的なパターンです。',
        tip: 'デモでモーダルのフォーカストラップを確認してください。',
      },
      {
        heading: 'フォーカスの復帰',
        content:
          'モーダルを閉じたら、開く前にフォーカスしていた要素に戻します。ユーザーが迷子にならないための重要な配慮です。',
      },
    ],
  },
  {
    id: 'aria',
    title: 'ARIA',
    description: 'スクリーンリーダー向けの属性を学びます',
    sections: [
      {
        heading: 'ARIA とは？',
        content:
          'Accessible Rich Internet Applications。HTML だけでは表現できない状態や役割を、aria-* 属性で補います。ただし「最初の選択肢はセマンティック HTML」——button や nav を正しく使えば ARIA は不要なことが多いです。',
      },
      {
        heading: 'よく使う ARIA',
        content:
          'aria-label（名前）、aria-labelledby（参照）、aria-hidden（読み上げ除外）、aria-expanded（開閉状態）、aria-live（動的更新の通知）',
        code: `<button aria-expanded="false" aria-controls="menu">
  メニュー
</button>
<ul id="menu" hidden>...</ul>

<div aria-live="polite" role="status">
  保存しました
</div>`,
        tip: 'デモで aria-expanded の開閉状態を確認してください。',
      },
      {
        heading: 'role 属性',
        content:
          'role="alert"、role="dialog"、role="navigation" など。HTML5 の要素と重複する role は避け、必要なときだけ使います。',
      },
    ],
  },
  {
    id: 'images',
    title: '画像の代替テキスト',
    description: 'alt 属性の適切な使い方を学びます',
    sections: [
      {
        heading: 'alt 属性',
        content:
          'img には alt を付けます。画像の内容や目的をテキストで伝えます。装飾だけの画像は alt=""（空）で読み上げをスキップします。',
        code: `<!-- 情報を伝える画像 -->
<img src="chart.png" alt="2024年売上: 1月100万、2月120万..." />

<!-- 装飾 -->
<img src="decoration.svg" alt="" role="presentation" />`,
      },
      {
        heading: '良い alt の書き方',
        content:
          '「画像」「写真」は不要。画像がリンクの中にある場合はリンクの目的を説明します。長い説明は alt ではなくfigcaption や近くのテキストで。',
        tip: 'デモで alt あり・なしの違いを確認してください。',
      },
      {
        heading: 'SVG とアイコン',
        content:
          '意味のあるアイコンには aria-label や title + aria-labelledby。装飾アイコンは aria-hidden="true" で読み上げを除外します。',
      },
    ],
  },
  {
    id: 'color',
    title: '色とコントラスト',
    description: '視認性を確保する色の選び方を学びます',
    sections: [
      {
        heading: 'コントラスト比',
        content:
          'WCAG AA では通常テキスト 4.5:1 以上、大きいテキスト 3:1 以上のコントラストが必要です。薄いグレーの文字 on 白背景は要注意です。',
      },
      {
        heading: '色だけに頼らない',
        content:
          'エラーは赤色だけでなく、テキストやアイコンでも示します。リンクは色だけでなく下線も付けます。色覚多様性に配慮します。',
        tip: 'デモでコントラストの良い例・悪い例を比較してください。',
      },
      {
        heading: 'チェックツール',
        content:
          'Chrome DevTools の Accessibility パネル、WebAIM Contrast Checker、Figma のコントラストプラグインで確認できます。',
      },
    ],
  },
  {
    id: 'forms',
    title: 'フォームの a11y',
    description: 'label とエラー表示のベストプラクティスを学びます',
    sections: [
      {
        heading: 'label の紐付け',
        content:
          'すべての入力に label を付けます。for と id で紐付けるか、label で input を囲みます。placeholder は label の代わりになりません。',
        code: `<label for="email">メールアドレス</label>
<input id="email" type="email" name="email" />

<!-- または -->
<label>
  メールアドレス
  <input type="email" name="email" />
</label>`,
      },
      {
        heading: 'エラー表示',
        content:
          'aria-invalid="true"、aria-describedby でエラーメッセージを入力に関連付けます。エラーは色だけでなくテキストで伝えます。',
        tip: 'デモでアクセシブルなフォームと問題のあるフォームを比較してください。',
      },
      {
        heading: '必須項目',
        content:
          'required 属性に加え、視覚的にも「必須」を示します。aria-required="true" も有効です。',
      },
    ],
  },
  {
    id: 'testing',
    title: 'テスト方法',
    description: 'axe や Lighthouse でチェックする方法を学びます',
    sections: [
      {
        heading: '自動テスト',
        content:
          '• axe DevTools — ブラウザ拡張、問題箇所をハイライト\n• Lighthouse — Chrome 内蔵、Accessibility スコア\n• eslint-plugin-jsx-a11y — コード段階で検出',
      },
      {
        heading: '手動テスト',
        content:
          '• キーボードだけで全操作できるか\n• スクリーンリーダー（VoiceOver、NVDA）で読み上げを確認\n• 200% ズームでレイアウトが崩れないか\n• アニメーションを減らす設定（prefers-reduced-motion）',
        tip: 'デモで Lighthouse のアクセシビリティチェック項目を確認してください。',
      },
      {
        heading: 'CI に組み込む',
        content:
          '@axe-core/playwright や jest-axe で E2E / ユニットテストに a11y チェックを追加できます。CI/CD 入門と組み合わせると効果的です。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'a11y の学習を続けるためのヒント',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• WAI-ARIA Authoring Practices — コンポーネントパターン集\n• Inclusive Components — アクセシブル UI パターン\n• Radix UI / React Aria — a11y 対応済みプリミティブ',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML → ② a11y（今ここ）→ ③ フォーム / React で実装 → ④ すべてのプロジェクトでキーボードテストを習慣化',
        tip: 'おめでとうございます！a11y チュートリアルをすべて学びました 🎉',
      },
    ],
  },
]
