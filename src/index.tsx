import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from 'containers/app/index'

import store from 'store'
import { Provider } from 'react-redux'

import './static/theme/styles/index.less'
import './index.less'
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
