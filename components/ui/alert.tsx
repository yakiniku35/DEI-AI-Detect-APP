import React from 'react'

export const Alert: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`p-4 rounded-lg border bg-background ${className}`}>
    {children}
  </div>
)

export const AlertDescription: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => (
  <div className={`text-sm ${className}`}>
    {children}
  </div>
)

export default Alert
