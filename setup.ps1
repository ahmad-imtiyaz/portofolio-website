# Setup Portfolio Website - Auto Create All Files

Write-Host "🚀 Creating portfolio website structure..." -ForegroundColor Green

# Create index.html
@"
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Professional developer portfolio" />
    <title>Developer Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
"@ | Out-File -FilePath "index.html" -Encoding UTF8

Write-Host "✅ Created index.html" -ForegroundColor Cyan

# Create vite.config.js
@"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
"@ | Out-File -FilePath "vite.config.js" -Encoding UTF8

Write-Host "✅ Created vite.config.js" -ForegroundColor Cyan

# Create tailwind.config.js
@"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}
"@ | Out-File -FilePath "tailwind.config.js" -Encoding UTF8

Write-Host "✅ Created tailwind.config.js" -ForegroundColor Cyan

# Create netlify.toml
@"
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
"@ | Out-File -FilePath "netlify.toml" -Encoding UTF8

Write-Host "✅ Created netlify.toml" -ForegroundColor Cyan

# Create public/_redirects
@"
/*    /index.html   200
"@ | Out-File -FilePath "public\_redirects" -Encoding UTF8

Write-Host "✅ Created public/_redirects" -ForegroundColor Cyan

Write-Host "`n🎉 Setup complete! Now run: npm run dev" -ForegroundColor Green