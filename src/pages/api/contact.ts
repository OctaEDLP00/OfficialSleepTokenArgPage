import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData()

  const name = data.get('name')
  const lastName = data.get('lastName')
  const email = data.get('email')
  const message = data.get('message')
  const subject = data.get('subject')
  // usar libreria como resend para enviar emails con la info que llega al endpoint
  return new Response(
    JSON.stringify(
      {
        name,
        lastName,
        email,
        message,
        subject,
      },
      null,
      2,
    ),
    { status: 200 },
  )
}
