import React, { useState } from 'react';
import Grid from 'senswap-ui/grid';
import Typography from 'senswap-ui/typography';
import Pagination from 'senswap-ui/pagination';

import data from 'static/base/index';
import Card from 'components/card';
import { deepClone } from 'helpers';

import useStyles from './styles';

const LIMIT_PAGE = 8;

export function Banner(props) {

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

export function Articles(props) {
  const classes = useStyles();

  const { articles } = props;
  const cloneArt = articles ? deepClone(articles) : [];

  const [page, setPage] = useState(0);
  const [pagiArticles, setPagiArticles] = useState(() => {
    return cloneArt.slice(0, LIMIT_PAGE);
  });
  const count = Math.ceil(articles.length / LIMIT_PAGE);

  const onPagination = (val) => {
    setPage(val);
    paginationArticles(val);
  }

  const paginationArticles = (e) => {
    const offset = Number((e + 1) * LIMIT_PAGE);
    let res = []
    if (cloneArt.length > 0 && cloneArt.length > LIMIT_PAGE) res = cloneArt.slice(Math.abs(offset - LIMIT_PAGE), offset);
    setPagiArticles(res);
  }

  return <Grid container spacing={0}>
    <Grid item md={12} sm={12} xs={12} className={classes.articles}>
      <Grid container className="xl-screen" spacing={0}>
        <Grid item xs={12} className="content">
          <Grid container component="ul" spacing={2}>
            {(pagiArticles && pagiArticles.length > 0) ? pagiArticles.map((e, idx) => {
              return <Grid component="li" key={idx} item md={3} sm={6} xs={12}>
                <Card title={e.title} description={e.description} src={e.thumbnail} link={e.link} />
              </Grid>
            }) : null}
          </Grid>
        </Grid>
        {(articles && count > 1) ?
          <Grid item className="paginations">
            <Pagination
              page={page}
              count={count}
              onChange={(e) => onPagination(e)}
            />
          </Grid>
          : null}
      </Grid>
    </Grid>
  </Grid>
}