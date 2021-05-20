import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { withStyles } from 'senswap-ui/styles';
import Button from 'senswap-ui/button';
import Typography from 'senswap-ui/typography';
import Link from 'senswap-ui/link';
import Grid from 'senswap-ui/grid';
import Switch from 'senswap-ui/switch';
import Brand from 'senswap-ui/brand';

import styles from './styles';
import { IconDark, IconLight } from 'static/images/index';
import data from 'static/base/index';


class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      isSwitch: this.props.darkmode || false,
    }

    this.onClickOutSide = this.onClickOutSide.bind(this);
  }

  componentDidMount() {
    const { history: { listen } } = this.props;
    document.addEventListener('click', this.onClickOutSide);
    this.listRouter = listen(() => {
      this.setState({ isActive: false });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutSide);
    this.listRouter();
  }

  onClickOutSide(e) {
    const menuElement = document.querySelector('#sen_menu');
    const buttonElement = document.querySelector('#ico_menu');
    const isOutSide = menuElement.contains(e.target);
    const isButton = buttonElement.contains(e.target);
    if (!isOutSide && !isButton) this.setState({ isActive: false });
  }

  onSwitch = (e) => {
    const { onSwitch } = this.props;
    const checked = e.target.checked;
    return this.setState({ isSwitch: checked }, () => {
      return onSwitch(checked);
    });
  }

  onToggleMenu = () => {
    const { isActive } = this.state;
    return this.setState({ isActive: !isActive });
  }

  render() {
    const { classes } = this.props;
    const { isActive, isSwitch } = this.state;

    return <Grid container className={classes.header}>
      <Grid component="nav" className="navbar-menu" item>
        <Grid container spacing={0} className="xl-screen" alignItems="center">
          <Grid item xs={12} md={4} lg={6}>
            <Brand />
          </Grid>
          <Grid id="sen_menu" item component="ul" xs={12} md={8} lg={6} className={`list-menu ${isActive ? 'active' : ''}`}>
            <Grid className="menu-items" component="li">
              <Link to="/about-us">
                <Typography color="textPrimary">About Us</Typography>
              </Link>
            </Grid>
            <Grid className="menu-items" component="li">
              <Link to="/news">
                <Typography color="textPrimary">News</Typography>
              </Link>
            </Grid>
            <Grid component="li" className="menu-items">
              <Button variant="contained" className="btn-launch" color="primary" href={data.CTA.app} target="_blank">
                <Typography color="textPrimary">Launch SenSwap</Typography>
              </Button>
            </Grid>
            <Grid component="li" className="menu-items">
              <Grid component="img" src={isSwitch ? IconDark : IconLight} />
              <Switch variant="contained" onChange={this.onSwitch} checked={isSwitch} />
            </Grid>
          </Grid>
        </Grid>
        <Grid onClick={this.onToggleMenu} className={`btn-toggle-menu ${isActive ? 'open' : ''}`}>
          <Grid id="ico_menu">
            {[1, 2, 3, 4].map((e, idx) => { return <Grid component="span" key={idx}></Grid> })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

Header.defaultProps = {
  darkmode: true,
  onSwitch: () => { }
}

Header.propsType = {
  darkmode: PropTypes.bool,
  onSwitch: PropTypes.func
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header)));