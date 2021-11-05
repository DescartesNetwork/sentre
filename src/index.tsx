import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from 'containers/app/index'

import store from 'store'
import { Provider } from 'react-redux'

import 'static/theme/index.less'
import './index.less'
render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
)
