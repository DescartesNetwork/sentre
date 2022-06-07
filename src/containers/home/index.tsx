import { Col, Row } from 'antd'

import Banner from './banner'
import BuildOnSentre from './buildOnSentre'
import MoonMap from './moonMap'
import Partner from './partner'
import SenSuite from './senSuite'
import Utilities from './utilities'

import './index.less'

const Home = () => {
  return (
    <Row gutter={[16, { xs: 48, sm: 48, md: 96, lg: 96 }]}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <MoonMap />
      </Col>
      <Col span={24}>
        <SenSuite />
      </Col>
      <Col span={24}>
        <Utilities />
      </Col>
      <Col span={24}>
        <Partner />
      </Col>
      <Col span={24}>
        <BuildOnSentre />
      </Col>
    </Row>
  )
}

export default Home
