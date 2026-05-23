import type { APIRoute } from 'astro'
const discographies = (await import('~/data/discographies.json')).default

export const GET: APIRoute = async () => {
	return new Response(JSON.stringify(discographies))
}
