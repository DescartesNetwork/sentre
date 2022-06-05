import { logoCoin98Png } from 'static/images/logos'
import {
  clvDarkSvg,
  clvLightSvg,
  gateSvg,
  jupiterDarkSvg,
  jupiterLightSvg,
  partnerSolanaDarkPng,
  partnerSolanaLightPng,
  serumDarkSvg,
  serumLightSvg,
  sypoolSvg,
  wormholeDarkSvg,
  wormholeLightSvg,
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
      logo: partnerSolanaLightPng,
      description:
        'Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.',
    },
    {
      logo: logoCoin98Png,
      description:
        'An All in one DeFi platform to swap, stake, borrow, lend, invest and earn with crypto at ease.',
    },
    {
      logo: serumLightSvg,
      description:
        'Serum brings the speed and convenience of centralized exchanges to DeFi while remaining fully trustless and transparent.',
    },
    {
      logo: clvLightSvg,
      description:
        'CLV Chain is a Substrate-based specialized Layer 1 chain that is EVM compatible and cross-chain interoperable.',
    },
    {
      logo: wormholeLightSvg,
      description:
        'Cross-chain everything. Each blockchain has a distinct strength. Wormhole lets you get the best out of every blockchain without compromise.',
    },
    {
      logo: sypoolSvg,
      description:
        'Sypool is a synthetic asset management protocol. Pool managers manage tokens like mutual fund managers manage assets.',
    },
    {
      logo: jupiterLightSvg,
      description:
        'The key liquidity aggregator and swap infrastructure for Solana. For smart traders who like money.',
    },
    {
      logo: gateSvg,
      description:
        'Your Gateway to Crypto. Trade over 1,400 cryptocurrencies safely, quickly, and easily.',
    },
  ],
  dark: [
    {
      logo: partnerSolanaDarkPng,
      description:
        'Solana is a decentralized blockchain built to enable scalable, user-friendly apps for the world.',
    },
    {
      logo: logoCoin98Png,
      description:
        'An All in one DeFi platform to swap, stake, borrow, lend, invest and earn with crypto at ease.',
    },
    {
      logo: serumDarkSvg,
      description:
        'Serum brings the speed and convenience of centralized exchanges to DeFi while remaining fully trustless and transparent.',
    },
    {
      logo: clvDarkSvg,
      description:
        'CLV Chain is a Substrate-based specialized Layer 1 chain that is EVM compatible and cross-chain interoperable.',
    },
    {
      logo: wormholeDarkSvg,
      description:
        'Cross-chain everything. Each blockchain has a distinct strength. Wormhole lets you get the best out of every blockchain without compromise.',
    },
    {
      logo: sypoolSvg,
      description:
        'Sypool is a synthetic asset management protocol. Pool managers manage tokens like mutual fund managers manage assets.',
    },
    {
      logo: jupiterDarkSvg,
      description:
        'The key liquidity aggregator and swap infrastructure for Solana. For smart traders who like money.',
    },
    {
      logo: gateSvg,
      description:
        'Your Gateway to Crypto. Trade over 1,400 cryptocurrencies safely, quickly, and easily.',
    },
  ],
}

export enum MoonMapState {
  foundation = 'foundation',
  dAppStore = 'dapp-store',
  acceleration = 'acceleration',
}
