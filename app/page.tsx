"use client"

import { useState } from "react"
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
  const [result, setResult] = useState<{
    isAI: boolean
    confidence: number
    details: string
  } | null>(null)

  const analyzeText = async () => {
    if (!text.trim()) return

    setIsAnalyzing(true)

    try {
      const response = await fetch('/api/ai-detect', {
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
        isAI: data.isAI,
        confidence: data.confidence,
        details: data.details,
      })
    } catch (error) {
      console.error('AI 檢測錯誤:', error)
      setResult({
        isAI: false,
        confidence: 0,
        details: '分析時發生錯誤，請稍後再試。',
      })
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
            <h1 className="text-4xl md:text-5xl font-bold text-balance">DEI AI 檢測器</h1>
          </div>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            使用先進的 AI 技術檢測文本是否由人工智能生成
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Input Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                輸入要檢測的文本
              </CardTitle>
              <CardDescription>貼上任何文本內容，我們將分析它是否由 AI 生成</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="在此輸入或貼上文本..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[200px] resize-none"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {text.length} 字符 · {text.split(/\s+/).filter(Boolean).length} 字詞
                </span>
                <Button onClick={analyzeText} disabled={!text.trim() || isAnalyzing} size="lg">
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

          {/* Result Card */}
          {result && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {result.isAI ? (
                    <AlertCircle className="w-5 h-5 text-destructive" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  )}
                  檢測結果
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">檢測狀態：</span>
                  <Badge variant={result.isAI ? "destructive" : "default"} className="text-base px-4 py-1">
                    {result.isAI ? "AI 生成" : "人類撰寫"}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>信心度：</span>
                    <span className="font-medium">{result.confidence}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        result.isAI ? "bg-destructive" : "bg-green-500"
                      }`}
                      style={{ width: `${result.confidence}%` }}
                    />
                  </div>
                </div>

                <Alert>
                  <AlertDescription>{result.details}</AlertDescription>
                </Alert>
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
