import { Menu } from '@/components/Menu'
import { ReactNode } from 'react'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen h-screen bg-primary-color flex pt-3">
      <div className="w-1/6">
        <Menu />
      </div>
      <div className="w-5/6 h-full bg-white rounded-tl-[32px] pt-12 px-14">
        {children}
      </div>
    </main>
  )
}
