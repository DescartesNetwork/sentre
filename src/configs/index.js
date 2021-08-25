import basics from './basics.config'
import api from './api.config'

const env = process.env.REACT_APP_ENV || process.env.NODE_ENV

const configs = {
  env,
  api: api[env],
  basics: basics[env],
}

/**
 * Module exports
 */
export default configs
