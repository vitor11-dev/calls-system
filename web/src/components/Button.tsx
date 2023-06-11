'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  type: 'submit' | 'button'
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export function Button({
  children,
  onClick,
  type,
  disabled,
  className = '',
}: ButtonProps) {
  const backgroundStyle =
    type === 'submit'
      ? 'bg-primary-color hover:bg-secondary-color'
      : 'bg-green-600 hover:bg-green-500 '

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`
        ${backgroundStyle}
        ${className}
        text-center 
        text-base 
        text-white 
        rounded 
        cursor-pointer 
        transition-colors 
        max-[450px]:h-10
        `}
    >
      {children}
    </button>
  )
}
