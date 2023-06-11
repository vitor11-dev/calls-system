import { api } from '@/lib/api'
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { body } = await request.json()
    const { name, email, password } = body

    if (!name || !email || !password) {
      return new NextResponse('Erro ao obter as credenciais', { status: 400 })
    }

    const registerResponse = await api.post('/users', {
      name,
      email,
      password,
    })

    if (registerResponse.status !== 201) {
      return new NextResponse('Erro ao cadastrar usuário', { status: 400 })
    }

    await axios.post('/api/auth', {
      email,
      password,
    })
  } catch (error) {
    console.log(error, 'REGISTRATION_ERROR')
    return new NextResponse('Internal error', { status: 500 })
  }
}
