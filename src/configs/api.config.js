/**
 * Contructor
 */
const configs = {}

/**
 * Development configurations
 */
configs.development = {
  base: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/',
  auth: '@senswap',
}

/**
 * Staging configurations
 */
configs.staging = {
  base: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/',
  auth: '@senswap',
}

/**
 * Production configurations
 */
configs.production = {
  base: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/',
  auth: '@senswap',
}

/**
 * Module exports
 */
export default configs
