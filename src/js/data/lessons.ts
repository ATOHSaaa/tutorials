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
    title: 'JavaScript とは？',
    description: 'Web ページに動きを付ける JavaScript の基本を学びます',
    sections: [
      {
        heading: 'JavaScript とは何か？',
        content:
          'JavaScript（JS）は、Web ページに「動き」や「インタラクション」を付けるプログラミング言語です。HTML が骨組み、CSS が見た目なら、JavaScript は「脳」や「筋肉」のような役割です。\n\nボタンを押したら何かが起きる、フォームを送信する、画像をスライドショーにする——こういった動きはすべて JavaScript で作られています。',
      },
      {
        heading: 'JavaScript が動く場所',
        content:
          'もともと JavaScript はブラウザの中で動く言語として生まれました。今ではサーバー（Node.js）、スマホアプリ、デスクトップアプリなど、さまざまな場所で使われています。\n\nこのチュートリアルでは、まずブラウザでの基本を学びます。HTML と CSS の知識があると理解がスムーズです。',
        tip: 'デモのボタンを押して、JavaScript が画面を変える例を見てみてください。',
      },
      {
        heading: 'コードの書き方',
        content:
          'JavaScript は <script> タグで HTML に埋め込むか、.js ファイルとして読み込みます。1行ずつ上から実行されます。',
        code: `// これはコメント（実行されない）

console.log("こんにちは！");  // コンソールに表示
alert("Hello!");              // ポップアップを表示`,
      },
    ],
  },
  {
    id: 'variables',
    title: '変数',
    description: 'データを入れておく「箱」の使い方を学びます',
    sections: [
      {
        heading: '変数とは？',
        content:
          '変数は「データを入れておく箱」です。名前を付けて値を保存し、後から使えます。React チュートリアルで学んだ「状態」と同じく、変わりうるデータを入れる場所です。\n\nlet は後から値を変えられる変数、const は一度決めたら変えられない定数です。基本的には const を使い、変える必要があるときだけ let を使うのがおすすめです。',
        code: `const name = "太郎";     // 定数（変えられない）
let age = 25;            // 変数（変えられる）

age = 26;                // OK
// name = "花子";        // エラー！const は再代入できない`,
      },
      {
        heading: '変数名のルール',
        content:
          '変数名は英字・数字・アンダースコア（_）で書き、数字から始められません。意味がわかる名前を付けるのが大切です。\n\nuserName（キャメルケース）が JavaScript では一般的です。',
        code: `const userName = "太郎";   // ✓ わかりやすい
const user_age = 25;       // ✓ アンダースコアも OK
// const 1name = "x";      // ✗ 数字から始められない`,
        tip: 'デモで変数の値を変えて、表示がどう変わるか確認してください。',
      },
    ],
  },
  {
    id: 'types',
    title: 'データ型',
    description: '文字列・数値・真偽値など、データの種類を学びます',
    sections: [
      {
        heading: '主なデータ型',
        content:
          'JavaScript にはいくつかの基本的なデータ型があります。\n\n文字列（string）— テキスト。"こんにちは" のように引用符で囲む\n数値（number）— 123 や 3.14。計算に使う\n真偽値（boolean）— true（はい）か false（いいえ）\nundefined — 値がまだ入っていない\nnull — 意図的に「空」を表す',
        code: `const message = "こんにちは";  // 文字列
const price = 980;                // 数値
const isActive = true;            // 真偽値
let notSet;                       // undefined
const empty = null;               // null`,
      },
      {
        heading: '型の確認',
        content:
          'typeof 演算子で、値の型を調べられます。デバッグや学習のときに便利です。',
        code: `typeof "hello"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"`,
        tip: 'デモでさまざまな値の型を確認してみてください。',
      },
    ],
  },
  {
    id: 'operators',
    title: '演算子',
    description: '計算や比較をする方法を学びます',
    sections: [
      {
        heading: '計算演算子',
        content:
          '+, -, *, / で四則演算ができます。% は余り（モジュロ）、** はべき乗です。',
        code: `10 + 3   // 13
10 - 3   // 7
10 * 3   // 30
10 / 3   // 3.333...
10 % 3   // 1（余り）
2 ** 3   // 8（2の3乗）`,
      },
      {
        heading: '比較演算子',
        content:
          '値を比較して true / false を返します。条件分岐でよく使います。',
        code: `5 > 3    // true（5は3より大きい）
5 === 5  // true（等しい）※ === を使う
5 !== 3  // true（等しくない）

// 文字列の連結
"こんにちは" + "太郎"  // "こんにちは太郎"`,
        tip: '等しいかどうかは === を使いましょう（== は使わない方が安全です）。',
      },
    ],
  },
  {
    id: 'conditions',
    title: '条件分岐',
    description: '条件によって処理を変える if を学びます',
    sections: [
      {
        heading: 'if 文',
        content:
          '「もし〜なら、こうする」という処理を書けます。条件が true のときだけ中のコードが実行されます。',
        code: `const age = 20;

if (age >= 18) {
  console.log("成人です");
} else {
  console.log("未成年です");
}`,
      },
      {
        heading: 'else if と三項演算子',
        content:
          '複数の条件を順番にチェックするには else if を使います。シンプルな条件なら三項演算子（? :）で1行に書けます。',
        code: `const score = 75;

if (score >= 90) {
  console.log("優");
} else if (score >= 70) {
  console.log("良");
} else {
  console.log("要努力");
}

// 三項演算子
const label = score >= 60 ? "合格" : "不合格";`,
        tip: 'デモで点数を変えて、表示がどう切り替わるか試してみてください。',
      },
    ],
  },
  {
    id: 'loops',
    title: 'ループ',
    description: '同じ処理を繰り返す for と while を学びます',
    sections: [
      {
        heading: 'for ループ',
        content:
          '決まった回数だけ処理を繰り返します。配列の各要素を1つずつ処理するときによく使います。',
        code: `// 0 から 4 まで繰り返す
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}

// 配列の要素を順番に処理
const fruits = ["りんご", "バナナ", "みかん"];
for (const fruit of fruits) {
  console.log(fruit);
}`,
      },
      {
        heading: 'while ループ',
        content:
          '条件が true の間、繰り返し続けます。回数が決まっていないときに使います。無限ループに注意してください。',
        code: `let count = 0;

while (count < 3) {
  console.log(count);
  count++;  // count を 1 増やす
}`,
        tip: 'デモでループの動きを確認してください。',
      },
    ],
  },
  {
    id: 'functions',
    title: '関数',
    description: '処理をまとめて再利用する関数を学びます',
    sections: [
      {
        heading: '関数とは？',
        content:
          '関数は「処理のまとまり」です。同じ計算や処理を何度も書く代わりに、関数にまとめて名前を付け、必要なときに呼び出します。React のコンポーネントも、広い意味では関数の一種です。',
        code: `// 関数を定義
function greet(name) {
  return "こんにちは、" + name + "さん！";
}

// 関数を呼び出す
greet("太郎");  // "こんにちは、太郎さん！"
greet("花子");  // "こんにちは、花子さん！"`,
      },
      {
        heading: 'アロー関数',
        content:
          '=> を使った短い書き方もよく使われます。React やモダンな JavaScript で頻出です。',
        code: `// 通常の関数
function add(a, b) {
  return a + b;
}

// アロー関数
const add = (a, b) => a + b;

add(2, 3);  // 5`,
        tip: 'デモで関数を呼び出して、結果を確認してください。',
      },
    ],
  },
  {
    id: 'arrays',
    title: '配列とオブジェクト',
    description: '複数のデータをまとめて扱う方法を学びます',
    sections: [
      {
        heading: '配列（Array）',
        content:
          '配列は複数の値を順番に並べたリストです。インデックス（0 から始まる番号）で各要素にアクセスします。',
        code: `const colors = ["赤", "緑", "青"];

colors[0]           // "赤"
colors.length       // 3
colors.push("黄")   // 末尾に追加
colors.map(c => c + "色")  // 各要素を変換`,
      },
      {
        heading: 'オブジェクト（Object）',
        content:
          'オブジェクトは「キー: 値」のペアでデータをまとめます。ユーザー情報や設定など、関連するデータを1つにまとめるときに使います。',
        code: `const user = {
  name: "太郎",
  age: 25,
  isAdmin: false
};

user.name     // "太郎"
user.age      // 25

// JSON 形式（API でよく使う）
JSON.stringify(user);`,
        tip: 'デモで配列の操作を試してみてください。',
      },
    ],
  },
  {
    id: 'dom',
    title: 'DOM 操作',
    description: 'JavaScript で HTML を変更する方法を学びます',
    sections: [
      {
        heading: 'DOM とは？',
        content:
          'DOM（Document Object Model）は、HTML を JavaScript から操作できるようにしたものです。ブラウザが HTML を読み込むと、DOM という木構造のオブジェクトが作られ、JavaScript で要素を取得・変更できます。',
        code: `// ID で要素を取得
const title = document.getElementById("title");

// テキストを変更
title.textContent = "新しいタイトル";

// クラスを追加
title.classList.add("highlight");`,
      },
      {
        heading: 'イベントリスナー',
        content:
          'ユーザーの操作（クリック、入力など）に反応するには addEventListener を使います。これがインタラクティブな Web の基本です。',
        code: `const button = document.getElementById("btn");

button.addEventListener("click", () => {
  alert("クリックされました！");
});`,
        tip: 'デモのボタンをクリックして、DOM が変わるのを確認してください。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'JavaScript の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'JavaScript でできること',
        content:
          'このチュートリアルで学んだのは JavaScript の基礎です。さらに深く学ぶなら、非同期処理（async/await）、fetch API（サーバーとの通信）、モジュール（import/export）、ES6+ の新機能などが次のステップです。',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML — 骨組み ✓\n② CSS — 見た目 ✓\n③ JavaScript（今ここ）— 動き ✓\n④ React — 大きなアプリを効率よく作る\n⑤ Astro — 高速なサイトを構築\n\nJavaScript の基礎ができたので、React で学ぶ State やコンポーネントの理解がぐっと楽になります。',
        tip: 'おめでとうございます！JavaScript の基礎をすべて学びました 🎉',
      },
    ],
  },
]
