import { z, defineCollection } from 'astro:content'

const newsletter = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    isDraft: z.boolean().optional(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    authors: z.array(z.string()),
    readingTime: z.number(),
  }),
})

const testimonials = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      image: z.object({
        alt: z.string().optional(),
        height: z.string().optional(),
        src: z.string(),
        width: z.string().optional(),
      }),
      message: z.string(),
      name: z.string(),
      since: z.string(),
    }),
  ),
})

const discographies = defineCollection({
  type: 'data',
  schema: z.object({
    albums: z.array(
      z.object({
        name: z.string(),
        duration: z.string(),
        image: z.object({
          alt: z.string().optional(),
          height: z.string().optional(),
          src: z.string(),
          width: z.string().optional(),
        }),
        releaseDate: z.string(),
        slug: z.string(),
        songs: z.array(
          z.object({
            name: z.string(),
            duration: z.string(),
            explicit: z.boolean(),
          }),
        ),
      }),
    ),
    eps: z.array(
      z.object({
        name: z.string(),
        duration: z.string(),
        image: z.object({
          alt: z.string().optional(),
          height: z.string().optional(),
          src: z.string(),
          width: z.string().optional(),
        }),
        releaseDate: z.string(),
        slug: z.string(),
        songs: z.array(
          z.object({
            name: z.string(),
            duration: z.string(),
            explicit: z.boolean(),
          }),
        ),
      }),
    ),
  }),
})

const worshippers = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      name: z.string(),
      lastName: z.string(),
      province: z.enum([
        'Buenos Aires',
        'Catamarca',
        'Chaco',
        'Chubut',
        'Ciudad Autonoma de Buenos Aires',
        'Cordoba',
        'Corrientes',
        'Entre Rios',
        'Formosa',
        'Jujuy',
        'La Pampa',
        'La Rioja',
        'Mendoza',
        'Misiones',
        'Neuquen',
        'Rio Negro',
        'Salta',
        'San Juan',
        'San Luis',
        'Santa Cruz',
        'Santa Fe',
        'Santigo del Estero',
        'Tierra del Fuego, Antartida e Islas del Atlantico Sur',
        'Tucuman',
      ]),
    }),
  ),
})

export const collections = {
  newsletter,
  testimonials,
  discographies,
  worshippers,
}
