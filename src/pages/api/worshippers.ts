import type { APIRoute } from 'astro'
import { require } from '~/lib/index'
const worshippers = (await import('src/data/worshippers.json')).default
import { writeFileSync } from 'node:fs'

export const GET: APIRoute = async ({}) => {
  return new Response(JSON.stringify(worshippers))
}

export const POST: APIRoute = async ({ request }) => {
  const newWorshipper = await request.json()
  const data = writeFileSync(
    'src/data/worshippers.json',
    JSON.stringify([...worshippers, newWorshipper], null, 2),
  )
  return new Response(JSON.stringify({ newWorshipper }, { status: 201 }))
}
