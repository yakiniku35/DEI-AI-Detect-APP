'use client'

import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, showLabel = false }) => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const themes = [
    { value: 'light', label: 'Light', icon: SunIcon },
    { value: 'dark', label: 'Dark', icon: MoonIcon },
    { value: 'system', label: 'System', icon: ComputerDesktopIcon }
  ] as const

  const currentTheme = themes.find(t => t.value === theme) || themes[0]
  const CurrentIcon = currentTheme.icon

  const handleToggle = () => {
    const currentIndex = themes.findIndex(t => t.value === theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex].value)
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <button
        onClick={handleToggle}
        className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        title={`Current theme: ${currentTheme.label} (${resolvedTheme})`}
      >
        <CurrentIcon className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </button>
      
      {showLabel && (
        <span className="text-sm text-muted-foreground">
          {currentTheme.label}
        </span>
      )}
    </div>
  )
}

export default ThemeToggle
