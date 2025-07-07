import type { PROVINCES_ID, PROVINCES_TEXT, MONTH_ID, MONTH_TEXT } from '~/constants/types'
import type { ImageMetadata } from 'astro'
import type { number } from 'astro:schema'

type Props = astroHTML.JSX.SVGAttributes
type Icon = ((_props: Props) => any) & ImageMetadata

type ProvinceId = (typeof PROVINCES_ID)[keyof typeof PROVINCES_ID]
type ProvinceText = (typeof PROVINCES_TEXT)[keyof typeof PROVINCES_TEXT]

type ReleaseDate = `${string}-${string}-${string}` | `${string}/${string}/${string}`
type Time = `${number}:${number}`

type Rel = 'noreferrer noopener' | 'noopener' | 'noreferrer'
type Target = '_blank' | '_self' | '_top' | '_parent'

type MonthId = (typeof MONTH_ID)[keyof typeof MONTH_ID]
type MonthText = (typeof MONTH_TEXT)[keyof typeof MONTH_TEXT]

type FixedTuple<T extends unknown> = [T, ...T[]]
type Tuple<T extends [unknown, ...unknown[]]> = T

interface Preload {
  href: string
  as: string
  type: string
  rel?: 'preload' | 'prefetch'
  crossorigin?: string
}
interface Song {
  name: string
  duration: Time
  customImageCover?: string
  explicit: boolean
}
interface Image {
  src: string
  alt: string
  width: string | number | null | undefined
  height: string | number | null | undefined
}
interface AlbumInfo {
  name: string
  duration: string
  songs: Array<Song>
  image: Image
  releaseDate: ReleaseDate | string
  slug: string
}
interface Discographies {
  albums: Array<AlbumInfo>
  eps: Array<AlbumInfo>
}
interface Testimonial {
  name: string
  image: Image
  message: string
  since: string
}
type Testimonials = Array<Testimonial>

interface Worshipper {
  name: string
  lastName: string
  province: ProvinceText
}
type Worshippers = Array<Worshipper>

interface Province {
  text: ProvinceText
  value: ProvinceId
}

interface NextEventRituals {
  title_ritual: string
  place: string
  description: string
  province: string
  time: string
  confirmed_worshippers: number
}

interface PreviousEvntRitual {
  title_ritual: string
  place: string
  description: string
  province: string
  time: string
  month: MonthText
  year: string | number
}

interface Rituals {
  next_rituals: Array<NextEventRituals>
  previous_rituals: Array<PreviousEvntRitual>
}

interface Offering {}

type Offerings = Array<Offering>

export type {
  Discographies,
  Discography,
  FixedTuple,
  Icon,
  Image,
  Month,
  Offerings,
  Preload,
  Province,
  ProvinceId,
  ProvinceText,
  Rel,
  ReleaseDate,
  Rituals,
  Song,
  Target,
  Testimonial,
  Testimonials,
  Time,
  Tuple,
  Worshippers,
}
