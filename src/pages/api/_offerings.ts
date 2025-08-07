import type { APIRoute } from 'astro'
const offerings = (await import('src/data/offerings.json')).default

export const GET: APIRoute = async ({}) => {
  return new Response(JSON.stringify(offerings))
}