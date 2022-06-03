import { Col, Row, Typography, Image } from 'antd'
import RowSpaceVertical from './components/rowSpaceVertical'

import { MiningToken, RevenueSharing, utilityBG } from 'static/images/systems'
const Utilities = () => {
  return (
    <Row
      gutter={[
        { xs: 32, sm: 32, md: 32, lg: 100 },
        { xs: 32, sm: 32, md: 32, lg: 100 },
      ]}
      className="body-content utilities"
      id="utilities"
    >
      <Col className="title" span={24} style={{ textAlign: 'center' }}>
        <Image src={utilityBG} preview={false} />
        <RowSpaceVertical
          title={
            <Typography.Title level={1}>
              SNTR <span style={{ color: '#F9575E' }}>Utilities</span>
            </Typography.Title>
          }
          description="The asset growth pack for SNTR Holders."
        />
      </Col>
      <Col span={24}>
        <Row
          gutter={[
            { xs: 32, sm: 32, md: 48, lg: 100 },
            { xs: 32, sm: 32, md: 48, lg: 100 },
          ]}
          align="middle"
        >
          <Col xs={{ span: 24, order: 1 }} md={{ span: 12, order: 1 }}>
            <Image src={RevenueSharing} preview={false} />
          </Col>
          <Col xs={{ span: 24, order: 2 }} md={{ span: 12, order: 2 }}>
            <RowSpaceVertical
              title={
                <Typography.Text style={{ fontWeight: 600, fontSize: 38 }}>
                  Revenue Sharing
                </Typography.Text>
              }
              description="Earn your grand share of protocol fee, only by holding SNTR."
              fontSize={16}
            />
          </Col>
          <Col xs={{ span: 24, order: 4 }} md={{ span: 12, order: 3 }}>
            <RowSpaceVertical
              title={
                <Typography.Text style={{ fontWeight: 600, fontSize: 38 }}>
                  Mining Tokens
                </Typography.Text>
              }
              description="Own our new project tokens before anyone else. Simply lock or stake SNTR to start mining."
              fontSize={16}
            />
          </Col>
          <Col xs={{ span: 24, order: 3 }} md={{ span: 12, order: 4 }}>
            <Image src={MiningToken} preview={false} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Utilities
