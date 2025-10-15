import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ComplianceLens - AI 輔助合規性分析平台',
  description: '基於現行法律、行政命令與既定政策，自動識別文本中潛在的非法歧視、非法偏好或與生物性別真相相悖的表達，並提供合規性修改建議。',
  keywords: ['合規性', 'AI分析', '法律合規', '歧視檢測', '政策諮詢'],
  authors: [{ name: 'ComplianceLens Team' }],
}

// Next.js expects viewport to be exported separately from metadata in the app router.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
