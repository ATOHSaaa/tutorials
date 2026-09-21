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
    title: 'HTML とは？',
    description: 'Web ページの土台となる HTML の基本を学びます',
    sections: [
      {
        heading: 'HTML とは何か？',
        content:
          'HTML（HyperText Markup Language）は、Web ページの「骨組み」を作るための言語です。文章の見出し、段落、リンク、画像など、「ここは見出し」「ここは本文」とブラウザに伝える役割を持っています。\n\n料理に例えると、HTML は「材料の配置図」です。肉をここに、野菜をここに、と配置を決めます。見た目の装飾（色やデザイン）は CSS の仕事で、HTML は「何があるか」を伝えることに専念します。',
      },
      {
        heading: 'タグとは？',
        content:
          'HTML は「タグ」で書きます。タグは < と > で囲んだ印で、意味を表します。\n\nたとえば <p> というタグは「ここから段落（paragraph）ですよ」という意味です。ほとんどのタグは開始タグと終了タグのペアで使い、間に内容を書きます。',
        code: `<p>これは段落です。</p>

<!-- 構造を分解すると -->
<p>          ← 開始タグ（「段落が始まる」）
  これは段落です。  ← 内容（ブラウザに表示されるテキスト）
</p>         ← 終了タグ（「段落が終わる」）`,
        tip: 'デモでタグの構造を確認してみてください。<> で囲まれた部分がタグです。',
      },
      {
        heading: 'ブラウザが HTML を読む',
        content:
          'あなたが書いた HTML ファイルをブラウザ（Chrome、Safari など）が読み込み、画面に表示します。HTML はプログラミング言語ではなく「マークアップ言語」——つまり、テキストに印を付けて構造を示す言語です。だから初心者でも比較的すぐに書き始められます。',
      },
    ],
  },
  {
    id: 'structure',
    title: 'ページの基本構造',
    description: 'すべての HTML ページに共通する骨組みを学びます',
    sections: [
      {
        heading: 'HTML 文書の全体像',
        content:
          'どんな Web ページも、基本的に同じ構造を持っています。大きな箱（html）の中に、2つの部屋（head と body）があります。\n\nhead（ヘッド）は「ページの設定情報」——タイトルや文字コードなど、画面には直接出ない情報を書く場所です。\n\nbody（ボディ）は「ページの中身」——ユーザーが実際に見る内容を書く場所です。',
        code: `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>ページのタイトル</title>
  </head>
  <body>
    <h1>こんにちは！</h1>
    <p>これがページの内容です。</p>
  </body>
</html>`,
      },
      {
        heading: '各パーツの役割',
        content:
          '<!DOCTYPE html> — 「これは HTML5 ですよ」とブラウザに伝える宣言\n\n<html lang="ja"> — ページ全体を囲む箱。lang="ja" は日本語ページであることを示す\n\n<head> — タイトルバーに表示される名前や、文字コードなどの設定\n\n<body> — 見出し、段落、画像など、ユーザーが見るすべての内容',
        tip: 'ブラウザのタブに表示される文字は <title> タグで決まります。',
      },
    ],
  },
  {
    id: 'headings',
    title: '見出しと段落',
    description: '文章の構造を表す基本的なタグを学びます',
    sections: [
      {
        heading: '見出しタグ（h1〜h6）',
        content:
          '見出しは h1 から h6 まで6段階あります。h1 が一番大きく重要な見出し、h6 が一番小さい見出しです。\n\n本の構造に例えると、h1 は本のタイトル、h2 は章のタイトル、h3 は節のタイトル……というイメージです。順番を飛ばさず、大きい見出しから小さい見出しへ使うのが基本です。',
        code: `<h1>メインの見出し</h1>
<h2>章の見出し</h2>
<h3>節の見出し</h3>
<h4>小見出し</h4>`,
      },
      {
        heading: '段落タグ（p）',
        content:
          '段落は <p> タグで囲みます。文章のまとまりを表し、ブラウザは段落の前後に自動的に余白を入れて表示します。改行したいときは Enter を押すのではなく、新しい <p> タグを使います。',
        code: `<p>これは1つ目の段落です。</p>
<p>これは2つ目の段落です。</p>`,
        tip: 'HTML では Enter キーによる改行は無視されます。改行には <br> タグを使います。',
      },
      {
        heading: '改行（br）と区切り線（hr）',
        content:
          '<br> は改行、<hr> は水平線（区切り線）を表示します。どちらも終了タグが不要な「空要素（void element）」です。',
        code: `<p>1行目<br>2行目</p>
<hr>
<p>区切り線の下の段落</p>`,
      },
    ],
  },
  {
    id: 'links-images',
    title: 'リンクと画像',
    description: '他のページへ飛ぶリンクと画像を表示する方法を学びます',
    sections: [
      {
        heading: 'リンク（a タグ）',
        content:
          'リンクは <a> タグで作ります。href 属性に飛び先の URL を書きます。テキストをクリックすると、そのページに移動します。\n\n別のサイトへのリンクは target="_blank" を付けると、新しいタブで開けます。',
        code: `<!-- 同じサイト内のページへ -->
<a href="/about.html">会社概要</a>

<!-- 外部サイトへ（新しいタブで開く） -->
<a href="https://example.com" target="_blank">
  外部サイト
</a>`,
      },
      {
        heading: '画像（img タグ）',
        content:
          '画像は <img> タグで表示します。src 属性に画像ファイルのパス、alt 属性に画像の説明文を書きます。\n\nalt は「画像が表示できないとき」や「スクリーンリーダー（視覚障害者向けの読み上げソフト）」のために必要です。必ず書く習慣をつけましょう。',
        code: `<img
  src="photo.jpg"
  alt="海辺で笑っている犬"
  width="300"
>`,
        tip: 'alt には「何の画像か」を具体的に書きます。「画像」だけでは不十分です。',
      },
    ],
  },
  {
    id: 'lists',
    title: 'リスト',
    description: '箇条書きや番号付きリストを作る方法を学びます',
    sections: [
      {
        heading: '箇条書きリスト（ul）',
        content:
          'ul（Unordered List）は順番のない箇条書きです。各項目は li（List Item）タグで囲みます。買い物リストや機能一覧など、順序が重要でないリストに使います。',
        code: `<ul>
  <li>りんご</li>
  <li>バナナ</li>
  <li>みかん</li>
</ul>`,
      },
      {
        heading: '番号付きリスト（ol）',
        content:
          'ol（Ordered List）は順番のあるリストです。手順やランキングなど、順序が意味を持つときに使います。',
        code: `<ol>
  <li>材料を準備する</li>
  <li>鍋で煮る</li>
  <li>盛り付けて完成</li>
</ol>`,
        tip: 'ul と ol の中に li を入れる、という入れ子構造を覚えておきましょう。',
      },
    ],
  },
  {
    id: 'tables',
    title: 'テーブル',
    description: '表形式のデータを表示する方法を学びます',
    sections: [
      {
        heading: 'テーブルの基本構造',
        content:
          '表は <table> タグで作ります。行は <tr>（Table Row）、セル（マス目）は <td>（Table Data）で表します。1行目の見出しセルは <th>（Table Header）を使い、太字・中央揃えで表示されます。',
        code: `<table>
  <tr>
    <th>名前</th>
    <th>年齢</th>
    <th>都市</th>
  </tr>
  <tr>
    <td>太郎</td>
    <td>25</td>
    <td>東京</td>
  </tr>
  <tr>
    <td>花子</td>
    <td>30</td>
    <td>大阪</td>
  </tr>
</table>`,
      },
      {
        heading: 'いつテーブルを使う？',
        content:
          'テーブルは「行と列で整理されたデータ」に使います。料金表、スケジュール、成績表などが典型例です。レイアウト（ページの配置）目的でテーブルを使うのは古い手法なので、今は CSS を使います。',
        tip: 'thead（ヘッダー行）と tbody（データ行）に分けると、より意味のある HTML になります。',
      },
    ],
  },
  {
    id: 'forms',
    title: 'フォーム',
    description: 'ユーザーから情報を受け取るフォームを学びます',
    sections: [
      {
        heading: 'フォームの基本',
        content:
          'フォームは <form> タグで作ります。ユーザーが名前を入力したり、ボタンを押したりして、情報を送るための仕組みです。ログインフォーム、お問い合わせフォーム、検索ボックスなど、Web サイトでよく見かけます。',
        code: `<form>
  <label for="name">名前:</label>
  <input type="text" id="name" name="name">

  <button type="submit">送信</button>
</form>`,
      },
      {
        heading: 'よく使う input の種類',
        content:
          'input タグの type 属性で、入力の種類を変えられます。',
        code: `<input type="text"     placeholder="テキスト入力">
<input type="email"    placeholder="メールアドレス">
<input type="password" placeholder="パスワード">
<input type="number"   placeholder="数字">
<input type="checkbox"> チェックボックス
<input type="radio"    name="plan"> ラジオボタン`,
      },
      {
        heading: 'label タグの重要性',
        content:
          '<label> は入力欄の説明文です。for 属性に input の id を指定すると、ラベルをクリックしたときに入力欄にフォーカスが移ります。アクセシビリティ（誰でも使いやすい Web）のために、必ず label と input をセットで使いましょう。',
        tip: 'デモでフォームを実際に操作してみてください。',
      },
    ],
  },
  {
    id: 'semantic',
    title: 'セマンティック HTML',
    description: '意味のあるタグでページ構造を伝える方法を学びます',
    sections: [
      {
        heading: 'セマンティックとは？',
        content:
          'セマンティック（semantic）とは「意味を持つ」ということです。ただ <div> で囲むのではなく、<header>、<nav>、<main> など、役割がわかるタグを使うことを「セマンティック HTML」と呼びます。\n\n人間にもブラウザにも、検索エンジンにも「ここはナビゲーション」「ここはメインコンテンツ」と伝えられます。',
        code: `<header>サイトのヘッダー</header>
<nav>メニュー</nav>
<main>
  <article>記事の内容</article>
</main>
<footer>フッター</footer>`,
      },
      {
        heading: 'よく使うセマンティックタグ',
        content:
          '<header> — ページやセクションのヘッダー\n<nav> — ナビゲーション（メニュー）\n<main> — ページのメインコンテンツ（1ページに1つ）\n<article> — 独立した記事やコンテンツ\n<section> — テーマごとの区切り\n<aside> — サイドバー、補足情報\n<footer> — ページやセクションのフッター',
        tip: 'div でも表示は同じですが、意味のあるタグを使うことで SEO やアクセシビリティが向上します。',
      },
    ],
  },
  {
    id: 'attributes',
    title: '属性',
    description: 'タグに追加情報を付ける属性を学びます',
    sections: [
      {
        heading: '属性とは？',
        content:
          '属性（attribute）は、タグに追加の情報を付けるものです。開始タグの中に、名前="値" の形式で書きます。\n\nたとえば <a href="https://example.com"> の href が属性で、「リンク先はこの URL です」という情報を追加しています。',
        code: `<a href="https://example.com">リンク</a>
<img src="photo.jpg" alt="写真">
<input type="text" placeholder="入力してください">`,
      },
      {
        heading: 'id と class',
        content:
          'id は要素に「固有の名前」を付けます。ページ内で1つだけ使えます。CSS でスタイルを当てたり、JavaScript で要素を取得したりするときに使います。\n\nclass は要素に「グループ名」を付けます。同じ class を複数の要素に付けられ、まとめてスタイルを適用できます。',
        code: `<!-- id: この要素だけ -->
<h1 id="page-title">ページタイトル</h1>

<!-- class: 同じスタイルを複数に適用 -->
<p class="highlight">重要な段落</p>
<p class="highlight">これも重要</p>
<p class="note">補足情報</p>`,
        tip: 'id は #page-title、class は .highlight のように CSS で参照します（CSS チュートリアルで詳しく学べます）。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'HTML の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'HTML でできること・できないこと',
        content:
          'HTML でできること：ページの構造を作る、テキスト・画像・リンクを配置する、フォームを作る\n\nHTML だけではできないこと：色やデザインの変更（→ CSS）、動きやインタラクション（→ JavaScript）、複雑なアプリの構築（→ React など）\n\nHTML は Web 開発の第一歩です。この土台の上に CSS と JavaScript を積み上げていきます。',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML（今ここ）— 骨組みを作る\n② CSS — 見た目を整える\n③ JavaScript — 動きを付ける\n④ React — 大きなアプリを効率よく作る\n\nどれも前のステップの知識が土台になります。HTML をしっかり理解した今の状態は、とても良いスタート地点です。',
        tip: 'おめでとうございます！HTML の基礎をすべて学びました 🎉',
      },
    ],
  },
]
