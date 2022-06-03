import {
  SolanaLogo,
  WormHoleLight,
  Coin98Logo,
  SolanaLogoDark,
  SerumLight,
  CloverDark,
  CloverLight,
  Sypool,
  JupiterLight,
  SerumDark,
  WormHoleDark,
  JupiterDark,
  Gate,
} from 'static/images/systems'

export const NAVIGATION = [
  { title: 'Home', route: 'home' },
  { title: 'Moon map', route: 'moon-map' },
  { title: 'Sen Suite', route: 'sen-suite' },
  { title: 'Utilities', route: 'utilities' },
  { title: 'Partners', route: 'partners' },
]
export const DOCUMENTS = [
  { title: 'Github', src: 'https://github.com/DescartesNetwork' },
  { title: 'Docs', src: 'https://docs.sentre.io/litepaper' },
  { title: 'Academy', src: 'https://academy.sentre.io/' },
  { title: 'Blog', src: 'https://sentre.medium.com/' },
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

export const SENTRE_URL = 'https://hub.sentre.io'
export const LITE_PAPER = 'https://docs.sentre.io/litepaper'

export const LIST_PARTNER = {
  light: [
    {
      logo: SolanaLogo,
      description:
        'Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.',
    },
    {
      logo: Coin98Logo,
      description:
        'An All in one DeFi platform to swap, stake, borrow, lend, invest and earn with crypto at ease.',
    },
    {
      logo: SerumLight,
      description:
        'Serum brings the speed and convenience of centralized exchanges to DeFi while remaining fully trustless and transparent.',
    },
    {
      logo: CloverLight,
      description:
        'CLV Chain is a Substrate-based specialized Layer 1 chain that is EVM compatible and cross-chain interoperable.',
    },
    {
      logo: WormHoleLight,
      description:
        'Cross-chain everything. Each blockchain has a distinct strength. Wormhole lets you get the best out of every blockchain without compromise.',
    },
    {
      logo: Sypool,
      description:
        'Sypool is a synthetic asset management protocol. Pool managers manage tokens like mutual fund managers manage assets.',
    },
    {
      logo: JupiterLight,
      description:
        'The key liquidity aggregator and swap infrastructure for Solana. For smart traders who like money.',
    },
    {
      logo: Gate,
      description:
        'Your Gateway to Crypto. Trade over 1,400 cryptocurrencies safely, quickly, and easily.',
    },
  ],
  dark: [
    {
      logo: SolanaLogoDark,
      description:
        'Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.',
    },
    {
      logo: Coin98Logo,
      description:
        'An All in one DeFi platform to swap, stake, borrow, lend, invest and earn with crypto at ease.',
    },
    {
      logo: SerumDark,
      description:
        'Serum brings the speed and convenience of centralized exchanges to DeFi while remaining fully trustless and transparent.',
    },
    {
      logo: CloverDark,
      description:
        'CLV Chain is a Substrate-based specialized Layer 1 chain that is EVM compatible and cross-chain interoperable.',
    },
    {
      logo: WormHoleDark,
      description:
        'Cross-chain everything. Each blockchain has a distinct strength. Wormhole lets you get the best out of every blockchain without compromise.',
    },
    {
      logo: Sypool,
      description:
        'Sypool is a synthetic asset management protocol. Pool managers manage tokens like mutual fund managers manage assets.',
    },
    {
      logo: JupiterDark,
      description:
        'The key liquidity aggregator and swap infrastructure for Solana. For smart traders who like money.',
    },
    {
      logo: Gate,
      description:
        'Your Gateway to Crypto. Trade over 1,400 cryptocurrencies safely, quickly, and easily.',
    },
  ],
}
