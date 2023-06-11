import { Button } from '@/components/Button'
import { Label } from '@/components/form/Label'
import { AiOutlineMail } from 'react-icons/ai'
import { FaMapMarkerAlt, FaUserAlt, FaUsers } from 'react-icons/fa'
import { IoMdBusiness } from 'react-icons/io'

export const metadata = {
  title: 'Novo Cliente - Sistema de Chamados',
}

export default function NewClientPage() {
  return (
    <>
      <div className="w-full flex gap-3 items-center">
        <FaUsers className="text-2xl font-thin" />
        <h1 className="text-2xl font-light mt-1">Novo Cliente</h1>
      </div>

      <form className="w-1/3 m-auto mt-8">
        <Label text="Nome">
          <FaUserAlt className="m-2 text-sm" />
          <input type="text" className="w-full outline-none border-none" />
        </Label>

        <Label text="E-mail">
          <AiOutlineMail className="m-2 text-lg" />
          <input type="text" className="w-full outline-none border-none" />
        </Label>

        <Label text="Cep">
          <FaMapMarkerAlt className="m-2 text-base" />
          <input type="text" className="w-full outline-none border-none" />
        </Label>

        <Label text="Número">
          <IoMdBusiness className="m-2 text-base" />
          <input type="text" className="w-full outline-none border-none" />
        </Label>

        <Button type="submit" className="w-full h-10 mt-8">
          Cadastrar Cliente
        </Button>
      </form>
    </>
  )
}
