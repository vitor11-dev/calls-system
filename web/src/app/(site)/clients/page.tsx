import { Button } from '@/components/Button'
import { Title } from '@/components/Title'
import { TitleBar } from '@/components/TitleBar'
import Link from 'next/link'
import { FaUsers } from 'react-icons/fa'

export const metadata = {
  title: 'Clientes - Sistema de Chamados',
}

export default function ClientsPage() {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <FaUsers className="text-2xl font-thin" />
          <h1 className="text-2xl font-light mt-1">Clientes</h1>
        </div>
        <Link href="/clients/new">
          <Button type="button" className="w-40 h-9">
            Novo Cliente
          </Button>
        </Link>
      </div>

      <TitleBar>
        <Title>Nome</Title>
        <Title>Cnpj</Title>
        <Title>Endereço</Title>
      </TitleBar>
    </>
  )
}
