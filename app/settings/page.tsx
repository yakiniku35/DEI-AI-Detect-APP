'use client'

import React, { useState } from 'react'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import Button from '@/components/Button'
import ThemeToggle from '@/components/ThemeToggle'
import Toast, { ToastType } from '@/components/Toast'

export default function SettingsPage() {
  const [toast, setToast] = useState<{
    type: ToastType
    title: string
    message?: string
  } | null>(null)

  const handleSaveSettings = () => {
    setToast({
      type: 'success',
      title: '設定已儲存',
      message: '您的偏好設定已成功更新。'
    })
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Cog6ToothIcon className="w-8 h-8 text-primary mr-3" />
            <h1 className="text-3xl font-bold">設定</h1>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            自定義您的 ComplianceLens 體驗
          </p>
        </div>

        <div className="space-y-8">
          {/* Appearance Settings */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">外觀設定</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">主題</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    選擇您偏好的顏色主題
                  </p>
                </div>
                <ThemeToggle showLabel={true} />
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-semibold mb-4">主題預覽</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-white border-2 border-neutral-200 rounded-lg p-4 mb-2">
                      <div className="w-full h-16 bg-primary rounded mb-2"></div>
                      <div className="text-xs text-neutral-600">淺色主題</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-neutral-900 border-2 border-neutral-700 rounded-lg p-4 mb-2">
                      <div className="w-full h-16 bg-primary rounded mb-2"></div>
                      <div className="text-xs text-neutral-400">深色主題</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-neutral-100 border-2 border-neutral-300 rounded-lg p-4 mb-2">
                      <div className="w-full h-16 bg-primary rounded mb-2"></div>
                      <div className="text-xs text-neutral-600">系統主題</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Language Settings */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">語言設定</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="language" className="block text-sm font-medium mb-2">
                  介面語言
                </label>
                <select
                  id="language"
                  className="input w-full max-w-xs"
                  defaultValue="zh-TW"
                >
                  <option value="zh-TW">繁體中文</option>
                  <option value="en">English</option>
                </select>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                  選擇您偏好的介面語言
                </p>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-semibold mb-4">語言支援</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">完全支援</h4>
                    <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                      <li>• 繁體中文</li>
                      <li>• English</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">計劃支援</h4>
                    <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                      <li>• 簡體中文</li>
                      <li>• 日本語</li>
                      <li>• 한국어</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">隱私設定</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">數據收集</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    允許我們收集匿名使用數據以改進服務
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">分析追蹤</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    允許我們追蹤頁面瀏覽和功能使用情況
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary"></div>
                </label>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <h3 className="font-semibold mb-4">數據管理</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full max-w-xs">
                    清除本地數據
                  </Button>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    清除瀏覽器中儲存的所有本地設定和偏好
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-6">通知設定</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">瀏覽器通知</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    允許瀏覽器顯示通知
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">更新通知</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    接收服務更新和新功能通知
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/20 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Save Settings */}
          <div className="card p-8 bg-primary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2">儲存設定</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  您的設定會自動儲存在瀏覽器中
                </p>
              </div>
              <Button onClick={handleSaveSettings}>
                儲存設定
              </Button>
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
