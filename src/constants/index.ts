import Discord from '~/assets/discord.svg'
import Email from '~/assets/email.svg'
import Facebook from '~/assets/facebook.svg'
import Instagram from '~/assets/instagram.svg'
import Phone from '~/assets/phone.svg'
import X from '~/assets/x.svg'
import Youtube from '~/assets/youtube.svg'
import type { AlbumSongs, Discography, Province, Testimonial } from '~/types/index.d'

export const Discographies = [
	{
		name: 'Even In Arcadia',
		imgName: 'EIA',
		width: '1200',
		height: '1200',
		alt: 'Portada del Album Even In Arcadia',
		releaseDate: '05/05/2025',
		slug: 'even-in-arcadia',
	},
	{
		name: 'Take Me Back To Eden',
		imgName: 'TMBTE',
		width: '950',
		height: '950',
		alt: 'Portada del Album Take Me Back To Eden',
		releaseDate: '19/05/2023',
		slug: 'take-me-back-to-eden',
	},
	{
		name: 'This Place Will Become Your Tomb',
		imgName: 'TPWBYT',
		width: '640',
		height: '640',
		alt: 'Portada del Album This Place Will Become Your Tomb',
		releaseDate: '24/07/2021',
		slug: 'this-place-will-become-your-tomb',
	},
	{
		name: 'Sundowning',
		imgName: 'Sundowning',
		width: '1000',
		height: '1000',
		alt: 'Portada del Album Sundowning',
		releaseDate: '21/11/2019',
		slug: 'sundowning',
	},
] satisfies Array<Discography>

export const Provinces = [
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

export const albums_songs = {
	EIA: [
		{
			name: 'Look To Windward',
			duration: '7:46',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Emergence',
			duration: '6:26',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Past Self',
			duration: '3:34',
			customImageCover: '',
			explicit: true,
		},
		{
			name: 'Dangerous',
			duration: '4:11',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Caramel',
			duration: '4:50',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Even In Arcadia',
			duration: '4:28',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Provider',
			duration: '6:05',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Damocles',
			duration: '4:24',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Gethsemane',
			duration: '6:23',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Infinite Baths',
			duration: '8:23',
			customImageCover: '',
			explicit: false,
		},
	],
	TMBTE: [
		{
			name: 'Chokehold',
			duration: '5:04', // Number('04') -> 4 -> 5:4
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'The Summoning',
			duration: '6:35',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Granite',
			duration: '3:45',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Aqua Regia',
			duration: '3:56',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Vore',
			duration: '5:39',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Ascensionism',
			duration: '7:08',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Are You Really Okay?',
			duration: '5:06',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'The Apparition',
			duration: '4:28',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'DYWTYLM',
			duration: '4:00',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Rain',
			duration: '4:12',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Take Me Back To Eden',
			duration: '8:20',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Euclid',
			duration: '5:13',
			customImageCover: '',
			explicit: false,
		},
	],
	TPWBYT: [
		{
			name: 'Atlantic',
			duration: '4:53',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Hypnosis',
			duration: '5:35',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Mine',
			duration: '4:56',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Like That',
			duration: '3:34',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'The Love You Want',
			duration: '4:23',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Fall From Me',
			duration: '2:26',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Alkaline',
			duration: '3:34',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Distraction',
			duration: '4:22',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Descending',
			duration: '4:38',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Telomeres',
			duration: '5:07',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'High Water',
			duration: '5:13',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Missing Limbs',
			duration: '3:20',
			customImageCover: '',
			explicit: false,
		},
	],
	SUNDOWNING: [
		{
			name: 'The Night Does Not Belong To God',
			duration: '5:03',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'The Offering',
			duration: '5:49',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Levitate',
			duration: '4:58',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Dark Signs',
			duration: '4:28',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Higher',
			duration: '5:21',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Take Aim',
			duration: '3:39',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Give',
			duration: '3:56',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Gods',
			duration: '3:25',
			customImageCover: '',
			explicit: true,
		},
		{
			name: 'Sugar',
			duration: '4:52',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Say That You Will',
			duration: '5:03',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Drag Me Under',
			duration: '3:56',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Blood Sport',
			duration: '4:07',
			customImageCover: '',
			explicit: false,
		},
	],
} as const satisfies AlbumSongs

/**
 * Extra info of instrumental and deluxe albums
 */
export const other_album_songs = {
	SUNDOWNING_DELUXE: [
		...albums_songs['SUNDOWNING'],
		{
			name: 'Blood Sport - from the room below',
			duration: '4:07',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Shelter - from the room below',
			duration: '3:12',
			customImageCover: '',
			explicit: false,
		},
		{
			name: "When the Party's Over - from the room below",
			duration: '2:26',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'I Wanna Dance With Somebody - from the room below',
			duration: '2:49',
			customImageCover: '',
			explicit: false,
		},
	],
	TPWBYT_INSTRUMENTAL: [
		{
			name: 'Atlantic - Instrumental',
			duration: '4:52',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Hypnosis - Instrumental',
			duration: '5:35',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Mine - Instrumental',
			duration: '4:56',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Like That - Instrumental',
			duration: '3:34',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'The Love You Want - Instrumental',
			duration: '4:23',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Alkaline - Instrumental',
			duration: '3:34',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Distraction - Instrumental',
			duration: '4:22',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Descending - Instrumental',
			duration: '4:39',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'Telomeres - Instrumental',
			duration: '5:06',
			customImageCover: '',
			explicit: false,
		},
		{
			name: 'High Water - Instrumental',
			duration: '5:13',
			customImageCover: '',
			explicit: false,
		},
	],
	SUNDOWNING_INSTRUMENTAL: [...albums_songs['SUNDOWNING']],
} as const satisfies AlbumSongs

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
]

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
]

export const TESTIMONIALS = [
	{
		name: '',
		src: '',
		message: '',
		since: '',
	},
] satisfies Array<Testimonial>
