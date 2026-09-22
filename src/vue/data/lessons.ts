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
    title: 'Vue.js とは？',
    description: 'Vue の基本概念と React との違いを学びます',
    sections: [
      {
        heading: 'Vue.js とは？',
        content:
          'Vue.js は Evan You が開発したプログレッシブ JavaScript フレームワークです。UI を構築するためのリアクティブなデータバインディングとコンポーネントシステムを提供します。React と並ぶ人気フレームワークです。',
      },
      {
        heading: 'React との違い',
        content:
          '• テンプレート — Vue は HTML ベースのテンプレート、React は JSX\n• リアクティビティ — Vue は ref/reactive、React は useState\n• 学習曲線 — Vue は HTML に近く初心者に優しいとされる\n• エコシステム — React は Next.js、Vue は Nuxt',
        tip: 'デモで Vue の基本概念を確認してください。',
      },
      {
        heading: 'いつ Vue を選ぶ？',
        content:
          '既存の HTML プロジェクトへの段階的導入、小〜中規模の SPA、Nuxt による SSR/SSG が必要な場合など。チームの経験や好みも大きな要素です。',
      },
    ],
  },
  {
    id: 'setup',
    title: 'セットアップ',
    description: 'Vue プロジェクトの作成方法を学びます',
    sections: [
      {
        heading: 'create-vue',
        content:
          '公式のプロジェクト作成ツールです。Vite ベースで高速な開発体験が得られます。',
        code: `npm create vue@latest my-vue-app

# オプション選択
# TypeScript? Router? Pinia? → 必要に応じて Yes

cd my-vue-app
npm install
npm run dev`,
      },
      {
        heading: 'プロジェクト構成',
        content:
          'src/App.vue がルートコンポーネント。src/components/ に部品、src/views/ にページ（Vue Router 使用時）を配置します。',
        tip: 'デモでプロジェクト構成を確認してください。',
      },
      {
        heading: 'Nuxt',
        content:
          'フルスタックフレームワーク Nuxt は Next.js の Vue 版。ファイルベースルーティング、SSR、Server API が使えます。',
      },
    ],
  },
  {
    id: 'template',
    title: 'テンプレート構文',
    description: 'Vue の HTML ベーステンプレートを学びます',
    sections: [
      {
        heading: 'SFC（Single File Component）',
        content:
          '.vue ファイルに template、script、style を1ファイルにまとめます。',
        code: `<script setup lang="ts">
const message = 'Hello Vue!';
</script>

<template>
  <h1>{{ message }}</h1>
  <p>2 + 2 = {{ 2 + 2 }}</p>
</template>

<style scoped>
h1 { color: #42b883; }
</style>`,
      },
      {
        heading: 'マスタッシュ構文',
        content:
          '{{ }} で JavaScript 式を埋め込みます。v-html で HTML を、v-bind（:）で属性を動的に設定します。',
        tip: 'デモでテンプレートのデータバインディングを確認してください。',
      },
      {
        heading: 'ディレクティブ',
        content:
          'v-if / v-else / v-show（条件表示）、v-for（リスト）、v-model（双方向バインディング）が基本です。',
      },
    ],
  },
  {
    id: 'reactivity',
    title: 'リアクティビティ',
    description: 'ref と reactive で状態を管理する方法を学びます',
    sections: [
      {
        heading: 'ref',
        content:
          'プリミティブ値や単一の値は ref で包みます。script 内では .value でアクセス、template では自動 unwrap されます。',
        code: `<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>`,
      },
      {
        heading: 'reactive',
        content:
          'オブジェクト全体をリアクティブにする場合は reactive()。ただし ref が推奨される場面が増えています。',
        tip: 'デモでカウンターのリアクティビティを確認してください。',
      },
      {
        heading: 'computed と watch',
        content:
          'computed は派生値（React の useMemo 相当）、watch は値の変化を監視（useEffect 相当）します。',
      },
    ],
  },
  {
    id: 'components',
    title: 'コンポーネント',
    description: 'コンポーネントの作成と Props を学びます',
    sections: [
      {
        heading: 'Props',
        content:
          'defineProps で親からデータを受け取ります。TypeScript では型付きで定義できます。',
        code: `<script setup lang="ts">
const props = defineProps<{
  title: string;
  count?: number;
}>();
</script>

<template>
  <h2>{{ title }}</h2>
</template>`,
      },
      {
        heading: 'Emits',
        content:
          'defineEmits で親にイベントを通知。React の callback props に相当します。',
        code: `const emit = defineEmits<{
  update: [value: number];
}>();

emit('update', 42);`,
        tip: 'デモで親子コンポーネントの通信を確認してください。',
      },
      {
        heading: 'スロット',
        content:
          '<slot /> で子の内容を親が注入。React の children に似ていますが、名前付きスロットで複数の注入ポイントを定義できます。',
      },
    ],
  },
  {
    id: 'props',
    title: 'Props の詳細',
    description: 'Props の型定義とデフォルト値を学びます',
    sections: [
      {
        heading: '型付き Props',
        content:
          'defineProps に TypeScript の型を渡すと、型安全な Props が定義できます。必須と任意を ? で区別します。',
        code: `const props = defineProps<{
  title: string;
  count?: number;
  items: string[];
}>();`,
      },
      {
        heading: 'デフォルト値',
        content:
          'withDefaults でデフォルト値を設定。Props が未指定のときのフォールバックを定義します。',
        code: `const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg';
}>(), {
  size: 'md',
});`,
        tip: 'デモで Props の受け渡しを確認してください。',
      },
      {
        heading: 'Props の一方向性',
        content:
          'Props は親から子への一方向データフロー。子から直接変更せず、emit で親に変更を依頼します（React と同じ考え方）。',
      },
    ],
  },
  {
    id: 'computed',
    title: 'computed',
    description: '派生状態を computed で管理する方法を学びます',
    sections: [
      {
        heading: 'computed の基本',
        content:
          '他のリアクティブな値から計算される値は computed で定義します。依存が変わったときだけ再計算され、React の useMemo に近い役割です。',
        code: `import { ref, computed } from 'vue';

const items = ref([{ name: 'りんご', price: 100 }, { name: 'みかん', price: 80 }]);
const total = computed(() =>
  items.value.reduce((sum, i) => sum + i.price, 0)
);`,
      },
      {
        heading: 'methods との使い分け',
        content:
          'computed はキャッシュされる（依存が変わらなければ再計算しない）。methods は呼ぶたびに実行。表示用の派生値は computed、イベントハンドラは methods が基本です。',
        tip: 'デモで computed の再計算タイミングを確認してください。',
      },
      {
        heading: 'writable computed',
        content:
          'getter + setter を持つ computed も定義可能ですが、通常は ref + computed の組み合わせで十分です。',
      },
    ],
  },
  {
    id: 'lifecycle',
    title: 'ライフサイクル',
    description: 'コンポーネントのライフサイクルフックを学びます',
    sections: [
      {
        heading: 'Composition API のフック',
        content:
          'onMounted、onUpdated、onUnmounted など。React の useEffect に相当しますが、目的別にフックが分かれています。',
        code: `import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log('DOM にマウントされた');
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});`,
      },
      {
        heading: 'データ取得のタイミング',
        content:
          'API からのデータ取得は onMounted で行うのが一般的。SSR（Nuxt）では useAsyncData や useFetch を使います。',
        tip: 'デモでライフサイクルの流れを確認してください。',
      },
      {
        heading: 'watchEffect',
        content:
          'リアクティブな値の変化に自動で反応する watchEffect は、useEffect の依存配列を自動追跡するイメージです。',
      },
    ],
  },
  {
    id: 'composables',
    title: 'Composables',
    description: 'ロジックの再利用パターンを学びます',
    sections: [
      {
        heading: 'Composition API',
        content:
          'Vue 3 の Composition API は、ロジックを関数に切り出して再利用するパターンです。React の Custom Hooks に相当します。',
        code: `// composables/useCounter.ts
import { ref } from 'vue';

export function useCounter(initial = 0) {
  const count = ref(initial);
  const increment = () => count.value++;
  const decrement = () => count.value--;
  return { count, increment, decrement };
}`,
      },
      {
        heading: '使い方',
        content:
          'script setup 内で useCounter() を呼ぶだけ。複数コンポーネントで同じロジックを共有できます。',
        tip: 'デモで Composable の再利用を確認してください。',
      },
      {
        heading: '命名規則',
        content:
          'use で始める（useAuth、useFetch、useLocalStorage）。引数と返り値を明確にすると再利用性が上がります。',
      },
    ],
  },
  {
    id: 'next-steps',
    title: '次のステップ',
    description: 'Vue.js の学習を続けるためのヒント',
    sections: [
      {
        heading: 'さらに学ぶこと',
        content:
          '• Vue Router — SPA のルーティング\n• Pinia — 公式状態管理\n• Nuxt 3 — フルスタック Vue フレームワーク\n• VueUse — 便利な Composables 集',
      },
      {
        heading: '学習の道筋',
        content:
          '① HTML/CSS/JS → ② React で基礎 → ③ Vue.js（今ここ）→ ④ Nuxt で実プロジェクトを作る',
        tip: 'おめでとうございます！Vue.js チュートリアルをすべて学びました 🎉',
      },
    ],
  },
]
