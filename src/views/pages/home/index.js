import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Grid from 'senswap-ui/grid';
import { withStyles } from 'senswap-ui/styles';

import { Banner, OurFeature, Partners, GlobalCommnunity, News } from '../../../components/home/index';

import styles from './styles';

class Home extends Component {

  render() {
    const { articles } = this.props;

    return <Grid container spacing={0}>
      <Grid item xs={12} md={12}>
        <Banner />
        <OurFeature />
        <Partners />
        <News articles={articles} />
        <GlobalCommnunity />
      </Grid>
    </Grid>
  }
}

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Home)));