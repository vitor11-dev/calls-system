'use client'

import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/Button'

import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Input } from '@/components/form/Input'
import { api } from '@/lib/api'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

export const UserSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .nonempty({ message: 'O email é obrigatório' })
    .email({ message: 'Formato de email inválido' }),

  password: z
    .string()
    .nonempty({ message: 'A senha é obrigatória' })
    .min(6, { message: 'A senha precisa ter no mínimo 6 caracteres' }),
})

type UserData = z.infer<typeof UserSchema>

export default function AuthPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthForm, setIsAuthForm] = useState(true)

  const formMethods = useForm<UserData>({
    resolver: zodResolver(UserSchema),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = formMethods

  const linkToCreateAccount = isAuthForm
    ? {
        message: `Ainda não tem uma conta?${' '}`,
        link: 'Registre-se',
      }
    : {
        message: `Já tem uma conta?${' '}`,
        link: 'Entrar',
      }

  async function formSubmit(data: UserData) {
    setIsLoading(true)

    if (isAuthForm) {
      const loginResponse = await axios.post('/api/auth', {
        email: data.email,
        password: data.password,
      })

      if (loginResponse.status !== 200) {
        const error = loginResponse.data
        toast.error(error, {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
        })

        setIsLoading(false)
      }
    } else {
      const registerResponse = await api.post('/users', {
        name: data.name,
        email: data.email,
        password: data.password,
      })

      if (registerResponse.status === 201) {
        const error = registerResponse.data
        router.push('/')
      }
      toast.error('Erro ao cadastrar usuário', {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
      })
    }
  }
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(formSubmit)}>
        {!isAuthForm && (
          <Input
            id="name"
            key="name"
            label="Nome"
            formData={UserSchema}
            icon={AiOutlineMail}
          />
        )}

        <Input
          id="email"
          key="email"
          label="E-mail"
          formData={UserSchema}
          icon={AiOutlineMail}
          error={errors.email?.message}
        />

        <Input
          id="password"
          key="password"
          label="Senha"
          type="password"
          formData={UserSchema}
          icon={AiOutlineMail}
          error={errors.password?.message}
        />

        {isAuthForm && (
          <Link href="/forgot" className="text-xs text-primary-color mt-1">
            Esqueceu a senha?
          </Link>
        )}

        <Button type="submit" className="mt-4 h-10 w-full">
          {isAuthForm ? 'Entrar' : 'Registrar'}
        </Button>

        <p className="mt-7 w-full text-center text-sm max-[450px]:text-xs">
          {linkToCreateAccount.message}
          <span
            onClick={() => setIsAuthForm(current => !current)}
            className="text-primary-color font-bold w-full m-auto cursor-pointer"
          >
            {linkToCreateAccount.link}
          </span>
        </p>

        {isAuthForm && (
          <>
            <div className="my-4 w-full flex justify-center">
              <span>ou</span>
            </div>
            <div className="w-full flex items-center justify-center gap-6">
              <a
                href=""
                className="py-2 px-4 rounded transition-colors border border-primary-color hover:bg-primary-color hover:text-white"
              >
                <FaGithub className="m-auto text-xl" />
              </a>
              <a
                href=""
                className="py-2 px-4 rounded transition-colors border border-primary-color hover:bg-primary-color hover:text-white"
              >
                <FcGoogle className="m-auto text-xl" />
              </a>
            </div>
          </>
        )}
      </form>
    </FormProvider>
  )
}
