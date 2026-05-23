import type { APIRoute } from 'astro'
const worshippers = (await import('~/data/worshippers.json')).default
import { writeFileSync } from 'node:fs'

export const GET: APIRoute = async ({}) => {
  return new Response(JSON.stringify(worshippers))
}

export const POST: APIRoute = async ({ request }) => {
  const newWorshipper = await request.json()
  writeFileSync(
    'src/data/worshippers.json',
    JSON.stringify([...worshippers, newWorshipper], null, 2),
  )
  return new Response(JSON.stringify({ newWorshipper }), { status: 201, headers: { 'Content-Type': 'application/json' } })
}
