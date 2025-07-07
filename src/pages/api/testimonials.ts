import type { APIRoute } from 'astro'
const testimonials = (await import('src/data/testimonials.json')).default

export const GET: APIRoute = async ({}) => {
  return new Response(JSON.stringify(testimonials))
}

/*
export const POST: APIRoute = async ({}) => {
  return undefined
}
*/
