import { Navigate, Route, Routes } from 'react-router-dom'
import { Hub } from './pages/Hub'
import ReactTutorial from './react/App'
import HtmlTutorial from './html/App'
import CssTutorial from './css/App'
import AstroTutorial from './astro/App'
import JsTutorial from './js/App'
import TsTutorial from './ts/App'
import NextTutorial from './next/App'
import TanStackStartTutorial from './tanstack-start/App'
import TailwindTutorial from './tailwind/App'
import GitTutorial from './git/App'
import A11yTutorial from './a11y/App'
import DevtoolsTutorial from './devtools/App'
import TestingTutorial from './testing/App'
import StateTutorial from './state/App'
import FormsTutorial from './forms/App'
import VueTutorial from './vue/App'
import PwaTutorial from './pwa/App'
import PerfTutorial from './perf/App'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hub />} />
      <Route path="/html" element={<HtmlTutorial />} />
      <Route path="/html/:lessonId" element={<HtmlTutorial />} />
      <Route path="/css" element={<CssTutorial />} />
      <Route path="/css/:lessonId" element={<CssTutorial />} />
      <Route path="/tailwind" element={<TailwindTutorial />} />
      <Route path="/tailwind/:lessonId" element={<TailwindTutorial />} />
      <Route path="/js" element={<JsTutorial />} />
      <Route path="/js/:lessonId" element={<JsTutorial />} />
      <Route path="/ts" element={<TsTutorial />} />
      <Route path="/ts/:lessonId" element={<TsTutorial />} />
      <Route path="/git" element={<GitTutorial />} />
      <Route path="/git/:lessonId" element={<GitTutorial />} />
      <Route path="/react" element={<ReactTutorial />} />
      <Route path="/react/:lessonId" element={<ReactTutorial />} />
      <Route path="/state" element={<StateTutorial />} />
      <Route path="/state/:lessonId" element={<StateTutorial />} />
      <Route path="/forms" element={<FormsTutorial />} />
      <Route path="/forms/:lessonId" element={<FormsTutorial />} />
      <Route path="/testing" element={<TestingTutorial />} />
      <Route path="/testing/:lessonId" element={<TestingTutorial />} />
      <Route path="/next" element={<NextTutorial />} />
      <Route path="/next/:lessonId" element={<NextTutorial />} />
      <Route path="/tanstack-start" element={<TanStackStartTutorial />} />
      <Route path="/tanstack-start/:lessonId" element={<TanStackStartTutorial />} />
      <Route path="/vue" element={<VueTutorial />} />
      <Route path="/vue/:lessonId" element={<VueTutorial />} />
      <Route path="/astro" element={<AstroTutorial />} />
      <Route path="/astro/:lessonId" element={<AstroTutorial />} />
      <Route path="/a11y" element={<A11yTutorial />} />
      <Route path="/a11y/:lessonId" element={<A11yTutorial />} />
      <Route path="/devtools" element={<DevtoolsTutorial />} />
      <Route path="/devtools/:lessonId" element={<DevtoolsTutorial />} />
      <Route path="/pwa" element={<PwaTutorial />} />
      <Route path="/pwa/:lessonId" element={<PwaTutorial />} />
      <Route path="/perf" element={<PerfTutorial />} />
      <Route path="/perf/:lessonId" element={<PerfTutorial />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
