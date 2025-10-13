# 行政命令資料填充指南

## 概述

ComplianceLens 需要三份完整的行政命令文本作為 AI 分析的基礎。這些文本將被用於：
- 識別文本中的合規性違規
- 提供具體的修改建議
- 回答政策相關問題

## 檔案位置

行政命令資料位於：`utils/executiveOrders.ts`

## 填充步驟

### 1. 準備行政命令文本

確保您有以下三份行政命令的完整文本：
- 行政命令 1：關於非法歧視和偏好政策
- 行政命令 2：關於 DEI 政策和生物性別定義
- 行政命令 3：關於能源政策和相關合規要求

### 2. 編輯 executiveOrders.ts

打開 `utils/executiveOrders.ts` 檔案，找到以下三個常數：

```typescript
export const EXECUTIVE_ORDER_1 = `...`
export const EXECUTIVE_ORDER_2 = `...`  
export const EXECUTIVE_ORDER_3 = `...`
```

### 3. 替換佔位符文本

將每個 `EXECUTIVE_ORDER_X` 常數中的佔位符文本（從 `PLACEHOLDER: Executive Order X` 開始到結尾）完全替換為實際的行政命令文本。

### 4. 文本格式要求

確保行政命令文本包含：
- **完整標題和編號**
- **所有章節和子章節**
- **所有法律語言和具體要求**
- **任何附錄或附件**
- **簽署日期和總統姓名**

### 5. 更新元數據

在檔案底部的 `EXECUTIVE_ORDER_METADATA` 物件中更新：
- `title`: 行政命令的正式標題
- `date`: 簽署日期
- `description`: 簡要描述

## 範例格式

```typescript
export const EXECUTIVE_ORDER_1 = `
EXECUTIVE ORDER 12345
Advancing Equality and Preventing Discrimination

By the authority vested in me as President by the Constitution and the laws of the United States of America, it is hereby ordered as follows:

Section 1. Policy.
It is the policy of the United States to advance equality and prevent discrimination...

Section 2. Definitions.
For purposes of this order:
(a) "Discrimination" means...
(b) "Protected class" means...

Section 3. Implementation.
(a) Within 30 days of the date of this order...
(b) Each agency shall...

THE WHITE HOUSE,
January 1, 2025
[President's Name]
`;
```

## 注意事項

1. **保持原始格式**：保留行政命令的原始結構和格式
2. **完整性**：確保包含所有章節，不要遺漏任何內容
3. **準確性**：使用官方發布的文本，避免任何修改或解釋
4. **編碼**：確保文本使用 UTF-8 編碼，支援特殊字符

## 驗證

填充完成後，您可以：
1. 啟動開發伺服器：`npm run dev`
2. 訪問 `/analyze` 頁面測試文本分析功能
3. 訪問 `/advisor` 頁面測試政策諮詢功能
4. 確認 AI 能夠正確引用行政命令的具體章節

## 疑難排解

如果遇到問題：
1. 檢查語法錯誤：確保所有引號和反引號正確配對
2. 檢查編碼：確保特殊字符正確顯示
3. 檢查長度：過長的文本可能需要分段處理
4. 檢查格式：確保文本格式符合 TypeScript 字符串要求

## 支援

如需協助，請參考：
- [TypeScript 字符串文檔](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#string)
- [Next.js 文檔](https://nextjs.org/docs)
- ComplianceLens 專案 README.md
