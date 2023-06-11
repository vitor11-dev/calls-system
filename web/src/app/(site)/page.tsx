import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import { TitleBar } from '@/components/TitleBar'

import { BsChatLeft, BsSearch } from 'react-icons/bs'
import { ProfileIcon } from '../../../public'

export const metadata = {
  title: 'Home - Sistema de Chamados',
  description:
    'Uma aplicação web feita com o entuito de fornecer um sistema de cadastro de chamados.',
}

export default function Home() {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <BsChatLeft className="text-2xl font-thin" />
          <h1 className="text-2xl font-light">Atendimentos</h1>
        </div>
        <Link href="/profile">
          <Image
            src={ProfileIcon}
            alt="imagem de perfil"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </Link>
      </div>

      <form className="mt-8 w-full h-9 flex justify-between items-center gap-4">
        <Button type="submit" className="w-32 h-full">
          Buscar
        </Button>

        <div className="h-full w-full flex items-center border border-primary-color rounded">
          <BsSearch className="mx-4 w-5 h-5 font-thin" />
          <input
            type="text"
            required
            placeholder="procurar chamados..."
            className="w-full outline-none border-none"
          />
        </div>
        <Link href="/calls/new">
          <Button type="button" className="w-36 h-9">
            Novo Chamado
          </Button>
        </Link>
      </form>

      <TitleBar>
        <Title>Cliente</Title>
        <Title>Assunto</Title>
        <Title>Status</Title>
        <Title>Cadastrado em</Title>
      </TitleBar>
    </>
  )
}
