import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Grid from 'senswap-ui/grid';
import Link from 'senswap-ui/link';
import Typography from 'senswap-ui/typography';
import data from '../../static/base';
import { withStyles } from 'senswap-ui/styles';
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
                <Grid component="img" src={data.footer.logo.default} />
              </Grid>
              <Grid component="li">
                <Typography>{data.footer.reserved}</Typography>
              </Grid>
              <Grid component="li" className="group-btn">
                <Link to="/news">{data.footer.menu_news}</Link>
                {/* <Link className="disable">{data.footer.menu_document}</Link> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={6} xs={12}>
            {/* <Grid className="sub-form">
              <Typography variant="body2" className="label">{data.footer.form_label}</Typography>
              <Grid className="sub-input">
                <Grid component="input" />
                <Typography></Typography>
              </Grid>
              <Grid component="img" src={data.footer.form_icon.default} />
            </Grid> */}
            <Grid container spacing={0} className="contact-us">
              <Grid item xs={12} className="label">
                <Typography>{data.footer.form_label}</Typography>
              </Grid>
              <Grid item xs={12} className="link">
                <Link
                  href="mailto:example@senswap.com"
                  underline="none"
                  children={<Typography>
                    <MailOutline />
                    mailto@senswap.com
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