import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Button, Card, Col, Row, Space, Typography, Image } from 'antd'
import RowSpaceVertical from '../components/rowSpaceVertical'

import { AppState } from 'store'

import { LIST_PARTNER } from 'constant'
import { imgSquareBlurPng } from 'static/images/systems'

const PartnerCard = ({
  logo,
  description,
}: {
  logo: string
  description: string
}) => (
  <Card bordered={false} className="partner-card">
    <Row
      gutter={[
        { sm: 16, xs: 16, md: 24, lg: 24 },
        { sm: 16, xs: 16, md: 24, lg: 24 },
      ]}
    >
      <Col span={24}>
        <Image src={logo} preview={false} />
      </Col>
      <Col span={24}>
        <Typography.Text type="secondary">{description}</Typography.Text>
      </Col>
    </Row>
  </Card>
)

const Partner = () => {
  const theme = useSelector((state: AppState) => state.ui.theme)
  const history = useHistory()
  return (
    <Row
      className="body-content partner"
      gutter={[64, 64]}
      style={{ textAlign: 'center' }}
      id="partners"
    >
      <Col span={24} className="title">
        <Image src={imgSquareBlurPng} preview={false} />
        <Space direction="vertical" size={32}>
          <RowSpaceVertical
            title={
              <Typography.Title level={1}>
                Become Our <span style={{ color: '#F9575E' }}>Partner</span>
              </Typography.Title>
            }
            description="Join us on our journey to the moon!"
          />
          <Button
            onClick={() => history.push('./partner')}
            type="primary"
            size="large"
          >
            Ping us now
          </Button>
        </Space>
      </Col>
      <Col span={24}>
        <Row
          gutter={[
            { sm: 16, xs: 16, md: 24, lg: 24 },
            { sm: 16, xs: 16, md: 24, lg: 24 },
          ]}
        >
          {LIST_PARTNER[theme].map(({ logo, description }, idx) => (
            <Col xs={24} sm={12} md={8} key={idx}>
              <PartnerCard logo={logo} description={description} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}
export default Partner
