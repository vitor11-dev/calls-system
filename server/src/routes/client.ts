import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function clientRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async request => {
    await request.jwtVerify()
  })

  app.get('/clients', async (request, reply) => {
    const clients = await prisma.client.findMany({
      select: {
        name: true,
        email: true,
        address: true,
      },
      where: {
        user_id: request.user.sub,
      },
    })

    return reply.status(200).send(clients)
  })

  app.post('/clients', async (request, reply) => {
    const clientSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      address: z.string(),
    })

    const { name, email, address } = clientSchema.parse(request.body)

    const client = await prisma.client.create({
      data: {
        name,
        email,
        address,
        user: {
          connect: {
            id: request.user.sub,
          },
        },
      },
    })

    return reply.status(201).send({ client })
  })
}
