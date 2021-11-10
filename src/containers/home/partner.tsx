import { Card, Col, Image, Row } from 'antd'

import { Coin98, Solana, Slope } from 'static/images'

const Partner = () => {
  return (
    <Card className="partner-card shadowed" bordered={false}>
      <Row gutter={[32, 36]} justify="center" align="middle">
        {[Coin98, Solana, Slope].map((elm, index) => {
          return (
            <Col
              xs={24}
              sm={8}
              md={8}
              lg={8}
              key={elm}
              style={{ textAlign: 'center' }}
            >
              <Image preview={false} src={elm} className="logo" />
            </Col>
          )
        })}
      </Row>
    </Card>
  )
}
export default Partner
