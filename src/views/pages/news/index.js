import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Grid from 'senswap-ui/grid';
import { withStyles } from 'senswap-ui/styles';

import { Articles, Banner } from 'components/news';

import styles from './styles';

class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    }
  }

  render() {
    const { articles } = this.props;

    return <Grid container spacing={0}>
      <Grid item md={12} sm={12} xs={12}>
        <Banner />
        <Articles articles={articles} />
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
)(withStyles(styles)(News)));