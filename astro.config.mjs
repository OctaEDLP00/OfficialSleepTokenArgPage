// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [mdx()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Cinzel',
        cssVariable: '--font-cinzel',
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Montserrat',
        cssVariable: '--font-montserrat',
      },
    ],
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'fr'],
    fallback: {
      en: 'es',
      fr: 'es',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
