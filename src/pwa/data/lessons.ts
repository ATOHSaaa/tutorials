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
    title: 'PWA とは？',
    description: 'プログレッシブ Web アプリの概要を学びます',
    sections: [
      {
        heading: 'PWA とは？',
        content:
          'Progressive Web App（プログレッシブ Web アプリ）は、Web 技術でネイティブアプリのような体験を提供するアプローチです。ホーム画面への追加、オフライン動作、プッシュ通知などが可能です。',
      },
      {
        heading: 'PWA の3本柱',
        content:
          '• Web App Manifest — アプリ名、アイコン、表示モードの定義\n• Service Worker — オフラインキャッシュ、バックグラウンド処理\n• HTTPS — セキュリティ要件（localhost は例外）',
        tip: 'デモで PWA の構成要素を確認してください。',
      },
      {
        heading: 'なぜ PWA か？',
        content:
          'App Store の審査不要、1つのコードベースで全プラットフォーム、更新が即座に反映——Web の利点を活かしながらアプリ体験を提供できます。',
      },
    ],
  },
  {
    id: 'manifest',
    title: 'Web App Manifest',
    description: 'manifest.json の設定を学びます',
    sections: [
      {
        heading: 'manifest.json',
        content:
          'アプリの名前、アイコン、テーマカラー、表示モード（standalone など）を JSON で定義します。',
        code: `{
  "name": "My PWA App",
  "short_name": "MyApp",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`,
      },
      {
        heading: 'HTML へのリンク',
        content:
          '<link rel="manifest" href="/manifest.json" /> を head に追加。theme-color の meta タグも設定します。',
        tip: 'デモで manifest の各フィールドを確認してください。',
      },
      {
        heading: 'display モード',
        content:
          'standalone — ブラウザ UI なしで表示。fullscreen、minimal-ui、browser も選択可能。アプリらしさは standalone が一般的です。',
      },
    ],
  },
  {
    id: 'service-worker',
    title: 'Service Worker',
    description: 'Service Worker の基本を学びます',
    sections: [
      {
        heading: 'Service Worker とは？',
        content:
          'ブラウザとネットワークの間に入るプロキシスクリプトです。リクエストを横取りしてキャッシュから返す、バックグラウンドでデータを同期するなどができます。メインスレッドとは別スレッドで動作します。',
      },
      {
        heading: '登録',
        content:
          'navigator.serviceWorker.register() で登録。HTTPS 必須（開発時は localhost で可）。',
        code: `if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered'))
      .catch(err => console.error('SW failed', err));
  });
}`,
        tip: 'デモで Service Worker のライフサイクルを確認してください。',
      },
      {
        heading: 'ライフサイクル',
        content:
          'install → activate → fetch。更新時は新しい SW が waiting 状態になり、skipWaiting() で即座に切り替え可能です。',
      },
    ],
  },
  {
    id: 'cache',
    title: 'キャッシュ戦略',
    description: 'オフライン対応のキャッシュ方法を学びます',
    sections: [
      {
        heading: 'Cache API',
        content:
          'caches.open() でキャッシュストアを開き、cache.add() / cache.put() でレスポンスを保存。fetch イベントでキャッシュから返します。',
        code: `self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});`,
      },
      {
        heading: 'キャッシュ戦略の種類',
        content:
          '• Cache First — キャッシュ優先（静的アセット向け）\n• Network First — ネットワーク優先（API 向け）\n• Stale While Revalidate — キャッシュを返しつつバックグラウンドで更新',
        tip: 'デモでキャッシュ戦略の違いを確認してください。',
      },
      {
        heading: 'バージョン管理',
        content:
          'キャッシュ名にバージョンを付け（v1、v2）、activate 時に古いキャッシュを削除します。',
      },
    ],
  },
  {
    id: 'offline',
    title: 'オフライン対応',
    description: 'オフライン時の UX を学びます',
    sections: [
      {
        heading: 'オフラインの検出',
        content:
          'navigator.onLine と online/offline イベントで接続状態を監視。オフライン時はバナー表示やフォームの一時保存が有効です。',
        code: `window.addEventListener('offline', () => {
  showBanner('オフラインです。一部機能が制限されます。');
});`,
      },
      {
        heading: 'App Shell モデル',
        content:
          'アプリの骨格（HTML/CSS/JS）をキャッシュし、コンテンツだけネットワークから取得。オフラインでもアプリの枠組みは表示できます。',
        tip: 'デモでオフライン時の表示を確認してください。',
      },
      {
        heading: 'フォールバックページ',
        content:
          'オフラインでキャッシュもないページは、事前にキャッシュした offline.html を返すパターンが一般的です。',
      },
    ],
  },
  {
    id: 'install',
    title: 'インストール体験',
    description: 'ホーム画面への追加を学びます',
    sections: [
      {
        heading: 'インストールプロンプト',
        content:
          'beforeinstallprompt イベントをキャッチし、独自の「インストール」ボタンを表示できます。ユーザーが明示的にインストールを選ぶ UX が推奨されます。',
        code: `let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton();
});`,
      },
      {
        heading: 'インストール条件',
        content:
          'HTTPS、manifest.json、Service Worker、適切なアイコン——Lighthouse の PWA チェックで要件を確認できます。',
        tip: 'デモでインストールフローを確認してください。',
      },
      {
        heading: 'iOS の注意点',
        content:
          'iOS Safari は beforeinstallprompt をサポートしません。「ホーム画面に追加」を手動で案内する必要があります。',
      },
    ],
  },
  {
    id: 'workbox',
    title: 'Workbox',
    description: 'Google の PWA ライブラリを学びます',
    sections: [
      {
        heading: 'Workbox とは？',
        content:
          'Service Worker のキャッシュ戦略を簡単に実装する Google のライブラリです。Vite では vite-plugin-pwa で統合できます。',
        code: `import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({ cacheName: 'images' })
);`,
      },
      {
        heading: 'vite-plugin-pwa',
        content:
          'Vite プロジェクトでは vite-plugin-pwa を入れるだけで manifest 生成と SW 登録が自動化されます。',
        tip: 'デモで Workbox のプリキャッシュを確認してください。',
      },
      {
        heading: 'generateSW vs injectManifest',
        content:
          'generateSW は設定ベースで自動生成、injectManifest は自分で SW を書いて Workbox を注入。カスタムが必要なら injectManifest です。',
      },
    ],
  },
  {
    id: 'push',
    title: 'プッシュ通知',
    description: '通知の基本を学びます',
    sections: [
      {
        heading: 'プッシュ通知の流れ',
        content:
          '1. ユーザーに通知許可を求める\n2. Push API でサブスクリプションを取得\n3. サーバーからプッシュメッセージを送信\n4. Service Worker が通知を表示',
      },
      {
        heading: '許可のリクエスト',
        content:
          'Notification.requestPermission() で許可を取得。許可はユーザー操作（ボタンクリック）の後に行うのがベストプラクティスです。',
        code: `const permission = await Notification.requestPermission();
if (permission === 'granted') {
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: vapidPublicKey,
  });
}`,
        tip: 'デモで通知許可のフローを確認してください。',
      },
      {
        heading: '実装の複雑さ',
        content:
          'VAPID キー、サーバー側の送信ロジックが必要。小規模アプリでは通知なしでも PWA として十分機能します。',
      },
    ],
  },
  {
    id: 'lighthouse',
    title: 'PWA の監査',
    description: 'Lighthouse で PWA を評価する方法を学びます',
    sections: [
      {
        heading: 'Lighthouse PWA チェック',
        content:
          'Chrome DevTools → Lighthouse → Progressive Web App を選択して実行。インストール可能性、オフライン対応、HTTPS などをスコア化します。',
      },
      {
        heading: 'よくある不合格項目',
        content:
          '• manifest の icons が不足\n• Service Worker が未登録\n• start_url が 200 を返さない\n• viewport meta タグがない',
        tip: 'デモで Lighthouse のチェック項目を確認してください。',
      },
      {
        heading: '継続的な監視',
        content:
          'CI/CD に Lighthouse CI を組み込み、PWA スコアの低下を PR で検知できます。パフォーマンスチュートリアルとも連携します。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'PWA の学習を続けるためのヒント',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• Background Sync — オフライン時のデータ同期\n• Web Share API — ネイティブ共有\n• Badging API — アプリアイコンのバッジ\n• TWA（Trusted Web Activity）— Android でのネイティブ風表示',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML/CSS/JS → ② PWA（今ここ）→ ③ vite-plugin-pwa で自分のプロジェクトを PWA 化 → ④ Lighthouse で監査',
        tip: 'おめでとうございます！PWA チュートリアルをすべて学びました 🎉',
      },
    ],
  },
]
