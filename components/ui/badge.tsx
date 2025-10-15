import React from 'react'

export const Badge: React.FC<React.PropsWithChildren<{ variant?: string; className?: string }>> = ({ children, variant = 'default', className = '' }) => {
  const variantClasses = {
    default: 'bg-primary text-primary-foreground',
    destructive: 'bg-red-500 text-white',
    secondary: 'bg-secondary text-secondary-foreground',
  }
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variantClasses[variant as keyof typeof variantClasses] || variantClasses.default} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
