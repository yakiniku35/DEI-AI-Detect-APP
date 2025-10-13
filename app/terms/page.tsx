import React from 'react'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

export default function TermsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <DocumentTextIcon className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">服務條款</h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            使用 ComplianceLens 服務的條款和條件
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
            歡迎使用 ComplianceLens（「本服務」）。這些服務條款（「條款」）構成您與 ComplianceLens 之間的法律協議，規範您對本服務的使用。
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            通過訪問或使用本服務，您同意受這些條款的約束。如果您不同意這些條款，請勿使用本服務。
          </p>
        </div>

        {/* Service Description */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">服務描述</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            ComplianceLens 是一個 AI 輔助合規性分析平台，提供以下服務：
          </p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 mb-4">
            <li>• <strong>文本分析：</strong>分析文本內容的合規性</li>
            <li>• <strong>政策諮詢：</strong>提供有關行政命令和合規要求的諮詢</li>
            <li>• <strong>修改建議：</strong>提供合規性修改建議</li>
            <li>• <strong>教育資源：</strong>提供合規性相關的教育內容</li>
          </ul>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            本服務僅供信息和教育目的，不構成法律建議。
          </p>
        </div>

        {/* User Responsibilities */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">用戶責任</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">1. 合法使用</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              您同意僅將本服務用於合法目的，並遵守所有適用的法律法規。
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">2. 禁止行為</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              您不得：
            </p>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• 上傳或傳輸任何非法、有害、威脅、濫用、騷擾、誹謗、粗俗、淫穢或其他令人反感的內容</li>
              <li>• 嘗試未經授權訪問本服務或相關系統</li>
              <li>• 干擾或中斷本服務的運行</li>
              <li>• 使用自動化工具濫用本服務</li>
              <li>• 逆向工程、反編譯或反彙編本服務</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">3. 內容責任</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              您對通過本服務提交的所有內容負責，並確保：
            </p>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• 您有權提交該內容</li>
              <li>• 內容不侵犯任何第三方的權利</li>
              <li>• 內容不包含機密或專有信息</li>
              <li>• 內容符合適用的法律法規</li>
            </ul>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">知識產權</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">1. 服務所有權</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              本服務及其所有內容、功能、設計、圖形、用戶界面、文本、圖像、音頻、視頻、軟件和代碼（統稱「服務內容」）均為 ComplianceLens 或其許可方的專有財產，受版權、商標、專利和其他知識產權法律保護。
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">2. 用戶內容</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              您保留對通過本服務提交的內容的所有權利。但是，您授予我們使用、處理和分析該內容以提供服務的非獨家、免版稅許可。
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">3. 反饋</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              您向我們提供的任何反饋、建議或改進建議將被視為非機密信息，我們可以自由使用、修改和分發這些信息。
            </p>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">免責聲明</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">1. 服務可用性</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              本服務按「現狀」提供，不提供任何明示或暗示的保證。我們不保證服務將始終可用、無錯誤或滿足您的需求。
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">2. 分析結果</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              本服務提供的分析結果僅供參考，不構成法律建議。您應該：
            </p>
            <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>• 諮詢合格的法律專業人士</li>
              <li>• 驗證分析結果的準確性</li>
              <li>• 根據具體情況做出決定</li>
              <li>• 承擔使用分析結果的責任</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">3. 第三方內容</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              本服務可能包含第三方內容或鏈接。我們不對這些內容的準確性、完整性或可用性負責。
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">責任限制</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            在法律允許的最大範圍內，ComplianceLens 及其關聯公司、董事、員工、代理人和許可方不對以下情況承擔責任：
          </p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 mb-4">
            <li>• 任何間接、偶然、特殊、懲罰性或後果性損害</li>
            <li>• 利潤損失、數據丟失或業務中斷</li>
            <li>• 因使用或無法使用本服務而產生的任何損害</li>
            <li>• 因本服務中的錯誤、遺漏或不準確而產生的損害</li>
          </ul>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            我們的總責任不超過您在使用本服務期間支付的費用（如果有的話）。
          </p>
        </div>

        {/* Indemnification */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">賠償</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            您同意賠償、辯護並使 ComplianceLens 及其關聯公司、董事、員工、代理人和許可方免受因以下情況而產生的任何索賠、損害、損失、成本和費用：
          </p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>• 您違反這些條款</li>
            <li>• 您通過本服務提交的內容</li>
            <li>• 您對本服務的使用</li>
            <li>• 您侵犯任何第三方的權利</li>
          </ul>
        </div>

        {/* Termination */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">終止</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">1. 終止權利</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              我們可以隨時終止或暫停您對本服務的訪問，無需事先通知，原因包括但不限於違反這些條款。
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">2. 終止後果</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              終止後，您對本服務的訪問權限將立即停止，但這些條款中在終止後仍然有效的條款將繼續適用。
            </p>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">條款變更</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            我們保留隨時修改這些條款的權利。重大變更將通過以下方式通知您：
          </p>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 mb-4">
            <li>• 在我們的網站上發布通知</li>
            <li>• 發送郵件通知</li>
            <li>• 在服務中顯示彈出通知</li>
          </ul>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            您繼續使用本服務即表示您接受修改後的條款。
          </p>
        </div>

        {/* Governing Law */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">適用法律</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            這些條款受中華民國法律管轄，不考慮法律衝突原則。任何爭議應提交至有管轄權的法院解決。
          </p>
        </div>

        {/* Contact Information */}
        <div className="card p-8 bg-primary/5 border-primary/20">
          <h2 className="text-2xl font-bold mb-4">聯繫我們</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            如果您對這些服務條款有任何問題，請聯繫我們：
          </p>
          <div className="space-y-2 text-neutral-600 dark:text-neutral-400">
            <p>• 郵件：legal@compliancelens.com</p>
            <p>• 網站：<a href="/contact" className="text-primary hover:underline">聯繫表單</a></p>
            <p>• 地址：ComplianceLens 法律團隊</p>
          </div>
        </div>
      </div>
    </div>
  )
}
