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
    title: 'DevTools とは？',
    description: '開発者ツールの概要を学びます',
    sections: [
      {
        heading: 'ブラウザ開発者ツール',
        content:
          'Chrome DevTools、Firefox Developer Tools、Safari Web Inspector など、ブラウザに組み込まれたデバッグ・開発支援ツールです。HTML/CSS の検査、JavaScript のデバッグ、ネットワークの監視などができます。',
      },
      {
        heading: '開き方',
        content:
          '• F12 または Ctrl+Shift+I（Mac: Cmd+Option+I）\n• 右クリック → 「検証」\n• Chrome メニュー → その他のツール → デベロッパーツール',
        tip: 'デモで DevTools の主要パネルを確認してください。',
      },
      {
        heading: 'なぜ必須スキルか',
        content:
          'console.log だけでは限界があります。レイアウト崩れ、API エラー、パフォーマンス問題——実務のバグの多くは DevTools で原因を特定します。',
      },
    ],
  },
  {
    id: 'elements',
    title: 'Elements パネル',
    description: 'HTML と CSS の検査・編集を学びます',
    sections: [
      {
        heading: 'DOM の検査',
        content:
          'Elements パネルでページの HTML 構造をリアルタイムに確認できます。要素を選択すると、適用されている CSS、ボックスモデル（margin/padding/border）、イベントリスナーが表示されます。',
      },
      {
        heading: 'ライブ編集',
        content:
          'CSS プロパティをその場で変更してプレビューできます。HTML のテキストもダブルクリックで編集可能。変更はリロードで消えるので、試行錯誤に最適です。',
        code: `/* Styles タブで試せる例 */
.element {
  display: flex;
  gap: 1rem;
  border: 2px dashed red; /* レイアウト確認用 */
}`,
        tip: 'デモで要素の選択とスタイル編集を試してください。',
      },
      {
        heading: 'Computed と Layout',
        content:
          'Computed タブで最終的に適用された値を確認。Layout タブ（Grid/Flex）ではオーバーレイで配置を視覚化できます。',
      },
    ],
  },
  {
    id: 'console',
    title: 'Console',
    description: 'ログ出力と JavaScript の実行を学びます',
    sections: [
      {
        heading: 'ログの種類',
        content:
          'console.log（一般）、console.warn（警告）、console.error（エラー）、console.table（表形式）、console.group（グループ化）。本番では console.log を残しすぎないよう注意します。',
        code: `console.log('ユーザー:', user);
console.table(users);
console.time('fetch');
await fetch('/api');
console.timeEnd('fetch');`,
      },
      {
        heading: 'REPL として使う',
        content:
          'Console に JavaScript を直接入力して実行できます。ページ上の変数や DOM にアクセスして動作確認ができます。',
        tip: 'デモで console の出力例を確認してください。',
      },
      {
        heading: 'エラーの読み方',
        content:
          'スタックトレースをクリックすると Sources パネルで該当行にジャンプします。エラーメッセージの最初の行が最重要です。',
      },
    ],
  },
  {
    id: 'network',
    title: 'Network',
    description: 'API リクエストの確認方法を学びます',
    sections: [
      {
        heading: 'リクエストの監視',
        content:
          'ページが発行するすべての HTTP リクエストを一覧表示します。API の URL、ステータスコード、レスポンス時間、ペイロードを確認できます。',
      },
      {
        heading: 'よく使う操作',
        content:
          '• Preserve log — ページ遷移後もログを保持\n• Disable cache — キャッシュ無効で再現\n• Filter: Fetch/XHR — API だけ表示\n• リクエストをクリック → Headers / Preview / Response',
        tip: 'デモで Network パネルの見方を確認してください。',
      },
      {
        heading: 'デバッグの典型',
        content:
          '404 → URL 間違い。401/403 → 認証問題。500 → サーバーエラー。CORS エラー → レスポンスヘッダーとオリジンの確認。',
      },
    ],
  },
  {
    id: 'sources',
    title: 'Sources / デバッガ',
    description: 'ブレークポイントでデバッグする方法を学びます',
    sections: [
      {
        heading: 'ブレークポイント',
        content:
          'Sources パネルで行番号をクリックしてブレークポイントを設定。コードがその行に到達すると実行が一時停止し、変数の値を確認できます。',
      },
      {
        heading: 'デバッグ操作',
        content:
          '• Resume (F8) — 次のブレークポイントまで実行\n• Step over (F10) — 次の行へ\n• Step into (F11) — 関数の中へ\n• Watch — 特定の式を監視',
        code: `// この行にブレークポイント
const result = calculateTotal(items);
console.log(result); // ここまでステップ実行`,
        tip: 'デモでブレークポイントの概念を確認してください。',
      },
      {
        heading: '条件付きブレークポイント',
        content:
          '右クリック → "Add conditional breakpoint" で、特定の条件のときだけ停止できます。ループ内のデバッグで便利です。',
      },
    ],
  },
  {
    id: 'performance',
    title: 'Performance',
    description: 'パフォーマンスの計測方法を学びます',
    sections: [
      {
        heading: 'パフォーマンス記録',
        content:
          'Record ボタンで数秒間の動作を記録。フレームレート、CPU 使用率、長いタスク、レイアウトシフトの原因を特定できます。',
      },
      {
        heading: '見るべきポイント',
        content:
          '• 長い黄色いタスク（JavaScript 実行）\n• 紫色のレイアウト/ペイント\n• FPS の低下\n• Main スレッドのボトルネック',
        tip: 'デモで Performance パネルのタイムラインを確認してください。',
      },
      {
        heading: 'Lighthouse との連携',
        content:
          'Lighthouse タブで Core Web Vitals（LCP、INP、CLS）をスコア化。パフォーマンスチュートリアルと合わせて改善に活かします。',
      },
    ],
  },
  {
    id: 'responsive',
    title: 'レスポンシブモード',
    description: 'デバイスサイズのエミュレーションを学びます',
    sections: [
      {
        heading: 'デバイスモード',
        content:
          'Ctrl+Shift+M（Mac: Cmd+Shift+M）でトグル。iPhone、iPad、カスタムサイズで表示を確認できます。画面の回転もテスト可能です。',
      },
      {
        heading: 'メディアクエリの確認',
        content:
          'ブレークポイントの境界でレイアウトがどう変わるかを確認。Tailwind の md: lg: が効いているかの検証に使います。',
        tip: 'デモで画面サイズの切り替えを試してください。',
      },
      {
        heading: 'ネットワークのスロットリング',
        content:
          'Network タブで "Slow 3G" などを選び、低速回線での体感をテストできます。',
      },
    ],
  },
  {
    id: 'storage',
    title: 'Application / Storage',
    description: 'localStorage や Cookie の確認を学びます',
    sections: [
      {
        heading: 'ストレージの確認',
        content:
          'Application パネルで localStorage、sessionStorage、Cookie、IndexedDB の内容を確認・編集・削除できます。このチュートリアルサイトの進捗も localStorage に保存されています。',
      },
      {
        heading: 'Service Worker',
        content:
          'PWA の Service Worker の状態（登録済み、更新待ち）もここで確認。Unregister でリセットできます。',
        code: `// Console で確認
localStorage.getItem('react-tutorial-progress')
// → ["intro","jsx",...]`,
        tip: 'デモで Storage の内容を確認してください。',
      },
      {
        heading: 'Cache Storage',
        content:
          'Service Worker がキャッシュしたファイル一覧。PWA のデバッグで「古いキャッシュが残っている」問題の調査に使います。',
      },
    ],
  },
  {
    id: 'tips',
    title: '便利なショートカット',
    description: '効率的に使うための Tips を学びます',
    sections: [
      {
        heading: 'よく使うショートカット',
        content:
          '• Cmd+Shift+C — 要素選択モード\n• Cmd+P — ファイルを開く（Sources）\n• Cmd+Shift+P — コマンドパレット\n• Esc — Console ドロワーの表示/非表示',
      },
      {
        heading: '$0 と $_',
        content:
          'Elements で選択中の要素は Console で $0 として参照できます。$_ は直前の Console の実行結果です。',
        tip: 'デモでショートカット一覧を確認してください。',
      },
      {
        heading: 'console の便利機能',
        content:
          'copy(変数) でクリップボードにコピー。monitorEvents(element, "click") でイベントを監視。debug(fn) で関数の呼び出し時にブレークします。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'DevTools の学習を続けるためのヒント',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• Memory パネル — メモリリークの調査\n• Coverage — 未使用 CSS/JS の検出\n• React DevTools / Vue DevTools 拡張\n• Chrome DevTools の What\'s New',
      },
      {
        heading: '学習の道筋',
        content:
          '① JS → ② DevTools（今ここ）→ ③ 実際のバグを DevTools で追う → ④ パフォーマンス / PWA チュートリアル',
        tip: 'おめでとうございます！DevTools チュートリアルをすべて学びました 🎉',
      },
    ],
  },
]
