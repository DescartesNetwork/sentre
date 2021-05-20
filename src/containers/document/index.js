import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

class Document extends Component {

  render() {
    return <Grid container>
      <Grid item>
        <Typography>Document</Typography>
      </Grid>
    </Grid>
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Document));