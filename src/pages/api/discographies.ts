import type { APIRoute } from 'astro'
import { require } from '~/lib/index'
const discographies = (await import('src/data/discographies.json')).default

export const GET: APIRoute = async () => {
	return new Response(JSON.stringify(discographies), {
		status: 200,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
