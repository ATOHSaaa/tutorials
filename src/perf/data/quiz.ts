import type { QuizQuestion } from '../../lib/quiz'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'intro',
    question: '「パフォーマンス」について、正しい説明はどれですか？',
    options: [
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
      'INP（Interaction to Next Paint）— 操作への応答。200ms以内が良好',
      '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
      'Web ページのデータ量の半分以上が画像であることが多いです。',
    ],
    correctIndex: 2,
    explanation: '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
  },
  {
    id: 'metrics',
    question: '「Core Web Vitals」について、正しい説明はどれですか？',
    options: [
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
      'これらは Core Web Vitals で計測されます。',
      'Web ページのデータ量の半分以上が画像であることが多いです。',
      '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
    ],
    correctIndex: 0,
    explanation: 'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
  },
  {
    id: 'images',
    question: '「画像最適化」について、正しい説明はどれですか？',
    options: [
      'Web ページのデータ量の半分以上が画像であることが多いです。',
      '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
      'これらは Core Web Vitals で計測されます。',
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
    ],
    correctIndex: 0,
    explanation: 'Web ページのデータ量の半分以上が画像であることが多いです。',
  },
  {
    id: 'lazy',
    question: '「遅延読み込み」について、正しい説明はどれですか？',
    options: [
      'loading="lazy" で画面外の画像を遅延読み込み。',
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
      '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
      'これらは Core Web Vitals で計測されます。',
    ],
    correctIndex: 0,
    explanation: 'loading="lazy" で画面外の画像を遅延読み込み。',
  },
  {
    id: 'bundle',
    question: '「バンドルサイズ」について、正しい説明はどれですか？',
    options: [
      '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
      'rollup-plugin-visualizer や @next/bundle-analyzer でバンドル内容を可視化。',
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
      'これらは Core Web Vitals で計測されます。',
    ],
    correctIndex: 1,
    explanation: 'rollup-plugin-visualizer や @next/bundle-analyzer でバンドル内容を可視化。',
  },
  {
    id: 'caching',
    question: '「キャッシュ」について、正しい説明はどれですか？',
    options: [
      'Cache-Control ヘッダーでブラウザと CDN のキャッシュを制御。',
      '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
      'これらは Core Web Vitals で計測されます。',
    ],
    correctIndex: 0,
    explanation: 'Cache-Control ヘッダーでブラウザと CDN のキャッシュを制御。',
  },
  {
    id: 'fonts',
    question: '「フォント最適化」について、正しい説明はどれですか？',
    options: [
      'フォント読み込み中もテキストを表示（FOUT）。',
      'これらは Core Web Vitals で計測されます。',
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
      '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
    ],
    correctIndex: 0,
    explanation: 'フォント読み込み中もテキストを表示（FOUT）。',
  },
  {
    id: 'rendering',
    question: '「レンダリング最適化」について、正しい説明はどれですか？',
    options: [
      'これらは Core Web Vitals で計測されます。',
      '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
      '画像・動画に width/height を指定。',
    ],
    correctIndex: 3,
    explanation: '画像・動画に width/height を指定。',
  },
  {
    id: 'monitoring',
    question: '「モニタリング」について、正しい説明はどれですか？',
    options: [
      '実際のユーザーの環境でのパフォーマンスを測定。',
      '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
      'これらは Core Web Vitals で計測されます。',
    ],
    correctIndex: 0,
    explanation: '実際のユーザーの環境でのパフォーマンスを測定。',
  },
  {
    id: 'next-steps',
    question: '「次のステップ」について、正しい説明はどれですか？',
    options: [
      'これらは Core Web Vitals で計測されます。',
      '1秒の遅延でコンバージョン率が7%下がるという調査もあります。',
      'LCP（Largest Contentful Paint）— 最大コンテンツの表示。2.5秒以内が良好',
      'web.dev/measure — Google のパフォーマンスガイド',
    ],
    correctIndex: 3,
    explanation: 'web.dev/measure — Google のパフォーマンスガイド',
  },
]
