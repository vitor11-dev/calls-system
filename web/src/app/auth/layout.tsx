import Image from 'next/image'
import { ReactNode } from 'react'
import { BgIcon, LogoPurpleIcon } from '../../../public'

export const metadata = {
  title: 'Authentication - Calls System',
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen h-screen bg-white flex">
      <section className="w-1/2 h-full py-10 px-28 max-sm:px-14 max-[810px]:w-screen max-lg:px-10">
        <div className="w-full flex items-center gap-5">
          <Image src={LogoPurpleIcon} alt="Logo da página" />
          <h1 className="w-5/6 text-xl text-gray-800 max-[365px]:text-base max-[450px]:text-lg">
            <strong className="text-2xl text-primary-color max-[365px]:text-lg max-[450px]:text-xl">
              RCA:
            </strong>{' '}
            Register Calls Application
          </h1>
        </div>

        <div className="max-w-full mt-10 mb-5 h-auto grid overflow-hidden max-[450px]:mt-8">
          <strong className="text-2xl text-gray-800">
            Acesse a Plataforma
          </strong>
          <small className="mt-4 text-xs text-gray-600">
            Faça login ou registre-se para começar <br /> utilizar nossa
            plataforma.
          </small>
        </div>

        {children}
      </section>

      <section className="w-1/2 h-full max-[810px]:hidden">
        <Image
          src={BgIcon}
          alt="Imagem de fundo azul"
          className="w-full h-full object-cover"
        />
      </section>
    </main>
  )
}
