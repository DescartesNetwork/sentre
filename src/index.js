import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from 'containers/app/index'

import 'static/styles/index.scss'

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
)
