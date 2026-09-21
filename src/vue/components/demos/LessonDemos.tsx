import { useState } from 'react'
import { DemoPanel } from './DemoPanel'

export function IntroDemo() {
  const compare = [
    { react: 'JSX', vue: 'テンプレート' },
    { react: 'useState', vue: 'ref / reactive' },
    { react: 'useEffect', vue: 'watch / onMounted' },
  ]
  return (
    <DemoPanel title="React vs Vue">
      {compare.map((c) => (
        <div key={c.react} className="selector-item" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <span>React: {c.react}</span><span>Vue: {c.vue}</span>
        </div>
      ))}
    </DemoPanel>
  )
}

export function SetupDemo() {
  return (
    <DemoPanel title="プロジェクト作成">
      <code className="selector-code">npm create vue@latest my-app</code>
      <p className="demo-note">TypeScript、Router、Pinia を選択できます。</p>
    </DemoPanel>
  )
}

export function TemplateDemo() {
  const [show, setShow] = useState(true)
  const items = ['Vue', 'React', 'Svelte']
  return (
    <DemoPanel title="テンプレート構文">
      <div className="toggle-row">
        <button className={show ? 'active' : ''} onClick={() => setShow(true)}>v-if</button>
        <button className={!show ? 'active' : ''} onClick={() => setShow(false)}>v-else</button>
      </div>
      {show ? (
        <ul className="pseudo-list">{items.map((i) => <li key={i}>{i}</li>)}</ul>
      ) : (
        <p>非表示中（v-else）</p>
      )}
      <code className="selector-code">v-for="item in items"</code>
    </DemoPanel>
  )
}

export function ReactivityDemo() {
  const [count, setCount] = useState(0)
  return (
    <DemoPanel title="ref リアクティビティ">
      <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '1rem' }}>{count}</div>
      <div className="toggle-row">
        <button className="nav-btn" onClick={() => setCount((c) => c - 1)}>-</button>
        <button className="nav-btn" onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <code className="selector-code">const count = ref(0) // count.value++</code>
    </DemoPanel>
  )
}

export function ComponentsDemo() {
  return (
    <DemoPanel title="コンポーネント構成">
      <div className="state-context-tree">
        <div className="state-box accent">App.vue</div>
        <div className="state-children">
          <div className="state-box">Header.vue</div>
          <div className="state-box">Main.vue</div>
          <div className="state-box">Footer.vue</div>
        </div>
      </div>
    </DemoPanel>
  )
}

export function PropsDemo() {
  const [msg, setMsg] = useState('こんにちは')
  return (
    <DemoPanel title="Props と Emit">
      <input className="pseudo-input" value={msg} onChange={(e) => setMsg(e.target.value)} />
      <div className="state-box" style={{ marginTop: '0.75rem' }}>Child: {msg}</div>
      <code className="selector-code">defineProps&lt;{`{ message: string }`}&gt;()</code>
    </DemoPanel>
  )
}

export function ComputedDemo() {
  const [price, setPrice] = useState(1000)
  const tax = Math.round(price * 1.1)
  return (
    <DemoPanel title="computed">
      <input type="range" min="500" max="5000" step="100" value={price} onChange={(e) => setPrice(+e.target.value)} style={{ width: '100%', accentColor: 'var(--accent)' }} />
      <p>税抜: ¥{price.toLocaleString()} → 税込: <strong style={{ color: 'var(--accent)' }}>¥{tax.toLocaleString()}</strong></p>
      <code className="selector-code">const total = computed(() =&gt; price.value * 1.1)</code>
    </DemoPanel>
  )
}

export function LifecycleDemo() {
  const [mounted, setMounted] = useState(false)
  return (
    <DemoPanel title="onMounted">
      <button className="btn-primary" onClick={() => setMounted(true)} disabled={mounted}>
        {mounted ? 'マウント完了 ✓' : 'コンポーネントをマウント'}
      </button>
      {mounted && <p className="demo-note">onMounted(() =&gt; fetchData()) が実行されました</p>}
    </DemoPanel>
  )
}

export function ComposablesDemo() {
  return (
    <DemoPanel title="Composables">
      <code className="selector-code" style={{ whiteSpace: 'pre' }}>{`// useCounter.ts\nexport function useCounter() {\n  const count = ref(0)\n  const inc = () => count.value++\n  return { count, inc }\n}`}</code>
      <p className="demo-note">React の Custom Hooks と同じパターンです。</p>
    </DemoPanel>
  )
}

export function NextStepsDemo() {
  return (
    <DemoPanel title="Vue の次のステップ">
      <div className="selector-preview">
        {['Vue Router', 'Pinia', 'Nuxt.js', 'VueUse'].map((t) => <div key={t} className="selector-item">{t}</div>)}
      </div>
    </DemoPanel>
  )
}

const demoMap: Record<string, React.ComponentType> = {
  intro: IntroDemo, setup: SetupDemo, template: TemplateDemo, reactivity: ReactivityDemo,
  components: ComponentsDemo, props: PropsDemo, computed: ComputedDemo,
  lifecycle: LifecycleDemo, composables: ComposablesDemo, 'next-steps': NextStepsDemo,
}

export function LessonDemo({ lessonId }: { lessonId: string }) {
  const Demo = demoMap[lessonId]
  if (!Demo) return null
  return <Demo />
}
