import { Route, Switch, Redirect } from 'react-router-dom'

import { Row, Col } from 'antd'

import Header from 'containers/app/header'
import Home from 'containers/app/home'
import Footer from './footer'
import Blogs from './blogs'
import ArticleDetail from './blogs/articleDetail'
import NotFound from 'containers/404'
import ArticleWatcher from './blogs/components/articleWatcher'

const App = () => {
  const pageStyles = {
    maxWidth: 1200,
    margin: 'auto',
    padding: '0 15px',
  }

  return (
    <Row style={{ ...pageStyles }}>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:articleId" component={ArticleDetail} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
      <ArticleWatcher />
    </Row>
  )
}

export default App
