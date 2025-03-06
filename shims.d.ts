import type { DecodedIdToken } from 'firebase-admin/auth'
import { DocumentSnapshot } from 'firebase-admin/firestore'
import type { OAuth2Client } from 'google-auth-library'

declare module 'fastify' {
    interface PassportUser extends DecodedIdToken {}
    interface FastifyRequest {
        firestoreDoc: DocumentSnapshot
        dependencies: {
            googleOAuth2: OAuth2Client
        }
    }
}

declare module '@fastify/secure-session' {
    interface SessionData {
        userId: string
        listId?: string
        redirectTo?: string
    }
}
