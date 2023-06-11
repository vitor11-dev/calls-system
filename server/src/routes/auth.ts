import bcrypt from 'bcrypt'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function authRoutes(app: FastifyInstance) {
  app.post('/auth', async (request, reply) => {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    })

    const userData = bodySchema.parse(request.body)

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email: userData.email,
      },
    })

    const passwordIsValid = await bcrypt.compare(
      userData.password,
      user.password
    )

    if (!passwordIsValid) {
      return reply.status(400).send({ error: 'E-mail ou senha inválidos.' })
    }

    const token = app.jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      {
        sub: user.id,
        expiresIn: '8 hours',
      }
    )

    return reply.status(200).send({ token })
  })
}
