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
    title: "Canvas とは？",
    description: "Canvas の役割と SVG・CSS との違いを学びます",
    sections: [
      {
        heading: "Canvas とは",
        content: "Canvas（キャンバス）は、HTML の `<canvas>` 要素と JavaScript でピクセルを描画する 2D グラフィックス API です。ゲーム、データビジュアライゼーション、画像加工、パーティクル演出など、ピクセル単位の制御が必要な場面で使われます。\n\nCSS や DOM とは違い、Canvas に描いた内容は「ただの画像」として扱われます。ボタンやテキストとしてアクセシブルではないため、UI 部品ではなく「描画領域」として使うのが基本です。",
        tip: "デモで Canvas に図形を描いてみてください。"
      },
      {
        heading: "SVG との違い",
        content: "SVG はベクター形式で、DOM 要素として扱えます。拡大しても劣化しませんが、大量のオブジェクトでは重くなります。\n\nCanvas はラスター（ビットマップ）形式で、毎フレーム再描画します。数千のパーティクルやリアルタイムチャートには Canvas が向き、ロゴやイラストの UI には SVG が向く、という使い分けが一般的です。"
      },
      {
        heading: "WebGL との関係",
        content: "Canvas 2D API は `getContext(\"2d\")` で取得します。3D 描画には同じ `<canvas>` 要素から `getContext(\"webgl2\")` で WebGL を使います。Three.js は WebGL を抽象化したライブラリで、Canvas コースの次のステップとして学ぶと理解が深まります。"
      }
    ]
  },
  {
    id: "setup",
    title: "基本セットアップ",
    description: "canvas 要素と 2D コンテキストの取得方法を学びます",
    sections: [
      {
        heading: "HTML とコンテキスト",
        content: "`<canvas>` 要素を HTML に置き、JavaScript で 2D コンテキストを取得します。CSS で表示サイズを変えた場合、解像度（width/height 属性）も合わせないとぼやけます。",
        code: "<canvas id=\"myCanvas\" width=\"400\" height=\"300\"></canvas>\n\nconst canvas = document.getElementById(\"myCanvas\");\nconst ctx = canvas.getContext(\"2d\");"
      },
      {
        heading: "Retina 対応",
        content: "高 DPI ディスプレイでは `devicePixelRatio` を掛けて内部解像度を上げ、CSS で表示サイズを半分にするのが定番です。",
        code: "const dpr = window.devicePixelRatio || 1;\ncanvas.width = 400 * dpr;\ncanvas.height = 300 * dpr;\ncanvas.style.width = \"400px\";\ncanvas.style.height = \"300px\";\nctx.scale(dpr, dpr);"
      },
      {
        heading: "描画の流れ",
        content: "Canvas は「状態機械」です。fillStyle や lineWidth を設定してから draw 命令を実行します。変更は次の描画に影響するため、描画ごとに `save()` / `restore()` で状態を退避・復元するのが安全です。"
      }
    ]
  },
  {
    id: "shapes",
    title: "図形の描画",
    description: "矩形・円・線の基本メソッドを学びます",
    sections: [
      {
        heading: "矩形",
        content: "`fillRect` は塗りつぶし、`strokeRect` は枠線だけ描きます。座標は左上が (0, 0) です。",
        code: "ctx.fillStyle = \"#a855f7\";\nctx.fillRect(50, 50, 120, 80);\n\nctx.strokeStyle = \"#fff\";\nctx.lineWidth = 3;\nctx.strokeRect(200, 50, 120, 80);"
      },
      {
        heading: "円と弧",
        content: "円は `arc(x, y, radius, startAngle, endAngle)` で描きます。角度はラジアン（0 〜 2π）です。`beginPath()` でパスを始め、`fill()` または `stroke()` で描画します。",
        code: "ctx.beginPath();\nctx.arc(200, 150, 60, 0, Math.PI * 2);\nctx.fillStyle = \"#22d3ee\";\nctx.fill();"
      },
      {
        heading: "線",
        content: "`moveTo` で始点、`lineTo` で終点を指定し `stroke()` で線を引きます。複数の点を結んで折れ線も描けます。",
        code: "ctx.beginPath();\nctx.moveTo(50, 200);\nctx.lineTo(150, 250);\nctx.lineTo(250, 180);\nctx.strokeStyle = \"#fbbf24\";\nctx.lineWidth = 4;\nctx.stroke();"
      }
    ]
  },
  {
    id: "paths",
    title: "パスと曲線",
    description: "複雑な形状をパスで描く方法を学びます",
    sections: [
      {
        heading: "パスの基本",
        content: "`beginPath()` で新しいパスを開始します。`closePath()` で始点に戻る線を引き、塗りつぶしや枠線を適用します。",
        code: "ctx.beginPath();\nctx.moveTo(100, 50);\nctx.lineTo(200, 50);\nctx.lineTo(150, 150);\nctx.closePath();\nctx.fill();"
      },
      {
        heading: "ベジェ曲線",
        content: "`quadraticCurveTo`（2次）と `bezierCurveTo`（3次）で滑らかな曲線を描けます。イラストツールのペンツールと同じ数学です。",
        code: "ctx.beginPath();\nctx.moveTo(50, 200);\nctx.quadraticCurveTo(200, 50, 350, 200);\nctx.stroke();"
      },
      {
        heading: "複合パス",
        content: "複数のサブパスを組み合わせて星形や歯車などの複雑な形状を作れます。`evenodd` 塗りつぶしルールで穴あき形状も表現できます。"
      }
    ]
  },
  {
    id: "colors",
    title: "色とスタイル",
    description: "fillStyle、gradient、透明度を学びます",
    sections: [
      {
        heading: "色の指定",
        content: "fillStyle と strokeStyle には CSS と同じ色指定（#hex、rgb、rgba、hsl）が使えます。",
        code: "ctx.fillStyle = \"rgba(168, 85, 247, 0.6)\";\nctx.fillRect(0, 0, 200, 200);"
      },
      {
        heading: "グラデーション",
        content: "線形グラデーション `createLinearGradient` と放射状 `createRadialGradient` で滑らかな色の変化を表現します。",
        code: "const grad = ctx.createLinearGradient(0, 0, 300, 0);\ngrad.addColorStop(0, \"#a855f7\");\ngrad.addColorStop(1, \"#22d3ee\");\nctx.fillStyle = grad;\nctx.fillRect(0, 0, 300, 150);"
      },
      {
        heading: "globalAlpha",
        content: "図形全体の透明度は `globalAlpha`（0〜1）で制御します。レイヤー合成には `globalCompositeOperation` も使えます。"
      }
    ]
  },
  {
    id: "text",
    title: "テキスト描画",
    description: "フォント、配置、メトリクスを学びます",
    sections: [
      {
        heading: "テキストの描画",
        content: "`fillText` と `strokeText` でテキストを描きます。事前に `font` プロパティでフォントを指定します。",
        code: "ctx.font = \"bold 32px sans-serif\";\nctx.fillStyle = \"#fff\";\nctx.fillText(\"Hello Canvas!\", 50, 100);"
      },
      {
        heading: "配置",
        content: "`textAlign`（left/center/right）と `textBaseline`（top/middle/bottom）でテキストの基準点を変えられます。中央揃えのラベル表示に便利です。"
      },
      {
        heading: "measureText",
        content: "`measureText(\"文字列\").width` でテキスト幅を取得できます。チャートのラベル配置や、テキストがはみ出すかの判定に使います。"
      }
    ]
  },
  {
    id: "images",
    title: "画像の描画",
    description: "drawImage で画像・スプライトを描く方法を学びます",
    sections: [
      {
        heading: "画像の読み込み",
        content: "Image オブジェクトを作り、load イベント後に `drawImage` します。CORS 設定が必要な場合があります。",
        code: "const img = new Image();\nimg.src = \"/photo.jpg\";\nimg.onload = () => {\n  ctx.drawImage(img, 0, 0, 200, 150);\n};"
      },
      {
        heading: "切り抜きとスケール",
        content: "drawImage の9引数版で、ソース画像の一部を切り抜いて任意サイズに描画できます。スプライトアニメーションの基本です。",
        code: "ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);"
      },
      {
        heading: "パフォーマンス",
        content: "毎フレーム新しい Image を作るのは避け、キャッシュした画像を再利用します。オフスクリーン Canvas に一度描いて `drawImage` で転送するテクニックも有効です。"
      }
    ]
  },
  {
    id: "transform",
    title: "座標変換",
    description: "translate、rotate、scale を学びます",
    sections: [
      {
        heading: "変換の基本",
        content: "Canvas は描画前に座標系を変換できます。`translate` で原点移動、`rotate` で回転、`scale` で拡大縮小します。",
        code: "ctx.save();\nctx.translate(200, 150);\nctx.rotate(Math.PI / 4);\nctx.fillRect(-50, -25, 100, 50);\nctx.restore();"
      },
      {
        heading: "save / restore",
        content: "変換は累積するため、描画ごとに `save()` で状態を保存し、終わったら `restore()` で戻します。ネストして使えます。"
      },
      {
        heading: "実用例",
        content: "車のタイヤの回転、時計の針、ゲームキャラの向き変更など、回転の中心を `translate` で移動してから `rotate` するパターンが頻出します。",
        tip: "デモで図形を回転させてみてください。"
      }
    ]
  },
  {
    id: "animation",
    title: "アニメーション",
    description: "requestAnimationFrame で動かす方法を学びます",
    sections: [
      {
        heading: "アニメーションループ",
        content: "`requestAnimationFrame` で毎フレーム描画を更新します。ブラウザのリフレッシュレート（通常 60fps）に同期します。",
        code: "function loop(timestamp) {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  // 描画更新\n  x += 2;\n  ctx.fillRect(x, 100, 40, 40);\n  requestAnimationFrame(loop);\n}\nrequestAnimationFrame(loop);"
      },
      {
        heading: "clearRect",
        content: "前のフレームを消すには `clearRect(0, 0, width, height)` を使います。半透明の残像効果には、代わりに半透明の黒で塗りつぶすテクニックもあります。"
      },
      {
        heading: "デルタタイム",
        content: "フレームレートに依存しない動きには、前フレームとの時間差（delta）を使います。`x += speed * delta` でどの端末でも同じ速度になります。"
      }
    ]
  },
  {
    id: "next-steps",
    title: "次のステップ",
    description: "Canvas の学習を続ける道筋を確認します",
    sections: [
      {
        heading: "次に学ぶこと",
        content: "① Three.js 入門 — 3D グラフィックス\n② Web パフォーマンス — Canvas の最適化\n③ CSSアニメーション — DOM と Canvas の使い分け\n④ ゲーム開発 — Canvas + requestAnimationFrame"
      },
      {
        heading: "学習の道筋",
        content: "Canvas 2D は Web グラフィックスの入門口です。チャートライブラリ（Chart.js）やゲームエンジンの裏側でも Canvas が使われています。Three.js で 3D に進むか、データビジュアライゼーションを深掘りするか、目的に合わせて選びましょう。\n\nおめでとうございます！Canvas 入門をすべて学びました 🎉"
      },
      {
        heading: "実践チェックリスト",
        content: "• width/height と CSS サイズを一致させているか\n• save/restore で状態を管理しているか\n• requestAnimationFrame でアニメーションしているか\n• 高 DPI 対応を検討したか\n• アクセシビリティの代替テキストを用意したか"
      }
    ]
  }
]
