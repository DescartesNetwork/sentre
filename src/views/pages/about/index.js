import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Grid from 'senswap-ui/grid';

import { AboutUs, Banner, RelatedArticles } from '../../../components/about';

class About extends Component {

  render() {
    const { articles } = this.props;

    return <Grid container spacing={0}>
      <Grid item md={12} xs={12}>
        <Banner />
        <AboutUs />
        <RelatedArticles articles={articles} />
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
)(About));