import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Header from 'containers/app/header'
import Home from 'containers/app/home'

import 'static/styles/index.scss'

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
