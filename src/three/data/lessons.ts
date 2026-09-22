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
    id: "intro",
    title: "Three.js とは？",
    description: "Three.js の役割と WebGL との関係を学びます",
    sections: [
      {
        heading: "Three.js とは",
        content: "Three.js は WebGL を抽象化した JavaScript 3D ライブラリです。低レベルのシェーダー言語（GLSL）を直接書かなくても、シーン・カメラ・ライト・メッシュの概念で 3D 世界を構築できます。\n\nポートフォリオの 3D ヒーロー、製品ビューア、データの 3D 可視化、ゲームなど幅広く使われています。",
        tip: "デモで 3D シーンの構成要素を確認してみてください。"
      },
      {
        heading: "WebGL との関係",
        content: "WebGL はブラウザの 3D 描画 API です。Three.js は内部で WebGL を呼び出し、ジオメトリやマテリアルを GPU に送ります。生の WebGL は学習コストが高いため、Three.js から入るのが一般的です。"
      },
      {
        heading: "React Three Fiber",
        content: "React プロジェクトでは `@react-three/fiber`（R3F）で Three.js を宣言的に書けます。Three.js の概念を理解した上で R3F を使うと、コンポーネント設計がスムーズになります。"
      }
    ]
  },
  {
    id: "setup",
    title: "プロジェクトセットアップ",
    description: "Three.js の導入と最小構成を学びます",
    sections: [
      {
        heading: "インストール",
        content: "npm で three をインストールし、Vite などのバンドラーで import します。",
        code: "npm install three\n\nimport * as THREE from \"three\";"
      },
      {
        heading: "最小のシーン",
        content: "Scene、Camera、Renderer の3つが最低限必要です。",
        code: "const scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);"
      },
      {
        heading: "アニメーションループ",
        content: "requestAnimationFrame で `renderer.render(scene, camera)` を毎フレーム呼びます。メッシュの rotation を更新すれば回転アニメーションになります。",
        code: "function animate() {\n  requestAnimationFrame(animate);\n  cube.rotation.x += 0.01;\n  cube.rotation.y += 0.01;\n  renderer.render(scene, camera);\n}\nanimate();"
      }
    ]
  },
  {
    id: "scene-camera",
    title: "シーン・カメラ・レンダラー",
    description: "3D 世界の3大要素を学びます",
    sections: [
      {
        heading: "Scene（シーン）",
        content: "Scene は 3D オブジェクトのコンテナです。メッシュ、ライト、カメラを追加します。背景色は `scene.background` で設定できます。"
      },
      {
        heading: "Camera（カメラ）",
        content: "PerspectiveCamera は人間の視点に近い透視投影です。FOV（視野角）、aspect（アスペクト比）、near/far（描画範囲）を設定します。",
        code: "const camera = new THREE.PerspectiveCamera(\n  75,                    // FOV（度）\n  window.innerWidth / window.innerHeight,\n  0.1,                   // near\n  1000                   // far\n);\ncamera.position.z = 5;"
      },
      {
        heading: "Renderer（レンダラー）",
        content: "WebGLRenderer が Canvas 要素を作り、シーンをカメラの視点から描画します。リサイズ時は `setSize` とカメラの aspect を更新します。"
      }
    ]
  },
  {
    id: "geometry",
    title: "ジオメトリ",
    description: "3D の形状データを学びます",
    sections: [
      {
        heading: "ジオメトリとは",
        content: "Geometry は頂点・面・法線などの形状データです。BoxGeometry、SphereGeometry、PlaneGeometry など組み込み形状が豊富です。",
        code: "const geometry = new THREE.BoxGeometry(1, 1, 1);\nconst geometry2 = new THREE.SphereGeometry(0.5, 32, 32);"
      },
      {
        heading: "BufferGeometry",
        content: "カスタム形状は BufferGeometry で頂点配列を直接定義します。パフォーマンスが良く、大量のパーティクルにも使われます。"
      },
      {
        heading: "細分化（segments）",
        content: "SphereGeometry の第2・第3引数は横・縦の分割数です。多いほど滑らかですが、GPU 負荷も増えます。モバイルでは少なめに設定するのが無難です。"
      }
    ]
  },
  {
    id: "material",
    title: "マテリアル",
    description: "表面の見た目を制御するマテリアルを学びます",
    sections: [
      {
        heading: "基本マテリアル",
        content: "MeshBasicMaterial はライト不要で常に同じ色に見えます。ワイヤーフレーム表示や UI 的な用途向きです。",
        code: "const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });\nconst wire = new THREE.MeshBasicMaterial({\n  color: 0xffffff,\n  wireframe: true,\n});"
      },
      {
        heading: "MeshStandardMaterial",
        content: "物理ベース（PBR）の標準マテリアルです。roughness（粗さ）と metalness（金属度）でリアルな質感を表現します。ライトが必要です。",
        code: "const material = new THREE.MeshStandardMaterial({\n  color: 0x6366f1,\n  roughness: 0.4,\n  metalness: 0.6,\n});"
      },
      {
        heading: "テクスチャ",
        content: "TextureLoader で画像を読み込み、map プロパティに設定すると表面に貼れます。normalMap で凹凸、roughnessMap で粗さのバリエーションも表現できます。"
      }
    ]
  },
  {
    id: "mesh",
    title: "メッシュ",
    description: "ジオメトリとマテリアルを組み合わせた描画単位を学びます",
    sections: [
      {
        heading: "Mesh の構成",
        content: "Mesh = Geometry + Material。Scene に add すると描画されます。",
        code: "const geometry = new THREE.BoxGeometry();\nconst material = new THREE.MeshStandardMaterial({ color: 0xa855f7 });\nconst cube = new THREE.Mesh(geometry, material);\nscene.add(cube);"
      },
      {
        heading: "位置・回転・スケール",
        content: "mesh.position、mesh.rotation、mesh.scale で変換します。Group を使えば複数メッシュをまとめて動かせます。",
        code: "cube.position.set(0, 1, 0);\ncube.rotation.y = Math.PI / 4;\ncube.scale.set(1.5, 1.5, 1.5);"
      },
      {
        heading: "Group",
        content: "Group はメッシュのコンテナです。車モデル（本体+タイヤ）を Group にまとめ、Group ごと移動・回転できます。"
      }
    ]
  },
  {
    id: "lights",
    title: "ライト",
    description: "3D シーンを照らすライトの種類を学びます",
    sections: [
      {
        heading: "ライトの種類",
        content: "• AmbientLight — 全体の均一な明るさ\n• DirectionalLight — 太陽光のような平行光\n• PointLight — 電球のような点光源\n• SpotLight — スポットライト",
        code: "const ambient = new THREE.AmbientLight(0xffffff, 0.4);\nconst directional = new THREE.DirectionalLight(0xffffff, 1);\ndirectional.position.set(5, 5, 5);\nscene.add(ambient, directional);"
      },
      {
        heading: "影",
        content: "renderer.shadowMap.enabled = true と、ライト・メッシュの castShadow / receiveShadow を有効にすると影が落ちます。パフォーマンスコストがあるため、必要な場面だけ使います。"
      },
      {
        heading: "環境マップ",
        content: "HDRI 環境マップを scene.environment に設定すると、PBR マテリアルが周囲光を反射し、リアルな金属やガラス表現になります。"
      }
    ]
  },
  {
    id: "controls",
    title: "カメラ操作",
    description: "OrbitControls でマウス操作を学びます",
    sections: [
      {
        heading: "OrbitControls",
        content: "three/examples/jsm/controls/OrbitControls  を使い、マウスドラッグで回転、スクロールでズーム、右ドラッグでパンができます。",
        code: "import { OrbitControls } from \"three/examples/jsm/controls/OrbitControls.js\";\n\nconst controls = new OrbitControls(camera, renderer.domElement);\ncontrols.enableDamping = true;\ncontrols.dampingFactor = 0.05;"
      },
      {
        heading: "damping",
        content: "enableDamping で慣性が付き、操作が滑らかになります。animate 内で `controls.update()` を呼ぶ必要があります。"
      },
      {
        heading: "制限",
        content: "minDistance / maxDistance でズーム範囲、maxPolarAngle で上下の回転制限を設定できます。製品ビューアでは床下に回り込めないようにするなど。"
      }
    ]
  },
  {
    id: "r3f",
    title: "React Three Fiber",
    description: "React で Three.js を使う方法を学びます",
    sections: [
      {
        heading: "R3F とは",
        content: "@react-three/fiber は Three.js の React レンダラーです。`<mesh>`、`<boxGeometry>`、`<meshStandardMaterial>` のように JSX で 3D シーンを宣言的に書けます。",
        code: "import { Canvas } from \"@react-three/fiber\";\n\nfunction App() {\n  return (\n    <Canvas>\n      <ambientLight intensity={0.5} />\n      <directionalLight position={[5, 5, 5]} />\n      <mesh>\n        <boxGeometry />\n        <meshStandardMaterial color=\"purple\" />\n      </mesh>\n    </Canvas>\n  );\n}"
      },
      {
        heading: "drei",
        content: "@react-three/drei は便利コンポーネント集です。OrbitControls、Environment、Text3D、useGLTF などが提供されます。",
        code: "import { OrbitControls, Environment } from \"@react-three/drei\";\n\n<Canvas>\n  <OrbitControls />\n  <Environment preset=\"sunset\" />\n</Canvas>"
      },
      {
        heading: "状態管理",
        content: "useFrame で毎フレームの更新、useThree でカメラや scene にアクセスできます。React の state と組み合わせて UI から 3D を制御するのが R3F の強みです。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "Three.js の学習を続ける道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① glTF モデルの読み込み（useGLTF）\n② シェーダー入門（GLSL）\n③ Web パフォーマンス — 3D の最適化\n④ ポートフォリオに 3D ヒーローを追加"
      },
      {
        heading: "学習の道筋",
        content: "Three.js は Canvas 2D の次のステップとして、Web で 3D 表現を可能にします。まずは回転する立方体から始め、ライトとマテリアルで質感を足し、R3F で React プロジェクトに統合——段階的に進めましょう。\n\nおめでとうございます！Three.js 入門をすべて学びました 🎉"
      },
      {
        heading: "実践チェックリスト",
        content: "• Scene / Camera / Renderer の役割を説明できるか\n• MeshStandardMaterial + ライトで立体感を出せるか\n• OrbitControls で操作できるか\n• リサイズ時に aspect を更新しているか\n• モバイルでのパフォーマンスを考慮しているか"
      }
    ]
  }
]
