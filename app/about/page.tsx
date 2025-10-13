import React from 'react'
import { InformationCircleIcon, AcademicCapIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <InformationCircleIcon className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">關於 ComplianceLens</h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            了解我們的使命、願景和技術理念
          </p>
        </div>

        {/* Mission Section */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">我們的使命</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            在當前社會對特定「性別意識形態」和「生物性別真相」議題高度敏感的背景下，ComplianceLens 旨在成為一個中立、客觀的 AI 輔助工具。我們的核心使命是提供一個基於現行法律、行政命令與既定政策，自動識別文本中潛在的「非法歧視」、「非法偏好」或與「生物性別真相」相悖的表達，並提供合規性修改建議的平台。
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            我們的目標是幫助個人、企業和組織確保其溝通內容（無論是文件、報告、宣傳資料還是內部交流）符合法規要求，避免因用詞不當而引發的法律風險、名譽損害或社會爭議。
          </p>
        </div>

        {/* Vision Section */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">我們的願景</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            成為全球領先的 AI 輔助合規性分析平台，為各行各業提供準確、可靠、即時的合規性檢查服務。我們相信，通過技術的力量，可以幫助組織更好地理解和遵守法律法規，促進公平、透明的社會環境。
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">專業準確</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                基於最新的法律法規和行政命令，提供專業級的分析結果
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">安全可靠</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                保護用戶隱私，確保數據安全，提供可信賴的服務
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <InformationCircleIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">透明中立</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                保持中立立場，提供透明的分析過程和結果
              </p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">技術架構</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
            ComplianceLens 採用先進的 AI 技術和現代化的 Web 架構，確保高效、準確的分析結果。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">前端技術</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• Next.js 14 - React 框架</li>
                <li>• TypeScript - 類型安全</li>
                <li>• Tailwind CSS - 樣式設計</li>
                <li>• Heroicons - 圖標庫</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">後端技術</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• OpenAI GPT-4 - AI 分析引擎</li>
                <li>• Next.js API Routes - 後端 API</li>
                <li>• Vercel - 部署平台</li>
                <li>• 環境變數加密 - 安全配置</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">核心功能</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">文本分析器</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• 自動識別合規性違規</li>
                <li>• 提供具體修改建議</li>
                <li>• 高亮顯示問題文本</li>
                <li>• 支持大文本分析</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">政策顧問</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• 即時政策諮詢</li>
                <li>• 條款引用和解釋</li>
                <li>• 聊天式交互界面</li>
                <li>• 歷史對話記錄</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">目標受眾</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">企業組織</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• 企業法務與合規部門</li>
                <li>• 人力資源部門</li>
                <li>• 市場營銷團隊</li>
                <li>• 公共關係部門</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">專業人士</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>• 政府機構與公共事務部門</li>
                <li>• 媒體與內容創作者</li>
                <li>• 學術研究者與教育機構</li>
                <li>• 個人用戶</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="card p-8 bg-primary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">聯繫我們</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              如果您有任何問題或建議，歡迎與我們聯繫。我們致力於不斷改進服務，為用戶提供更好的體驗。
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              聯繫我們
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
