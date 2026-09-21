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
    title: 'React とは？',
    description: 'React の基本概念と、なぜ使われるのかを学びます',
    sections: [
      {
        heading: 'React とは',
        content:
          'React は Facebook（現 Meta）が開発した JavaScript ライブラリです。ユーザーインターフェース（UI）を「コンポーネント」という小さな部品に分割して構築します。Web サイト、モバイルアプリ、デスクトップアプリなど、幅広い場面で使われています。',
      },
      {
        heading: 'コンポーネント思考',
        content:
          'React では画面を「コンポーネント」の組み合わせで作ります。ボタン、カード、ナビゲーションバーなど、再利用可能な部品を組み合わせて複雑な UI を構築します。レゴブロックのように、同じ部品を何度でも使えます。',
        tip: 'このチュートリアルサイト自体も React で作られています！',
      },
      {
        heading: '「状態」とは何か？',
        content:
          'ここでいう「状態（State）」とは、アプリが「今どうなっているか」を表すデータのことです。ユーザーがボタンを押したか、ログインしているか、入力欄に何を書いたか、いいねの数が何個か——こういった「変わりうる情報」がすべて状態です。\n\n身近な例で考えてみましょう。エアコンのリモコンに「設定温度: 26℃」と表示されています。26℃という数字が状態です。温度を下げるボタンを押すと、状態が 25℃ に変わり、画面の表示も自動的に「25℃」に更新されます。アプリも同じです。「カウントが 0」という状態なら「0」と表示し、「カウントが 5」に変わったら「5」と表示する——UI は常に状態の「写し絵」のようなものです。',
        tip: '状態が変わる → 画面が変わる。この流れが React の基本です。レッスン5で useState を使った具体的な書き方を学びます。',
      },
      {
        heading: '宣言的 UI',
        content:
          'では「宣言的（Declarative）」とは何か？ 従来の JavaScript では、画面を変えるときに「この要素を探して、テキストを書き換えて、クラスを追加して…」と手順（命令）を一つずつ書く必要がありました。これを「命令的（Imperative）」と呼びます。\n\nReact では逆に、「状態がこうなったら、画面はこう見える」と結果だけを書きます。DOM を直接触る必要はありません。状態を更新するだけで、React が自動的に画面を正しい見た目に直してくれます。\n\n例えば「ログイン状態 = true なら『ようこそ』を表示、false なら『ログインしてください』を表示」と書けば、ログインボタンを押して状態が変わると、React がどちらを表示するか判断して画面を更新します。開発者は「どう表示するか」だけ考え、「どう書き換えるか」は React に任せられます。',
        code: `// 状態によって表示が決まる（宣言的）
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>ようこそ！</h1>;
  }
  return <h1>ログインしてください</h1>;
}

// isLoggedIn が true に変わるだけで、
// React が自動的に「ようこそ！」に切り替える`,
      },
    ],
  },
  {
    id: 'jsx',
    title: 'JSX の基礎',
    description: 'HTML に似た記法で UI を書く方法を学びます',
    sections: [
      {
        heading: 'JSX とは',
        content:
          'JSX（JavaScript XML）は、JavaScript の中に HTML のような記法を書ける拡張です。React では JSX を使って UI の構造を直感的に記述します。',
        code: `function Greeting() {
  return <h1>こんにちは、React！</h1>;
}`,
      },
      {
        heading: 'JavaScript 式の埋め込み',
        content:
          'JSX の中では波括弧 {} を使って JavaScript の式を埋め込めます。変数、計算結果、関数の戻り値などを表示できます。',
        code: `const name = "太郎";
const element = <h1>こんにちは、{name}さん！</h1>;

// 計算もできる
const total = <p>合計: {10 + 20}円</p>;`,
      },
      {
        heading: '見た目を整える2つの方法',
        content:
          '要素の色・サイズ・余白などを変える方法は、大きく2つあります。\n\n① CSS クラス（className）— あらかじめ CSS ファイルなどに書いたスタイルに名前を付けて、要素に「この名前のスタイルを使って」と指定する方法です。同じ見た目を何度も使うときに向いています。\n\n② インラインスタイル（style）— その要素のタグに直接「色は青、文字サイズは18px」と書く方法です。HTML の style 属性と同じイメージで、「インライン（その行の中）にスタイルを書く」という意味です。1要素だけちょっと変えたいときに使います。',
        tip: 'デモの「CSS クラス」と「インラインスタイル」を見比べてみてください。見た目は似ていますが、書き方が違います。',
      },
      {
        heading: 'className の書き方',
        content:
          'HTML では class="card" と書きますが、JSX では class が JavaScript の予約語なので className と書きます。CSS ファイルに .card { ... } と定義したスタイルが適用されます。',
        code: `// CSS ファイルに .card { padding: 16px; } と書いておく

<div className="card">カード</div>`,
      },
      {
        heading: 'インラインスタイルの書き方',
        content:
          'HTML では次のように書けます。\n\n<div style="color: blue; font-size: 18px">青いテキスト</div>\n\nReact の JSX では、style にはオブジェクト（{ }）を渡します。波括弧が2重になるのは、「JSX の中で JavaScript のオブジェクトを書いている」ためです。CSS の font-size は JavaScript では fontSize（キャメルケース）と書きます。',
        code: `// HTML の場合
<div style="color: blue; font-size: 18px">青いテキスト</div>

// React JSX の場合
<div style={{ color: 'blue', fontSize: '18px' }}>
  青いテキスト
</div>`,
        tip: 'インラインスタイルはその場限りの指定向きです。同じスタイルを何度も使うなら className + CSS ファイルがおすすめです。',
      },
    ],
  },
  {
    id: 'components',
    title: 'コンポーネント',
    description: '再利用可能な UI 部品を作る方法を学びます',
    sections: [
      {
        heading: 'コンポーネントとは？',
        content:
          'コンポーネントは「画面の部品」のことです。料理に例えると、ハンバーガーは「パン」「肉」「野菜」などの部品を組み合わせて作ります。Web ページも同じで、「ヘッダー」「ボタン」「カード」などの部品を組み合わせて作ります。\n\nReact では、この部品を JavaScript の関数として作ります。だから「関数コンポーネント」と呼びます。',
        tip: 'デモの3枚のカードは、同じ WelcomeCard という部品を3回使っているだけです。',
      },
      {
        heading: '関数コンポーネントの書き方',
        content:
          'やることはシンプルで、たった2ステップです。\n\n① 関数を作る — 「この部品はこう見える」と JSX を return（返す）する\n② タグのように使う — <Welcome /> のように書くと、関数の中身が画面に表示される\n\nポイントは、コンポーネント名は必ず大文字で始めることです。小文字だと普通の HTML タグ（div や p）と区別できなくなるため、React のルールになっています。',
        code: `// ① 部品（関数）を作る
function Welcome() {
  return <h1>ようこそ！</h1>;
}

// ② タグのように使う
function App() {
  return (
    <div>
      <Welcome />   {/* 1回目 →「ようこそ！」が表示 */}
      <Welcome />   {/* 2回目 → また「ようこそ！」が表示 */}
    </div>
  );
}`,
      },
      {
        heading: 'なぜ関数なの？',
        content:
          '「画面の部品を関数で作る」と聞くと不思議に感じるかもしれません。でも考えてみてください。Welcome という部品が10箇所で必要なとき、同じ HTML を10回コピペするより、Welcome 関数を1回書いて <Welcome /> を10回置く方が楽ですよね。\n\nしかも中身を変えたいとき、関数の中だけ直せば、10箇所すべてが一度に更新されます。これがコンポーネントの便利なところです。',
      },
      {
        heading: 'コンポーネントの組み合わせ',
        content:
          '部品はさらに小さな部品に分けられます。Web ページ全体を1つの関数に書くのではなく、Header（ヘッダー）、Main（本文）のように分けて、最後に組み合わせます。レゴブロックを組み立てるイメージです。',
        code: `function Header() {
  return <header>サイト名</header>;
}

function Main() {
  return <main>メインコンテンツ</main>;
}

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}`,
        tip: 'Fragment（<>...</>）で複数の要素をラップできます。',
      },
    ],
  },
  {
    id: 'props',
    title: 'Props（プロパティ）',
    description: '親から子へデータを渡す方法を学びます',
    sections: [
      {
        heading: 'Props とは',
        content:
          'Props は親コンポーネントから子コンポーネントへデータを渡すための仕組みです。関数の引数のように受け取り、コンポーネントを柔軟に再利用できます。',
        code: `function Greeting({ name, age }) {
  return (
    <p>{name}さん（{age}歳）こんにちは！</p>
  );
}

// 使い方
<Greeting name="花子" age={25} />
<Greeting name="太郎" age={30} />`,
      },
      {
        heading: 'デフォルト値',
        content:
          'Props にデフォルト値を設定できます。値が渡されなかった場合に使われます。',
        code: `function Button({ label = "クリック", color = "blue" }) {
  return (
    <button style={{ background: color }}>
      {label}
    </button>
  );
}`,
        tip: 'Props は読み取り専用です。子コンポーネント内で変更してはいけません。',
      },
    ],
  },
  {
    id: 'state',
    title: 'State（状態）',
    description: '変化するデータを管理する useState を学びます',
    sections: [
      {
        heading: 'useState フック',
        content:
          'State はコンポーネント内で変化するデータを管理します。useState フックを使って状態を宣言し、更新関数で値を変更します。',
        code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}`,
      },
      {
        heading: 'State が変わると再レンダリング',
        content:
          'State が更新されると、React はそのコンポーネントを自動的に再レンダリングします。画面が最新の状態に保たれます。これが React の核心機能です。',
        code: `const [text, setText] = useState('');

// 入力と連動
<input
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
<p>入力内容: {text}</p>`,
        tip: 'State を直接変更せず、必ず set 関数を使ってください。',
      },
    ],
  },
  {
    id: 'events',
    title: 'イベント処理',
    description: 'クリックや入力などのユーザー操作に反応する方法を学びます',
    sections: [
      {
        heading: 'イベントハンドラ',
        content:
          'React では onClick、onChange、onSubmit などの props でイベントを処理します。関数を渡して、ユーザー操作に反応させます。',
        code: `function Button() {
  const handleClick = () => {
    alert('クリックされました！');
  };

  return <button onClick={handleClick}>押して</button>;
}`,
      },
      {
        heading: 'イベントオブジェクト',
        content:
          'イベントハンドラはイベントオブジェクトを受け取ります。入力値の取得や、デフォルト動作の防止などに使います。',
        code: `function Form() {
  const handleSubmit = (e) => {
    e.preventDefault(); // ページリロードを防ぐ
    console.log('送信！');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">送信</button>
    </form>
  );
}`,
        tip: 'フォーム送信時は e.preventDefault() を忘れずに！',
      },
    ],
  },
  {
    id: 'conditional',
    title: '条件付きレンダリング',
    description: '条件によって表示を切り替える方法を学びます',
    sections: [
      {
        heading: 'if と三項演算子',
        content:
          '条件に応じて異なる UI を表示できます。if 文、三項演算子（? :）、論理 AND（&&）などを使います。',
        code: `function LoginStatus({ isLoggedIn }) {
  // 三項演算子
  return (
    <p>
      {isLoggedIn ? 'ログイン中' : '未ログイン'}
    </p>
  );
}

// && で条件付き表示
{isLoggedIn && <button>ログアウト</button>}`,
      },
      {
        heading: 'よくあるパターン',
        content:
          'ローディング中、エラー時、データなしなど、状態に応じた表示切り替えは React アプリで頻繁に使われます。',
        code: `function DataDisplay({ loading, error, data }) {
  if (loading) return <p>読み込み中...</p>;
  if (error) return <p>エラー: {error}</p>;
  if (!data) return <p>データがありません</p>;

  return <div>{data}</div>;
}`,
      },
    ],
  },
  {
    id: 'lists',
    title: 'リストと key',
    description: '配列データを一覧表示する方法を学びます',
    sections: [
      {
        heading: 'map でリスト表示',
        content:
          '配列の map メソッドで、各要素をコンポーネントに変換して一覧表示します。',
        code: `const fruits = ['りんご', 'バナナ', 'みかん'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}`,
      },
      {
        heading: 'key の重要性',
        content:
          'リストの各要素には一意の key を付けます。React が要素の追加・削除・並び替えを正しく処理するために必要です。',
        code: `const users = [
  { id: 1, name: '太郎' },
  { id: 2, name: '花子' },
];

{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}`,
        tip: 'index を key に使うのは並び替えがある場合は避けましょう。id など一意の値を使います。',
      },
    ],
  },
  {
    id: 'effects',
    title: 'useEffect',
    description: '副作用（API 呼び出しなど）を扱う方法を学びます',
    sections: [
      {
        heading: 'useEffect とは',
        content:
          'useEffect は「副作用」を処理するフックです。API のデータ取得、タイマーの設定、DOM 操作など、レンダリング以外の処理を行います。',
        code: `import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(id); // クリーンアップ
  }, []);

  return <p>{seconds} 秒経過</p>;
}`,
      },
      {
        heading: '依存配列',
        content:
          'useEffect の第2引数は依存配列です。指定した値が変わったときだけ effect が再実行されます。空配列 [] はマウント時のみ実行します。',
        code: `// マウント時のみ実行
useEffect(() => { ... }, []);

// userId が変わるたびに実行
useEffect(() => {
  fetchUser(userId);
}, [userId]);`,
        tip: 'クリーンアップ関数（return）でタイマー解除やイベント解除を忘れずに。',
      },
    ],
  },
  {
    id: 'forms',
    title: 'フォーム',
    description: 'ユーザー入力を扱うフォームの作り方を学びます',
    sections: [
      {
        heading: 'Controlled Components',
        content:
          'React ではフォームの値を State で管理する「制御コンポーネント」パターンが推奨されます。入力と State が常に同期します。',
        code: `function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="名前"
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="メール"
      />
      <button type="submit">送信</button>
    </form>
  );
}`,
      },
      {
        heading: '複数フィールドの管理',
        content:
          'フィールドが多い場合は、1つのオブジェクト State でまとめて管理すると便利です。',
        code: `const [form, setForm] = useState({
  name: '',
  email: '',
  message: '',
});

const update = (field, value) => {
  setForm(prev => ({ ...prev, [field]: value }));
};`,
        tip: 'おめでとうございます！React の基礎をすべて学びました 🎉',
      },
    ],
  },
]
