import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Label } from '@/components/form/Label'

import { FaUserAlt } from 'react-icons/fa'
import { ProfileIcon } from '../../../../public'

export const metadata = {
  title: 'Perfil - Sistema de Chamados',
}

export default function ProfilePage() {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <FaUserAlt className="text-2xl font-thin" />
          <h1 className="text-2xl font-light mt-1">Perfil</h1>
        </div>
        <Link href="/user/update">
          <Button type="button" className="w-40 h-9">
            Atualizar Perfil
          </Button>
        </Link>
      </div>

      <div className="w-full h-auto mt-20 grid place-items-center">
        <div
          className="w-1/3 grid place-items-center gap-3
        "
        >
          <Image
            src={ProfileIcon}
            alt="icon de perfil"
            className="
            w-14
            h-14
            rounded-full
            cursor-pointer
          "
          />

          <Label text="Nome" className="w-full">
            <p className="ml-2 leading-loose antialiased">Jhon Doe</p>
          </Label>
          <Label text="E-mail" className="w-full">
            <p className="ml-2 leading-loose antialiased">jhondoe@gmail.com</p>
          </Label>
        </div>
      </div>
    </>
  )
}
