import { Row, Col, Space, Typography } from 'antd'
import { Brand, Icon } from 'static/theme'

const Footer = () => {
  return (
    <Row gutter={[16, 16]} className="footer" align="middle">
      <Col span={24} flex="auto">
        <Space>
          <Brand href="/home" />
          <Typography.Text type="secondary" style={{ fontSize: 12 }}>
            © 2020, All Rights Reserved
          </Typography.Text>
        </Space>
      </Col>
      <Col>
        <Space size={24} className="ico-social">
          {['logo-medium', 'paper-plane', 'logo-twitter', 'document'].map(
            (e, i) => {
              return <Icon name={e} key={e + i} />
            },
          )}
        </Space>
      </Col>
    </Row>
  )
}
export default Footer
