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
    title: 'パフォーマンスとは？',
    description: 'Web パフォーマンスの重要性を学びます',
    sections: [
      {
        heading: 'なぜパフォーマンスが重要か？',
        content:
          '1秒の遅延でコンバージョン率が7%下がるという調査もあります。ユーザーは遅いサイトを離れ、検索エンジンも高速なサイトを評価します。パフォーマンスは UX とビジネスの両方に直結します。',
      },
      {
        heading: 'パフォーマンスの3つの側面',
        content:
          '• 読み込み速度 — 最初の表示が早いか\n• 応答性 — 操作にすぐ反応するか\n• 視覚的安定性 — レイアウトがずれないか\n\nこれらは Core Web Vitals で計測されます。',
        tip: 'デモでパフォーマンスがビジネスに与える影響を確認してください。',
      },
      {
        heading: '計測から始める',
        content:
          '感覚ではなくデータで改善点を特定します。Lighthouse、DevTools、本番の RUM（Real User Monitoring）を組み合わせます。',
      },
    ],
  },
  {
    id: 'metrics',
    title: 'Core Web Vitals',
    description: 'LCP、INP、CLS の指標を学びます',
    sections: [
      {
        heading: '3つの核心指標',
        content:
          '• LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好\n• INP（Interaction to Next Paint）— 操作への応答。200ms以内が良好\n• CLS（Cumulative Layout Shift）— レイアウトのずれ。0.1以下が良好',
      },
      {
        heading: 'LCP の改善',
        content:
          'サーバー応答の高速化、レンダリングブロックの削減、画像の最適化、CDN の活用が効果的です。LCP 要素は DevTools で特定できます。',
        tip: 'デモで各指標の良好/要改善ラインを確認してください。',
      },
      {
        heading: 'INP と CLS',
        content:
          'INP は長い JavaScript タスクを分割して改善。CLS は画像に width/height を指定し、動的コンテンツの挿入位置を確保して改善します。',
      },
    ],
  },
  {
    id: 'images',
    title: '画像最適化',
    description: 'WebP、lazy loading を学びます',
    sections: [
      {
        heading: '画像は最大のボトルネック',
        content:
          'Web ページのデータ量の半分以上が画像であることが多いです。適切な形式・サイズ・遅延読み込みで大幅に改善できます。',
      },
      {
        heading: 'モダンな画像形式',
        content:
          'WebP は JPEG より 25-35% 小さい。AVIF はさらに小さいが対応ブラウザに注意。Next.js の Image コンポーネントは自動変換します。',
        code: `<picture>
  <source srcset="photo.webp" type="image/webp" />
  <img src="photo.jpg" alt="写真" loading="lazy" width="800" height="600" />
</picture>`,
        tip: 'デモで JPEG と WebP のサイズ差を確認してください。',
      },
      {
        heading: '適切なサイズ',
        content:
          '表示サイズの2倍程度の解像度で十分（Retina 対応）。元画像をそのまま使わず、リサイズして配信します。',
      },
    ],
  },
  {
    id: 'lazy',
    title: '遅延読み込み',
    description: 'コード分割と dynamic import を学びます',
    sections: [
      {
        heading: '画像の lazy loading',
        content:
          'loading="lazy" で画面外の画像を遅延読み込み。Intersection Observer API の糖衣構文です。',
      },
      {
        heading: 'JavaScript のコード分割',
        content:
          'dynamic import() でルートや重いコンポーネントを必要なときだけ読み込みます。',
        code: `const HeavyChart = lazy(() => import('./HeavyChart'));

// Next.js
const Chart = dynamic(() => import('./Chart'), {
  loading: () => <Spinner />,
});`,
        tip: 'デモで遅延読み込みのタイミングを確認してください。',
      },
      {
        heading: 'ルートベースの分割',
        content:
          'React Router や Next.js のファイルベースルーティングは自動でコード分割されます。初期バンドルを小さく保てます。',
      },
    ],
  },
  {
    id: 'bundle',
    title: 'バンドルサイズ',
    description: '不要なコードの削減方法を学びます',
    sections: [
      {
        heading: 'バンドル分析',
        content:
          'rollup-plugin-visualizer や @next/bundle-analyzer でバンドル内容を可視化。どのライブラリが大きいかを特定します。',
      },
      {
        heading: 'Tree Shaking',
        content:
          'ES Modules の named import で使う関数だけをバンドルに含めます。lodash 全体ではなく個別関数を import します。',
        code: `// 悪い
import _ from 'lodash';

// 良い
import debounce from 'lodash/debounce';`,
        tip: 'デモでバンドルサイズの比較を確認してください。',
      },
      {
        heading: '依存関係の見直し',
        content:
          'moment.js → date-fns、大きな UI ライブラリ → 必要なコンポーネントだけ import。bundlephobia.com でパッケージサイズを事前確認します。',
      },
    ],
  },
  {
    id: 'caching',
    title: 'キャッシュ',
    description: 'HTTP キャッシュと CDN を学びます',
    sections: [
      {
        heading: 'HTTP キャッシュ',
        content:
          'Cache-Control ヘッダーでブラウザと CDN のキャッシュを制御。静的アセットは長い max-age、HTML は短い/no-cache が基本です。',
        code: `// 静的アセット（ハッシュ付きファイル名）
Cache-Control: public, max-age=31536000, immutable

// HTML
Cache-Control: no-cache`,
      },
      {
        heading: 'CDN',
        content:
          'コンテンツ配信ネットワークでユーザーに近いサーバーから配信。Cloudflare、Vercel、AWS CloudFront など。画像・JS/CSS の配信で効果大。',
        tip: 'デモでキャッシュヒット時の速度差を確認してください。',
      },
      {
        heading: 'Service Worker キャッシュ',
        content:
          'PWA の Service Worker でオフラインキャッシュも可能。PWA チュートリアルと合わせて学ぶと理解が深まります。',
      },
    ],
  },
  {
    id: 'fonts',
    title: 'フォント最適化',
    description: 'font-display とサブセット化を学びます',
    sections: [
      {
        heading: 'font-display: swap',
        content:
          'フォント読み込み中もテキストを表示（FOUT）。FOIT（テキストが見えない状態）を避けます。',
        code: `@font-face {
  font-family: 'MyFont';
  src: url('/font.woff2') format('woff2');
  font-display: swap;
}`,
      },
      {
        heading: 'woff2 とサブセット',
        content:
          'woff2 が最も圧縮率が高い。日本語フォントはサブセット化（必要な文字だけ）で大幅に軽量化できます。',
        tip: 'デモで font-display の違いを確認してください。',
      },
      {
        heading: 'システムフォント',
        content:
          'font-family: system-ui で OS のフォントを使い、Web フォントのダウンロードを省略。高速化の最も簡単な方法のひとつです。',
      },
    ],
  },
  {
    id: 'rendering',
    title: 'レンダリング最適化',
    description: 'CLS や reflow の回避を学びます',
    sections: [
      {
        heading: 'CLS の防止',
        content:
          '画像・動画に width/height を指定。動的コンテンツの挿入位置を事前に確保（スケルトン UI）。フォントの font-display: swap でテキストの再配置を最小化。',
      },
      {
        heading: 'React の再レンダリング',
        content:
          'React.memo、useMemo、useCallback で不要な再レンダリングを抑制。ただし Profiler で確認してから使い、過剰な最適化は避けます。',
        code: `const MemoizedList = memo(function List({ items }) {
  return items.map(i => <Item key={i.id} {...i} />);
});`,
        tip: 'デモでレイアウトシフトの例を確認してください。',
      },
      {
        heading: 'アニメーションの最適化',
        content:
          'transform と opacity だけをアニメーション（GPU レイヤー）。width/height のアニメーションは reflow を引き起こし重いです。',
      },
    ],
  },
  {
    id: 'monitoring',
    title: 'モニタリング',
    description: '本番環境でのパフォーマンス監視を学びます',
    sections: [
      {
        heading: 'Real User Monitoring',
        content:
          '実際のユーザーの環境でのパフォーマンスを測定。web-vitals ライブラリで LCP/INP/CLS をアナリティクスに送信します。',
        code: `import { onLCP, onINP, onCLS } from 'web-vitals';

onLCP(metric => sendToAnalytics(metric));
onINP(metric => sendToAnalytics(metric));
onCLS(metric => sendToAnalytics(metric));`,
      },
      {
        heading: 'Lighthouse CI',
        content:
          'PR ごとに Lighthouse スコアを計測し、パフォーマンスの劣化を防ぎます。CI/CD チュートリアルと組み合わせて使えます。',
        tip: 'デモで監視の概念を確認してください。',
      },
      {
        heading: '改善サイクル',
        content:
          '計測 → ボトルネック特定 → 改善 → 再計測。一度の最適化で終わりではなく、継続的なプロセスです。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'パフォーマンスの学習を続けるためのヒント',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• web.dev/measure — Google のパフォーマンスガイド\n• SSR/SSG/ISR — Next.js のレンダリング戦略\n• Edge Runtime — エッジでの高速レスポンス\n• Partial Prerendering — Next.js 15 の新機能',
      },
      {
        heading: '学習の道筋',
        content:
          '① DevTools → ② パフォーマンス（今ここ）→ ③ 自分のサイトを Lighthouse で計測 → ④ 改善して再計測',
        tip: 'おめでとうございます！Web パフォーマンスチュートリアルをすべて学びました 🎉',
      },
    ],
  },
]
