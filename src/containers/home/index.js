import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';

import Banner from './banner';
import OurFeatures from './ourFeatures';
import Partners from './partners';
import Commnunity from './community';
import News from './news';

import styles from './styles';
import { getArticles } from 'modules/article.reducer';


class Home extends Component {

  componentDidMount() {
    const { getArticles } = this.props;
    return getArticles();
  }

  render() {
    const { articles } = this.props;

    return <Grid container spacing={0}>
      <Grid item xs={12}>
        <Banner />
        <OurFeatures />
        <Partners />
        <News articles={articles} />
        <Commnunity />
      </Grid>
    </Grid>
  }
}

const mapStateToProps = state => ({
  articles: state.articles
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(Home)));