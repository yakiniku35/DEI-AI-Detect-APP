'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ChatBubbleLeftRightIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import Button from '@/components/Button'
import Spinner from '@/components/Spinner'
import Toast, { ToastType } from '@/components/Toast'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  citations?: string[]
}

export default function AdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '您好！我是您的政策顧問。我可以幫助回答有關行政命令、合規要求和法律政策指導的問題。您想了解什麼？',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState<{
    type: ToastType
    title: string
    message?: string
  } | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim()) {
      setToast({
        type: 'error',
        title: '錯誤',
        message: '請輸入問題。'
      })
      return
    }

    if (input.length > 1000) {
      setToast({
        type: 'error',
        title: '錯誤',
        message: '問題過長。請限制在 1,000 字符以內。'
      })
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/policy-advisor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: input.trim(),
          history: messages.slice(-10).map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      })

      if (!response.ok) {
        throw new Error('發送失敗')
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.answer,
        timestamp: new Date(),
        citations: data.citations
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      setToast({
        type: 'error',
        title: '發送失敗',
        message: '請重試。'
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatCitations = (content: string, citations?: string[]) => {
    if (!citations || citations.length === 0) {
      return content
    }

    let formattedContent = content
    
    citations.forEach((citation, index) => {
      const citationPattern = new RegExp(citation.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
      formattedContent = formattedContent.replace(
        citationPattern,
        `<span class="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-1 py-0.5 rounded text-sm font-medium">${citation}</span>`
      )
    })

    return formattedContent
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <ChatBubbleLeftRightIcon className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">政策顧問</h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            詢問有關行政命令和合規要求的問題
          </p>
        </div>

        {/* Chat Container */}
        <div className="card p-6 mb-6">
          {/* Messages */}
          <div className="h-96 overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    'max-w-[80%] rounded-lg p-4',
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100'
                  )}
                >
                  <div className="prose dark:prose-invert max-w-none">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: formatCitations(message.content, message.citations)
                      }}
                    />
                  </div>
                  <div className={cn(
                    'text-xs mt-2 opacity-70',
                    message.role === 'user' ? 'text-white' : 'text-neutral-500'
                  )}>
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Spinner size="sm" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">思考中...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="詢問有關合規政策的問題..."
              className="flex-1 input resize-none"
              rows={2}
              maxLength={1000}
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim() || isLoading}
              className="px-4"
            >
              <PaperAirplaneIcon className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex justify-between items-center mt-2 text-sm text-neutral-500">
            <span>按 Enter 發送，Shift + Enter 換行</span>
            <span>{input.length}/1,000</span>
          </div>
        </div>

        {/* Help Section */}
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-3">使用提示</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <div>
              <h4 className="font-medium mb-2">您可以詢問：</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>行政命令的具體條款</li>
                <li>合規性要求</li>
                <li>違規行為的定義</li>
                <li>最佳實踐建議</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">範例問題：</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>什麼是非法歧視？</li>
                <li>DEI 政策有哪些限制？</li>
                <li>如何避免性別意識形態衝突？</li>
                <li>能源政策有什麼要求？</li>
              </ul>
            </div>
          </div>
        </div>

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
