import React from 'react';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Button from 'senswap-ui/button';

import useStyles from './styles';
import data from 'static/base/index';
import {
  imgBlockBanner, iconLargeSquare, iconSmallSquare,
  iconSquareBlur, imgMultiDot,
} from 'static/images';


function Banner() {
  const classes = useStyles();

  return <Grid container className={`${classes.banner} xl-screen`} spacing={0}>
    <Grid item className="left-content" xs={12} md={5} lg={5}>
      <Grid className="content">
        <Grid className="bg-content">
          <Grid component="img" src={iconSquareBlur} />
          <Grid component="img" src={imgMultiDot} className="img-multi-dot" />
        </Grid>
        <Grid className="text-content">
          <Typography variant="h1" color="textPrimary">{data.text.homeBanner.title}</Typography>
          <Typography variant="subtitle1" color="textPrimary">{data.text.homeBanner.description}</Typography>
          <Grid className="group-btn">
            <Button variant="contained" color="primary" href={data.CTA.app} target="_blank">
              <Typography variant="subtitle1">{data.text.homeBanner.buttonLaunch}</Typography>
            </Button>
            <Button variant="outlined" color="primary" href="/news">
              <Typography variant="subtitle1">{data.text.homeBanner.buttonLearn}</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item className="right-content" xs={12} md={7} lg={7}>
      <Grid className="group-img">
        <Grid component="img" src={imgBlockBanner} className="bg-banner" />
        <Grid component="img" src={iconLargeSquare} className="ico-lg-square" />
        <Grid component="img" src={iconSmallSquare} className="ico-sm-square" />
      </Grid>
    </Grid>
  </Grid>
}

export default Banner;