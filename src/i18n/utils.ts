import { defaultLang, ui } from './ui';

export function getLangFromURL(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang! in ui) return lang as keyof typeof ui
  return defaultLang
}

export function replaceVariables(text: string, variables: Record<string, string | number>): string {
  return Object.entries(variables).reduce((result, [key, value]) => {
    return result.replace(`%${key}%`, value.toString())
  }, text)
}

export function useTranslation(lang: keyof typeof ui) {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    variables?: Record<string, string | number>,
  ) {
    const text = ui[lang][key] || ui[defaultLang][key]
    if (variables) {
      return replaceVariables(text, variables)
    }
    return text
  }
}
