import type { DebugChallenge } from '../lib/debug'

export const debugChallenges: DebugChallenge[] = [
  {
    id: 'js-off-by-one',
    title: '配列の最後に undefined が出る',
    category: 'javascript',
    difficulty: 'easy',
    symptom: '配列の各要素をログ出力すると、最後に undefined が表示されます。',
    code: `const items = ['a', 'b', 'c'];
for (let i = 0; i <= items.length; i++) {
  console.log(items[i]);
}`,
    hints: [
      'ループの終了条件を確認してください',
      '配列のインデックスは 0 から length - 1 です',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      'i <= items.length で1回多くループしている',
      'const を let にすべき',
      'console.log の引数が間違っている',
      '配列が空だから',
    ],
    correctIndex: 0,
    explanation:
      '配列の最後のインデックスは length - 1 です。i <= items.length とすると items[3] にアクセスして undefined になります。i < items.length に修正してください。',
    fixedCode: `const items = ['a', 'b', 'c'];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}`,
    relatedCourse: 'js',
  },
  {
    id: 'js-missing-await',
    title: 'fetch の結果が Promise になる',
    category: 'javascript',
    difficulty: 'medium',
    symptom: 'API から取得したデータの .name にアクセスするとエラーになります。console.log では Promise { <pending> } と表示されます。',
    code: `async function loadUser() {
  const res = fetch('/api/user');
  const data = res.json();
  console.log(data.name);
}`,
    hints: [
      'fetch と json() は非同期処理です',
      'await を付け忘れていませんか？',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      'fetch と json() に await がない',
      'async 関数を使うべきではない',
      'URL が間違っている',
      'console.log は async 内で使えない',
    ],
    correctIndex: 0,
    explanation:
      'fetch() と res.json() は Promise を返します。await を付けないと data は Promise のままなので .name にアクセスできません。',
    fixedCode: `async function loadUser() {
  const res = await fetch('/api/user');
  const data = await res.json();
  console.log(data.name);
}`,
    relatedCourse: 'js',
  },
  {
    id: 'js-reference',
    title: 'コピーしたのに元の配列も変わる',
    category: 'javascript',
    difficulty: 'medium',
    symptom: 'original を変更していないのに、copy を変更したら original も一緒に変わります。',
    code: `const original = [1, 2, 3];
const copy = original;
copy.push(4);
console.log(original); // [1, 2, 3, 4]`,
    hints: [
      '配列の代入は参照のコピーです',
      '新しい配列を作る方法を考えてみましょう',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      'copy と original が同じ配列を参照している',
      'push は元の配列を壊す',
      'const で宣言したから',
      'console.log のタイミングが早い',
    ],
    correctIndex: 0,
    explanation:
      '配列を変数に代入すると参照がコピーされます。スプレッド構文や slice() で新しい配列を作る必要があります。',
    fixedCode: `const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3]`,
    relatedCourse: 'js',
  },
  {
    id: 'css-flex-direction',
    title: 'モバイルで横並びにならない',
    category: 'css',
    difficulty: 'easy',
    symptom: 'デスクトップでは横並びなのに、画面を狭くしても要素が縦に並ったままです。',
    code: `.container {
  display: flex;
  gap: 1rem;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}`,
    hints: [
      'flex のデフォルトの flex-direction を確認してください',
      'メディアクエリの外側のスタイルも見てみましょう',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      'デフォルトの flex-direction: column が上書きされていない',
      'gap が大きすぎる',
      'display: flex が効いていない',
      'min-width の値が間違っている',
    ],
    correctIndex: 0,
    explanation:
      'flex のデフォルトは flex-direction: column です。768px 未満では row が指定されないため、常に縦並びになります。基本スタイルで row を指定するか、モバイル用に column を明示します。',
    fixedCode: `.container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

@media (max-width: 767px) {
  .container {
    flex-direction: column;
  }
}`,
    relatedCourse: 'css',
  },
  {
    id: 'css-box-sizing',
    title: 'width: 100% で横にはみ出す',
    category: 'css',
    difficulty: 'medium',
    symptom: '要素に width: 100% と padding を指定すると、親要素から横にはみ出します。',
    code: `.card {
  width: 100%;
  padding: 1rem;
  border: 2px solid #ccc;
}`,
    hints: [
      'width はコンテンツ領域の幅です',
      'padding と border が幅に加算されます',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      'box-sizing のデフォルトが content-box のため padding が幅に加算される',
      'width: 100% は使えない',
      'border が太すぎる',
      'padding の単位が間違っている',
    ],
    correctIndex: 0,
    explanation:
      'content-box では width に padding と border が加算されます。box-sizing: border-box を指定すると、padding と border を含めた幅が 100% になります。',
    fixedCode: `.card {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  border: 2px solid #ccc;
}`,
    relatedCourse: 'css',
  },
  {
    id: 'html-form-submit',
    title: 'フォーム送信でページがリロードされる',
    category: 'html',
    difficulty: 'easy',
    symptom: 'ボタンをクリックするとページ全体がリロードされ、入力内容が消えます。',
    code: `<form>
  <input type="text" name="email" />
  <button>送信</button>
</form>`,
    hints: [
      'form 内の button のデフォルト type を確認してください',
      '送信を JavaScript で制御する方法を考えてみましょう',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      'button のデフォルト type が submit なのでフォームが送信される',
      'input の type が間違っている',
      'form タグを使うべきではない',
      'name 属性がないから',
    ],
    correctIndex: 0,
    explanation:
      'form 内の button はデフォルトで type="submit" です。ページリロードを防ぐには type="button" にするか、submit イベントで preventDefault() します。',
    fixedCode: `<form id="my-form">
  <input type="text" name="email" />
  <button type="button">送信</button>
</form>

<script>
document.getElementById('my-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // 送信処理
});
</script>`,
    relatedCourse: 'html',
  },
  {
    id: 'dom-query-null',
    title: 'getElementById が null を返す',
    category: 'dom',
    difficulty: 'easy',
    symptom: 'ボタンをクリックしても何も起きません。Console に "Cannot read properties of null" エラーが出ます。',
    code: `const btn = document.getElementById('submit-btn');
btn.addEventListener('click', () => {
  alert('送信しました');
});`,
    hints: [
      'HTML の id 属性と JavaScript の引数を比較してください',
      'スクリプトの実行タイミングも確認しましょう',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      'HTML の id が submit-btn ではなく submitBtn になっている',
      'addEventListener は使えない',
      'alert がブロックされている',
      'const は DOM 要素に使えない',
    ],
    correctIndex: 0,
    explanation:
      'getElementById は一致する id がなければ null を返します。null に addEventListener を呼ぶとエラーになります。HTML の id と JS のセレクタが一致しているか、スクリプトが DOM 構築後に実行されているかを確認してください。',
    fixedCode: `<!-- HTML: id="submit-btn" と一致させる -->
<button id="submit-btn">送信</button>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('submit-btn');
  btn.addEventListener('click', () => {
    alert('送信しました');
  });
});
</script>`,
    relatedCourse: 'dom',
  },
  {
    id: 'dom-event-delegation',
    title: '動的に追加した要素がクリックできない',
    category: 'dom',
    difficulty: 'medium',
    symptom: '最初からあるボタンは動くが、後から追加したリスト項目の削除ボタンはクリックしても反応しません。',
    code: `document.querySelectorAll('.delete-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('li').remove();
  });
});

// 後から追加
list.appendChild(newItem);`,
    hints: [
      'querySelectorAll は実行時点の要素だけを取得します',
      '親要素にイベントを登録する方法を考えてみましょう',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      '後から追加された要素にはイベントリスナーが付いていない',
      'appendChild が間違っている',
      'remove は使えない',
      'forEach が遅すぎる',
    ],
    correctIndex: 0,
    explanation:
      'querySelectorAll は呼び出し時点の要素だけを対象にします。動的に追加される要素にはイベント委譲（親要素にリスナーを付けて event.target で判定）を使います。',
    fixedCode: `document.getElementById('list').addEventListener('click', (e) => {
  const btn = e.target.closest('.delete-btn');
  if (!btn) return;
  btn.closest('li').remove();
});`,
    relatedCourse: 'dom',
  },
  {
    id: 'react-state-mutation',
    title: '配列に追加しても画面が更新されない',
    category: 'react',
    difficulty: 'medium',
    symptom: '「追加」ボタンを押してもリストに新しい項目が表示されません。state の値は変わっているように見えます。',
    code: `function TodoList() {
  const [items, setItems] = useState(['A', 'B']);

  const addItem = () => {
    items.push('C');
    setItems(items);
  };

  return (
    <ul>
      {items.map((item) => <li key={item}>{item}</li>)}
      <button onClick={addItem}>追加</button>
    </ul>
  );
}`,
    hints: [
      'React は state の「参照」が変わったかで再レンダリングを判断します',
      '同じ配列オブジェクトを mutate していませんか？',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      '配列を直接 mutate しているため参照が同じで再レンダリングされない',
      'useState の使い方が間違っている',
      'key が足りない',
      'button の onClick が間違っている',
    ],
    correctIndex: 0,
    explanation:
      'React は state の参照が変わったときだけ再レンダリングします。push で同じ配列を変更すると参照は同じなので更新されません。スプレッド構文で新しい配列を作って setItems してください。',
    fixedCode: `function TodoList() {
  const [items, setItems] = useState(['A', 'B']);

  const addItem = () => {
    setItems([...items, 'C']);
  };

  return (
    <ul>
      {items.map((item) => <li key={item}>{item}</li>)}
      <button onClick={addItem}>追加</button>
    </ul>
  );
}`,
    relatedCourse: 'react',
  },
  {
    id: 'react-useeffect-deps',
    title: 'useEffect が無限ループする',
    category: 'react',
    difficulty: 'hard',
    symptom: 'ページを開くとブラウザがフリーズします。Console に同じログが延々と出力されます。',
    code: `function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(\`/api/search?q=\${query}\`)
      .then((r) => r.json())
      .then(setResults);
  });

  return <div>{results.length} 件</div>;
}`,
    hints: [
      'useEffect の依存配列を確認してください',
      '依存配列を省略すると毎回のレンダー後に実行されます',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      '依存配列がないため毎レンダーで fetch → setResults → 再レンダーの無限ループ',
      'fetch が遅すぎる',
      'useState が2つあるから',
      'query を使うべきではない',
    ],
    correctIndex: 0,
    explanation:
      '依存配列を省略すると useEffect は毎レンダー後に実行されます。setResults で state が更新され再レンダー → また useEffect が実行される無限ループになります。[query] を依存配列に指定してください。',
    fixedCode: `function SearchResults() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(\`/api/search?q=\${query}\`)
      .then((r) => r.json())
      .then(setResults);
  }, [query]);

  return <div>{results.length} 件</div>;
}`,
    relatedCourse: 'react',
  },
  {
    id: 'react-stale-closure',
    title: 'カウンターが1しか増えない',
    category: 'react',
    difficulty: 'hard',
    symptom: '「+1」ボタンを何度押してもカウントが 1 のままです。',
    code: `function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}`,
    hints: [
      '同じイベント内で setCount を2回呼んでいます',
      '2回目の setCount は何の値を使っていますか？',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      '同じレンダーの count 値を参照するため、2回の setCount がどちらも同じ結果になる',
      'useState が壊れている',
      'button の onClick が1回しか呼ばれない',
      'count の初期値が間違っている',
    ],
    correctIndex: 0,
    explanation:
      'setCount(count + 1) を連続で呼んでも、どちらも同じレンダー時点の count を参照します。関数型更新 setCount((c) => c + 1) を使うか、1回の setCount で加算量をまとめます。',
    fixedCode: `function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}`,
    relatedCourse: 'react',
  },
  {
    id: 'network-status-check',
    title: 'API エラーでも成功扱いになる',
    category: 'network',
    difficulty: 'medium',
    symptom: 'サーバーが 404 を返しても「取得成功」と表示されます。データは undefined です。',
    code: `async function loadData() {
  const res = await fetch('/api/missing');
  const data = await res.json();
  console.log('取得成功:', data);
}`,
    hints: [
      'fetch は HTTP エラーステータスでも reject しません',
      'res.ok や res.status を確認していますか？',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      'fetch は 4xx/5xx でも成功として resolve するため status を確認していない',
      'json() が壊れている',
      'async/await が使えない',
      'URL をエンコードすべき',
    ],
    correctIndex: 0,
    explanation:
      'fetch はネットワークエラー時のみ reject します。404 や 500 でも resolve するので res.ok または res.status を確認してから json() を呼ぶ必要があります。',
    fixedCode: `async function loadData() {
  const res = await fetch('/api/missing');
  if (!res.ok) {
    throw new Error(\`HTTP \${res.status}\`);
  }
  const data = await res.json();
  console.log('取得成功:', data);
}`,
    relatedCourse: 'http',
  },
  {
    id: 'ts-optional-chain',
    title: 'undefined のプロパティでエラー',
    category: 'typescript',
    difficulty: 'easy',
    symptom: 'user がいない場合に "Cannot read properties of undefined" エラーが出ます。',
    code: `interface User {
  name: string;
  profile?: { avatar: string };
}

function getAvatar(user: User | undefined) {
  return user.profile.avatar;
}`,
    hints: [
      'user 自体が undefined の可能性があります',
      'profile はオプショナルです',
    ],
    question: 'このバグの原因はどれですか？',
    options: [
      'user と profile が undefined のときにアクセスしている',
      'interface の定義が間違っている',
      'return が使えない',
      'avatar の型が間違っている',
    ],
    correctIndex: 0,
    explanation:
      'user が undefined、または profile がない場合に .avatar へアクセスするとエラーになります。オプショナルチェーン (?.) を使うか、事前にガードしてください。',
    fixedCode: `interface User {
  name: string;
  profile?: { avatar: string };
}

function getAvatar(user: User | undefined) {
  return user?.profile?.avatar;
}`,
    relatedCourse: 'ts',
  },
]

export const debugChallengesByCategory = debugChallenges.reduce(
  (acc, challenge) => {
    if (!acc[challenge.category]) acc[challenge.category] = []
    acc[challenge.category].push(challenge)
    return acc
  },
  {} as Record<string, DebugChallenge[]>,
)
