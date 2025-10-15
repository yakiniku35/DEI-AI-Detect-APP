# AI 檢測功能設定指南

## 功能說明

此專案已整合真實的 AI 內容檢測功能，使用 OpenAI GPT-4 API 進行深度分析。

## 本地開發設定

### 1. 安裝依賴
```bash
npm install
```

### 2. 設定環境變數

複製 `.env.example` 到 `.env.local`：
```bash
cp .env.example .env.local
```

編輯 `.env.local` 並填入你的 OpenAI API Key：
```bash
# 必須：OpenAI API Key（從 https://platform.openai.com/api-keys 獲取）
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxx

# 開發環境可使用 localhost
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here_generated_by_openssl
```

### 3. 生成 NEXTAUTH_SECRET

```bash
openssl rand -base64 32
```

### 4. 啟動開發伺服器

```bash
npm run dev
```

訪問 http://localhost:3000 即可使用 AI 檢測功能。

## 生產環境部署（Vercel）

### 必要環境變數

在 Vercel Dashboard → Settings → Environment Variables 中設定：

```bash
# Production 環境
OPENAI_API_KEY=sk-proj-xxxxx  # 你的 OpenAI API key
NEXTAUTH_URL=https://your-app.vercel.app  # 你的正式網域
NEXTAUTH_SECRET=xxxxx  # 使用 openssl rand -base64 32 生成

# 可選：關閉 Next.js telemetry
NEXT_TELEMETRY_DISABLED=1
```

### 重要提醒

⚠️ **絕對不要**把包含真實 API key 的 `.env.local` 檔案提交到 Git！

✅ 確保 `.env.local` 已列在 `.gitignore` 中

## API 端點

### POST /api/ai-detect

檢測文本是否由 AI 生成。

**請求格式：**
```json
{
  "text": "要檢測的文本內容"
}
```

**回應格式：**
```json
{
  "isAI": true,
  "confidence": 85,
  "details": "此文本展現出典型的 AI 生成特徵...",
  "indicators": [
    "語言模式高度一致",
    "缺乏個人化語氣",
    "句子結構過於規整"
  ]
}
```

## 功能特色

- ✅ 使用 GPT-4 進行深度語義分析
- ✅ 多維度檢測指標（語言模式、詞彙多樣性、句子結構等）
- ✅ 提供信心度評分（0-100）
- ✅ 詳細的分析說明和判斷依據
- ✅ 完整的錯誤處理和使用者友善提示

## 常見問題

### Q: API 回應 401 錯誤
**A:** 檢查你的 `OPENAI_API_KEY` 是否正確設定且有效。

### Q: API 回應 429 錯誤
**A:** OpenAI API 使用頻率超限，請稍後再試或升級你的 API 方案。

### Q: 如何獲取 OpenAI API Key？
**A:** 
1. 訪問 https://platform.openai.com/
2. 登入並前往 API Keys 頁面
3. 創建新的 API key
4. 確保帳戶有可用餘額

## 技術架構

- **前端**: Next.js 14 App Router + React 18 + TypeScript
- **UI 組件**: 自訂 Tailwind CSS 組件庫
- **AI 檢測**: OpenAI GPT-4 API
- **認證**: NextAuth.js v4
- **部署**: Vercel（推薦）

## 安全性

- 所有敏感資訊（API keys、secrets）透過環境變數管理
- 生產環境使用 HTTPS 和安全的 URL
- NextAuth 提供完整的認證和 session 管理
- 使用 `getAppUrl()` helper 避免 localhost 外洩到生產環境

## 授權

本專案遵循 MIT 授權條款。
