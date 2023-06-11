import Link from 'next/link'
import { IconType } from 'react-icons'

interface NavProps {
  icon: IconType
  name: string
  href: string
}

export function NavLink({ href, icon: Icon, name }: NavProps) {
  return (
    <Link href={href}>
      <div className="flex gap-3 items-center cursor-pointer">
        <Icon className="text-lg mt-[2px]" color="#FFF" />
        <h2 className="text-white text-lg font-light cursor-pointer mt-1">
          {name}
        </h2>
      </div>
    </Link>
  )
}
