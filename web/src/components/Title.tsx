import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return (
    <h3
      className="
        text-base
        text-bold
        uppercase
      "
    >
      {children}
    </h3>
  )
}
