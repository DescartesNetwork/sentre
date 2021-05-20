import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';

import { sessionStorage } from 'helpers/index';

import Pages from './pages';
import { Header, Footer } from './sidebar';


const KEY = sessionStorage.KEYS.FilterThemeMode;
class App extends Component {
  constructor() {
    super();

    this.state = {
      isDarkMode: sessionStorage.getData(KEY) !== undefined ? sessionStorage.getData(KEY) : true,
    }
  }
  onSwitch(val) {
    sessionStorage.setData(KEY, val);
    this.setState({ isDarkMode: val });
  }

  render() {
    const { isDarkMode } = this.state;
    const themeMode = isDarkMode ? 'dark-mode' : 'light-mode';

    return <ThemeProvider>
      <Grid container spacing={0} className={themeMode}>
        <Grid item xs={12} md={12}>
          <Header darkmode={isDarkMode} onSwitch={(e) => this.onSwitch(e)} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Pages />
        </Grid>
        <Grid item xs={12} md={12}>
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