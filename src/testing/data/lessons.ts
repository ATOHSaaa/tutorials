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
    title: 'テストとは？',
    description: 'テストの目的と種類を学びます',
    sections: [
      {
        heading: 'なぜテストを書くのか？',
        content:
          'テストは「コードが期待どおり動く」ことを自動で確認する仕組みです。リファクタリングの安全網、バグの早期発見、仕様のドキュメント化——手動確認では追いきれない変更をカバーします。',
      },
      {
        heading: 'テストのピラミッド',
        content:
          '• ユニットテスト — 関数・コンポーネント単体（多く・高速）\n• 統合テスト — 複数モジュールの連携\n• E2E テスト — ブラウザでユーザー操作を再現（少なく・遅い）\n\nこのチュートリアルはユニット・コンポーネントテスト中心です。',
        tip: 'デモでテストの種類を確認してください。',
      },
      {
        heading: 'テスト駆動開発（TDD）',
        content:
          'Red（失敗するテストを書く）→ Green（テストを通す最小実装）→ Refactor（整理）。必須ではありませんが、設計の手助けになる考え方です。',
      },
    ],
  },
  {
    id: 'vitest',
    title: 'Vitest セットアップ',
    description: 'テスト環境の構築方法を学びます',
    sections: [
      {
        heading: 'Vitest とは？',
        content:
          'Vite ベースの高速テストランナーです。Jest と互換性のある API を持ち、Vite プロジェクトでは設定が簡単です。',
        code: `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom`,
      },
      {
        heading: '設定',
        content:
          'vite.config.ts に test 設定を追加します。',
        code: `// vite.config.ts
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});`,
        tip: 'デモで Vitest のプロジェクト構成を確認してください。',
      },
      {
        heading: '実行',
        content:
          'package.json に "test": "vitest" を追加。npm test で watch モード、npm test -- --run で1回実行（CI 向け）。',
      },
    ],
  },
  {
    id: 'unit',
    title: 'ユニットテスト',
    description: '関数やロジックのテストを学びます',
    sections: [
      {
        heading: '基本構文',
        content:
          'describe でグループ化、it（または test）で個別ケース、expect でアサーションします。',
        code: `import { describe, it, expect } from 'vitest';
import { add } from './math';

describe('add', () => {
  it('2つの数を足す', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('負の数も扱える', () => {
    expect(add(-1, 1)).toBe(0);
  });
});`,
      },
      {
        heading: 'よく使う matcher',
        content:
          'toBe（厳密等価）、toEqual（オブジェクト比較）、toBeTruthy、toContain、toThrow、toMatchObject など。',
        tip: 'デモでユニットテストの実行結果を確認してください。',
      },
      {
        heading: 'テストの粒度',
        content:
          '1つの it に1つのことをテスト。テスト名は「何を・どういう条件で・何が起きるか」がわかるように書きます。',
      },
    ],
  },
  {
    id: 'rtl',
    title: 'React Testing Library',
    description: 'コンポーネントテストの基本を学びます',
    sections: [
      {
        heading: 'Testing Library の思想',
        content:
          '実装の詳細（state、内部メソッド）ではなく、ユーザーが見る・操作するものをテストします。「ボタンをクリックしたらテキストが変わる」という振る舞いを検証します。',
      },
      {
        heading: '基本の流れ',
        content:
          'render でコンポーネントを描画、screen で要素を取得、userEvent や fireEvent で操作、expect で結果を確認。',
        code: `import { render, screen } from '@testing-library/react';
import { Button } from './Button';

it('クリックでラベルが変わる', () => {
  render(<Button />);
  const btn = screen.getByRole('button', { name: 'クリック' });
  fireEvent.click(btn);
  expect(screen.getByText('クリック済み')).toBeInTheDocument();
});`,
        tip: 'デモで RTL のクエリ方法を確認してください。',
      },
      {
        heading: 'クエリの優先順位',
        content:
          'getByRole > getByLabelText > getByPlaceholderText > getByText > getByTestId。アクセシビリティに沿ったクエリが推奨されます。',
      },
    ],
  },
  {
    id: 'render',
    title: '描画テスト',
    description: 'コンポーネントが正しく表示されるかテストします',
    sections: [
      {
        heading: '表示の確認',
        content:
          'toBeInTheDocument()、toHaveTextContent()、toHaveClass() で DOM の状態を検証します。',
        code: `it('見出しを表示する', () => {
  render(<Greeting name="田中" />);
  expect(screen.getByRole('heading')).toHaveTextContent('こんにちは、田中');
});`,
      },
      {
        heading: '条件付きレンダリング',
        content:
          'props や state によって表示が変わるケースをテスト。queryBy* は要素がない場合に null を返すので、非表示の確認に使います。',
        tip: 'デモで描画テストの例を確認してください。',
      },
      {
        heading: 'スナップショットテスト',
        content:
          'toMatchSnapshot() で HTML のスナップショットを保存。変更を検知できますが、過信せず重要な振る舞いは明示的にテストします。',
      },
    ],
  },
  {
    id: 'interaction',
    title: '操作テスト',
    description: 'クリックや入力のテストを学びます',
    sections: [
      {
        heading: 'userEvent',
        content:
          '@testing-library/user-event の userEvent.click()、userEvent.type() は実際のユーザー操作に近いイベントを発火します。fireEvent より推奨されます。',
        code: `import userEvent from '@testing-library/user-event';

it('入力して送信', async () => {
  const user = userEvent.setup();
  render(<LoginForm />);
  await user.type(screen.getByLabelText('メール'), 'test@ex.com');
  await user.click(screen.getByRole('button', { name: '送信' }));
  expect(screen.getByText('送信完了')).toBeInTheDocument();
});`,
      },
      {
        heading: 'フォームのテスト',
        content:
          '入力 → 送信 → 結果表示の流れをテスト。バリデーションエラーの表示も忘れずに。',
        tip: 'デモでクリック・入力テストを確認してください。',
      },
      {
        heading: 'waitFor',
        content:
          '非同期で表示が変わる場合は waitFor で要素の出現を待ちます。',
      },
    ],
  },
  {
    id: 'mock',
    title: 'モック',
    description: 'API や関数のモック方法を学びます',
    sections: [
      {
        heading: 'vi.fn() と vi.mock()',
        content:
          'Vitest の vi.fn() で関数をモック、vi.mock() でモジュール全体を差し替えます。',
        code: `import { vi } from 'vitest';

const fetchUser = vi.fn().mockResolvedValue({ name: '田中' });

it('ユーザー名を表示', async () => {
  render(<UserProfile fetchUser={fetchUser} />);
  expect(await screen.findByText('田中')).toBeInTheDocument();
  expect(fetchUser).toHaveBeenCalledWith(1);
});`,
      },
      {
        heading: 'API のモック',
        content:
          'MSW（Mock Service Worker）でネットワークレイヤーをモックする方法も実務でよく使われます。fetch を直接 vi.spyOn でモックする手軽な方法もあります。',
        tip: 'デモでモックの概念を確認してください。',
      },
      {
        heading: 'モックの注意点',
        content:
          'モックしすぎると「モックは通るが本番で壊れる」状態に。重要な統合部分はモックを減らす判断も必要です。',
      },
    ],
  },
  {
    id: 'async',
    title: '非同期テスト',
    description: 'async/await を使ったテストを学びます',
    sections: [
      {
        heading: 'async テスト',
        content:
          'it のコールバックを async にし、await findBy* や await waitFor を使います。',
        code: `it('データ取得後に表示', async () => {
  render(<UserList />);
  expect(await screen.findByText('田中')).toBeInTheDocument();
});`,
      },
      {
        heading: 'findBy vs getBy',
        content:
          'getBy は即座に要素を探す（なければエラー）。findBy は一定時間待ってから探す（非同期レンダリング向け）。',
        tip: 'デモで非同期テストの流れを確認してください。',
      },
      {
        heading: 'タイムアウト',
        content:
          'デフォルトは 1000ms。{ timeout: 3000 } で延長できます。フレーキーなテストは待ち時間の調整か、モックの見直しが必要です。',
      },
    ],
  },
  {
    id: 'coverage',
    title: 'カバレッジ',
    description: 'テストカバレッジの確認方法を学びます',
    sections: [
      {
        heading: 'カバレッジとは？',
        content:
          'コードのどの行・分岐がテストで実行されたかの割合です。100% を目指すより、「重要なロジックはカバーされているか」を確認する用途が多いです。',
        code: `npm test -- --coverage`,
      },
      {
        heading: '見るべき指標',
        content:
          'Statements、Branches、Functions、Lines。特に Branches（if/else の両方）がテストされているかが重要です。',
        tip: 'デモでカバレッジレポートの見方を確認してください。',
      },
      {
        heading: 'CI での活用',
        content:
          'CI/CD 入門で学んだ GitHub Actions に coverage ステップを追加し、PR でカバレッジの変化を確認できます。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'テストの学習を続けるためのヒント',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• Playwright / Cypress — E2E テスト\n• MSW — API モック\n• Testing Trophy — テスト戦略\n• Storybook + test runner — コンポーネント単体テスト',
      },
      {
        heading: '学習の道筋',
        content:
          '① React → ② テスト入門（今ここ）→ ③ 自分のプロジェクトに Vitest を追加 → ④ CI/CD で自動テスト',
        tip: 'おめでとうございます！テスト入門をすべて学びました 🎉',
      },
    ],
  },
]
