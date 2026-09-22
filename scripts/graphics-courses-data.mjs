function lesson(id, title, description, sections) {
  return { id, title, description, sections }
}
function sec(heading, content, extra = {}) {
  return { heading, content, ...extra }
}

export const GRAPHICS_COURSES = [
  {
    slug: 'canvas',
    componentName: 'CanvasTutorial',
    courseTitle: 'Canvas',
    sidebarTitle: 'Canvas チュートリアル',
    heroAccent: 'Canvas',
    heroSub: 'HTML5 Canvas で図形・テキスト・画像を描画し、アニメーションまで。2D グラフィックスの基礎を10レッスンで学びます。',
    feature1: '実際の Canvas 上で図形やアニメーションを描くデモが体験できます。',
    icon: '▣',
    logoIcon: '▣',
    section: 'framework',
    subtitle: '2D グラフィックス',
    description: 'getContext、図形描画、パス、テキスト、画像、座標変換、アニメーションまで。HTML5 Canvas API を10レッスンで学びます。',
    gradient: 'linear-gradient(135deg, #f43f5e, #fb923c)',
    lessons: [
      lesson('intro', 'Canvas とは？', 'Canvas の役割と SVG・CSS との違いを学びます', [
        sec('Canvas とは', 'Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。ゲーム、データビジュアライゼーション、画像加工、パーティクル演出など、ピクセル単位の制御が必要な場面で使われます。\n\nCSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。ボタンやテキストとしてアクセシブルではないため、UI 部品ではなく「描画領域」として使うのが基本です。', { tip: 'デモで Canvas に図形を描いてみてください。' }),
        sec('SVG との違い', 'SVG はベクター形式で、DOM 要素として扱えます。拡大しても劣化しませんが、大量のオブジェクトでは重くなります。\n\nCanvas はラスター（ビットマップ）形式で、毎フレーム再描画します。数千のパーティクルやリアルタイムチャートには Canvas が向き、ロゴやイラストの UI には SVG が向く、という使い分けが一般的です。'),
        sec('WebGL との関係', 'Canvas 2D API は `getContext("2d")` で取得します。3D 描画には同じ `<canvas>` 要素から `getContext("webgl2")` で WebGL を使います。Three.js は WebGL を抽象化したライブラリで、Canvas コースの次のステップとして学ぶと理解が深まります。'),
      ]),
      lesson('setup', '基本セットアップ', 'canvas 要素と 2D コンテキストの取得方法を学びます', [
        sec('HTML とコンテキスト', '`<canvas>` 要素を HTML に置き、JavaScript で 2D コンテキストを取得します。CSS で表示サイズを変えた場合、解像度（width/height 属性）も合わせないとぼやけます。', { code: '<canvas id="myCanvas" width="400" height="300"></canvas>\n\nconst canvas = document.getElementById("myCanvas");\nconst ctx = canvas.getContext("2d");' }),
        sec('Retina 対応', '高 DPI ディスプレイでは `devicePixelRatio` を掛けて内部解像度を上げ、CSS で表示サイズを半分にするのが定番です。', { code: 'const dpr = window.devicePixelRatio || 1;\ncanvas.width = 400 * dpr;\ncanvas.height = 300 * dpr;\ncanvas.style.width = "400px";\ncanvas.style.height = "300px";\nctx.scale(dpr, dpr);' }),
        sec('描画の流れ', 'Canvas は「状態機械」です。fillStyle や lineWidth を設定してから draw 命令を実行します。変更は次の描画に影響するため、描画ごとに `save()` / `restore()` で状態を退避・復元するのが安全です。'),
      ]),
      lesson('shapes', '図形の描画', '矩形・円・線の基本メソッドを学びます', [
        sec('矩形', '`fillRect` は塗りつぶし、`strokeRect` は枠線だけ描きます。座標は左上が (0, 0) です。', { code: 'ctx.fillStyle = "#a855f7";\nctx.fillRect(50, 50, 120, 80);\n\nctx.strokeStyle = "#fff";\nctx.lineWidth = 3;\nctx.strokeRect(200, 50, 120, 80);' }),
        sec('円と弧', '円は `arc(x, y, radius, startAngle, endAngle)` で描きます。角度はラジアン（0 〜 2π）です。`beginPath()` でパスを始め、`fill()` または `stroke()` で描画します。', { code: 'ctx.beginPath();\nctx.arc(200, 150, 60, 0, Math.PI * 2);\nctx.fillStyle = "#22d3ee";\nctx.fill();' }),
        sec('線', '`moveTo` で始点、`lineTo` で終点を指定し `stroke()` で線を引きます。複数の点を結んで折れ線も描けます。', { code: 'ctx.beginPath();\nctx.moveTo(50, 200);\nctx.lineTo(150, 250);\nctx.lineTo(250, 180);\nctx.strokeStyle = "#fbbf24";\nctx.lineWidth = 4;\nctx.stroke();' }),
      ]),
      lesson('paths', 'パスと曲線', '複雑な形状をパスで描く方法を学びます', [
        sec('パスの基本', '`beginPath()` で新しいパスを開始します。`closePath()` で始点に戻る線を引き、塗りつぶしや枠線を適用します。', { code: 'ctx.beginPath();\nctx.moveTo(100, 50);\nctx.lineTo(200, 50);\nctx.lineTo(150, 150);\nctx.closePath();\nctx.fill();' }),
        sec('ベジェ曲線', '`quadraticCurveTo`（2次）と `bezierCurveTo`（3次）で滑らかな曲線を描けます。イラストツールのペンツールと同じ数学です。', { code: 'ctx.beginPath();\nctx.moveTo(50, 200);\nctx.quadraticCurveTo(200, 50, 350, 200);\nctx.stroke();' }),
        sec('複合パス', '複数のサブパスを組み合わせて星形や歯車などの複雑な形状を作れます。`evenodd` 塗りつぶしルールで穴あき形状も表現できます。'),
      ]),
      lesson('colors', '色とスタイル', 'fillStyle、gradient、透明度を学びます', [
        sec('色の指定', 'fillStyle と strokeStyle には CSS と同じ色指定（#hex、rgb、rgba、hsl）が使えます。', { code: 'ctx.fillStyle = "rgba(168, 85, 247, 0.6)";\nctx.fillRect(0, 0, 200, 200);' }),
        sec('グラデーション', '線形グラデーション `createLinearGradient` と放射状 `createRadialGradient` で滑らかな色の変化を表現します。', { code: 'const grad = ctx.createLinearGradient(0, 0, 300, 0);\ngrad.addColorStop(0, "#a855f7");\ngrad.addColorStop(1, "#22d3ee");\nctx.fillStyle = grad;\nctx.fillRect(0, 0, 300, 150);' }),
        sec('globalAlpha', '図形全体の透明度は `globalAlpha`（0〜1）で制御します。レイヤー合成には `globalCompositeOperation` も使えます。'),
      ]),
      lesson('text', 'テキスト描画', 'フォント、配置、メトリクスを学びます', [
        sec('テキストの描画', '`fillText` と `strokeText` でテキストを描きます。事前に `font` プロパティでフォントを指定します。', { code: 'ctx.font = "bold 32px sans-serif";\nctx.fillStyle = "#fff";\nctx.fillText("Hello Canvas!", 50, 100);' }),
        sec('配置', '`textAlign`（left/center/right）と `textBaseline`（top/middle/bottom）でテキストの基準点を変えられます。中央揃えのラベル表示に便利です。'),
        sec('measureText', '`measureText("文字列").width` でテキスト幅を取得できます。チャートのラベル配置や、テキストがはみ出すかの判定に使います。'),
      ]),
      lesson('images', '画像の描画', 'drawImage で画像・スプライトを描く方法を学びます', [
        sec('画像の読み込み', 'Image オブジェクトを作り、load イベント後に `drawImage` します。CORS 設定が必要な場合があります。', { code: 'const img = new Image();\nimg.src = "/photo.jpg";\nimg.onload = () => {\n  ctx.drawImage(img, 0, 0, 200, 150);\n};' }),
        sec('切り抜きとスケール', 'drawImage の9引数版で、ソース画像の一部を切り抜いて任意サイズに描画できます。スプライトアニメーションの基本です。', { code: 'ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);' }),
        sec('パフォーマンス', '毎フレーム新しい Image を作るのは避け、キャッシュした画像を再利用します。オフスクリーン Canvas に一度描いて `drawImage` で転送するテクニックも有効です。'),
      ]),
      lesson('transform', '座標変換', 'translate、rotate、scale を学びます', [
        sec('変換の基本', 'Canvas は描画前に座標系を変換できます。`translate` で原点移動、`rotate` で回転、`scale` で拡大縮小します。', { code: 'ctx.save();\nctx.translate(200, 150);\nctx.rotate(Math.PI / 4);\nctx.fillRect(-50, -25, 100, 50);\nctx.restore();' }),
        sec('save / restore', '変換は累積するため、描画ごとに `save()` で状態を保存し、終わったら `restore()` で戻します。ネストして使えます。'),
        sec('実用例', '車のタイヤの回転、時計の針、ゲームキャラの向き変更など、回転の中心を `translate` で移動してから `rotate` するパターンが頻出します。', { tip: 'デモで図形を回転させてみてください。' }),
      ]),
      lesson('animation', 'アニメーション', 'requestAnimationFrame で動かす方法を学びます', [
        sec('アニメーションループ', '`requestAnimationFrame` で毎フレーム描画を更新します。ブラウザのリフレッシュレート（通常 60fps）に同期します。', { code: 'function loop(timestamp) {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  // 描画更新\n  x += 2;\n  ctx.fillRect(x, 100, 40, 40);\n  requestAnimationFrame(loop);\n}\nrequestAnimationFrame(loop);' }),
        sec('clearRect', '前のフレームを消すには `clearRect(0, 0, width, height)` を使います。半透明の残像効果には、代わりに半透明の黒で塗りつぶすテクニックもあります。'),
        sec('デルタタイム', 'フレームレートに依存しない動きには、前フレームとの時間差（delta）を使います。`x += speed * delta` でどの端末でも同じ速度になります。'),
      ]),
      lesson('next-steps', '次のステップ', 'Canvas の学習を続ける道筋を確認します', [
        sec('次に学ぶこと', '① Three.js 入門 — 3D グラフィックス\n② Web パフォーマンス — Canvas の最適化\n③ CSSアニメーション — DOM と Canvas の使い分け\n④ ゲーム開発 — Canvas + requestAnimationFrame'),
        sec('学習の道筋', 'Canvas 2D は Web グラフィックスの入門口です。チャートライブラリ（Chart.js）やゲームエンジンの裏側でも Canvas が使われています。Three.js で 3D に進むか、データビジュアライゼーションを深掘りするか、目的に合わせて選びましょう。\n\nおめでとうございます！Canvas 入門をすべて学びました 🎉'),
        sec('実践チェックリスト', '• width/height と CSS サイズを一致させているか\n• save/restore で状態を管理しているか\n• requestAnimationFrame でアニメーションしているか\n• 高 DPI 対応を検討したか\n• アクセシビリティの代替テキストを用意したか'),
      ]),
    ],
  },
  {
    slug: 'three',
    componentName: 'ThreeTutorial',
    courseTitle: 'Three.js',
    sidebarTitle: 'Three.js チュートリアル',
    heroAccent: 'Three.js',
    heroSub: 'WebGL を手軽に使える 3D ライブラリ。シーン・カメラ・ライトから React Three Fiber まで10レッスンで学びます。',
    feature1: '3D の基本概念をインタラクティブなデモで体験できます。',
    icon: '3D',
    logoIcon: '◆',
    section: 'framework',
    subtitle: '3D グラフィックス',
    description: 'シーン、カメラ、ジオメトリ、マテリアル、ライト、OrbitControls、React Three Fiber まで。Three.js を10レッスンで学びます。',
    gradient: 'linear-gradient(135deg, #1e1b4b, #6366f1)',
    lessons: [
      lesson('intro', 'Three.js とは？', 'Three.js の役割と WebGL との関係を学びます', [
        sec('Three.js とは', 'Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。低レベルのシェーダー言語（GLSL）を直接書かなくても、シーン・カメラ・ライト・メッシュの概念で 3D 世界を構築できます。\n\nポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。', { tip: 'デモで 3D シーンの構成要素を確認してみてください。' }),
        sec('WebGL との関係', 'WebGL はブラウザの 3D 描画 API です。Three.js は内部で WebGL を呼び出し、ジオメトリやマテリアルを GPU に送ります。生の WebGL は学習コストが高いため、Three.js から入るのが一般的です。'),
        sec('React Three Fiber', 'React プロジェクトでは `@react-three/fiber`（R3F）で Three.js を宣言的に書けます。Three.js の概念を理解した上で R3F を使うと、コンポーネント設計がスムーズになります。'),
      ]),
      lesson('setup', 'プロジェクトセットアップ', 'Three.js の導入と最小構成を学びます', [
        sec('インストール', 'npm で three をインストールし、Vite などのバンドラーで import します。', { code: 'npm install three\n\nimport * as THREE from "three";' }),
        sec('最小のシーン', 'Scene、Camera、Renderer の3つが最低限必要です。', { code: 'const scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);' }),
        sec('アニメーションループ', 'requestAnimationFrame で `renderer.render(scene, camera)` を毎フレーム呼びます。メッシュの rotation を更新すれば回転アニメーションになります。', { code: 'function animate() {\n  requestAnimationFrame(animate);\n  cube.rotation.x += 0.01;\n  cube.rotation.y += 0.01;\n  renderer.render(scene, camera);\n}\nanimate();' }),
      ]),
      lesson('scene-camera', 'シーン・カメラ・レンダラー', '3D 世界の3大要素を学びます', [
        sec('Scene（シーン）', 'Scene は 3D オブジェクトのコンテナです。メッシュ、ライト、カメラを追加します。背景色は `scene.background` で設定できます。'),
        sec('Camera（カメラ）', 'PerspectiveCamera は人間の視点に近い透視投影です。FOV（視野角）、aspect（アスペクト比）、near/far（描画範囲）を設定します。', { code: 'const camera = new THREE.PerspectiveCamera(\n  75,                    // FOV（度）\n  window.innerWidth / window.innerHeight,\n  0.1,                   // near\n  1000                   // far\n);\ncamera.position.z = 5;' }),
        sec('Renderer（レンダラー）', 'WebGLRenderer が Canvas 要素を作り、シーンをカメラの視点から描画します。リサイズ時は `setSize` とカメラの aspect を更新します。'),
      ]),
      lesson('geometry', 'ジオメトリ', '3D の形状データを学びます', [
        sec('ジオメトリとは', 'Geometry は頂点・面・法線などの形状データです。BoxGeometry、SphereGeometry、PlaneGeometry など組み込み形状が豊富です。', { code: 'const geometry = new THREE.BoxGeometry(1, 1, 1);\nconst geometry2 = new THREE.SphereGeometry(0.5, 32, 32);' }),
        sec('BufferGeometry', 'カスタム形状は BufferGeometry で頂点配列を直接定義します。パフォーマンスが良く、大量のパーティクルにも使われます。'),
        sec('細分化（segments）', 'SphereGeometry の第2・第3引数は横・縦の分割数です。多いほど滑らかですが、GPU 負荷も増えます。モバイルでは少なめに設定するのが無難です。'),
      ]),
      lesson('material', 'マテリアル', '表面の見た目を制御するマテリアルを学びます', [
        sec('基本マテリアル', 'MeshBasicMaterial はライト不要で常に同じ色に見えます。ワイヤーフレーム表示や UI 的な用途向きです。', { code: 'const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });\nconst wire = new THREE.MeshBasicMaterial({\n  color: 0xffffff,\n  wireframe: true,\n});' }),
        sec('MeshStandardMaterial', '物理ベース（PBR）の標準マテリアルです。roughness（粗さ）と metalness（金属度）でリアルな質感を表現します。ライトが必要です。', { code: 'const material = new THREE.MeshStandardMaterial({\n  color: 0x6366f1,\n  roughness: 0.4,\n  metalness: 0.6,\n});' }),
        sec('テクスチャ', 'TextureLoader で画像を読み込み、map プロパティに設定すると表面に貼れます。normalMap で凹凸、roughnessMap で粗さのバリエーションも表現できます。'),
      ]),
      lesson('mesh', 'メッシュ', 'ジオメトリとマテリアルを組み合わせた描画単位を学びます', [
        sec('Mesh の構成', 'Mesh = Geometry + Material。Scene に add すると描画されます。', { code: 'const geometry = new THREE.BoxGeometry();\nconst material = new THREE.MeshStandardMaterial({ color: 0xa855f7 });\nconst cube = new THREE.Mesh(geometry, material);\nscene.add(cube);' }),
        sec('位置・回転・スケール', 'mesh.position、mesh.rotation、mesh.scale で変換します。Group を使えば複数メッシュをまとめて動かせます。', { code: 'cube.position.set(0, 1, 0);\ncube.rotation.y = Math.PI / 4;\ncube.scale.set(1.5, 1.5, 1.5);' }),
        sec('Group', 'Group はメッシュのコンテナです。車モデル（本体+タイヤ）を Group にまとめ、Group ごと移動・回転できます。'),
      ]),
      lesson('lights', 'ライト', '3D シーンを照らすライトの種類を学びます', [
        sec('ライトの種類', '• AmbientLight — 全体の均一な明るさ\n• DirectionalLight — 太陽光のような平行光\n• PointLight — 電球のような点光源\n• SpotLight — スポットライト', { code: 'const ambient = new THREE.AmbientLight(0xffffff, 0.4);\nconst directional = new THREE.DirectionalLight(0xffffff, 1);\ndirectional.position.set(5, 5, 5);\nscene.add(ambient, directional);' }),
        sec('影', 'renderer.shadowMap.enabled = true と、ライト・メッシュの castShadow / receiveShadow を有効にすると影が落ちます。パフォーマンスコストがあるため、必要な場面だけ使います。'),
        sec('環境マップ', 'HDRI 環境マップを scene.environment に設定すると、PBR マテリアルが周囲光を反射し、リアルな金属やガラス表現になります。'),
      ]),
      lesson('controls', 'カメラ操作', 'OrbitControls でマウス操作を学びます', [
        sec('OrbitControls', 'three/examples/jsm/controls/OrbitControls  を使い、マウスドラッグで回転、スクロールでズーム、右ドラッグでパンができます。', { code: 'import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";\n\nconst controls = new OrbitControls(camera, renderer.domElement);\ncontrols.enableDamping = true;\ncontrols.dampingFactor = 0.05;' }),
        sec('damping', 'enableDamping で慣性が付き、操作が滑らかになります。animate 内で `controls.update()` を呼ぶ必要があります。'),
        sec('制限', 'minDistance / maxDistance でズーム範囲、maxPolarAngle で上下の回転制限を設定できます。製品ビューアでは床下に回り込めないようにするなど。'),
      ]),
      lesson('r3f', 'React Three Fiber', 'React で Three.js を使う方法を学びます', [
        sec('R3F とは', '@react-three/fiber は Three.js の React レンダラーです。`<mesh>`、`<boxGeometry>`、`<meshStandardMaterial>` のように JSX で 3D シーンを宣言的に書けます。', { code: 'import { Canvas } from "@react-three/fiber";\n\nfunction App() {\n  return (\n    <Canvas>\n      <ambientLight intensity={0.5} />\n      <directionalLight position={[5, 5, 5]} />\n      <mesh>\n        <boxGeometry />\n        <meshStandardMaterial color="purple" />\n      </mesh>\n    </Canvas>\n  );\n}' }),
        sec('drei', '@react-three/drei は便利コンポーネント集です。OrbitControls、Environment、Text3D、useGLTF などが提供されます。', { code: 'import { OrbitControls, Environment } from "@react-three/drei";\n\n<Canvas>\n  <OrbitControls />\n  <Environment preset="sunset" />\n</Canvas>' }),
        sec('状態管理', 'useFrame で毎フレームの更新、useThree でカメラや scene にアクセスできます。React の state と組み合わせて UI から 3D を制御するのが R3F の強みです。'),
      ]),
      lesson('next-steps', '次のステップ', 'Three.js の学習を続ける道筋を確認します', [
        sec('次に学ぶこと', '① glTF モデルの読み込み（useGLTF）\n② シェーダー入門（GLSL）\n③ Web パフォーマンス — 3D の最適化\n④ ポートフォリオに 3D ヒーローを追加'),
        sec('学習の道筋', 'Three.js は Canvas 2D の次のステップとして、Web で 3D 表現を可能にします。まずは回転する立方体から始め、ライトとマテリアルで質感を足し、R3F で React プロジェクトに統合——段階的に進めましょう。\n\nおめでとうございます！Three.js 入門をすべて学びました 🎉'),
        sec('実践チェックリスト', '• Scene / Camera / Renderer の役割を説明できるか\n• MeshStandardMaterial + ライトで立体感を出せるか\n• OrbitControls で操作できるか\n• リサイズ時に aspect を更新しているか\n• モバイルでのパフォーマンスを考慮しているか'),
      ]),
    ],
  },
]
