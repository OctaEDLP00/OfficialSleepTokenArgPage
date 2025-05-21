// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	output: 'server',
	experimental: {
		fonts: [
			{
				provider: fontProviders.fontsource(),
				name: 'Cinzel',
				cssVariable: '--font-cinzel',
			},
			{
				provider: fontProviders.fontsource(),
				name: 'Inter',
				cssVariable: '--font-inter',
			},
		],
	},
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		fallback: {
			en: 'es',
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
