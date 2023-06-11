import { ReactNode } from 'react'

interface LabelProps {
  children: ReactNode
  text: string
  className?: string
}

export function Label({ children, text, className = '' }: LabelProps) {
  return (
    <div className={`mt-2 grid ${className}`}>
      <span className="my-1 text-xs text-gray-600">{text}</span>
      <div className="h-10 flex items-center rounded border-solid border border-primary-color">
        {children}
      </div>
    </div>
  )
}
