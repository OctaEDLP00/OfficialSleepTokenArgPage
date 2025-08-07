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
    // Main Page
    'main.page.index.title': 'Sleep Token Argentina | Comunidad de Adoradores',
    'main.page.index.description':
      'Santuario Argentino de Sleep Token Argentina. Aquí los adoradores se reúnen para celebrar la musica de Sleep Token con rituales y ofrendas.',
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
    'discography.page.index.title': 'Discografia de Sleep Token | Comunidad de Adoradores',
    'discography.page.index.description':
      'Aqui encontraras toda la discografia de Sleep Token, como tambien podras escucharla miebtras navegas por la pagina.',
    'discography.page.name-album.title': 'Album %name% | Fan Page Sleep Token Argentina',
    'discography.page.name-album.description':
      'Album %name% de Sleep Token. Escucha el album completo, mira su lista de canciones, lanzamientos y mas.',
    // Offerings
    'offerings.page.index.title': 'Ofrendas | Sleep Token Argentina',
    'offerings.page.index.description': '',
    // Rituals
    'rituals.page.index.title': 'Rituales | Sleep Token Argentina',
    'rituals.page.index.description': '',
    'rituals.page.id.title': '',
    'rituals.page.id.description': '',
    // Contact
    'contact.page.title': '',
    'contact.page.description': '',
    // Newsletter
    'newsletter.page.index.title': '',
    'newsletter.page.index.description': '',
    'newsletter.page.id.title': '%title% Newsletter | Tiempo de lectura %readTime%',
    'newsletter.page.id.description': '',
    // Worshippers
    'worshippers.page.index.title': '',
    'worshippers.page.index.description': '',
    //
  },
  en: {
    // Index Page
    'main.page.index.title': '',
    'main.page.index.description': '',
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
    'discography.page.name-album.title': 'Album %name% | Fan Page Sleep Token Argentina',
    'discography.page.name-album.description': '',
    // Offerings
    'offerings.page.index.title': '',
    'offerings.page.index.description': '',
    // Rituals
    'rituals.page.index.title': '',
    'rituals.page.index.description': '',
    'rituals.page.id.title': '',
    'rituals.page.id.description': '',
    // Contact
    'contact.page.title': '',
    'contact.page.description': '',
    // Newsletter
    'newsletter.page.index.title': '',
    'newsletter.page.index.description': '',
    'newsletter.page.id.title': '%title% Newsletter | Read Time %readTime%',
    'newsletter.page.id.description': '',
    // Worshippers
    'worshippers.page.index.title': '',
    'worshippers.page.index.description': '',
  },
  fr: {
    // Main Page
    'main.page.index.title': '',
    'main.page.index.description': '',
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
    'discography.page.name-album.title': 'Album %name% | Page fan jeton sommeil Argentine',
    'discography.page.name-album.description': '',
    // Offerings
    'offerings.page.index.title': '',
    'offerings.page.index.description': '',
    // Rituals
    'rituals.page.index.title': '',
    'rituals.page.index.description': '',
    'rituals.page.id.title': '',
    'rituals.page.id.description': '',
    // Contact
    'contact.page.title': '',
    'contact.page.description': '',
    // Newsletter
    'newsletter.page.index.title': '',
    'newsletter.page.index.description': '',
    'newsletter.page.id.title': '%title% Bulletin | Temps de lecture %readTime%',
    'newsletter.page.id.description': '',
    // Worshippers
    'worshippers.page.index.title': '',
    'worshippers.page.index.description': '',
  },
} satisfies UI<KeyLang, KeyTranslation>
