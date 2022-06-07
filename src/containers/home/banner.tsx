import { Row, Col, Typography, Image, Button, Grid, Space } from 'antd'
import Icon from 'components/icon'
import { SOCIALS, SENTRE_URL } from 'constant'
import { useSelector } from 'react-redux'

import {
  bgBannerDarkPng,
  bgBannerPng,
  imgSquareBlurPng,
  imgSquarePng,
} from 'static/images/systems'
import { AppState } from 'store'

const DISABLE = {
  display: 'none',
}
const BG_BANNER_IMG = {
  dark: bgBannerDarkPng,
  light: bgBannerPng,
}

const Banner = () => {
  const theme = useSelector((state: AppState) => state.ui.theme)
  const { xl } = Grid.useBreakpoint()

  const bgBanner = BG_BANNER_IMG[theme]

  return (
    <Row
      gutter={[12, { xs: 48, sm: 24, md: 24, lg: 24 }]}
      align="middle"
      className="banner body-content"
      id="home"
    >
      <Col
        xl={{ span: 13, order: 1 }}
        lg={{ span: 12, order: 1 }}
        sm={{ span: 12, order: 1 }}
        xs={{ span: 24, order: 2 }}
        className="right-content"
      >
        <Row gutter={[8, { xs: 16, sm: 21, md: 32, lg: 32 }]}>
          <Col span={24}>
            <Row gutter={[8, { xs: 8, sm: 12, md: 21, lg: 21 }]}>
              <Col span={24}>
                <Typography.Title level={1} className="title">
                  <span className="title-spec">The DApp Store</span> For All
                  Things <span className="gradient-text">Solana</span>
                </Typography.Title>
                <Image
                  preview={false}
                  src={imgSquarePng}
                  style={!xl ? DISABLE : {}}
                  className="banner-icon"
                />
              </Col>
              <Col
                span={24}
                style={{ position: 'relative', paddingRight: !!xl ? 24 : 4 }}
              >
                <Typography.Text type="secondary" className="description">
                  Trade on Sen Hub, build on Sentre, and send your project to
                  the moon with Sen Suite.
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col sm={12} xs={24} md={10} lg={8}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Button
                  block
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
          <Image preview={false} src={imgSquareBlurPng} />
        </Col>
      </Col>
      <Col
        xl={{ span: 11, order: 2 }}
        lg={{ span: 12, order: 2 }}
        sm={{ span: 12, order: 2 }}
        xs={{ span: 24, order: 1 }}
        style={{ textAlign: 'right' }}
      >
        <Image preview={false} src={bgBanner} />
      </Col>
    </Row>
  )
}
export default Banner
