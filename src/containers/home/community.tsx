import { Card, Row, Col, Typography, Space, Image, Button } from 'antd'

import { Circle } from 'static/images/index'

const Community = () => {
  return (
    <Card className="community">
      <Row gutter={[16, { xs: 32, sm: 48, md: 48, lg: 48 }]} justify="center">
        <Col
          xl={{ span: 18 }}
          lg={{ span: 20 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Space
            size={16}
            direction="vertical"
            align="center"
            style={{ textAlign: 'center' }}
          >
            <Typography.Title style={{ margin: 0 }}>
              A global community
            </Typography.Title>
            <Typography.Title
              type="secondary"
              level={3}
              style={{ margin: 0, fontWeight: 400 }}
            >
              Learn more about Sentre, chat with the team, others in the
              community, and have your say in shaping the future of the Uniswap
              protocol.
            </Typography.Title>
          </Space>
        </Col>
        <Col
          xl={{ span: 10 }}
          lg={{ span: 16 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Button
            type="primary"
            onClick={() => window.open('mailto: hi@sentre.io')}
            block
          >
            Contact us
          </Button>
        </Col>
      </Row>
      <Image preview={false} src={Circle} />
    </Card>
  )
}
export default Community
