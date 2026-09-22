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
    title: 'DOM とは？',
    description: 'Document Object Model の基本概念を学びます',
    sections: [
      {
        heading: 'DOM とは何か？',
        content:
          'DOM（Document Object Model）は、ブラウザが HTML を読み込んだときに作られる「木構造のオブジェクト」です。HTML の各タグがノード（節）となり、JavaScript から取得・変更・追加・削除できます。\n\nHTML は設計図、DOM はその設計図を JavaScript で操作できる形にしたもの——と考えるとわかりやすいです。',
      },
      {
        heading: 'なぜ DOM 操作を学ぶのか？',
        content:
          '• ボタンクリックで表示を変える\n• フォームの入力をリアルタイムに反映\n• リストに項目を追加する\n• モーダルを開閉する\n\nReact 以前はこれがフロントエンドの基本。今でも DevTools、小さなスクリプト、レガシーコードで必須スキルです。',
        tip: 'デモで DOM ツリーの構造を確認してください。',
      },
      {
        heading: 'document オブジェクト',
        content:
          'JavaScript では document がページ全体の入り口です。document.querySelector()、document.createElement() など、ほとんどの DOM 操作は document から始まります。',
      },
    ],
  },
  {
    id: 'selecting',
    title: '要素の取得',
    description: 'querySelector などで要素を見つける方法を学びます',
    sections: [
      {
        heading: 'querySelector / querySelectorAll',
        content:
          'CSS セレクタと同じ書き方で要素を取得できます。最もよく使う方法です。',
        code: `// 最初の1つ
const title = document.querySelector('h1');
const btn = document.querySelector('#submit');
const item = document.querySelector('.card');

// すべて取得（NodeList）
const items = document.querySelectorAll('.list-item');
items.forEach(el => console.log(el.textContent));`,
      },
      {
        heading: 'getElementBy 系',
        content:
          '古い API ですが、まだよく見ます。id は1つだけ、class は HTMLCollection を返します。',
        code: `document.getElementById('header');
document.getElementsByClassName('item');
document.getElementsByTagName('p');`,
        tip: 'デモでセレクタを変えて要素を取得してみてください。',
      },
      {
        heading: 'セレクタのコツ',
        content:
          '• #id — ID（ページに1つが理想）\n• .class — クラス\n• [data-id="x"] — data 属性\n• .parent > .child — 直接の子\n• .ancestor .descendant — 子孫\n\nCSS チュートリアルで学んだセレクタがそのまま使えます。',
      },
    ],
  },
  {
    id: 'modifying',
    title: '内容の変更',
    description: 'テキストと HTML を書き換える方法を学びます',
    sections: [
      {
        heading: 'textContent vs innerHTML',
        content:
          'textContent はテキストのみ（HTML タグはエスケープ）。innerHTML は HTML として解析・挿入。ユーザー入力を innerHTML に入れると XSS の危険があるため、基本は textContent を使います。',
        code: `const el = document.querySelector('#message');

el.textContent = 'プレーンテキスト';
el.innerHTML = '<strong>太字</strong>に変更'; // 信頼できる HTML のみ`,
      },
      {
        heading: '値の読み書き',
        content:
          'input 要素は .value、checkbox は .checked、select は .value で取得・設定します。',
        code: `const input = document.querySelector('#name');
console.log(input.value);  // 読み取り
input.value = '田中';       // 書き込み

const check = document.querySelector('#agree');
check.checked = true;`,
        tip: 'デモでテキストと HTML の変更を試してください。',
      },
      {
        heading: 'insertAdjacentHTML',
        content:
          '要素の前後に HTML を挿入。createElement より手軽ですが、やはり XSS に注意します。',
      },
    ],
  },
  {
    id: 'attributes',
    title: '属性とクラス',
    description: '属性の操作と classList の使い方を学びます',
    sections: [
      {
        heading: '属性の取得・設定',
        content:
          'getAttribute、setAttribute、removeAttribute。data-* 属性は dataset でアクセスできます。',
        code: `const link = document.querySelector('a');
link.getAttribute('href');
link.setAttribute('target', '_blank');
link.removeAttribute('disabled');

// data-user-id="42" → el.dataset.userId`,
      },
      {
        heading: 'classList',
        content:
          'クラスの追加・削除・トグル。className を直接書き換えるより安全で読みやすいです。',
        code: `const box = document.querySelector('.box');

box.classList.add('active');
box.classList.remove('hidden');
box.classList.toggle('open');       // あれば削除、なければ追加
box.classList.contains('active');   // true/false`,
        tip: 'デモで classList のトグルを試してください。',
      },
      {
        heading: 'aria 属性',
        content:
          'setAttribute("aria-expanded", "true") など。アクセシビリティチュートリアルと連携して、動的 UI の状態をスクリーンリーダーに伝えます。',
      },
    ],
  },
  {
    id: 'styles',
    title: 'スタイルの操作',
    description: 'style プロパティと CSS クラスの使い分けを学びます',
    sections: [
      {
        heading: 'element.style',
        content:
          'インラインスタイルを直接変更。キャメルケースで書きます（background-color → backgroundColor）。',
        code: `const el = document.querySelector('.box');
el.style.backgroundColor = '#3b82f6';
el.style.display = 'none';
el.style.transform = 'translateX(100px)';`,
      },
      {
        heading: 'クラスで制御する方がよい場合',
        content:
          '複数のプロパティをまとめて変えるなら CSS クラスの追加がベター。style は1〜2プロパティの動的変更向けです。CSS チュートリアルで定義した .active { ... } を classList.add で付けます。',
        tip: 'デモでスタイルとクラスの切り替えを比較してください。',
      },
      {
        heading: 'getComputedStyle',
        content:
          'CSS ファイルで定義された最終的なスタイル値を取得。要素の実際の色やサイズを調べるときに使います。',
      },
    ],
  },
  {
    id: 'events',
    title: 'イベントリスナー',
    description: 'クリックや入力などのイベント処理を学びます',
    sections: [
      {
        heading: 'addEventListener',
        content:
          '要素にイベントリスナーを登録。第1引数はイベント名、第2引数はハンドラ関数。',
        code: `const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  console.log('クリックされた');
});

// イベントオブジェクト
btn.addEventListener('click', (event) => {
  event.preventDefault();  // デフォルト動作を止める
  event.target;            // クリックされた要素
});`,
      },
      {
        heading: 'よく使うイベント',
        content:
          'click、input、change、submit、keydown、mouseenter/mouseleave、focus/blur。フォームは input（リアルタイム）と change（確定時）の使い分けが重要です。',
        tip: 'デモでクリック・入力イベントを試してください。',
      },
      {
        heading: 'removeEventListener',
        content:
          '同じ関数参照を渡して解除。一度きりの処理なら { once: true } オプションも便利です。',
      },
    ],
  },
  {
    id: 'delegation',
    title: 'イベント委譲',
    description: '親要素で子のイベントをまとめて処理する方法を学びます',
    sections: [
      {
        heading: 'イベント委譲とは？',
        content:
          '子要素それぞれにリスナーを付ける代わりに、親に1つだけ付けて event.target でどの子がクリックされたか判定します。動的に追加される要素にも効きます。',
        code: `const list = document.querySelector('#list');

list.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item');
  if (!item) return;
  console.log('クリック:', item.dataset.id);
});`,
      },
      {
        heading: 'なぜ便利か？',
        content:
          '• 100個のボタンに100個のリスナー → 1個で済む\n• 後から追加した要素も自動で対応\n• メモリ効率が良い',
        tip: 'デモでリスト項目のクリック委譲を試してください。',
      },
      {
        heading: 'closest と matches',
        content:
          'event.target.closest(".btn") はクリックされた要素かその祖先で .btn を探す。matches() でセレクタ一致を判定します。',
      },
    ],
  },
  {
    id: 'creating',
    title: '要素の作成と削除',
    description: 'DOM に要素を追加・削除する方法を学びます',
    sections: [
      {
        heading: 'createElement と append',
        content:
          '新しい要素を作り、親に追加します。現代的な API は append / prepend / remove です。',
        code: `const li = document.createElement('li');
li.textContent = '新しい項目';
li.classList.add('list-item');

const ul = document.querySelector('ul');
ul.append(li);       // 末尾に追加
ul.prepend(li);      // 先頭に追加
li.remove();         // 要素を削除`,
      },
      {
        heading: 'DocumentFragment',
        content:
          '大量の要素を追加するとき、Fragment にまとめてから1回 append すると再描画が1回で済み、パフォーマンスが向上します。',
        tip: 'デモでリストへの項目追加を試してください。',
      },
      {
        heading: 'cloneNode',
        content:
          '既存の要素を複製。cloneNode(true) で子要素も含めてコピー。テンプレート要素 <template> と組み合わせるパターンもあります。',
      },
    ],
  },
  {
    id: 'traversal',
    title: 'DOM ツリーの走査',
    description: '親・子・兄弟要素をたどる方法を学びます',
    sections: [
      {
        heading: '親子・兄弟の取得',
        content:
          'parentElement、children、firstElementChild、nextElementSibling など。テキストノードを含む parentNode と、要素のみの parentElement の違いに注意します。',
        code: `const el = document.querySelector('.item');

el.parentElement;
el.children;              // HTMLCollection
el.nextElementSibling;
el.previousElementSibling;`,
      },
      {
        heading: 'querySelector は子孫から',
        content:
          '要素内の子孫を探すときは el.querySelector(".child")。document 全体からではなく、スコープを限定できます。',
        tip: 'デモで DOM ツリーの親子関係を確認してください。',
      },
      {
        heading: 'matches',
        content:
          'el.matches(".active") でその要素がセレクタに一致するか判定。イベント委譲と組み合わせてよく使います。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'DOM 操作の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'DOM 操作と React',
        content:
          'React では直接 DOM を触りません。state を更新すると React が DOM を更新します（宣言的 UI）。ただし useRef で特定要素にアクセス、useEffect 内でサードパーティライブラリを初期化する場面では DOM 知識が活きます。',
      },
      {
        heading: 'さらに学ぶこと',
        content:
          '• MutationObserver — DOM の変化を監視\n• Intersection Observer — 要素の表示判定（無限スクロール）\n• Custom Elements — Web Components\n• requestAnimationFrame — スムーズなアニメーション',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML → ② CSS → ③ JavaScript → ④ DOM 操作入門（今ここ）→ ⑤ React で宣言的 UI を学ぶ',
        tip: 'おめでとうございます！DOM 操作入門をすべて学びました 🎉',
      },
    ],
  },
]
