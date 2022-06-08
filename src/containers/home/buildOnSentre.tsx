import { useSelector } from 'react-redux'

import { Button, Col, Row, Typography, Image } from 'antd'

import { LITE_PAPER, SENTRE_URL } from 'constant'
import { cubePng } from 'static/images/systems'
import { AppState } from 'store'

const BuildOnSentre = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  const isMobile = width < 575
  return (
    <Row gutter={[32, 32]} className="build-on-sentre">
      <Col span={24} className="title">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Image src={cubePng} preview={false} />
            <Typography.Title style={{ color: '#F4F4F5' }} level={1}>
              Build on <span style={{ color: '#F9575E' }}>Sentre</span>
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Typography.Text
              type="secondary"
              style={{ color: '#F4F4F5', fontSize: isMobile ? 16 : 20 }}
            >
              Tired of using expensive services, doing business, and finding
              funds for your project?
              <br /> Build FOR FREE on Sentre and launch your own app in a day!
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={[12, 12]} justify="center">
          <Col span={isMobile ? 12 : undefined}>
            <Button
              block
              size="large"
              type="primary"
              onClick={() => window.open(SENTRE_URL, '_blank')}
            >
              Open Senhub
            </Button>
          </Col>

          <Col span={isMobile ? 12 : undefined}>
            <Button
              block
              type="ghost"
              style={{ color: '#E9E9EB' }}
              onClick={() => window.open(LITE_PAPER, '_blank')}
              size="large"
            >
              How to build
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default BuildOnSentre
