import { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Row, Col, ConfigProvider } from 'antd'

import Header from 'containers/header'
import Home from 'containers/home'
import Footer from '../footer'
import Blogs from '../blogs'
import ArticleDetail from '../blogs/articleDetail'
import NotFound from 'containers/404'
import ArticleWatcher from '../blogs/components/articleWatcher'
import { RootState } from 'store'

import 'static/theme/dark/index.dark.less'
import 'static/theme/index.default.less'

const App = () => {
  const pageStyles = {
    maxWidth: 1200,
    margin: 'auto',
    padding: '0 15px',
  }

  const {
    theme: { isDarkMode },
  } = useSelector((state: RootState) => state)

  useEffect(() => {
    ;(() => {
      if (isDarkMode) return document.body.setAttribute('class', 'theme-dark')
      return document.body.setAttribute('class', 'theme-light')
    })()
  }, [isDarkMode])

  return (
    <ConfigProvider prefixCls={isDarkMode ? 'dark' : 'default'}>
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
    </ConfigProvider>
  )
}

export default App
