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
import storage from 'helpers/storage';


const KEY = storage.KEYS.FilterThemeMode;

class App extends Component {
  constructor() {
    super();

    this.state = {
      isDarkMode: !storage.getData(KEY) ? storage.getData(KEY) : true,
    }
  }

  onSwitch = (value) => {
    storage.setData(KEY, value);
    return this.setState({ isDarkMode: value });
  }

  render() {
    const { isDarkMode } = this.state;
    const themeMode = isDarkMode ? 'dark-mode' : 'light-mode';

    return <ThemeProvider>
      <Grid container className={themeMode}>
        <Grid item xs={12}>
          <Header darkmode={isDarkMode} onSwitch={this.onSwitch} />
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
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));