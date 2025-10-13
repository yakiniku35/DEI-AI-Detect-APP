'use client'

import React, { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Button from '@/components/Button'
import Toast, { ToastType } from '@/components/Toast'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{
    type: ToastType
    title: string
    message?: string
  } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setToast({
        type: 'error',
        title: '錯誤',
        message: '請填寫所有必填欄位。'
      })
      return
    }

    setIsSubmitting(true)

    try {
      // 這裡可以添加實際的表單提交邏輯
      // 例如發送到 API 端點或第三方服務
      await new Promise(resolve => setTimeout(resolve, 1000)) // 模擬 API 調用
      
      setToast({
        type: 'success',
        title: '發送成功',
        message: '您的消息已成功發送，我們會盡快回覆您。'
      })
      
      // 重置表單
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setToast({
        type: 'error',
        title: '發送失敗',
        message: '請重試或使用其他聯繫方式。'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <EnvelopeIcon className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">聯繫我們</h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            我們很樂意聽到您的聲音，請隨時與我們聯繫
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">聯繫信息</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">電子郵件</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">support@compliancelens.com</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">我們會在 24 小時內回覆</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <PhoneIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">電話</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">+886-2-1234-5678</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">週一至週五 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPinIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">地址</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      台北市信義區信義路五段7號<br />
                      101 大樓 45 樓
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">台灣 110</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">常見問題</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">如何開始使用 ComplianceLens？</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    只需訪問我們的網站，選擇「文本分析器」或「政策顧問」功能即可開始使用。無需註冊帳戶。
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">分析結果是否準確？</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    我們使用先進的 AI 技術，但建議您諮詢法律專業人士以獲得最終確認。
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">我的數據是否安全？</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    是的，我們非常重視數據安全。請查看我們的隱私政策了解詳細信息。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">發送消息</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input w-full"
                  placeholder="請輸入您的姓名"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  電子郵件 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input w-full"
                  placeholder="請輸入您的電子郵件"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  主題 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="input w-full"
                  placeholder="請輸入消息主題"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  消息內容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="input w-full min-h-[120px] resize-y"
                  placeholder="請輸入您的消息內容"
                  required
                />
              </div>

              <Button
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? '發送中...' : '發送消息'}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>注意：</strong>此表單目前為演示版本。實際部署時，請配置適當的後端服務來處理表單提交。
              </p>
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
