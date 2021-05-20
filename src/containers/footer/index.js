import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Grid from 'senswap-ui/grid';
import Link from 'senswap-ui/link';
import Typography from 'senswap-ui/typography';
import Brand from 'senswap-ui/brand';

import { MailOutline } from 'senswap-ui/icons';

import styles from './styles';


class Footer extends Component {
  render() {
    const { classes } = this.props;

    return <Grid container spacing={0} className="xl-screen">
      <Grid item md={12} sm={12}>
        <Grid container spacing={0} className={classes.footer}>
          <Grid item sm={12} md={6}>
            <Grid component="ul" className="footer-menu">
              <Grid component="li">
                <Brand />
              </Grid>
              <Grid component="li">
                <Typography>© 2021, All Rights Reserved</Typography>
              </Grid>
              <Grid component="li" className="group-btn">
                <Link to="/home">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/about0us">About us</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={6} xs={12}>
            <Grid container spacing={0} className="contact-us">
              <Grid item xs={12} className="label">
                <Typography>Contact Us</Typography>
              </Grid>
              <Grid item xs={12} className="link">
                <Link
                  href="mailto:hi@senswap.com"
                  underline="none"
                  children={<Typography>
                    <MailOutline />
                    hi@senswap.com
                  </Typography>} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Footer)));