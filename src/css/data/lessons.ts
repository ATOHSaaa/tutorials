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
    title: 'CSS とは？',
    description: 'Web ページの見た目を整える CSS の基本を学びます',
    sections: [
      {
        heading: 'CSS とは何か？',
        content:
          'CSS（Cascading Style Sheets）は、Web ページの「見た目」を整えるための言語です。HTML が骨組み（材料の配置）なら、CSS は内装・塗装・家具の配置のようなものです。\n\n色、フォント、余白、レイアウトなど、ユーザーが目にするすべてのデザインは CSS で制御します。',
      },
      {
        heading: 'HTML と CSS の関係',
        content:
          'HTML と CSS はセットで使います。HTML で「ここは見出し」「ここは段落」と構造を作り、CSS で「見出しは大きく青く」「段落は余白を空ける」と見た目を指定します。\n\n同じ HTML に違う CSS を適用すれば、まったく違うデザインのページになります。だから HTML は内容に、CSS はデザインに専念できます。',
        code: `<!-- HTML: 構造 -->
<h1 class="title">こんにちは</h1>

/* CSS: 見た目 */
.title {
  color: blue;
  font-size: 32px;
}`,
        tip: 'デモで「CSS なし」と「CSS あり」を見比べてみてください。',
      },
      {
        heading: 'CSS の書き方',
        content:
          'CSS は「セレクタ { プロパティ: 値; }」の形式で書きます。セレクタは「どの要素に適用するか」、プロパティは「何を変えるか」、値は「どう変えるか」を指定します。',
        code: `p {
  color: red;        /* 文字色を赤に */
  font-size: 18px; /* 文字サイズを18pxに */
}`,
      },
    ],
  },
  {
    id: 'selectors',
    title: 'セレクタ',
    description: 'どの要素にスタイルを適用するかを指定する方法を学びます',
    sections: [
      {
        heading: 'セレクタとは？',
        content:
          'セレクタは「スタイルを当てる対象を選ぶ道具」です。料理で「トマトだけ切る」「玉ねぎだけ炒める」と素材を選ぶのと同じで、CSS でも「p タグだけ」「class が card の要素だけ」と対象を指定します。',
      },
      {
        heading: '要素セレクタ',
        content:
          'タグ名で指定します。ページ内のすべてのそのタグに適用されます。',
        code: `p { color: gray; }      /* すべての段落 */
h1 { font-size: 2rem; }  /* すべての h1 */
a { color: blue; }       /* すべてのリンク`,
      },
      {
        heading: 'クラスセレクタと ID セレクタ',
        content:
          'クラスは .（ドット）、ID は #（ハッシュ）で指定します。HTML の class="card" には .card、id="hero" には #hero と書きます。\n\nクラスは同じ名前を複数の要素に付けられます。ID はページ内で1つだけ使います。デザインの再利用にはクラスが便利です。',
        code: `.card { border: 1px solid #ccc; }  /* class="card" */
#hero { font-size: 48px; }           /* id="hero" */

/* 複数のクラスを同時に指定 */
.card.highlight { background: yellow; }`,
        tip: 'デモでセレクタを切り替えて、どの要素が選ばれるか確認してみてください。',
      },
    ],
  },
  {
    id: 'colors',
    title: '色と背景',
    description: '文字色や背景色を変える方法を学びます',
    sections: [
      {
        heading: '色の指定方法',
        content:
          'CSS で色を指定する主な方法は3つです。\n\n・色名 — red, blue, white など\n・16進数 — #ff0000（赤）、#3b82f6（青）など\n・rgb / rgba — rgb(255, 0, 0) や rgba(0, 0, 0, 0.5)（半透明）',
        code: `color: red;
color: #3b82f6;
color: rgb(59, 130, 246);
color: rgba(59, 130, 246, 0.5); /* 50% 透明 */`,
      },
      {
        heading: '背景のスタイル',
        content:
          'background-color で背景色、background-image で背景画像を設定できます。グラデーションも background で作れます。',
        code: `.box {
  background-color: #f0f0f0;
  background-image: url('pattern.png');
  background: linear-gradient(135deg, #667eea, #764ba2);
}`,
        tip: 'デモのスライダーで色を変えてみてください。',
      },
    ],
  },
  {
    id: 'text',
    title: 'テキストのスタイル',
    description: '文字の見た目を整えるプロパティを学びます',
    sections: [
      {
        heading: 'フォントサイズと太さ',
        content:
          'font-size で文字の大きさ、font-weight で太さを指定します。太さは 400（通常）、700（太字）や normal、bold でも書けます。',
        code: `font-size: 16px;    /* ピクセル指定 */
font-size: 1.2rem;  /* 親要素の1.2倍 */
font-weight: bold;    /* 太字 */
font-weight: 400;     /* 通常 */`,
      },
      {
        heading: '文字の配置と行間',
        content:
          'text-align で左・中央・右揃え、line-height で行間（行の高さ）を調整します。読みやすい文章には適度な行間が重要です。',
        code: `text-align: center;   /* 中央揃え */
text-align: right;    /* 右揃え */
line-height: 1.6;     /* 行間（1.6倍） */
text-decoration: underline; /* 下線 */`,
        tip: 'デモで各プロパティを変えて、テキストの見た目の変化を確認してください。',
      },
    ],
  },
  {
    id: 'box-model',
    title: 'ボックスモデル',
    description: '余白・枠線・サイズの仕組みを学びます',
    sections: [
      {
        heading: 'すべての要素は箱',
        content:
          'CSS では、すべての HTML 要素は「箱（ボックス）」として扱われます。この箱は4つの層で構成されています。\n\n内容（content）→ 内側の余白（padding）→ 枠線（border）→ 外側の余白（margin）\n\n料理の弁当箱に例えると、内容がおかず、padding がおかずと箱の間のスペース、border が箱の縁、margin が隣の弁当箱との距離です。',
      },
      {
        heading: 'padding と margin',
        content:
          'padding は要素の内側の余白（内容と枠線の間）、margin は外側の余白（要素と他の要素の間）です。上下左右をまとめて指定するか、個別に指定できます。',
        code: `padding: 16px;              /* 上下左右すべて */
padding: 8px 16px;          /* 上下 8px、左右 16px */
margin: 0 auto;             /* 左右中央揃え（よく使う） */
margin-top: 24px;           /* 上だけ */`,
      },
      {
        heading: 'border と width / height',
        content:
          'border で枠線の太さ・スタイル・色を指定します。width と height で要素のサイズを決めます。',
        code: `border: 2px solid #ccc;
border-radius: 8px;  /* 角を丸く */
width: 300px;
height: 200px;`,
        tip: 'デモで padding と margin のスライダーを動かして、箱の変化を見てみてください。',
      },
    ],
  },
  {
    id: 'flexbox',
    title: 'Flexbox',
    description: '要素を横並び・縦並びに配置する方法を学びます',
    sections: [
      {
        heading: 'Flexbox とは？',
        content:
          'Flexbox は要素を「柔軟に（flexible）」並べるためのレイアウト手法です。ナビゲーションメニュー、カードの横並び、中央揃えなど、よく使う配置が簡単にできます。\n\n親要素に display: flex を指定すると、子要素がフレックスアイテムになり、横並び（デフォルト）や縦並びに配置できます。',
        code: `.container {
  display: flex;
  gap: 16px;              /* 要素間の隙間 */
  justify-content: center; /* 横方向の配置 */
  align-items: center;     /* 縦方向の配置 */
}`,
      },
      {
        heading: 'よく使うプロパティ',
        content:
          'justify-content — 横方向の配置（flex-start, center, space-between など）\nalign-items — 縦方向の配置（flex-start, center, stretch など）\nflex-direction — 並べる方向（row=横, column=縦）\ngap — 要素間の隙間',
        code: `justify-content: space-between; /* 両端揃え */
align-items: center;            /* 縦中央 */
flex-direction: column;         /* 縦並び */`,
        tip: 'デモで justify-content と align-items を変えて配置の違いを確認してください。',
      },
    ],
  },
  {
    id: 'grid',
    title: 'Grid',
    description: '格子状のレイアウトを作る方法を学びます',
    sections: [
      {
        heading: 'Grid とは？',
        content:
          'Grid は要素を「格子（グリッド）」状に並べるレイアウト手法です。カレンダー、写真ギャラリー、ダッシュボードのように、行と列で整然と並べたいときに使います。\n\n親要素に display: grid を指定し、grid-template-columns で列の数と幅を決めます。',
        code: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3列均等 */
  gap: 16px;
}`,
      },
      {
        heading: 'fr 単位と repeat',
        content:
          'fr（fraction）は「残りのスペースを分割する」単位です。repeat(3, 1fr) は「3列、それぞれ均等」という意味です。',
        code: `grid-template-columns: repeat(3, 1fr);
grid-template-columns: 200px 1fr 1fr; /* 1列目固定、残り均等 */
grid-template-rows: auto 1fr;`,
        tip: 'デモで列数を変えて、グリッドの変化を確認してください。',
      },
    ],
  },
  {
    id: 'pseudo',
    title: '疑似クラス',
    description: '特定の状態や位置の要素にスタイルを適用する方法を学びます',
    sections: [
      {
        heading: '疑似クラスとは？',
        content:
          '疑似クラスは、要素の「状態」や「位置」に応じてスタイルを変える仕組みです。コロン（:）の後に名前を書きます。\n\nたとえば :hover は「マウスを乗せたとき」、:focus は「フォーカスされたとき（クリックや Tab キー）」に適用されます。',
        code: `a:hover {
  color: red;           /* マウスオーバーで赤に */
}

button:active {
  transform: scale(0.95); /* 押した瞬間に少し小さく */
}

input:focus {
  border-color: blue;   /* フォーカス時に青い枠 */
}`,
      },
      {
        heading: 'よく使う疑似クラス',
        content:
          ':hover — マウスを乗せたとき\n:active — クリックしている瞬間\n:focus — フォーカスされたとき\n:first-child — 最初の子要素\n:last-child — 最後の子要素\n:nth-child(n) — n番目の子要素',
        tip: 'デモのボタンやリンクにマウスを乗せて、:hover の効果を体験してください。',
      },
    ],
  },
  {
    id: 'responsive',
    title: 'レスポンシブデザイン',
    description: '画面サイズに応じてデザインを変える方法を学びます',
    sections: [
      {
        heading: 'レスポンシブとは？',
        content:
          'レスポンシブデザインは、PC・タブレット・スマホなど、画面サイズが違っても快適に見られるデザインのことです。1つの Web サイトで、デバイスに合わせてレイアウトや文字サイズを変えます。',
      },
      {
        heading: 'メディアクエリ',
        content:
          '@media で「画面幅がこのサイズ以下のときだけ、この CSS を適用する」と条件を書けます。768px 以下をスマホ向けにするのがよくあるパターンです。',
        code: `/* デフォルト: PC向け */
.container { display: flex; }

/* 768px 以下: スマホ向け */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`,
        tip: 'デモのスライダーで画面幅を変えて、レイアウトの切り替わりを確認してください。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'CSS の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'CSS でできること・これから学ぶこと',
        content:
          'このチュートリアルで学んだのは CSS の基礎です。さらに深く学ぶなら、CSS 変数（カスタムプロパティ）、アニメーション（transition, animation）、より高度なセレクタなどが次のステップです。\n\n動きやインタラクションは JavaScript の仕事。大きなアプリの構築は React などのフレームワークが活躍します。',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML — 骨組みを作る ✓\n② CSS（今ここ）— 見た目を整える ✓\n③ JavaScript — 動きを付ける\n④ React — 大きなアプリを効率よく作る\n\nHTML と CSS の土台ができました。次は JavaScript でページに動きを加えていきましょう。',
        tip: 'おめでとうございます！CSS の基礎をすべて学びました 🎉',
      },
    ],
  },
]
