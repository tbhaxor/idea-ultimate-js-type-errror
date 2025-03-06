import fastify from 'fastify'
import fastifyPassport from '@fastify/passport'
import fastifySecureSession from '@fastify/secure-session'
import fastifyCors from '@fastify/cors'
import routes from "./routes/index.mjs"

const server = fastify()

await server.register(fastifyCors, {
    origin: true,
    methods: ['GET', 'OPTIONS', 'POST'],
    credentials: true
})
await server.register(fastifySecureSession, { secret: process.env.SESSION_KEY })
await server.register(fastifyPassport.initialize())
await server.register(fastifyPassport.secureSession({ session: true, failureMessage: true, failWithError: true }))
await server.register(routes)

server.get("/", (request, reply) => {
})