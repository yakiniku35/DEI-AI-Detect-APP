"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Brain, Shield, AlertCircle, CheckCircle2 } from "lucide-react"

export default function Home() {
  const [text, setText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<
    | {
        verdict: 'YES' | 'NO'
        summary: string
        violations: Array<{
          text: string
          reason: string
          section: string
          suggestion: string
        }>
      }
    | null
  >(null)

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleSelectFile = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const textContent = await file.text()
      setText((prev) => (prev ? prev + "\n\n" + textContent : textContent))
    } catch (err) {
      console.error('讀取檔案失敗', err)
    } finally {
      // reset value to allow re-upload same file
      e.target.value = ""
    }
  }

  const analyzeText = async () => {
    if (!text.trim()) return

    setIsAnalyzing(true)

    try {
      const response = await fetch('/api/analyze-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        throw new Error('分析請求失敗')
      }

      const data = await response.json()
      setResult({
        verdict: data.verdict,
        summary: data.summary,
        violations: Array.isArray(data.violations) ? data.violations : [],
      })
    } catch (error) {
      console.error('AI 檢測錯誤:', error)
      setResult(null)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-balance">教師用 DEI 合規檢測器</h1>
          </div>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            協助教師快速檢測教材/講義是否涉及被限制的 DEI、性別意識形態或能源政策等相關內容，並提供合規建議。
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Input Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                輸入或上傳要檢測的文本
              </CardTitle>
              <CardDescription>貼上任何文本內容，我們將分析它是否由 AI 生成</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
              	placeholder="在此輸入或貼上文本..."
              	value={text}
              	onChange={(e) => setText(e.target.value)}
              	className="min-h-[200px] resize-none bg-white text-black placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="text-sm text-muted-foreground">
                  支援匯入檔案：.txt、.md（將自動載入到上方文字框）
                </div>
                <div className="flex gap-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".txt,.md,.markdown,text/plain"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSelectFile}
                    className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  >
                    上傳檔案
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {text.length} 字符 · {text.split(/\s+/).filter(Boolean).length} 字詞
                </span>
                <Button
                	onClick={analyzeText}
                	disabled={!text.trim() || isAnalyzing}
                	size="lg"
                	className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                >
                  {isAnalyzing ? (
                    <>
                      <Spinner className="mr-2" />
                      分析中...
                    </>
                  ) : (
                    "開始檢測"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Navigation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">快速導覽</CardTitle>
              <CardDescription>前往常用功能頁面</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <Link href="/analyze" className="">
                  <Button variant="secondary" className="w-full justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">分析頁 /analyze</Button>
                </Link>
                <Link href="/advisor">
                  <Button variant="secondary" className="w-full justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">政策顧問 /advisor</Button>
                </Link>
                <Link href="/about">
                  <Button variant="secondary" className="w-full justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">關於我們 /about</Button>
                </Link>
                <Link href="/settings">
                  <Button variant="secondary" className="w-full justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">設定 /settings</Button>
                </Link>
                <Link href="/signin">
                  <Button variant="secondary" className="w-full justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">登入 /signin</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" className="w-full justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary">聯絡我們 /contact</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Result Card */}
          {result && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {result.verdict === 'YES' ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  )}
                  合規分析結果
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">是否合規：</span>
                  <Badge
                    variant={result.verdict === 'YES' ? 'default' : 'destructive'}
                    className="text-base px-4 py-1"
                  >
                    {result.verdict === 'YES' ? 'YES（合規）' : 'NO（不合規）'}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <span className="text-sm font-medium">摘要：</span>
                  <Alert>
                    <AlertDescription>{result.summary}</AlertDescription>
                  </Alert>
                </div>

                {result.violations?.length > 0 && (
                  <div className="space-y-3">
                    <div className="text-sm font-medium">違規細節（{result.violations.length}）</div>
                    <div className="space-y-3">
                      {result.violations.map((v, idx) => (
                        <div key={idx} className="rounded-md border p-3 bg-background/50">
                          <div className="text-sm"><span className="font-medium">段落：</span>{v.text}</div>
                          <div className="text-sm mt-1"><span className="font-medium">原因：</span>{v.reason}</div>
                          <div className="text-sm mt-1"><span className="font-medium">依據：</span>{v.section}</div>
                          <div className="text-sm mt-1"><span className="font-medium">建議：</span>{v.suggestion}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">快速檢測</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">即時分析文本，幾秒鐘內獲得結果</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">高準確度</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">使用先進的機器學習模型進行精確檢測</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">隱私保護</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">您的文本數據安全且不會被儲存</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
