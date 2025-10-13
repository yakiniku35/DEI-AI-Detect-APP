# ComplianceLens 部署指南

本指南將幫助您將 ComplianceLens 部署到生產環境。我們推薦使用 Vercel 進行部署，因為它與 Next.js 無縫集成，提供自動部署、CDN、邊緣函數等功能。

## 🚀 Vercel 部署（推薦）

### 步驟 1：準備 GitHub 倉庫

1. **創建 GitHub 倉庫**
   ```bash
   # 在 GitHub 上創建新倉庫
   # 然後在本地初始化
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/compliancelens-app.git
   git push -u origin main
   ```

2. **確保所有文件已提交**
   ```bash
   git status
   git add .
   git commit -m "Prepare for deployment"
   git push
   ```

### 步驟 2：Vercel 帳號設置

1. **註冊 Vercel 帳號**
   - 訪問 [vercel.com](https://vercel.com)
   - 點擊 "Sign Up"
   - 選擇 "Continue with GitHub"
   - 授權 Vercel 訪問您的 GitHub 帳號

2. **連接 GitHub 倉庫**
   - 在 Vercel 儀表板中點擊 "New Project"
   - 選擇您的 GitHub 倉庫
   - 點擊 "Import"

### 步驟 3：專案配置

1. **專案設置**
   - **Project Name**: `compliancelens-app`（或您喜歡的名稱）
   - **Framework Preset**: Next.js（自動檢測）
   - **Root Directory**: `./`（預設）
   - **Build Command**: `npm run build`（預設）
   - **Output Directory**: `.next`（預設）
   - **Install Command**: `npm install`（預設）

2. **環境變數配置**
   - 在 "Environment Variables" 部分添加：
     ```
     OPENAI_API_KEY = your_openai_api_key_here
     ```
   - 確保選擇 "Production" 環境
   - 點擊 "Add" 保存

3. **部署設置**
   - 點擊 "Deploy" 開始部署
   - 等待構建完成（通常需要 2-5 分鐘）

### 步驟 4：自定義域名（可選）

1. **添加自定義域名**
   - 在專案設置中點擊 "Domains"
   - 輸入您的域名（例如：`compliancelens.com`）
   - 按照指示配置 DNS 記錄

2. **SSL 證書**
   - Vercel 自動為所有域名提供 SSL 證書
   - 證書會自動續期

### 步驟 5：自動部署設置

1. **GitHub 集成**
   - 每次推送到 `main` 分支時自動部署
   - 每次推送到其他分支時創建預覽部署

2. **部署通知**
   - 在專案設置中配置部署通知
   - 可以通過郵件、Slack 等接收通知

## 🔧 其他部署選項

### Netlify 部署

1. **準備構建**
   ```bash
   npm run build
   npm run export
   ```

2. **Netlify 設置**
   - 訪問 [netlify.com](https://netlify.com)
   - 拖拽 `out` 資料夾到 Netlify
   - 或連接 GitHub 倉庫進行自動部署

3. **環境變數**
   - 在 Netlify 設置中添加 `OPENAI_API_KEY`
   - 重新部署以應用變更

### AWS Amplify 部署

1. **AWS 帳號設置**
   - 創建 AWS 帳號
   - 訪問 AWS Amplify 控制台

2. **連接 GitHub**
   - 選擇 "Host web app"
   - 連接 GitHub 倉庫
   - 選擇分支和構建設置

3. **構建設置**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

### Docker 部署

1. **創建 Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS base
   
   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   
   # Install dependencies based on the preferred package manager
   COPY package.json package-lock.json* ./
   RUN npm ci
   
   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   
   # Next.js collects completely anonymous telemetry data about general usage.
   ENV NEXT_TELEMETRY_DISABLED 1
   
   RUN npm run build
   
   # Production image, copy all the files and run next
   FROM base AS runner
   WORKDIR /app
   
   ENV NODE_ENV production
   ENV NEXT_TELEMETRY_DISABLED 1
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   
   # Set the correct permission for prerender cache
   RUN mkdir .next
   RUN chown nextjs:nodejs .next
   
   # Automatically leverage output traces to reduce image size
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   
   EXPOSE 3000
   
   ENV PORT 3000
   
   CMD ["node", "server.js"]
   ```

2. **構建和運行**
   ```bash
   docker build -t compliancelens-app .
   docker run -p 3000:3000 compliancelens-app
   ```

## 🔒 安全配置

### 環境變數安全

1. **API Key 保護**
   - 永遠不要在客戶端代碼中暴露 API Key
   - 使用環境變數存儲敏感信息
   - 定期輪換 API Key

2. **HTTPS 強制**
   - 確保所有部署都使用 HTTPS
   - 配置 HSTS 標頭
   - 使用安全的 Cookie 設置

### 防火牆設置

1. **Vercel 安全**
   - Vercel 自動提供 DDoS 保護
   - 邊緣函數提供額外的安全層
   - 自動 SSL 證書管理

2. **自定義安全設置**
   - 配置適當的 CORS 政策
   - 設置速率限制
   - 實施輸入驗證

## 📊 監控和分析

### Vercel Analytics

1. **啟用 Analytics**
   - 在 Vercel 專案設置中啟用 Analytics
   - 查看頁面瀏覽量、用戶行為等數據

2. **自定義事件**
   ```javascript
   // 在組件中追蹤事件
   import { track } from '@vercel/analytics'
   
   track('text_analyzed', { length: text.length })
   ```

### 錯誤監控

1. **Sentry 集成**
   ```bash
   npm install @sentry/nextjs
   ```
   
   ```javascript
   // sentry.client.config.js
   import * as Sentry from '@sentry/nextjs'
   
   Sentry.init({
     dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
     tracesSampleRate: 1.0,
   })
   ```

2. **Vercel 錯誤日誌**
   - 在 Vercel 儀表板中查看錯誤日誌
   - 設置錯誤通知

## 🚀 效能優化

### 構建優化

1. **Next.js 優化**
   ```javascript
   // next.config.js
   module.exports = {
     experimental: {
       optimizeCss: true,
     },
     images: {
       formats: ['image/webp', 'image/avif'],
     },
   }
   ```

2. **Bundle 分析**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```
   
   ```javascript
   // next.config.js
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   })
   
   module.exports = withBundleAnalyzer({})
   ```

### CDN 優化

1. **Vercel Edge Network**
   - 自動全球 CDN 分發
   - 邊緣函數支援
   - 自動圖片優化

2. **快取策略**
   - 設置適當的快取標頭
   - 使用 ISR（增量靜態再生）
   - 實施客戶端快取

## 🔄 持續部署

### GitHub Actions

1. **創建工作流程**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to Vercel
   
   on:
     push:
       branches: [main]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: amondnet/vercel-action@v20
           with:
             vercel-token: ${{ secrets.VERCEL_TOKEN }}
             vercel-org-id: ${{ secrets.ORG_ID }}
             vercel-project-id: ${{ secrets.PROJECT_ID }}
   ```

2. **設置 Secrets**
   - 在 GitHub 倉庫設置中添加 Vercel Token
   - 添加組織 ID 和專案 ID

### 預覽部署

1. **分支預覽**
   - 每個 Pull Request 自動創建預覽部署
   - 在 PR 中查看部署狀態
   - 測試變更後再合併

2. **環境管理**
   - Production：主分支部署
   - Preview：功能分支部署
   - Development：本地開發

## 🛠️ 故障排除

### 常見問題

1. **構建失敗**
   - 檢查 Node.js 版本（需要 18+）
   - 確認所有依賴已安裝
   - 檢查環境變數設置

2. **API 錯誤**
   - 驗證 OpenAI API Key 是否正確
   - 檢查 API 額度是否充足
   - 確認網路連接正常

3. **部署問題**
   - 檢查 GitHub 倉庫權限
   - 確認 Vercel 帳號狀態
   - 查看構建日誌

### 日誌查看

1. **Vercel 日誌**
   - 在 Vercel 儀表板中查看部署日誌
   - 使用 CLI 工具查看實時日誌
   ```bash
   npm install -g vercel
   vercel logs
   ```

2. **本地調試**
   ```bash
   # 生產環境本地測試
   npm run build
   npm run start
   
   # 檢查構建輸出
   npm run build -- --debug
   ```

## 📚 相關資源

- [Vercel 文檔](https://vercel.com/docs)
- [Next.js 部署文檔](https://nextjs.org/docs/deployment)
- [OpenAI API 文檔](https://platform.openai.com/docs)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)

## 🆘 支援

如果您在部署過程中遇到問題，請：

1. 查看 [故障排除](#故障排除) 部分
2. 檢查 [Vercel 狀態頁面](https://vercel-status.com)
3. 開啟 [GitHub Issue](https://github.com/your-repo/issues)
4. 聯繫技術支援：support@compliancelens.com

---

**祝您部署順利！** 🎉
