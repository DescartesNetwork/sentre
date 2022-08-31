import { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Row, Col, Typography } from 'antd'
import Header from 'containers/header'
import Home from 'containers/home'
import Footer from '../footer'
import NotFound from 'containers/404'
import Watcher from 'containers/watcher'
import BecomePartner from 'containers/home/partner/becomePartner'

import { AppState } from 'store'
import WhitePaper from 'static/base/sentre_whitepaper.pdf'
import PitchDesk from 'static/base/sentre_pitch_desk.pdf'
import 'static/styles/dark.less'
import 'static/styles/light.less'
import './index.less'

const App = () => {
  const theme = useSelector((state: AppState) => state.ui.theme)

  useEffect(() => {
    document.body.setAttribute('id', theme)
  }, [theme])

  return (
    <Row gutter={[24, 0]}>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/partner" component={BecomePartner} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/whitepaper"
            render={() => {
              window.location.href = window.location.origin + WhitePaper
              return <Typography.Text>Redirecting...</Typography.Text>
            }}
          />
          <Route
            exact
            path="/pitchdesk"
            render={() => {
              window.location.href = window.location.origin + PitchDesk
              return <Typography.Text>Redirecting...</Typography.Text>
            }}
          />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
      <Watcher />
    </Row>
  )
}

export default App
