import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { body } = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return new NextResponse('Erro ao obter as credenciais', { status: 400 })
    }

    const loginResponse = await api.post('/auth', {
      email,
      password,
    })

    if (loginResponse.status !== 200) {
      return new NextResponse('Erro ao autenticar usuário', { status: 400 })
    }

    const { token } = loginResponse.data

    const redirectURL = new URL('/')

    const cookieExpiresInSeconds = 60 * 60 * 8 //8 hours

    return NextResponse.redirect(redirectURL, {
      headers: {
        'Set-Cookie': `token=${token}; Path=/; max-age=${cookieExpiresInSeconds};`,
      },
    })
  } catch (error) {
    console.log(error, 'REGISTRATION_ERROR')
    return new NextResponse('Internal error', { status: 500 })
  }
}
