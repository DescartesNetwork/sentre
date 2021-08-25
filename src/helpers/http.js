import axios from 'axios'
import configs from 'configs'

const {
  api: { base },
} = configs
const http = axios.create({
  baseURL: base,
  timeout: 60000,
  withCredentials: false,
})
export default http
