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
    title: '状態管理とは？',
    description: 'アプリの状態とその管理方法を学びます',
    sections: [
      {
        heading: '状態（State）とは？',
        content:
          'アプリが「今どうなっているか」を表すデータです。ログイン状態、カートの中身、フォームの入力値、API から取得したデータ——UI が表示・更新するすべての変わりうる情報が状態です。',
      },
      {
        heading: 'クライアント状態 vs サーバー状態',
        content:
          '• クライアント状態 — UI の開閉、テーマ、フォーム入力など、アプリ内だけで完結\n• サーバー状態 — API から取得したデータ。キャッシュ・再取得・同期が課題\n\n管理手法はこの2つで異なります。',
        tip: 'デモで状態の流れを確認してください。',
      },
      {
        heading: 'なぜ専用ライブラリが必要？',
        content:
          '小さなアプリは useState で十分ですが、深いコンポーネントツリーでの共有、複数画面での同期、API データのキャッシュ——複雑になると Context、Zustand、TanStack Query などが活きます。',
      },
    ],
  },
  {
    id: 'lifting',
    title: '状態のリフトアップ',
    description: 'Props で状態を共有する方法を学びます',
    sections: [
      {
        heading: 'リフトアップとは？',
        content:
          '兄弟コンポーネント間で状態を共有するには、状態を親に「持ち上げ」、Props で子に渡します。React の基本パターンです。',
        code: `function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Counter count={count} onIncrement={() => setCount(c => c + 1)} />
      <Display count={count} />
    </>
  );
}`,
      },
      {
        heading: 'Props drilling の問題',
        content:
          '深い階層で状態を渡すと、中間コンポーネントが使わない Props を渡すだけの「Props drilling」が発生します。これが Context や Zustand の出番です。',
        tip: 'デモで Props の流れを追ってみてください。',
      },
      {
        heading: '単方向データフロー',
        content:
          '状態は上から下（Props）、更新は下から上（コールバック）。この流れを守るとデータの追跡が容易になります。',
      },
    ],
  },
  {
    id: 'context',
    title: 'Context API',
    description: 'グローバルな状態の共有を学びます',
    sections: [
      {
        heading: 'Context の基本',
        content:
          'createContext でコンテキストを作り、Provider で値を提供、useContext で子が取得します。テーマ、言語、認証情報など「アプリ全体で共有」する状態向けです。',
        code: `const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Page />
    </ThemeContext.Provider>
  );
}

function Page() {
  const { theme } = useContext(ThemeContext);
  return <div className={theme}>...</div>;
}`,
      },
      {
        heading: 'Context の注意点',
        content:
          '値が変わると Provider 内のすべての useContext が再レンダリングされます。頻繁に変わる大きな状態には向きません。複数の Context に分割するのが対策です。',
        tip: 'デモで Context のデータフローを確認してください。',
      },
      {
        heading: 'カスタム Hook 化',
        content:
          'useTheme() のような Hook にラップすると、使う側が Context の詳細を知らなくて済みます。',
      },
    ],
  },
  {
    id: 'zustand',
    title: 'Zustand 入門',
    description: 'シンプルな状態管理ライブラリを学びます',
    sections: [
      {
        heading: 'Zustand とは？',
        content:
          '最小限の API でグローバル状態を管理するライブラリです。Provider 不要、ボイラープレートが少なく、React チュートリアル後のステップアップに最適です。',
        code: `import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
}));

function Counter() {
  const count = useStore((s) => s.count);
  const increment = useStore((s) => s.increment);
  return <button onClick={increment}>{count}</button>;
}`,
      },
      {
        heading: 'セレクタで再レンダリングを抑える',
        content:
          'useStore((s) => s.count) のように必要な部分だけ購読。Context より細かい更新制御ができます。',
        tip: 'デモで Zustand のカウンターを試してください。',
      },
      {
        heading: 'devtools と persist',
        content:
          'zustand/middleware の persist で localStorage に保存。devtools で Redux DevTools 連携も可能です。',
      },
    ],
  },
  {
    id: 'selectors',
    title: 'セレクタと派生状態',
    description: '計算された状態の管理を学びます',
    sections: [
      {
        heading: '派生状態（Derived State）',
        content:
          '元の状態から計算できる値は、別の state に持たずに都度計算します。カートの合計金額、フィルタ済みリストなど。',
        code: `const items = useStore((s) => s.items);
const total = items.reduce((sum, i) => sum + i.price, 0);
// total を state に持つ必要はない`,
      },
      {
        heading: 'useMemo との使い分け',
        content:
          '計算が重い場合は useMemo でメモ化。Zustand ではストア内に getter を定義するパターンもあります。',
        tip: 'デモで派生状態の計算を確認してください。',
      },
      {
        heading: '正規化',
        content:
          'リストデータは id をキーにしたオブジェクトで持ち、表示時に配列に変換する「正規化」パターンが大規模アプリで使われます。',
      },
    ],
  },
  {
    id: 'async',
    title: 'サーバー状態',
    description: 'API からのデータ取得と状態を学びます',
    sections: [
      {
        heading: 'useEffect + fetch の問題',
        content:
          '手動で fetch すると、ローディング・エラー・キャッシュ・再取得・重複リクエストをすべて自分で管理する必要があります。同じ API を複数コンポーネントで呼ぶと非効率です。',
        code: `// 手動管理は複雑になりやすい
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() => { /* fetch... */ }, []);`,
      },
      {
        heading: 'サーバー状態の特徴',
        content:
          '• 非同期 — 取得に時間がかかる\n• 共有 — 複数画面で同じデータを使う\n• 鮮度 — いつ古くなるか、いつ再取得するか\n• キャッシュ — 取得済みデータの再利用',
        tip: 'デモでローディング・エラー・成功の状態遷移を確認してください。',
      },
      {
        heading: '専用ライブラリの価値',
        content:
          'TanStack Query（旧 React Query）や SWR がこれらを自動化します。次のレッスンで詳しく学びます。',
      },
    ],
  },
  {
    id: 'tanstack',
    title: 'TanStack Query',
    description: 'サーバー状態管理ライブラリを学びます',
    sections: [
      {
        heading: 'useQuery の基本',
        content:
          'クエリキーとフェッチ関数を渡すだけで、data / isLoading / isError / refetch が使えます。',
        code: `import { useQuery } from '@tanstack/react-query';

function UserList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(r => r.json()),
  });

  if (isLoading) return <p>読み込み中...</p>;
  if (error) return <p>エラー</p>;
  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}`,
      },
      {
        heading: 'useMutation',
        content:
          'POST/PUT/DELETE などの変更操作は useMutation。成功後に queryClient.invalidateQueries で関連データを再取得します。',
        tip: 'デモで TanStack Query のデータフローを確認してください。',
      },
      {
        heading: 'キャッシュと staleTime',
        content:
          'staleTime で「いつまで fresh とみなすか」を設定。gcTime（旧 cacheTime）で未使用キャッシュの保持時間を制御します。',
      },
    ],
  },
  {
    id: 'patterns',
    title: 'よくあるパターン',
    description: '実務で使う状態管理パターンを学びます',
    sections: [
      {
        heading: 'URL を状態にする',
        content:
          '検索クエリ、ページ番号、タブの選択——URL に載せられる状態は URL に。ブックマーク・共有・ブラウザバックに対応できます。Next.js の searchParams や TanStack Router の loader が活用されます。',
      },
      {
        heading: 'フォーム状態はローカル',
        content:
          '入力中のフォームはグローバルストアに入れない。React Hook Form でローカル管理し、送信成功後にサーバー状態を更新するのが一般的です。',
        tip: 'デモで状態の配置場所を確認してください。',
      },
      {
        heading: '楽観的更新',
        content:
          'UI を先に更新し、API が失敗したらロールバック。TanStack Query の onMutate + onError で実装できます。UX が良くなりますが、複雑度は上がります。',
      },
    ],
  },
  {
    id: 'comparison',
    title: '比較と選び方',
    description: '各手法の使い分けを学びます',
    sections: [
      {
        heading: '選び方のガイド',
        content:
          '• useState — コンポーネント内だけの状態\n• Context — テーマ、認証など低頻度更新のグローバル\n• Zustand — 中規模のクライアント状態\n• TanStack Query — サーバーからのデータ\n• URL — 共有可能なナビゲーション状態',
      },
      {
        heading: '過剰な抽象化を避ける',
        content:
          '最初から Redux を入れる必要はありません。useState → 困ったら Context → さらに困ったら Zustand / TanStack Query の順で足すのがおすすめです。',
        tip: 'デモで各手法の比較表を確認してください。',
      },
      {
        heading: 'Next.js App Router との関係',
        content:
          'Server Component でデータ取得し、クライアント側の状態を最小化するのが App Router の流儀。TanStack Query は Client Component 内のインタラクティブなデータ向けです。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: '状態管理の学習を続けるためのヒント',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• Jotai / Recoil — アトミックな状態管理\n• Redux Toolkit — 大規模・厳格な状態管理\n• XState — 状態機械\n• TanStack Store — 新しい軽量ストア',
      },
      {
        heading: '学習の道筋',
        content:
          '① React → ② 状態管理（今ここ）→ ③ フォーム → ④ Next.js / TanStack Start で実践',
        tip: 'おめでとうございます！状態管理チュートリアルをすべて学びました 🎉',
      },
    ],
  },
]
