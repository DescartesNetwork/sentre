import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { ThemeProvider } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';

// Static
import Header from 'containers/header';
import Footer from 'containers/footer';
//Views
import Home from 'containers/home';
import AboutUs from 'containers/about';
import News from 'containers/news';
import NotFound from 'containers/404';

import 'static/styles/index.scss';


class App extends Component {
  render() {
    const { ui: { theme } } = this.props;

    return <ThemeProvider variant={theme}>
      <Grid container className={`${theme}-mode`}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Redirect exact from='/' to='/home' />
            <Route exact path='/home' component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/news" component={News} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
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