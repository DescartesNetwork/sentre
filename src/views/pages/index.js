import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Grid from 'senswap-ui/grid';

import Home from './home';
import AboutUs from './about';
// import Document from './document';
import News from './news';
import NotFound from './404';

import { getArticles } from 'modules/article.reducer';


class Pages extends Component {
  componentDidMount() {
    this.getArticles();
  }
  getArticles = () => {
    const { getArticles } = this.props;
    return getArticles()
  }

  render() {
    const { articles } = this.props;

    return <Fragment>
      <Grid container className="pages" spacing={0}>
        <Grid item xs={12}>
          <Switch>
            <Route path="/" exact component={() => <Home articles={articles} />} />
            <Route path="/about-us" component={() => <AboutUs articles={articles} />} />
            {/* <Route path="/document" component={Document} /> */}
            <Route path="/news" component={() => <News articles={articles} />} />
            <Route component={NotFound} />
          </Switch>
        </Grid>
      </Grid>
    </Fragment>
  }
}
const mapStateToProps = state => ({
  articles: state.articles,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  getArticles
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Pages));