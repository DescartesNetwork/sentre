import React from 'react';

import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Button from 'senswap-ui/button';

import { ArrowForward } from 'senswap-ui/icons';

import Card from 'components/card';

import useStyles from './styles';
import data from 'static/base/index';
import { imgBackgroundNews } from 'static/images';


function News(props) {
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

export default News;