import type { APIRoute } from 'astro'
import { require } from '~/lib/index'
const testimonials = (await import('src/data/testimonials.json')).default

export const GET: APIRoute = async ({}) => {
	return new Response(JSON.stringify(testimonials))
}

export const POST: APIRoute = async ({}) => {
	return undefined
}
