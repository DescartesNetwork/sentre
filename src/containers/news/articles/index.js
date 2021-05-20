import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Grid from 'senswap-ui/grid';
import Pagination from 'senswap-ui/pagination';

import Card from 'components/card';

import useStyles from './styles';


const LIMIT_PAGE = 8;

function Articles(props) {
  const classes = useStyles();
  const { articles } = props;

  const [page, setPage] = useState(0);
  const [pagiArticles, setPagiArticles] = useState(articles.slice(0, LIMIT_PAGE) || []);

  const onPagination = (page = 0) => {
    let res = articles.slice(page * LIMIT_PAGE, (page + 1) * LIMIT_PAGE);
    setPage(page);
    setPagiArticles(res);
  }

  useEffect(onPagination, [articles]);

  const count = Math.ceil(articles.length / LIMIT_PAGE);

  return <Grid container spacing={0}>
    <Grid item md={12} sm={12} xs={12} className={classes.articles}>
      <Grid container className="xl-screen" spacing={0}>
        <Grid item xs={12} className="content">
          <Grid container component="ul" spacing={2}>
            {pagiArticles.map((article, idx) => <Grid component="li" key={idx} item xs={12} sm={6} md={3} >
              <Card
                title={article.title}
                description={article.description}
                src={article.thumbnail}
                link={article.link}
              />
            </Grid>)}
          </Grid>
        </Grid>
        {(count > 1) ?
          <Grid item className="paginations">
            <Pagination page={page} count={count} onChange={onPagination} />
          </Grid> : null}
      </Grid>
    </Grid>
  </Grid>
}

Articles.defaultProps = {
  articles: [],
}

Articles.propsType = {
  articles: PropTypes.array,
}

export default Articles;