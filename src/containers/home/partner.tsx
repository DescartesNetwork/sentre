import { Card, Col, Image, Row } from 'antd'

import { Coin98, Solana } from 'static/images'

const Partner = () => {
  return (
    <Card className="partner-card shadowed" bordered={false}>
      <Row gutter={[32, 36]} justify="center" align="middle">
        {[Solana, Coin98].map((elm, index) => {
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
