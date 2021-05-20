import React from 'react';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Button from 'senswap-ui/button';

import { Telegram } from 'senswap-ui/icons';

import useStyles from './styles';
import data from 'static/base/index';


function Commnunity() {
  const classes = useStyles();

  return <Grid container spacing={0} className={classes.community}>
    <Grid item xs={12} md={12}>
      <Grid container spacing={0} className="xl-screen">
        <Grid item className="community">
          <Grid className="section-title title">
            <Typography variant="h2">{data.community.title}</Typography>
            <Typography variant="subtitle1">{data.community.description}</Typography>
          </Grid>
          <Grid className="group-btn">
            <Button className="btn-tw" href={data.CTA.twitter} target="_blank">
              <Grid component="img" src={data.community.ico_tw_url.default} />
              <Typography>{data.community.btn_twitter}</Typography>
            </Button>
            <Button className="btn-fb" startIcon={<Telegram style={{ fontSize: 31 }} />}>
              {/* <Grid component="img" src={data.community.ico_fb_url.default} /> */}
              <Typography>{data.community.btn_telegram}</Typography>
            </Button>
          </Grid>
          <Grid component="img" className="img-bg comm-bgr" src={data.community.img_bgr.default} />
          <Grid component="img" className="img-bg comm-bgl" src={data.community.img_bgl.default} />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

export default Commnunity;