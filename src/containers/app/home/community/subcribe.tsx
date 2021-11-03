import { Button, Col, Input, Row } from 'antd'

const Subcribe = () => {
  return (
    <Row gutter={[12, 12]}>
      <Col span={24} flex="auto">
        <Input placeholder="Enter your address" type="primary" />
      </Col>
      <Col xs={24} lg={6}>
        <Button type="primary" size="middle" block>
          Subcribe
        </Button>
      </Col>
    </Row>
  )
}

export default Subcribe
