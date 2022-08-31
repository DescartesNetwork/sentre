export const SENTRE_URL = 'https://hub.sentre.io'
export const SENTRE_DOCS = 'https://docs.sentre.io/'
export const SENTRE_ACADEMY = 'https://academy.sentre.io/'

export const NAVIGATION = [
  { title: 'Home', route: 'home' },
  { title: 'Moon Map', route: 'moon-map' },
  { title: 'Sen Suite', route: 'sen-suite' },
  { title: 'Utilities', route: 'utilities' },
  { title: 'Partners', route: 'partners' },
  { title: 'Builder', route: 'builder' },
  { title: 'Academy', route: SENTRE_ACADEMY },
]
export const DOCUMENTS = [
  { title: 'Github', src: 'https://github.com/DescartesNetwork' },
  { title: 'Docs', src: SENTRE_DOCS },
  { title: 'Academy', src: SENTRE_ACADEMY },
]
export const SOCIALS = [
  {
    icon: 'logo-twitter',
    title: 'Twitter',
    src: 'https://twitter.com/SentreProtocol',
  },
  {
    icon: 'logo-discord',
    title: 'Discord',
    src: 'https://discord.com/invite/VD7UBAp2HN',
  },
  { icon: 'paper-plane', title: 'Telegram', src: 'https://t.me/Sentre' },
  {
    icon: 'logo-youtube',
    title: 'Youtube',
    src: 'https://www.youtube.com/channel/UC7P7lwc-6sLEr0yLzWfFUyg',
  },
  { icon: 'mail', title: 'Email', src: 'mailto: hi@sentre.io' },
]

export enum MoonMapState {
  foundation = 'foundation',
  dAppStore = 'dapp-store',
  acceleration = 'acceleration',
}
