import type { PROVINCES_ID, PROVINCES_TEXT } from '~/constants/types'

type ProvinceId = (typeof PROVINCES_ID)[keyof typeof PROVINCES_ID]
type ProvinceText = (typeof PROVINCES_TEXT)[keyof typeof PROVINCES_TEXT]
type ReleaseDate = `${string}-${string}-${string}` | `${string}/${string}/${string}`
type Time = `${number}:${number}`
type FixedTuple<T extends unknown> = [T, ...T[]]
type Tuple<T extends [unknown, ...unknown[]]> = T
interface Preload {
	href: string
	as: string
	type: string
	rel?: 'preload' | 'prefetch'
	crossorigin?: string
}
interface Discography {
	name: string
	imgName: string
	width: string | number | null | undefined
	height: string | number | null | undefined
	alt: string
	releaseDate: ReleaseDate | string
	slug: string
}
interface Province {
	text: ProvinceText
	value: ProvinceId
}
interface AlbumSong {
	name: string
	duration: Time
	customImageCover?: string
	explicit: boolean
}
type AlbumSongs = Record<string, Array<AlbumSong>>
interface Testimonial {
	name: string
	src: string
	message: string
	since: string
}

export type {
	AlbumSongs,
	Discography,
	FixedTuple,
	Preload,
	Province,
	ReleaseDate,
	Testimonial,
	Time,
	Tuple,
}
