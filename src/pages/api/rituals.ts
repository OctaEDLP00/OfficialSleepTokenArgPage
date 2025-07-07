import type { APIRoute } from 'astro'
const rituals = (await import('src/data/rituals.json')).default

export const GET: APIRoute = async ({}) => {
  return new Response(JSON.stringify(rituals))
}
