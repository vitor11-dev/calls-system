import bcrypt from 'bcrypt'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function userRoutes(app: FastifyInstance) {
  // create
  app.post('/users', async (request, reply) => {
    const userSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    })

    const userData = userSchema.parse(request.body)

    const userExists = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    })

    if (userExists) {
      return reply.status(400).send({ error: 'Este email já foi cadastrado' })
    }

    const hashPassword = await bcrypt.hash(userData.password, 10)

    const user = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: hashPassword,
      },
    })

    const { created_at, password, ...userResponse } = user

    return reply.status(201).send(userResponse)
  })
}
