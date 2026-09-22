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
    title: 'フォームの基礎',
    description: 'HTML フォームと React の関係を学びます',
    sections: [
      {
        heading: 'HTML フォームの基本',
        content:
          'form、input、select、textarea、button など HTML チュートリアルで学んだ要素がベースです。React ではこれらを JSX で書き、状態と連携させます。',
      },
      {
        heading: 'フォームの2つの管理方法',
        content:
          '• 制御コンポーネント — React の state が入力値の「唯一の情報源」\n• 非制御コンポーネント — DOM が値を保持、ref で取得\n\nReact では制御コンポーネントが主流です。',
        tip: 'デモでフォームの基本構造を確認してください。',
      },
      {
        heading: '実務で求められること',
        content:
          'バリデーション、エラー表示、アクセシビリティ、送信処理、ローディング状態——フォームは UI の中でも特に手間がかかる部分です。ライブラリの活用が効果的です。',
      },
    ],
  },
  {
    id: 'controlled',
    title: '制御コンポーネント',
    description: 'useState でフォームを管理する方法を学びます',
    sections: [
      {
        heading: 'useState パターン',
        content:
          '各入力に state を用意し、value と onChange で双方向に結びつけます。',
        code: `function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={(e) => { e.preventDefault(); /* 送信 */ }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">ログイン</button>
    </form>
  );
}`,
      },
      {
        heading: 'オブジェクトでまとめる',
        content:
          'フィールドが増えると個別の useState は煩雑です。1つのオブジェクト state にまとめるパターンもありますが、再レンダリングが増える点に注意します。',
        tip: 'デモで制御コンポーネントの動作を確認してください。',
      },
      {
        heading: 'チェックボックスと select',
        content:
          'checkbox は checked + onChange、select は value + onChange。type ごとに属性が異なるので公式ドキュメントを参照します。',
      },
    ],
  },
  {
    id: 'validation',
    title: 'バリデーション',
    description: '入力値の検証方法を学びます',
    sections: [
      {
        heading: 'クライアントサイドバリデーション',
        content:
          '送信前にブラウザ側で入力を検証します。即座にフィードバックでき UX が良いですが、セキュリティのためサーバー側でも必ず検証します。',
      },
      {
        heading: '手動バリデーション',
        content:
          '送信時に if 文でチェックし、エラーメッセージを state にセットする基本形。',
        code: `const [errors, setErrors] = useState({});

function validate() {
  const e = {};
  if (!email.includes('@')) e.email = '有効なメールを入力';
  if (password.length < 8) e.password = '8文字以上';
  setErrors(e);
  return Object.keys(e).length === 0;
}`,
        tip: 'デモでバリデーションエラーの表示を確認してください。',
      },
      {
        heading: 'HTML5 バリデーション',
        content:
          'required、minLength、pattern、type="email" など。手軽ですが、エラーメッセージのカスタマイズは限定的です。',
      },
    ],
  },
  {
    id: 'zod',
    title: 'Zod スキーマ',
    description: '型安全なスキーマ定義を学びます',
    sections: [
      {
        heading: 'Zod とは？',
        content:
          'TypeScript ファーストのスキーマバリデーションライブラリです。スキーマから型を自動推論でき、フォームと API の両方で使えます。',
        code: `import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('有効なメールアドレス'),
  password: z.string().min(8, '8文字以上'),
});

type LoginForm = z.infer<typeof loginSchema>;`,
      },
      {
        heading: 'safeParse',
        content:
          'schema.safeParse(data) で成功/失敗を判定。失敗時は error.flatten() でフィールドごとのエラーを取得できます。',
        tip: 'デモで Zod スキーマのバリデーションを試してください。',
      },
      {
        heading: 'TypeScript との相性',
        content:
          'z.infer<typeof schema> でフォームの型が自動生成されます。型とバリデーションルールが1箇所にまとまるのが最大の利点です。',
      },
    ],
  },
  {
    id: 'rhf',
    title: 'React Hook Form',
    description: 'パフォーマンスの良いフォーム管理を学びます',
    sections: [
      {
        heading: 'React Hook Form とは？',
        content:
          '非制御コンポーネントベースで、再レンダリングを最小化するフォームライブラリです。register で input を登録し、handleSubmit で送信します。',
        code: `import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('email', { required: '必須' })} />
      {errors.email && <span>{errors.email.message}</span>}
      <button type="submit">送信</button>
    </form>
  );
}`,
      },
      {
        heading: 'Zod との統合',
        content:
          '@hookform/resolvers/zod の zodResolver でスキーマを接続。バリデーションルールを Zod に一元化できます。',
        code: `const form = useForm({
  resolver: zodResolver(loginSchema),
});`,
        tip: 'デモで React Hook Form の登録・送信を確認してください。',
      },
      {
        heading: 'Controller',
        content:
          'カスタムコンポーネント（DatePicker など）には Controller でラップして register します。',
      },
    ],
  },
  {
    id: 'errors',
    title: 'エラー表示',
    description: 'ユーザーフレンドリーなエラー UI を学びます',
    sections: [
      {
        heading: 'エラー表示のベストプラクティス',
        content:
          '• フィールドの近くにエラーを表示\n• aria-invalid と aria-describedby でアクセシビリティ対応\n• 送信ボタンはバリデーション通過まで disabled にしない（エラーを見せる）\n• サーバーエラーはフォーム上部にまとめて表示',
      },
      {
        heading: 'エラーのタイミング',
        content:
          'onSubmit（送信時）、onBlur（フォーカスが外れた時）、onChange（入力中）——onSubmit + onBlur の組み合わせが一般的です。',
        tip: 'デモでエラー表示の良い例・悪い例を比較してください。',
      },
      {
        heading: 'サーバーエラー',
        content:
          'API が 400 を返したときのフィールドエラー（setError）と、500 などの全体エラーを区別して表示します。',
      },
    ],
  },
  {
    id: 'complex',
    title: '複雑なフォーム',
    description: '配列フィールドや条件付き入力を学びます',
    sections: [
      {
        heading: '配列フィールド',
        content:
          'useFieldArray で「複数の連絡先」「タグの追加・削除」など動的なリストを管理します。',
        code: `const { fields, append, remove } = useFieldArray({
  control,
  name: 'contacts',
});`,
      },
      {
        heading: '条件付きフィールド',
        content:
          '「法人の場合は会社名を表示」など、watch で値を監視し条件付きレンダリング。Zod の .refine() で条件付きバリデーションも可能です。',
        tip: 'デモで動的フィールドの追加・削除を確認してください。',
      },
      {
        heading: 'ネストされたオブジェクト',
        content:
          'register("address.city") のようにドット記法でネストしたデータ構造を扱えます。',
      },
    ],
  },
  {
    id: 'submit',
    title: '送信処理',
    description: 'API へのデータ送信を学びます',
    sections: [
      {
        heading: '送信フロー',
        content:
          '1. バリデーション\n2. ローディング状態を true\n3. API 呼び出し\n4. 成功 → リダイレクト or トースト\n5. 失敗 → エラー表示\n6. ローディング false',
        code: `const onSubmit = async (data) => {
  setLoading(true);
  try {
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    toast.success('登録完了');
  } catch (e) {
    setServerError('送信に失敗しました');
  } finally {
    setLoading(false);
  }
};`,
      },
      {
        heading: 'TanStack Query の useMutation',
        content:
          'フォーム送信は useMutation と相性が良いです。isPending、onSuccess、onError が使えます。',
        tip: 'デモで送信〜成功/失敗の流れを確認してください。',
      },
      {
        heading: '二重送信の防止',
        content:
          '送信中はボタンを disabled にする、または isSubmitting（RHF）を使います。',
      },
    ],
  },
  {
    id: 'accessibility',
    title: 'フォームの a11y',
    description: 'アクセシブルなフォーム設計を学びます',
    sections: [
      {
        heading: 'label とエラー',
        content:
          'すべての input に label。エラーは aria-describedby で関連付け。a11y チュートリアルの内容と重なりますが、フォームでは特に重要です。',
        code: `<label htmlFor="email">メール</label>
<input
  id="email"
  aria-invalid={!!errors.email}
  aria-describedby={errors.email ? 'email-error' : undefined}
/>
{errors.email && <span id="email-error" role="alert">{errors.email}</span>}`,
      },
      {
        heading: 'フォーカス管理',
        content:
          '送信後に最初のエラーフィールドにフォーカスを移す。RHF の setFocus が使えます。',
        tip: 'デモでアクセシブルなフォームを確認してください。',
      },
      {
        heading: 'autocomplete 属性',
        content:
          'autocomplete="email"、autocomplete="current-password" などでブラウザの入力支援とパスワードマネージャーに対応します。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'フォームの学習を続けるためのヒント',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• Conform — Remix チームのフォームライブラリ\n• Formik — 従来型のフォームライブラリ\n• Server Actions（Next.js）— サーバー側フォーム処理\n• Multi-step フォームの状態管理',
      },
      {
        heading: '学習の道筋',
        content:
          '① React → ② フォーム（今ここ）→ ③ 状態管理 + TanStack Query → ④ 実プロジェクトでログイン・登録フォームを実装',
        tip: 'おめでとうございます！フォームチュートリアルをすべて学びました 🎉',
      },
    ],
  },
]
