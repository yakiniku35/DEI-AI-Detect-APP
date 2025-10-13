import Link from 'next/link'
import Button from '@/components/Button'
import { 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ComplianceLens
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            AI 輔助合規性分析平台，基於現行法律、行政命令與既定政策，自動識別文本中潛在的非法歧視、非法偏好或與生物性別真相相悖的表達。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/analyze">
              <Button variant="secondary" size="lg" className="text-primary">
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                分析文本
              </Button>
            </Link>
            <Link href="/advisor">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                政策顧問
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              核心功能
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              兩個強大的工具，幫助確保您的內容符合現行法規
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Text Analyzer Feature */}
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <DocumentTextIcon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">
                  文本分析器
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                上傳任何文本內容，獲得即時合規性分析，包含詳細的違規檢測和修正建議。
              </p>
              <Link href="/analyze">
                <Button variant="outline" className="w-full">
                  開始分析
                </Button>
              </Link>
            </div>

            {/* Policy Advisor Feature */}
            <div className="card p-8">
              <div className="flex items-center mb-4">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">
                  政策顧問
                </h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                詢問有關行政命令和合規要求的問題。從我們的 AI 助手獲得即時、準確的答案。
              </p>
              <Link href="/advisor">
                <Button variant="outline" className="w-full">
                  提問
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              為什麼選擇 ComplianceLens
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              由先進 AI 技術驅動的專業級合規性分析
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                法律合規
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                確保您的內容符合所有現行法律要求，避免潛在違規。
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <AcademicCapIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                AI 驅動準確性
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                利用先進的 AI 模型識別可能被忽略的細微合規問題。
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentTextIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                時間效率
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                獲得即時分析結果和建議，節省數小時的手動審查時間。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            準備好確保合規性了嗎？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            立即開始使用 ComplianceLens，保護您的組織免受合規風險。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/analyze">
              <Button variant="secondary" size="lg" className="text-primary">
                開始使用
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                了解更多
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

