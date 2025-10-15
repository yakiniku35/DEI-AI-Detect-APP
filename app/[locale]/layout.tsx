export default function LocaleLayout({ children }: { children: React.ReactNode }) {
  return children
}

export const dynamic = 'force-static'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-TW' }]
}


