import { Card, Col, Image, Row, Typography } from 'antd'

import { Coin98, Solana, GateIO } from 'static/images'

const Partner = () => {
  return (
    <Card className="partner-card shadowed" bordered={false} id="partners">
      <Row gutter={[32, 36]} justify="center" align="middle">
        <Col span={24}>
          <Row gutter={16}>
            <Col span={24}>
              <Typography.Title level={2} className="partner-card_title">
                Blockchain and Our partners
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Text type="secondary" className="description">
                Trusted by the best. Top investors make our brand.
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        {[Solana, Coin98, GateIO].map((elm, index) => {
          return (
            <Col xs={24} sm={8} key={index} style={{ textAlign: 'center' }}>
              <Image preview={false} src={elm} className="logo" />
            </Col>
          )
        })}
      </Row>
    </Card>
  )
}
export default Partner
