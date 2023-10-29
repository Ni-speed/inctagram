export { default } from 'next-auth/middleware'

// в matcher лежат приватные routes
export const config = { matcher: ['/profile'] }
