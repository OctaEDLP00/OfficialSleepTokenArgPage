import { KEY_TRANSLATIONS } from './const'
import { languages } from './ui'

export type KeyLang = keyof typeof languages
export type KeyTranslation = (typeof KEY_TRANSLATIONS)[keyof typeof KEY_TRANSLATIONS]
export type UI<L extends string, T extends string> = Record<L , Record<Text, string>>
