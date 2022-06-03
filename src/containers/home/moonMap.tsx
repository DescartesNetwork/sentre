import { Col, Row, Typography, Image } from 'antd'
import { emptyPng } from 'static/images/systems'
import RowSpaceVertical from './components/rowSpaceVertical'

const MoonMap = () => {
  return (
    <Row
      className="body-content partner"
      gutter={[64, 64]}
      style={{ textAlign: 'center' }}
      id="moon-map"
    >
      <Col span={24} className="title">
        <RowSpaceVertical
          title={
            <Typography.Title level={1}>
              The <span style={{ color: '#F9575E' }}>Moon</span> Map
            </Typography.Title>
          }
          description="Our Vision, Mission and Achievements through the eras."
        />
      </Col>
      <Col span={24}>
        <Row gutter={[12, 12]}>
          <Col span={12} style={{ height: '100%' }}>
            <Image height={653} src={emptyPng} preview={false} />
          </Col>
          <Col span={12}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Image src={emptyPng} preview={false} />
              </Col>
              <Col span={24}>
                <Image src={emptyPng} preview={false} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default MoonMap
