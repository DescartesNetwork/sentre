import React from 'react';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

import useStyles from './styles';
import data from 'static/base/index';


function Partners() {
  const classes = useStyles();

  return <Grid container spacing={0} className={classes.partners}>
    <Grid item xs={12} md={12}>
      <Grid container spacing={0} className="xl-screen">
        <Grid item xs={12} className="section-title title">
          <Typography variant="h2">{data.partners.title}</Typography>
          {/* <Typography variant="subtitle1">{data.community.description}</Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Grid container component="ul" spacing={2}>
            {data.partners.items.map((e, idx) => {
              return <Grid component="li" item key={idx} md={3} sm={6} xs={12}>
                <Grid component="img" src={e.src.default} />
              </Grid>
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

export default Partners;