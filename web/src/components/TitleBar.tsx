import { ReactNode } from 'react'

export function TitleBar({ children }: { children: ReactNode }) {
  return (
    <div
      className="
          w-full 
          mt-12
          py-1 
          flex 
          items-center 
          justify-evenly 
          rounded 
          bg-secondary-color
          text-white"
    >
      {children}
    </div>
  )
}
