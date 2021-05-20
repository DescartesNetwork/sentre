import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Button from 'senswap-ui/button';
import Typography from 'senswap-ui/typography';
import Link from 'senswap-ui/link';
import Grid from 'senswap-ui/grid';
import { withStyles } from 'senswap-ui/styles';
import Switch from 'senswap-ui/switch';

import { IconDark, IconLight, logo } from 'static/images/index';
import data from 'static/base/index';

import styles from './styles';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      isSwitch: this.props.darkmode || false,
    }
    this.onClickOutSide = this.onClickOutSide.bind(this);
    this.switchRef = createRef();
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
    const menuElement = document.querySelector('#sen_menu'),
      buttonElement = document.querySelector('#ico_menu'),
      isOutSide = menuElement.contains(e.target),
      isButton = buttonElement.contains(e.target);

    if (!isOutSide && !isButton) this.setState({ isActive: false });
  }
  onSwitch() {
    const checked = this.switchRef.current.checked;
    this.setState({ isSwitch: checked });
    this.props.onSwitch(checked);
  }

  render() {
    const { classes } = this.props;
    const { isActive, isSwitch } = this.state;


    const onToggleMenu = () => {
      this.setState({
        isActive: !isActive,
      });
    };

    return <Grid container className={classes.header} spacing={0}>
      <Grid component="nav" className="navbar-menu" item>
        <Grid container spacing={0} className="xl-screen">
          <Grid item xs={12} md={4} lg={6}>
            <Grid className="logo">
              <Link to="/">
                <Grid component="img" src={logo} />
              </Link>
            </Grid>
          </Grid>
          <Grid id="sen_menu" item component="ul" xs={12} md={8} lg={6} className={`list-menu ${isActive ? 'active' : ''}`}>
            {data.navs.map((e, idx) => {
              return <Grid className="menu-items" component="li" key={idx}>
                <Link to={e.route}>
                  <Typography color="textPrimary">{e.name}</Typography>
                </Link>
              </Grid>
            })}
            <Grid component="li" className="menu-items">
              <Button variant="contained" className="btn-launch" color="primary" href={data.CTA.app} target="_blank">
                <Typography color="textPrimary">Launch SenSwap</Typography>
              </Button>
            </Grid>
            <Grid component="li" className="menu-items">
              <Grid component="img" src={isSwitch ? IconDark : IconLight} />
              <Switch variant="contained" ref={this.switchRef} onChange={() => this.onSwitch()} checked={isSwitch} />
            </Grid>
          </Grid>
        </Grid>
        <Grid onClick={onToggleMenu} className={`btn-toggle-menu ${isActive ? 'open' : ''}`}>
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header)));