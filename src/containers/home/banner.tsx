import { Row, Col, Typography, Image, Button, Grid } from 'antd'
import { BgHero, Square, SquareBlur } from 'static/images/index'

const SENTRE_URL = 'https://app.sentre.io'

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
                  An Open Liquidity Protocol on{' '}
                  <strong className="gradient-text">Solana</strong>
                </Typography.Title>
              </Col>
              <Col span={24} style={{ position: 'relative' }}>
                <Typography.Text type="secondary" className="description">
                  All-in-One Solana Open Platform with DApps Store and Universal
                  Protocol for Liquidity.
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={10} lg={8}>
            <Button
              type="primary"
              size="large"
              block
              onClick={() => window.open(SENTRE_URL, '_blank')}
            >
              Launch App
            </Button>
          </Col>
        </Row>
        <Col span={24} className="banner-img">
          <Image preview={false} src={SquareBlur} />
        </Col>
        <Image preview={false} src={Square} style={!xl ? DISABLE : {}} />
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
