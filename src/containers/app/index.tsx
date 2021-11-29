import { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Row, Col } from 'antd'
import Header from 'containers/header'
import Home from 'containers/home'
import Footer from '../footer'
import Blogs from '../blogs'
import ArticleDetail from '../blogs/articleDetail'
import NotFound from 'containers/404'
import FetchArticles from '../blogs/components/fetchArticles'
import { RootState } from 'store'

import 'static/styles/dark.less'
import 'static/styles/light.less'
import './index.less'

const App = () => {
  const pageStyles = {
    maxWidth: 1200,
    margin: 'auto',
    padding: '0 15px',
  }
  const { theme } = useSelector((state: RootState) => state.theme)

  useEffect(() => {
    document.body.setAttribute('id', theme)
  }, [theme])

  return (
    <Row>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <Row style={{ ...pageStyles }}>
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
        </Row>
      </Col>
      <FetchArticles />
    </Row>
  )
}

export default App
