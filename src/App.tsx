import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { Hub } from './pages/Hub'
import { MyPage } from './pages/MyPage'
import { QuizHub } from './pages/QuizHub'
import { CourseQuiz } from './pages/CourseQuiz'
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
import SqlTutorial from './sql/App'
import DbTutorial from './db/App'
import A11yTutorial from './a11y/App'
import DevtoolsTutorial from './devtools/App'
import TestingTutorial from './testing/App'
import StateTutorial from './state/App'
import FormsTutorial from './forms/App'
import VueTutorial from './vue/App'
import PwaTutorial from './pwa/App'
import PerfTutorial from './perf/App'
import EdgeTutorial from './edge/App'
import CloudflareTutorial from './cloudflare/App'
import CicdTutorial from './cicd/App'
import UptimeTutorial from './uptime/App'
import DomTutorial from './dom/App'
import ViteTutorial from './vite/App'
import TurboTutorial from './turbo/App'
import WebfontsTutorial from './webfonts/App'
import ElectronTutorial from './electron/App'
import TauriTutorial from './tauri/App'
import LinterTutorial from './linter/App'
import AnimationTutorial from './animation/App'
import ThreeTutorial from './three/App'
import CanvasTutorial from './canvas/App'
import I18nTutorial from './i18n/App'
import WebsocketTutorial from './websocket/App'
import DockerTutorial from './docker/App'
import SeoTutorial from './seo/App'
import SecurityTutorial from './security/App'
import PlaywrightTutorial from './playwright/App'
import SupabaseTutorial from './supabase/App'
import StorybookTutorial from './storybook/App'
import ShadcnTutorial from './shadcn/App'
import GraphqlTutorial from './graphql/App'
import PrismaTutorial from './prisma/App'
import AuthTutorial from './auth/App'
import NpmTutorial from './npm/App'
import NodeTutorial from './node/App'
import HttpTutorial from './http/App'

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Hub />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/quizzes" element={<QuizHub />} />
        <Route path="/quizzes/:courseId" element={<CourseQuiz />} />
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
        <Route path="/db" element={<DbTutorial />} />
        <Route path="/db/:lessonId" element={<DbTutorial />} />
        <Route path="/sql" element={<SqlTutorial />} />
        <Route path="/sql/:lessonId" element={<SqlTutorial />} />
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
        <Route path="/edge" element={<EdgeTutorial />} />
        <Route path="/edge/:lessonId" element={<EdgeTutorial />} />
        <Route path="/cloudflare" element={<CloudflareTutorial />} />
        <Route path="/cloudflare/:lessonId" element={<CloudflareTutorial />} />
        <Route path="/cicd" element={<CicdTutorial />} />
        <Route path="/cicd/:lessonId" element={<CicdTutorial />} />
        <Route path="/uptime" element={<UptimeTutorial />} />
        <Route path="/uptime/:lessonId" element={<UptimeTutorial />} />
        <Route path="/dom" element={<DomTutorial />} />
        <Route path="/dom/:lessonId" element={<DomTutorial />} />
        <Route path="/vite" element={<ViteTutorial />} />
        <Route path="/vite/:lessonId" element={<ViteTutorial />} />
        <Route path="/turbo" element={<TurboTutorial />} />
        <Route path="/turbo/:lessonId" element={<TurboTutorial />} />
        <Route path="/webfonts" element={<WebfontsTutorial />} />
        <Route path="/webfonts/:lessonId" element={<WebfontsTutorial />} />
        <Route path="/electron" element={<ElectronTutorial />} />
        <Route path="/electron/:lessonId" element={<ElectronTutorial />} />
        <Route path="/tauri" element={<TauriTutorial />} />
        <Route path="/tauri/:lessonId" element={<TauriTutorial />} />
        <Route path="/linter" element={<LinterTutorial />} />
        <Route path="/linter/:lessonId" element={<LinterTutorial />} />
        <Route path="/http" element={<HttpTutorial />} />
        <Route path="/http/:lessonId" element={<HttpTutorial />} />
        <Route path="/node" element={<NodeTutorial />} />
        <Route path="/node/:lessonId" element={<NodeTutorial />} />
        <Route path="/npm" element={<NpmTutorial />} />
        <Route path="/npm/:lessonId" element={<NpmTutorial />} />
        <Route path="/auth" element={<AuthTutorial />} />
        <Route path="/auth/:lessonId" element={<AuthTutorial />} />
        <Route path="/prisma" element={<PrismaTutorial />} />
        <Route path="/prisma/:lessonId" element={<PrismaTutorial />} />
        <Route path="/graphql" element={<GraphqlTutorial />} />
        <Route path="/graphql/:lessonId" element={<GraphqlTutorial />} />
        <Route path="/storybook" element={<StorybookTutorial />} />
        <Route path="/storybook/:lessonId" element={<StorybookTutorial />} />
        <Route path="/supabase" element={<SupabaseTutorial />} />
        <Route path="/supabase/:lessonId" element={<SupabaseTutorial />} />
        <Route path="/playwright" element={<PlaywrightTutorial />} />
        <Route path="/playwright/:lessonId" element={<PlaywrightTutorial />} />
        <Route path="/security" element={<SecurityTutorial />} />
        <Route path="/security/:lessonId" element={<SecurityTutorial />} />
        <Route path="/seo" element={<SeoTutorial />} />
        <Route path="/seo/:lessonId" element={<SeoTutorial />} />
        <Route path="/docker" element={<DockerTutorial />} />
        <Route path="/docker/:lessonId" element={<DockerTutorial />} />
        <Route path="/websocket" element={<WebsocketTutorial />} />
        <Route path="/websocket/:lessonId" element={<WebsocketTutorial />} />
        <Route path="/i18n" element={<I18nTutorial />} />
        <Route path="/i18n/:lessonId" element={<I18nTutorial />} />
        <Route path="/animation" element={<AnimationTutorial />} />
        <Route path="/animation/:lessonId" element={<AnimationTutorial />} />
        <Route path="/canvas" element={<CanvasTutorial />} />
        <Route path="/canvas/:lessonId" element={<CanvasTutorial />} />
        <Route path="/three" element={<ThreeTutorial />} />
        <Route path="/three/:lessonId" element={<ThreeTutorial />} />
        <Route path="/shadcn" element={<ShadcnTutorial />} />
        <Route path="/shadcn/:lessonId" element={<ShadcnTutorial />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
