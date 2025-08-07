import type { APIRoute } from 'astro'
const rituals = (await import('src/data/rituals.json')).default

export const GET: APIRoute = async ({ params, props, request }) => {
  console.log('POST request received for rituals')
  console.log({ params, props, request })
  return new Response(JSON.stringify(rituals), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const POST: APIRoute = async ({ params, props, request }) => {
  console.log('POST request received for rituals')
  console.log({ params, props, request })
  return new Response(
    JSON.stringify({
      message: 'Rituals created successfully',
      statusMessage: 'success',
      status: 201,
      data: rituals,
    }),
  )
}

export const PATCH: APIRoute = async ({ params, props, request }) => {
  console.log('PATCH request received for rituals')
  console.log({ params, props, request })
  return new Response(
    JSON.stringify({
      message: 'Rituals updated successfully',
      statusMessage: 'success',
      status: 200,
      data: rituals,
    }),
  )
}

export const PUT: APIRoute = async ({ params, props, request }) => {
  console.log('PATCH request received for rituals')
  console.log({ params, props, request })
  return new Response(
    JSON.stringify({
      message: 'Rituals updated successfully',
      statusMessage: 'succes',
      status: 200,
      data: rituals,
    }),
  )
}

export const DELETE: APIRoute = async ({ params, props, request }) => {
  console.log('DELETE request received for rituals')
  console.log({ params, props, request })
  return new Response(
    JSON.stringify({
      message: 'Rituals deleted successfully',
      statusMessage: 'success',
      status: 200,
      data: rituals,
    }),
  )
}
