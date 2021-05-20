import React from 'react';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

import useStyles from './styles';
import data from 'static/base/index';


function OurFeatures() {
  const classes = useStyles();

  return <Grid container spacing={0} className="xl-screen">
    <Grid item xs={12} md={12}>
      <Grid container spacing={0} className={classes.features}>
        <Grid item xs={12} md={12}>
          <Grid className="section-title title">
            <Typography variant="h2">{data.text.ourFeature.title}</Typography>
            <Typography variant="subtitle1">{data.text.ourFeature.description}</Typography>
          </Grid>
          <Grid className="content">
            <Grid component="ul" container spacing={0}>
              {data.features.map((e, idx) => {
                return <Grid component="li" item xs={12} sm={6} md={6} lg={4} key={idx}>
                  <Grid component="img" src={e.ico_url.default} />
                  <Typography variant="subtitle2" className="box-title"><Grid component="strong">{e.title}</Grid></Typography>
                  <Typography variant="subtitle2" className="box-desc">{e.description}</Typography>
                </Grid>
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

export default OurFeatures;