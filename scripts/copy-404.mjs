import fs from 'fs'

// GitHub Pages で SPA のクライアントルーティングを有効にする
fs.copyFileSync('dist/index.html', 'dist/404.html')
console.log('✓ dist/404.html')
