import Home from '../page'

export default function LocaleHome() {
  return <Home />
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-TW' }]
}

export const dynamic = 'force-static'
export const dynamicParams = false


