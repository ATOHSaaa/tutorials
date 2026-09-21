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
    title: 'TypeScript とは？',
    description: '型安全な JavaScript、TypeScript の基本を学びます',
    sections: [
      {
        heading: 'TypeScript とは何か？',
        content:
          'TypeScript（TS）は、Microsoft が開発した JavaScript に「型」を追加した言語です。JavaScript のスーパーセット——つまり、JavaScript のコードはそのまま TypeScript として動きます。\n\nブラウザは TypeScript を直接実行できないので、ビルド時に JavaScript に変換（コンパイル）してから使います。',
      },
      {
        heading: 'なぜ TypeScript を使うの？',
        content:
          'JavaScript では、変数に何のデータが入るか決まっていません。だから「文字列を入れるつもりが数値を入れた」「存在しないプロパティにアクセスした」といったミスが、実行するまで気づけないことがあります。\n\nTypeScript は「この変数には文字列が入る」と事前に宣言するので、エディタが間違いをすぐに教えてくれます。コードが増えるほど、この恩恵は大きくなります。',
        tip: 'デモで「型なし」と「型あり」の違いを確認してみてください。',
      },
      {
        heading: 'JavaScript との関係',
        content:
          'TypeScript = JavaScript + 型。既存の JavaScript の知識がそのまま活きます。React、Astro、Node.js など、モダンな開発では TypeScript が標準になっています。',
        code: `// JavaScript
const name = "太郎";

// TypeScript（型を追加）
const name: string = "太郎";`,
      },
    ],
  },
  {
    id: 'basic-types',
    title: '基本の型',
    description: 'string・number・boolean など基本的な型を学びます',
    sections: [
      {
        heading: '型注釈（Type Annotation）',
        content:
          '変数名の後に : 型名 を書くのが「型注釈」です。「この変数にはこの型の値だけ入れられる」と宣言します。',
        code: `const name: string = "太郎";
const age: number = 25;
const isActive: boolean = true;

// 型が合わない代入はエラー
// age = "二十五";  // ✗ Error!`,
      },
      {
        heading: 'よく使う基本型',
        content:
          'string — 文字列\nnumber — 数値（整数も小数も同じ）\nboolean — true / false\nnull / undefined — 空・未定義\nany — 何でも OK（使いすぎ注意）\nunknown — 型がわからない（any より安全）',
        code: `let message: string = "こんにちは";
let count: number = 0;
let flag: boolean = false;

// 配列の型
let numbers: number[] = [1, 2, 3];
let names: string[] = ["太郎", "花子"];`,
        tip: 'デモで型を変えて、エラーになる例を見てみてください。',
      },
    ],
  },
  {
    id: 'interfaces',
    title: 'インターフェース',
    description: 'オブジェクトの「形」を定義する方法を学びます',
    sections: [
      {
        heading: 'interface とは？',
        content:
          'インターフェースはオブジェクトの「設計図」です。「name は文字列、age は数値を持つオブジェクト」という形を定義します。API のレスポンスやユーザー情報など、構造が決まっているデータに使います。',
        code: `interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "太郎",
  age: 25,
  email: "taro@example.com"
};

// user.phone = "090-...";  // ✗ phone は定義されていない`,
      },
      {
        heading: '型エイリアス（type）',
        content:
          'type でも同様のことができます。interface はオブジェクト向き、type はユニオン型など柔軟な型に向いています。どちらを使うかはチームの好みや用途次第です。',
        code: `type User = {
  name: string;
  age: number;
};

type ID = string | number;  // ユニオン型`,
        tip: 'デモで User オブジェクトの型チェックを体験してください。',
      },
    ],
  },
  {
    id: 'functions',
    title: '関数の型',
    description: '引数と戻り値に型を付ける方法を学びます',
    sections: [
      {
        heading: '関数の型注釈',
        content:
          '引数と戻り値に型を書きます。これにより、間違った型の値を渡したり、間違った型を返したりするとエラーになります。',
        code: `function greet(name: string): string {
  return "こんにちは、" + name + "さん！";
}

greet("太郎");    // ✓ OK
// greet(123);     // ✗ Error!

function add(a: number, b: number): number {
  return a + b;
}`,
      },
      {
        heading: 'アロー関数の型',
        content:
          'アロー関数でも同様に型を書けます。React のコンポーネントやイベントハンドラでよく使う書き方です。',
        code: `const multiply = (a: number, b: number): number => {
  return a * b;
};

// 引数の型だけ書く（戻り値は推論）
const double = (n: number) => n * 2;`,
        tip: 'デモで関数の型チェックを試してみてください。',
      },
    ],
  },
  {
    id: 'arrays-objects',
    title: '配列とオブジェクトの型',
    description: '複数のデータを型安全に扱う方法を学びます',
    sections: [
      {
        heading: '配列の型',
        content:
          '要素の型を指定します。string[] または Array<string> の2つの書き方があります。',
        code: `const fruits: string[] = ["りんご", "バナナ"];
const scores: number[] = [90, 85, 72];

// タプル（要素数と型が固定）
const pair: [string, number] = ["太郎", 25];`,
      },
      {
        heading: 'オブジェクトの型',
        content:
          'interface や type で定義した型をオブジェクトに適用します。ネストしたオブジェクトも型定義できます。',
        code: `interface Address {
  city: string;
  zip: string;
}

interface Person {
  name: string;
  address: Address;
}

const person: Person = {
  name: "太郎",
  address: { city: "東京", zip: "100-0001" }
};`,
      },
    ],
  },
  {
    id: 'union-optional',
    title: 'ユニオンとオプショナル',
    description: '複数の型や「あってもなくてもいい」プロパティを学びます',
    sections: [
      {
        heading: 'ユニオン型（|）',
        content:
          '「A または B」のどちらかの型を受け入れます。状態が複数あるときによく使います。',
        code: `type Status = "loading" | "success" | "error";

let status: Status = "loading";
// status = "unknown";  // ✗ 定義されていない値はエラー

type ID = string | number;
let id: ID = "abc123";
id = 42;  // ✓ どちらも OK`,
      },
      {
        heading: 'オプショナル（?）',
        content:
          'プロパティ名の後に ? を付けると、「あってもなくてもいい」プロパティになります。関数の引数を省略可能にするのにも使います。',
        code: `interface User {
  name: string;
  age: number;
  email?: string;  // 省略可能
}

const user1: User = { name: "太郎", age: 25 };
const user2: User = { name: "花子", age: 30, email: "hanako@..." };`,
        tip: 'デモで Status 型の切り替えを試してみてください。',
      },
    ],
  },
  {
    id: 'generics',
    title: 'ジェネリクス',
    description: '型をパラメータ化するジェネリクスの入門を学びます',
    sections: [
      {
        heading: 'ジェネリクスとは？',
        content:
          'ジェネリクスは「型の変数」です。関数やクラスが、どんな型のデータでも扱えるようにしつつ、型安全を保てます。配列の最初の要素を返す関数などで威力を発揮します。',
        code: `// T は型のプレースホルダー
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

first<string>(["a", "b"]);  // string
first<number>([1, 2, 3]);   // number`,
      },
      {
        heading: 'よくある使い方',
        content:
          'React の useState<number>(0)、API レスポンスの型付け、汎用的なユーティリティ関数など、実務で頻繁に登場します。',
        code: `interface ApiResponse<T> {
  data: T;
  status: number;
}

type UserResponse = ApiResponse<User>;`,
        tip: '最初は難しく感じますが、慣れると「型の関数」と考えれば OK です。',
      },
    ],
  },
  {
    id: 'inference',
    title: '型推論',
    description: 'TypeScript が自動で型を判断する仕組みを学びます',
    sections: [
      {
        heading: '型推論とは？',
        content:
          'TypeScript は賢いので、型を書かなくても値から型を推測します。const name = "太郎" と書けば、name は string 型と判断されます。明示的に書く必要がない場面では、推論に任せるのが一般的です。',
        code: `const name = "太郎";        // 推論: string
const age = 25;             // 推論: number
const items = [1, 2, 3];    // 推論: number[]

// 明示的に書く必要がある場面
let value: string | number = "hello";
value = 42;`,
      },
      {
        heading: '推論と明示のバランス',
        content:
          '推論で十分なときは書かない、複雑な型や関数の引数・戻り値は明示する——このバランスが大切です。コードが読みやすく、エディタの補完も効きます。',
        tip: 'デモで型推論の結果を確認してみてください。',
      },
    ],
  },
  {
    id: 'react-ts',
    title: 'React + TypeScript',
    description: 'React コンポーネントに型を付ける方法を学びます',
    sections: [
      {
        heading: 'コンポーネントの Props 型',
        content:
          'React コンポーネントの props に interface で型を付けます。これが React + TypeScript の基本パターンです。',
        code: `interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}`,
      },
      {
        heading: 'useState の型',
        content:
          'useState にジェネリクスで型を指定できます。初期値から推論される場合は省略可能です。',
        code: `const [count, setCount] = useState<number>(0);
const [name, setName] = useState("太郎");  // 推論: string
const [user, setUser] = useState<User | null>(null);`,
        tip: 'React チュートリアルと合わせて学ぶと理解が深まります。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'TypeScript の学習を踏まえて、次に何を学ぶかを確認します',
    sections: [
      {
        heading: 'TypeScript の学習を続ける',
        content:
          'さらに学ぶなら、ユーティリティ型（Partial, Pick, Omit）、型ガード、モジュールの型定義、strict モードの設定などが次のステップです。公式ドキュメント（typescriptlang.org）も充実しています。',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML → ② CSS → ③ JavaScript → ④ TypeScript（今ここ）→ ⑤ React → ⑥ Astro\n\nJavaScript の基礎の上に TypeScript を乗せると、React や Astro の開発がより安全で快適になります。',
        tip: 'おめでとうございます！TypeScript の基礎をすべて学びました 🎉',
      },
    ],
  },
]
