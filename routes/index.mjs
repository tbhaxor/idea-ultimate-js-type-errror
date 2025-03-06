import about from "./about.mjs";

/**
 * @param {import("fastify").FastifyInstance} fastify
 */
export default async function (fastify) {
    await fastify.register(about, { prefix: '/about' })
}
