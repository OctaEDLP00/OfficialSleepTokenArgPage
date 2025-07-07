import Discord from '~/assets/discord.svg'
import Email from '~/assets/email.svg'
import Facebook from '~/assets/facebook.svg'
import Instagram from '~/assets/instagram.svg'
import Phone from '~/assets/phone.svg'
import X from '~/assets/x.svg'
import Youtube from '~/assets/youtube.svg'
import type { Icon, Province } from '~/types/index.d'

export const PROVINCES = [
	{
		value: 'buenos-aires',
		text: 'Buenos Aires',
	},
	{
		value: 'catamarca',
		text: 'Catamarca',
	},
	{
		value: 'chaco',
		text: 'Chaco',
	},
	{
		value: 'chubut',
		text: 'Chubut',
	},
	{
		value: 'caba',
		text: 'Ciudad Autonoma de Buenos Aires',
	},
	{
		value: 'cordoba',
		text: 'Cordoba',
	},
	{
		value: 'corrientes',
		text: 'Corrientes',
	},
	{
		value: 'entre-rios',
		text: 'Entre Rios',
	},
	{
		value: 'formosa',
		text: 'Formosa',
	},
	{
		value: 'jujuy',
		text: 'Jujuy',
	},
	{
		value: 'la-pampa',
		text: 'La Pampa',
	},
	{
		value: 'la-rioja',
		text: 'La Rioja',
	},
	{
		value: 'mendoza',
		text: 'Mendoza',
	},
	{
		value: 'misiones',
		text: 'Misiones',
	},
	{
		value: 'neuquen',
		text: 'Neuquen',
	},
	{
		value: 'rio-negro',
		text: 'Rio Negro',
	},
	{
		value: 'salta',
		text: 'Salta',
	},
	{
		value: 'san-juan',
		text: 'San Juan',
	},
	{
		value: 'san-luis',
		text: 'San Luis',
	},
	{
		value: 'santa-cruz',
		text: 'San Luis',
	},
	{
		value: 'santa-fe',
		text: 'Santa Fe',
	},
	{
		value: 'santigo-del-estero',
		text: 'Santigo del Estero',
	},
	{
		value: 'tierra-del-fuego',
		text: 'Tierra del Fuego, Antartida e Islas del Atlantico Sur',
	},
	{
		value: 'tucuman',
		text: 'Tucuman',
	},
] satisfies Array<Province>

export const CONTACTS_INFO = [
	{
		icon: Email,
		label: 'Email',
		value: 'sleeptokenarg@gmail.com',
	},
	{
		icon: Phone,
		label: 'Teléfono',
		value: '+54 11 1234-5678',
	},
	{
		icon: Discord,
		label: 'Discord',
		value: 'discord.gg/sleeptokenarg',
	},
] satisfies Array<{ icon: Icon; label: string; value: string }>

export const SOCIAL_NETWORKS = [
	{
		icon: X,
		href: 'https://x.com/@SleepTokenArg',
	},
	{
		icon: Facebook,
		href: 'https://facebook.com/SleepToken',
	},
	{
		icon: Instagram,
		href: 'https://instagram.com/sleeptoken.ar',
	},
	{
		icon: Youtube,
		href: 'https://youtube.com/@SleepToken',
	},
] satisfies Array<{ icon: Icon; href: string }>
