import React from 'react'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">隱私政策</h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            我們如何收集、使用和保護您的數據
          </p>
        </div>

        {/* Last Updated */}
        <div className="card p-6 mb-8 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>最後更新：</strong>2024年10月13日
          </p>
        </div>

        {/* Introduction */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">引言</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            ComplianceLens（「我們」、「我們的」或「本服務」）致力於保護您的隱私。本隱私政策解釋了我們如何收集、使用、披露和保護您在使用我們的 AI 輔助合規性分析平台時提供的信息。
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            通過使用我們的服務，您同意本隱私政策中描述的數據收集和使用做法。
          </p>
        </div>

        {/* Information We Collect */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">我們收集的信息</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">1. 您提供的信息</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• <strong>文本內容：</strong>您提交用於分析的文本內容</li>
              <li>• <strong>問題內容：</strong>您向政策顧問提出的問題</li>
              <li>• <strong>使用偏好：</strong>您的主題設置和語言偏好</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">2. 自動收集的信息</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• <strong>使用數據：</strong>您如何使用我們的服務</li>
              <li>• <strong>技術信息：</strong>IP 地址、瀏覽器類型、操作系統</li>
              <li>• <strong>日誌信息：</strong>訪問時間、頁面瀏覽、錯誤日誌</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">3. 我們不收集的信息</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• 個人身份信息（姓名、地址、電話號碼等）</li>
              <li>• 財務信息</li>
              <li>• 社交媒體帳戶信息</li>
              <li>• 位置信息</li>
            </ul>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">我們如何使用信息</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">主要用途</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• <strong>提供服務：</strong>執行文本分析和政策諮詢</li>
              <li>• <strong>改進服務：</strong>優化 AI 模型和分析準確性</li>
              <li>• <strong>技術支持：</strong>解決技術問題和錯誤</li>
              <li>• <strong>安全保障：</strong>防止濫用和確保服務安全</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">AI 處理</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              您的文本內容會被發送到 OpenAI 的 GPT-4 模型進行分析。我們確保：
            </p>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• 不存儲您的文本內容</li>
              <li>• 不與第三方共享您的內容</li>
              <li>• 使用後立即刪除處理結果</li>
              <li>• 遵循 OpenAI 的使用政策</li>
            </ul>
          </div>
        </div>

        {/* Data Security */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">數據安全</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">安全措施</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• <strong>加密傳輸：</strong>所有數據傳輸使用 HTTPS 加密</li>
              <li>• <strong>安全存儲：</strong>敏感信息加密存儲</li>
              <li>• <strong>訪問控制：</strong>限制員工對數據的訪問</li>
              <li>• <strong>定期審計：</strong>定期檢查安全措施</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">數據保留</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• <strong>分析結果：</strong>不存儲，僅在會話期間顯示</li>
              <li>• <strong>使用日誌：</strong>保留 30 天後自動刪除</li>
              <li>• <strong>錯誤日誌：</strong>保留 90 天後自動刪除</li>
              <li>• <strong>設置偏好：</strong>本地存儲，可隨時清除</li>
            </ul>
          </div>
        </div>

        {/* Third Party Services */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">第三方服務</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">OpenAI</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              我們使用 OpenAI 的 GPT-4 模型來提供 AI 分析服務。請查看 OpenAI 的隱私政策：
            </p>
            <a
              href="https://openai.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://openai.com/privacy
            </a>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Vercel</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              我們的服務託管在 Vercel 平台上。請查看 Vercel 的隱私政策：
            </p>
            <a
              href="https://vercel.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://vercel.com/privacy
            </a>
          </div>
        </div>

        {/* Your Rights */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">您的權利</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">數據控制</h3>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• <strong>訪問權：</strong>了解我們收集的關於您的信息</li>
              <li>• <strong>更正權：</strong>更正不準確的信息</li>
              <li>• <strong>刪除權：</strong>請求刪除您的信息</li>
              <li>• <strong>限制權：</strong>限制我們處理您的信息</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">如何行使權利</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              如果您想行使任何這些權利，請通過以下方式聯繫我們：
            </p>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• 發送郵件至：privacy@compliancelens.com</li>
              <li>• 使用聯繫表單：<a href="/contact" className="text-primary hover:underline">聯繫我們</a></li>
            </ul>
          </div>
        </div>

        {/* Changes to Privacy Policy */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">隱私政策變更</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            我們可能會不時更新本隱私政策。任何重大變更都會通過以下方式通知您：
          </p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>• 在我們的網站上發布通知</li>
            <li>• 發送郵件通知（如果我們有您的郵件地址）</li>
            <li>• 在服務中顯示彈出通知</li>
          </ul>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mt-4">
            建議您定期查看本隱私政策以了解任何變更。
          </p>
        </div>

        {/* Contact Information */}
        <div className="card p-8 bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold mb-4">聯繫我們</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            如果您對本隱私政策有任何問題或疑慮，請聯繫我們：
          </p>
          <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
            <p>• 郵件：privacy@compliancelens.com</p>
            <p>• 網站：<a href="/contact" className="text-primary hover:underline">聯繫表單</a></p>
            <p>• 地址：ComplianceLens 隱私團隊</p>
          </div>
        </div>
      </div>
    </div>
  )
}
