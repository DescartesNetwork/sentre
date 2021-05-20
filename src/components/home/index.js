import React from 'react';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Button from 'senswap-ui/button';
import { ArrowForward, Telegram } from 'senswap-ui/icons';

import data from 'static/base/index';
import {
  imgBlockBanner,
  iconLargeSquare,
  iconSmallSquare,
  iconSquareBlur,
  imgMultiDot,
  imgBackgroundNews,
} from 'static/images';

import Card from 'components/card';

import useStyles from './styles';

export function Banner(props) {
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

export function OurFeature(props) {
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

export function Partners(props) {
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

export function GlobalCommnunity(props) {
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

export function News(props) {
  const classes = useStyles();
  const { articles } = props;

  return <Grid container spacing={0}>
    <Grid item xs={12} sm={12} md={12} className={classes.news}>
      <Grid container className="xl-screen" spacing={0}>
        <Grid item className="news">
          <Grid className="section-title title">
            <Typography variant="h2">{data.news.title}</Typography>
            <Typography variant="subtitle1">{data.news.description}</Typography>
            <Grid component="img" src={data.news.bg_news.default} />
          </Grid>
          <Grid container component="ul" className="cards-content" spacing={2}>
            {(articles && articles.length > 0) ? articles.slice(0, 4).map((e, idx) => {
              return <Grid component="li" key={idx} item md={3} sm={6} xs={12}>
                <Card title={e.title} description={e.description} src={e.thumbnail} link={e.link} />
              </Grid>
            }) : null}
          </Grid>
          <Grid className="btn-more">
            <Button variant="outlined" href="/news" color="primary" endIcon={<ArrowForward />}>See more</Button>
            <Grid component="img" src={imgBackgroundNews} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}