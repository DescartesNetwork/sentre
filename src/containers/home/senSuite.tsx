import { Button, Col, Image, Row, Typography } from 'antd'
import RowSpaceVertical from './components/rowSpaceVertical'

import { ballBluePng, senSuite } from 'static/images/systems'

const SenSuite = () => {
  return (
    <Row
      className="sen-suite"
      gutter={[68, 68]}
      style={{ textAlign: 'center' }}
      id="sen-suite"
    >
      <Col span={24} className="title">
        <Image className="ball-blue" src={ballBluePng} preview={false} />
        <RowSpaceVertical
          title={
            <Typography.Title level={1}>
              The Sen <span style={{ color: '#F9575E' }}>Suite</span>
            </Typography.Title>
          }
          description="The limit breaker for projects on Solana."
        />
      </Col>
      <Col span={24}>
        <Image src={senSuite} preview={false} />
      </Col>
      <Col span={24}>
        <Button type="ghost">Read more</Button>
      </Col>
    </Row>
  )
}

export default SenSuite
