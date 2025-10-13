# ComplianceLens

一個基於 AI 的合規性分析平台，幫助個人、企業和組織確保其溝通內容符合現行法律、行政命令與既定政策要求。

## 🚀 功能特色

### 核心功能
- **文本分析器**：自動識別文本中的合規性違規，提供詳細的分析結果和修改建議
- **政策顧問**：AI 助手回答有關行政命令和合規要求的問題
- **實時分析**：基於 OpenAI GPT-4 的即時合規性檢查
- **高亮顯示**：精確標記問題文本片段，提供詳細解釋

### 技術特色
- **現代化 UI**：響應式設計，支援深色/淺色主題
- **多語言支援**：繁體中文和英文介面
- **安全性**：端到端加密，保護用戶隱私
- **高效能**：Next.js 14 + TypeScript + Tailwind CSS

## 🛠️ 技術棧

### 前端
- **Next.js 14** - React 框架，支援 App Router
- **TypeScript** - 類型安全的 JavaScript
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Heroicons** - 精美的 SVG 圖標庫

### 後端
- **Next.js API Routes** - 伺服器端 API
- **OpenAI GPT-4** - AI 分析引擎
- **Vercel** - 部署平台

### 開發工具
- **ESLint** - 代碼品質檢查
- **PostCSS** - CSS 處理
- **Git** - 版本控制

## 📦 安裝與設置

### 前置要求
- Node.js 18+ 
- npm 或 yarn
- OpenAI API Key

### 安裝步驟

1. **克隆專案**
   ```bash
   git clone <repository-url>
   cd compliancelens-app
   ```

2. **安裝依賴**
   ```bash
   npm install
   # 或
   yarn install
   ```

3. **環境變數設置**
   ```bash
   cp .env.example .env.local
   ```
   
   編輯 `.env.local` 文件，添加您的 OpenAI API Key：
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **填充行政命令資料**
   
   編輯 `utils/executiveOrders.ts` 文件，將佔位符文本替換為實際的行政命令內容。詳細說明請參考 [README_EXECUTIVE_ORDERS.md](./README_EXECUTIVE_ORDERS.md)。

5. **啟動開發伺服器**
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

   訪問 [http://localhost:3000](http://localhost:3000) 查看應用程式。

## 🚀 部署

### Vercel 部署（推薦）

1. **推送代碼到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **連接 Vercel**
   - 訪問 [Vercel](https://vercel.com)
   - 使用 GitHub 帳號登入
   - 點擊 "New Project"
   - 選擇您的 GitHub 倉庫

3. **配置環境變數**
   - 在 Vercel 專案設置中添加 `OPENAI_API_KEY`
   - 部署完成後，Vercel 會自動構建和部署

### 其他部署方式

詳細的部署指南請參考 [DEPLOYMENT.md](./DEPLOYMENT.md)。

## 📁 專案結構

```
compliancelens-app/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   │   ├── analyze-text/  # 文本分析 API
│   │   └── policy-advisor/ # 政策顧問 API
│   ├── analyze/           # 文本分析器頁面
│   ├── advisor/           # 政策顧問頁面
│   ├── about/             # 關於頁面
│   ├── privacy/           # 隱私政策頁面
│   ├── terms/             # 服務條款頁面
│   ├── contact/           # 聯繫頁面
│   ├── settings/          # 設定頁面
│   ├── layout.tsx         # 根佈局
│   ├── page.tsx           # 首頁
│   └── globals.css        # 全局樣式
├── components/            # React 組件
│   ├── Button.tsx         # 按鈕組件
│   ├── Header.tsx         # 頁首組件
│   ├── Footer.tsx         # 頁尾組件
│   ├── Layout.tsx         # 佈局組件
│   ├── ThemeToggle.tsx    # 主題切換組件
│   ├── Spinner.tsx        # 載入指示器
│   └── Toast.tsx          # 通知組件
├── contexts/              # React Context
│   └── ThemeContext.tsx   # 主題管理
├── lib/                   # 工具函數
│   ├── openai.ts          # OpenAI 服務
│   └── utils.ts           # 通用工具
├── utils/                 # 工具函數
│   └── executiveOrders.ts # 行政命令資料
├── public/                # 靜態資源
│   └── locales/           # 國際化文件
├── .env.example           # 環境變數範例
├── .env.local             # 本地環境變數
├── next.config.js         # Next.js 配置
├── tailwind.config.ts     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 專案依賴
```

## 🔧 開發指南

### 添加新功能

1. **創建新頁面**
   ```bash
   mkdir app/new-page
   touch app/new-page/page.tsx
   ```

2. **添加新組件**
   ```bash
   touch components/NewComponent.tsx
   ```

3. **添加新 API 路由**
   ```bash
   mkdir app/api/new-endpoint
   touch app/api/new-endpoint/route.ts
   ```

### 代碼規範

- 使用 TypeScript 進行類型檢查
- 遵循 ESLint 規則
- 使用 Prettier 格式化代碼
- 組件使用函數式寫法
- 使用 Tailwind CSS 進行樣式設計

### 測試

```bash
# 運行 linting
npm run lint

# 構建專案
npm run build

# 啟動生產伺服器
npm run start
```

## 🤝 貢獻指南

1. Fork 專案
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 📄 授權

本專案採用 MIT 授權 - 查看 [LICENSE](LICENSE) 文件了解詳情。

## 📞 支援

如果您遇到任何問題或有建議，請：

- 開啟 [Issue](https://github.com/your-repo/issues)
- 發送郵件至 support@compliancelens.com
- 使用 [聯繫表單](https://your-domain.com/contact)

## 🔗 相關連結

- [部署指南](./DEPLOYMENT.md)
- [行政命令填充說明](./README_EXECUTIVE_ORDERS.md)
- [OpenAI API 文檔](https://platform.openai.com/docs)
- [Next.js 文檔](https://nextjs.org/docs)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)

## 📈 路線圖

### 即將推出
- [ ] 更多語言支援
- [ ] 批量文本分析
- [ ] API 文檔
- [ ] 用戶帳戶系統
- [ ] 分析歷史記錄

### 長期計劃
- [ ] 移動應用程式
- [ ] 企業版功能
- [ ] 自定義合規規則
- [ ] 團隊協作功能

---

**ComplianceLens** - 讓合規性分析變得簡單、準確、高效。
