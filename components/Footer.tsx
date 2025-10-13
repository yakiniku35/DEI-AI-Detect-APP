import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const footerLinks = [
    { name: '關於我們', href: '/about' },
    { name: '隱私政策', href: '/privacy' },
    { name: '服務條款', href: '/terms' },
    { name: '聯繫我們', href: '/contact' },
  ]

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 md:mb-0">
            © 2024 ComplianceLens. 版權所有。
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700 text-center">
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            ComplianceLens 是一個 AI 輔助合規性分析平台，旨在幫助確保內容符合現行法律和行政命令要求。
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
