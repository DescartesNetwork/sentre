import { Row, Col, Typography, Image, Button, Grid } from 'antd'

import { BgHero, Square } from 'static/images/index'

const SENTRE_URL = 'https://app.sentre.io'
const COLLECT_REWARDS_URL = ''

const Banner = () => {
  const { xl } = Grid.useBreakpoint() || {}
  const disable = {
    display: 'none',
  }

  return (
    <Row
      gutter={[12, { xs: 48, sm: 24, md: 24, lg: 24 }]}
      align="middle"
      className="banner"
    >
      <Col
        xl={{ span: 12, order: 1 }}
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
                  An Open Liquidity Protocol on{' '}
                  <strong className="gradient-text">Solana</strong>
                </Typography.Title>
              </Col>
              <Col span={24} style={{ position: 'relative' }}>
                <Typography.Text type="secondary" className="description">
                  The #1 AMM built on Solana to enrich the proficiency of DeFi
                  ecosystem.
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[16, 16]}>
              <Col xs={12} sm={12} md={12} lg={8}>
                <Button
                  type="primary"
                  size="middle"
                  block
                  onClick={() => window.open(SENTRE_URL, '_blank')}
                >
                  Launch Sentre
                </Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8}>
                <Button
                  size="middle"
                  block
                  onClick={() => window.open(COLLECT_REWARDS_URL, '_blank')}
                >
                  Collect Rewards
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Image preview={false} src={Square} style={!xl ? disable : {}} />
      </Col>
      <Col
        xl={{ span: 12, order: 2 }}
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
