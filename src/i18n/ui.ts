import type { KeyLang, KeyTranslation, UI } from './types.d'

export const languages = {
  es: 'Español',
  en: 'English',
}

/** @type {KeyLang} */
export const defaultLang: KeyLang = 'es'

/**
 * Respect the following contract for translation text string
 * Respetar el siguiente contrato para los strings para la traduccion
 * @example '<component.prop>'
 * In case of adding translation to a <ul> or <ol> add context to the translation key
 * En caso de agregar traduccion a un <ul> o <ol> agregar context a la key de traduccion
 * @example '<component.(ul|ol).prop>'
 */
export const ui = {
  es: {

  },
  en: {

  }
} satisfies UI<KeyLang, KeyTranslation>
