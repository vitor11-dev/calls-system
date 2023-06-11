import 'dotenv/config'
import fastify from 'fastify'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'

import { authRoutes } from './routes/auth'
import { callRoutes } from './routes/call'
import { clientRoutes } from './routes/client'
import { oauthRoutes } from './routes/oauth'
import { userRoutes } from './routes/user'

const app = fastify()
const jwtSecret = process.env.JWT_SECRET as string

app.register(jwt, {
  secret: jwtSecret,
})
app.register(cors, {
  origin: true,
})

app.register(authRoutes)
app.register(callRoutes)
app.register(clientRoutes)
app.register(oauthRoutes)
app.register(userRoutes)

app.listen({ port: 3333, host: '127.0.0.1' }, (err, address) =>
  console.log(err ?? `Server is running on ${address}`)
)
