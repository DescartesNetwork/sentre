import React from 'react';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

import data from 'static/base/index';

function Banner() {
  return <Grid container spacing={0}>
    <Grid item md={12} xs={12}>
      <Grid className="section-banner">
        <Grid container className="xl-screen" spacing={0}>
          <Grid item className="banner">
            <Typography variant="h1">{data.pageNews.title}</Typography>
            <Typography variant="subtitle1">{data.pageNews.description}</Typography>
            <Grid component="img" className="img-dot" src={data.pageNews.url_multidot.default}></Grid>
            <Grid component="img" className="img-bgr" src={data.pageNews.url_background.default}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

export default Banner;