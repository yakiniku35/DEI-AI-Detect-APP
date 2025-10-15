import React from 'react'

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`rounded-lg shadow bg-white dark:bg-neutral-900 ${className}`}>{children}</div>
)

export const CardHeader: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`px-4 py-3 border-b ${className}`}>{children}</div>
)

export const CardContent: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`p-4 ${className}`}>{children}</div>
)

export const CardTitle: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
)

export const CardDescription: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
)

export default Card
