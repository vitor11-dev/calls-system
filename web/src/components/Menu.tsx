import { BsChatLeft } from 'react-icons/bs'
import { FaUserAlt, FaUsers } from 'react-icons/fa'

import Image from 'next/image'
import { LogoWhiteIcon } from '../../public'
import { NavLink } from './NavLink'

export function Menu() {
  return (
    <div className="ml-9 mt-8 grid gap-12">
      <Image src={LogoWhiteIcon} alt="logo da página" />

      <nav className="grid gap-2">
        <NavLink href="/" name="Chamados" icon={BsChatLeft} />
        <NavLink href="/clients" name="Clientes" icon={FaUsers} />

        <NavLink href="/profile" name="Perfil" icon={FaUserAlt} />
      </nav>
    </div>
  )
}
