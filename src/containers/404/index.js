import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Button from 'senswap-ui/button';
import { Home } from 'senswap-ui/icons';
import { makeStyles } from 'senswap-ui/styles';

const useStyles = makeStyles(theme => ({
  error: {
    textAlign: 'center',
    padding: `${theme.spacing(15)}px ${theme.spacing(0)} ${theme.spacing(50)}px`,
    '& .btn-error': {
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius / 3,
      marginTop: 30,
    }
  }
}))

function NotFound(props) {
  const classes = useStyles();

  return <Grid container spacing={0} className={classes.error}>
    <Grid item xs={12}>
      <Typography variant="h1" align="center">Oop!!! Page not found.</Typography>
      <Button href="/" color="primary" variant="outlined" startIcon={<Home />} className="btn-error">Back to home</Button>
    </Grid>
  </Grid>
}

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotFound));