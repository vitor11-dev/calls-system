import { FastifyInstance } from 'fastify'
import { string, z } from 'zod'
import { prisma } from '../lib/prisma'

export async function callRoutes(app: FastifyInstance) {
  app.addHook('preHandler', async request => {
    await request.jwtVerify()
  })

  app.get('/calls', async (request, reply) => {
    const calls = await prisma.call.findMany({
      select: {
        id: true,
        client: true,
        subject: true,
        status: true,
        created_at: true,
      },
      where: {
        user_id: request.user.sub,
      },
    })

    return reply.status(200).send(calls)
  })

  app.post('/calls', async (request, reply) => {
    const callSchema = z.object({
      client: z.string(),
      subject: z.string(),
    })

    const { client, subject } = callSchema.parse(request.body)

    const call = await prisma.call.create({
      data: {
        client,
        subject,
        status: 'ABERTO',
        user: {
          connect: {
            id: request.user.sub,
          },
        },
      },
    })

    const { user_id, updated_at, ...updatedCall } = call

    return reply.status(201).send({ updatedCall })
  })

  app.patch('/calls/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: string(),
    })

    const { id } = paramsSchema.parse(request.params)

    const call = await prisma.call.update({
      where: {
        id,
      },
      data: {
        status: 'FINALIZADO',
        updated_at: new Date(),
      },
    })

    const { user_id, updated_at, ...updatedCall } = call

    return reply.status(200).send({ updatedCall })
  })
}
