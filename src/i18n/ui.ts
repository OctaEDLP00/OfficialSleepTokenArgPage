import type { KeyLang, KeyTranslation, UI } from './types.d'

export const languages = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
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
    // Index Page
    'index.page.title': 'Album %name% | Fan Page Sleep Token Argentina',
    'index.page.description': '',
    // Navbar
    'nav.ul.home': 'Inicio',
    'nav.ul.discographies': 'Discografia',
    'nav.ul.rituals': 'Rituales',
    'nav.ul.worshippers': 'Adoradores',
    'nav.ul.offerings': 'Ofrendas',
    'nav.ul.newsletter': 'Newsletter',
    'nav.ul.contact': 'Contacto',
    // Community
    'community.worshippers': 'Adoradores',
    'community.rituals': 'Rituales',
    'community.cities': 'Ciudades',
    'community.offerings': 'Ofrendas',
    // Hero
    'hero.community': 'Comunidad Argentina',
    'hero.paragraph':
      'Bienvenidos al santuario argentino de Sleep Token. Aquí los adoradores se reúnen para celebrar la música que trasciende lo terrenal.',
    'hero.ctaButton.discographies': 'Explorar Discografía',
    'hero.ctaButton.rituals': 'Próximos Rituales',
    // NewsCard
    'newsCard.link.text': 'Leer más',
    // Footer
    'footer.title': 'Sleep Token Argentina',
    'footer.paragraph': 'Comunidad Oficial de adoradores Argentinos',
    'footer.links': 'Enlaces',
    'footer.community': 'Comunidad',
    'footer.social': 'Siguenos',
    'footer.copyright': 'Sleep Token Argentina. Todos los derechos reservados.',
    // Discography Page
    'discography.page.index.title': 'Discografia del Sleep Token | Comunidad de Adoradores',
    'discography.page.index.description': '',
  },
  en: {
    // Index Page
    'index.page.title': '',
    'index.page.description': '',
    // Navbar
    'nav.ul.home': 'Home',
    'nav.ul.discographies': 'Discographies',
    'nav.ul.rituals': 'Rituals',
    'nav.ul.worshippers': 'Worshippers',
    'nav.ul.offerings': 'Offerings',
    'nav.ul.newsletter': 'Newsletter',
    'nav.ul.contact': 'Contact',
    // Community
    'community.worshippers': 'Worshippers',
    'community.rituals': 'Rituals',
    'community.cities': 'Cities',
    'community.offerings': 'Offerings',
    // Hero
    'hero.community': 'Argentina Community',
    'hero.paragraph':
      'Welcome to the Argentinian sanctuary  of Sleep Token. Here worshippers gather to celebrate music that trascends the earthly.',
    'hero.ctaButton.discographies': 'Explore Discography',
    'hero.ctaButton.rituals': 'Upcoming Rituals',
    // NewsCard
    'newsCard.link.text': 'Read more',
    // Footer
    'footer.title': 'Sleep Token Argentina',
    'footer.paragraph': 'Official community of Argentine worshippers.',
    'footer.links': 'Links',
    'footer.community': 'Community',
    'footer.social': 'Follow us',
    'footer.copyright': 'Sleep Token Argentina. All Right reserved.',
    // Discography Page
    'discography.page.index.title': 'Sleep Token Discography | Argentina Community',
    'discography.page.index.description': '',
  },
  fr: {
    // Index Page
    'index.page.title': '',
    'index.page.description': '',
    // Navbar
    'nav.ul.home': 'Début',
    'nav.ul.discographies': 'Discographies',
    'nav.ul.rituals': 'Rituels',
    'nav.ul.worshippers': 'Admirateurs',
    'nav.ul.offerings': 'Offrandes',
    'nav.ul.newsletter': 'Bulletin',
    'nav.ul.contact': 'Contact',
    // Community
    'community.worshippers': 'Admirateurs',
    'community.rituals': 'Rituels',
    'community.cities': 'Villes',
    'community.offerings': 'Offrandes',
    // Hero
    'hero.community': 'Communauté argentine',
    'hero.paragraph':
      'Bienvenue au sanctuaire argentin de Sleep Token. Ici, les fidèles se rassemblent pour célébrer une musique transcendant le terrestre.',
    'hero.ctaButton.discographies': 'Explorer Discographie',
    'hero.ctaButton.rituals': 'Rituels à Venir',
    // NewsCard
    'newsCard.link.text': 'En savoir plus',
    // Footer
    'footer.title': 'Sleep Token Argentine',
    'footer.paragraph': 'Communauté officielle des fidèles Argentins',
    'footer.links': 'Links',
    'footer.community': 'Communauté',
    'footer.social': 'Suivez-nous',
    'footer.copyright': 'Sleep Token Argentine. Tous droits réservés.',
    // Discography Page
    'discography.page.index.title': 'Discographie Sleep Token | Communauté Argentinian',
    'discography.page.index.description': '',
  },
} satisfies UI<KeyLang, KeyTranslation>
