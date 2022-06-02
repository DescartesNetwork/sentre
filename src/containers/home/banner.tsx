import { Row, Col, Typography, Image, Button, Grid, Space } from 'antd'
import { BgHero, Square, SquareBlur } from 'static/images/index'
import Icon from 'components/icon'

import { SOCIALS } from 'containers/footer'
import { SENTRE_URL } from 'containers/header'

const DISABLE = {
  display: 'none',
}

const Banner = () => {
  const { xl } = Grid.useBreakpoint()

  return (
    <Row
      gutter={[12, { xs: 48, sm: 24, md: 24, lg: 24 }]}
      align="middle"
      className="banner"
      id="home"
    >
      <Col
        xl={{ span: 13, order: 1 }}
        lg={{ span: 12, order: 1 }}
        sm={{ span: 12, order: 1 }}
        xs={{ span: 24, order: 2 }}
        className="right-content"
      >
        <Row gutter={[16, { xs: 24, sm: 29, md: 40, lg: 40 }]}>
          <Col span={24}>
            <Row gutter={[16, { xs: 16, sm: 20, md: 27, lg: 27 }]}>
              <Col span={24}>
                <Typography.Title level={1} className="title">
                  <span className="title-spec">The DApp Store</span> For all
                  Things <span className="gradient-text">Solana</span>
                </Typography.Title>
                <Image
                  preview={false}
                  src={Square}
                  style={!xl ? DISABLE : {}}
                  className="banner-icon"
                />
              </Col>
              <Col span={24} style={{ position: 'relative' }}>
                <Typography.Text type="secondary" className="description">
                  Trade on Sen Hub, build on Sentre, and send your project to
                  the moon with Sen Suite.
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={10} lg={8}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => window.open(SENTRE_URL, '_blank')}
                >
                  Start building
                </Button>
              </Col>
              <Col>
                <Space size={20}>
                  {SOCIALS.map((social, idx) => (
                    <Icon
                      style={{
                        color: '#7A7B85',
                        fontSize: 20,
                        cursor: 'pointer',
                      }}
                      name={social.icon}
                      onClick={() => window.open(social.src, '_blank')}
                      key={idx}
                    />
                  ))}
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col span={24} className="banner-img">
          <Image preview={false} src={SquareBlur} />
        </Col>
      </Col>
      <Col
        xl={{ span: 11, order: 2 }}
        lg={{ span: 12, order: 2 }}
        sm={{ span: 12, order: 2 }}
        xs={{ span: 24, order: 1 }}
        style={{ textAlign: 'right' }}
      >
        <Image preview={false} src={BgHero} />
      </Col>
    </Row>
  )
}
export default Banner
