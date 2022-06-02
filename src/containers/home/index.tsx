import { Col, Row } from 'antd'

import Banner from './banner'
import Partner from './partner'
import Community from './community'
import Vision from './vision'

const Home = () => {
  return (
    <Row gutter={[16, { xs: 48, sm: 48, md: 96, lg: 96 }]}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <Vision />
      </Col>
      <Col span={24}>
        <Partner />
      </Col>
      <Col span={24}>
        <Community />
      </Col>
    </Row>
  )
}

export default Home
