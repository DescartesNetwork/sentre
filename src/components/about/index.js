import React from 'react';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';

import data from 'static/base/index';

import Card from 'components/card';

import useStyles from './styles';

export function Banner(props) {

  return <Grid container spacing={0}>
    <Grid item md={12} xs={12}>
      <Grid className="section-banner">
        <Grid container className="xl-screen" spacing={0}>
          <Grid item className="banner">
            <Typography variant="h1">{data.pageAbout.title}</Typography>
            <Typography variant="subtitle1">{data.pageAbout.description}</Typography>
            <Grid component="img" className="img-dot" src={data.pageAbout.url_multidot.default}></Grid>
            <Grid component="img" className="img-bgr" src={data.pageAbout.url_background.default}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

export function AboutUs(props) {
  const classes = useStyles();

  return <Grid container className="xl-screen" spacing={0}>
    <Grid item xs={12} className={classes.aboutUs}>
      <Grid container className="about-content" spacing={0}>
        <Grid item lg={7} md={6} sm={12} className="content-center">
          <Grid className="content-title">
            <Typography variant="h3">{data.pageAbout.solution.title}</Typography>
            <Grid className="desc" dangerouslySetInnerHTML={{ __html: data.pageAbout.solution.description }} />
          </Grid>
        </Grid>
        <Grid item lg={5} md={6} sm={12}>
          <Grid className="content-img">
            <Grid component="img" src={data.pageAbout.solution.src.default} className="img-bg" />
            <Grid className="tag tag-top">
              <Grid component="img" src={data.pageAbout.solution.ico_src.default} />
              <Grid className="sub">
                <Typography variant="subtitle1" className="time">{data.pageAbout.solution.tag_time}</Typography>
                <Typography variant="subtitle1" className="title">{data.pageAbout.solution.tag_title}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="about-content mb-reverse" spacing={0}>
        <Grid item lg={6} md={6} sm={12}>
          <Grid className="content-img red-tag">
            <Grid component="img" src={data.pageAbout.howItWork.src.default} className="img-bg" />
            <Grid className="tag">
              <Grid component="img" src={data.pageAbout.howItWork.ico_src.default} />
              <Grid className="sub">
                <Typography variant="subtitle1" className="time">{data.pageAbout.howItWork.tag_time}</Typography>
                <Typography variant="subtitle1" className="title">{data.pageAbout.howItWork.tag_title}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <Grid className="content-title">
            <Typography variant="h3">{data.pageAbout.howItWork.title}</Typography>
            <Grid className="desc" dangerouslySetInnerHTML={{ __html: data.pageAbout.howItWork.description }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

export function RelatedArticles(props) {
  const classes = useStyles();
  const { articles } = props;

  return <Grid container spacing={0}>
    <Grid item xs={12} className={classes.relatedArticles}>
      <Grid container className="xl-screen" spacing={0}>
        <Grid item xs={12} className="content">
          <Typography variant="subtitle1" className="title">{data.pageAbout.relatedTitle}</Typography>
          <Grid container component="ul" spacing={2}>
            {(articles && articles.length > 0) ? articles.slice(0, 4).map((e, idx) => {
              // if (idx < 2)
              return <Grid component="li" key={idx} item md={3} sm={6} xs={12}>
                <Card title={e.title} description={e.description} src={e.thumbnail} link={e.link} />
              </Grid>
              // return null
            }) : null}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}