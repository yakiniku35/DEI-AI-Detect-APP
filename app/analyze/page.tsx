'use client'

import React, { useState } from 'react'
import { DocumentTextIcon, ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Button from '@/components/Button'
import Spinner from '@/components/Spinner'
import Toast, { ToastType } from '@/components/Toast'
import { cn } from '@/lib/utils'

interface AnalysisResult {
  verdict: 'YES' | 'NO'
  violations: Array<{
    text: string
    reason: string
    section: string
    suggestion: string
  }>
  summary: string
}

interface ViolationTooltipProps {
  violation: {
    text: string
    reason: string
    section: string
    suggestion: string
  }
  onClose: () => void
}

const ViolationTooltip: React.FC<ViolationTooltipProps> = ({ violation, onClose }) => {
  return (
    <div className="absolute z-50 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-sm text-red-600 dark:text-red-400">違規檢測</h4>
        <button
          onClick={onClose}
          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
        >
          ×
        </button>
      </div>
      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium">原因：</span>
          <span className="text-neutral-600 dark:text-neutral-300">{violation.reason}</span>
        </div>
        <div>
          <span className="font-medium">條款：</span>
          <span className="text-neutral-600 dark:text-neutral-300">{violation.section}</span>
        </div>
        <div>
          <span className="font-medium">建議：</span>
          <span className="text-neutral-600 dark:text-neutral-300">{violation.suggestion}</span>
        </div>
      </div>
    </div>
  )
}

export default function AnalyzePage() {
  const [text, setText] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null)
  const [toast, setToast] = useState<{
    type: ToastType
    title: string
    message?: string
  } | null>(null)

  const handleAnalyze = async () => {
    if (!text.trim()) {
      setToast({
        type: 'error',
        title: '錯誤',
        message: '請輸入一些文本進行分析。'
      })
      return
    }

    if (text.length > 10000) {
      setToast({
        type: 'error',
        title: '錯誤',
        message: '文本過長。請限制在 10,000 字符以內。'
      })
      return
    }

    setIsAnalyzing(true)
    setResult(null)

    try {
      const response = await fetch('/api/analyze-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        throw new Error('分析失敗')
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Analysis error:', error)
      setToast({
        type: 'error',
        title: '分析失敗',
        message: '請重試。'
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const highlightViolations = (originalText: string, violations: AnalysisResult['violations']) => {
    let highlightedText = originalText
    const violationRanges: Array<{
      start: number
      end: number
      index: number
    }> = []

    // Find violation positions in text
    violations.forEach((violation, index) => {
      const startIndex = highlightedText.indexOf(violation.text)
      if (startIndex !== -1) {
        violationRanges.push({
          start: startIndex,
          end: startIndex + violation.text.length,
          index
        })
      }
    })

    // Sort by start position (descending) to avoid index shifting
    violationRanges.sort((a, b) => b.start - a.start)

    // Apply highlights
    violationRanges.forEach(({ start, end, index }) => {
      const before = highlightedText.substring(0, start)
      const violation = highlightedText.substring(start, end)
      const after = highlightedText.substring(end)
      
      highlightedText = `${before}<mark class="highlight-violation cursor-pointer" data-violation-index="${index}">${violation}</mark>${after}`
    })

    return highlightedText
  }

  const handleViolationClick = (index: number) => {
    setActiveTooltip(activeTooltip === index ? null : index)
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <DocumentTextIcon className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">文本分析器</h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            上傳您的文本內容進行合規性分析
          </p>
        </div>

        {/* Input Section */}
        <div className="card p-6 mb-8">
          <div className="mb-4">
            <label htmlFor="text-input" className="block text-sm font-medium mb-2">
              輸入文本
            </label>
            <textarea
              id="text-input"
              value={text}
              onChange={handleTextChange}
              placeholder="輸入您想要分析合規性的文本..."
              className="input min-h-[200px] resize-y"
              maxLength={10000}
            />
            <div className="flex justify-between items-center mt-2 text-sm text-neutral-500">
              <span>最多 10,000 字符</span>
              <span>{text.length}/10,000</span>
            </div>
          </div>
          
          <Button
            onClick={handleAnalyze}
            loading={isAnalyzing}
            disabled={!text.trim() || isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? '分析中...' : '分析文本'}
          </Button>
        </div>

        {/* Results Section */}
        {result && (
          <div className="space-y-6">
            {/* Verdict Card */}
            <div className="card p-6">
              <div className="flex items-center mb-4">
                {result.verdict === 'YES' ? (
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />
                ) : (
                  <ExclamationTriangleIcon className="w-6 h-6 text-red-500 mr-2" />
                )}
                <h2 className="text-xl font-semibold">合規性裁決</h2>
              </div>
              <div className={cn(
                'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium',
                result.verdict === 'YES' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-200'
              )}>
                {result.verdict === 'YES' ? '合規' : '不合規'}
              </div>
            </div>

            {/* Summary */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">分析總結</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{result.summary}</p>
            </div>

            {/* Violations */}
            {result.violations.length > 0 && (
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4">發現違規 ({result.violations.length})</h3>
                <div className="space-y-4">
                  {result.violations.map((violation, index) => (
                    <div key={index} className="border border-red-200 dark:border-red-800 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-red-600 dark:text-red-400">違規 {index + 1}</h4>
                        <span className="text-sm text-neutral-500">{violation.section}</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">問題文本：</span>
                          <span className="bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded text-red-800 dark:text-red-200">
                            {violation.text}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium">原因：</span>
                          <span className="text-neutral-600 dark:text-neutral-300">{violation.reason}</span>
                        </div>
                        <div>
                          <span className="font-medium">建議：</span>
                          <span className="text-neutral-600 dark:text-neutral-300">{violation.suggestion}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Highlighted Text */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">帶註釋的原始文本</h3>
              <div className="prose dark:prose-invert max-w-none">
                <div 
                  className="whitespace-pre-wrap text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: highlightViolations(text, result.violations)
                  }}
                />
              </div>
              {activeTooltip !== null && result.violations[activeTooltip] && (
                <ViolationTooltip
                  violation={result.violations[activeTooltip]}
                  onClose={() => setActiveTooltip(null)}
                />
              )}
            </div>
          </div>
        )}

        {/* Toast */}
        {toast && (
          <Toast
            type={toast.type}
            title={toast.title}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        )}
      </div>
    </div>
  )
}
