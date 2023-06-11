import { Button } from '@/components/Button'
import { Label } from '@/components/form/Label'

import { BiConversation } from 'react-icons/bi'
import { BsChatLeft } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'

export const metadata = {
  title: 'Novo Chamado - Sistema de Chamados',
}

export default function NewCallPage() {
  return (
    <>
      <div className="w-full flex gap-3 items-center">
        <BsChatLeft className="text-2xl font-thin" />
        <h1 className="text-2xl font-light mt-1">Novo Chamado</h1>
      </div>

      <div className="h-3/4 flex flex-1 items-center justify-center">
        <form className="w-1/3">
          <Label text="Cliente">
            <FaUserAlt className="m-2 text-sm" />
            <input
              type="text"
              placeholder="Nome do cliente"
              className="w-full outline-none border-none placeholder:text-zinc-500"
            />
          </Label>

          <Label text="Assunto">
            <BiConversation className="m-2 text-sm" />
            <input
              type="text"
              placeholder="Suporte, financeiro, etc..."
              spellCheck="false"
              className="w-full outline-none border-none placeholder:text-zinc-500"
            />
          </Label>

          <Button type="submit" className="w-full h-10 mt-8">
            Cadastrar Chamado
          </Button>
        </form>
      </div>
    </>
  )
}
