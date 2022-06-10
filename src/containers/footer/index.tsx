import { Row, Col, Typography, Grid, Button, Space } from 'antd'
import Brand from 'components/brand'

import { DOCUMENTS, NAVIGATION, SOCIALS } from 'constant'

const Footer = () => {
  const { sm } = Grid.useBreakpoint() || {}

  const handleNavigation = (id: string) => {
    if (!id) return
    if (id.startsWith('https')) return window.open(id, '_blank')
    const yOffset = -100 //88px that the height of header
    const el = document.getElementById(`${id}`)!
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <div className="footer">
      <Row
        gutter={[12, 12]}
        className="body-content footer-content"
        justify="space-between"
      >
        <Col className="brand" xs={24} md={12}>
          <Row gutter={[16, 16]} align="bottom">
            <Col span={24}>
              <Brand
                style={{ height: 24, cursor: 'pointer' }}
                lite={!sm}
                darkTheme={true}
              />
            </Col>
            <Col span={24}>
              <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                © 2022, All Rights Reserved
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Row gutter={[64, 64]} justify="space-between">
            <Col span={8}>
              <Space
                style={{ cursor: 'pointer' }}
                size={12}
                direction="vertical"
              >
                <Button
                  className="footer-item"
                  style={{ marginLeft: -17 }}
                  type="text"
                >
                  Navigation
                </Button>
                {NAVIGATION.map((item) => (
                  <Typography.Text
                    onClick={() => handleNavigation(item.route)}
                    className="footer-item"
                    key={item.route}
                  >
                    {item.title}
                  </Typography.Text>
                ))}
              </Space>
            </Col>
            <Col span={8}>
              <Space
                style={{ cursor: 'pointer' }}
                size={12}
                direction="vertical"
              >
                <Button
                  className="footer-item"
                  style={{ marginLeft: -17 }}
                  type="text"
                >
                  Documents
                </Button>
                {DOCUMENTS.map((item) => (
                  <Typography.Text
                    onClick={() => window.open(item.src, '_blank')}
                    className="footer-item"
                    key={item.title}
                  >
                    {item.title}
                  </Typography.Text>
                ))}
              </Space>
            </Col>
            <Col span={8}>
              <Space
                style={{ cursor: 'pointer' }}
                size={12}
                direction="vertical"
              >
                <Button
                  className="footer-item"
                  style={{ marginLeft: -17 }}
                  type="text"
                >
                  Social
                </Button>
                {SOCIALS.map((social) => (
                  <Typography.Text
                    onClick={() => window.open(social.src, '_blank')}
                    className="footer-item"
                    key={social.src}
                  >
                    {social.title}
                  </Typography.Text>
                ))}
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default Footer
