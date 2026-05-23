import type { APIRoute } from 'astro'
const offerings = (await import('~/data/offerings.json')).default
import { writeFileSync } from 'node:fs'

export const GET: APIRoute = async ({}) => {
  return new Response(JSON.stringify(offerings))
}

export const POST: APIRoute = async ({ request }) => {
  const newOffering = await request.json()
  writeFileSync(
    'src/data/offerings.json',
    JSON.stringify({ ...offerings, newOffering }, null, 2),
  )
  return new Response(JSON.stringify({ newOffering }), { status: 201, headers: { 'Content-Type': 'application/json' } })
}
