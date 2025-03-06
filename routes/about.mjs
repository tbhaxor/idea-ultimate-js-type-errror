/**
 * @param {import("fastify").FastifyInstance} fastify
 */
export default async function (fastify) {
    fastify.get("/", (request, reply) => {
        // TODO: Try request. and the press cmd/ctrl + space for completion
        // Try for request.firestoreDoc, request.session.data()., request.user. and etc

        // For example, you can open this project in vscode, and make sure to keep shims.d.ts in the open files otherwise it won't work.
        return "About Page"
    })
}