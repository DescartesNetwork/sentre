import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

// Static
import Header from 'containers/app/header';
//Views
import Home from 'containers/app/home';

import 'static/styles/index.scss';


class App extends Component {
  render() {
    return <div className="page">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));