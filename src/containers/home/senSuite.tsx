import { useSelector } from 'react-redux'

import { Button, Col, Image, Row, Typography } from 'antd'
import RowSpaceVertical from './components/rowSpaceVertical'
import SenSuiteAnimation from 'components/animate/senSuiteAnimation'

import {
  ballBluePng,
  baseImgPng,
  bgSsCloudSvg,
  img1LbSvg,
  img1Svg,
  img2LbSvg,
  img2Svg,
  img3LbSvg,
  img3Svg,
  img4LbSvg,
  img4Svg,
  img5LbSvg,
  img5Svg,
} from 'static/images/systems'
import { AppState } from 'store'

const LIST_IMGS = [
  { img: img1Svg, imgLabel: img1LbSvg },
  { img: img2Svg, imgLabel: img2LbSvg },
  { img: img3Svg, imgLabel: img3LbSvg },
  { img: img4Svg, imgLabel: img4LbSvg },
  { img: img5Svg, imgLabel: img5LbSvg },
]

const SenSuite = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  const isMobile = width < 768

  return (
    <Row
      className="sen-suite"
      gutter={[24, 24]}
      style={{ textAlign: 'center' }}
      id="sen-suite"
    >
      <Col span={24} className="title">
        <Image className="ball-blue" src={ballBluePng} preview={false} />
        <RowSpaceVertical
          title={
            <Typography.Title level={1}>
              Sen <span style={{ color: '#F9575E' }}>Suite</span>
            </Typography.Title>
          }
          description="The limit breaker for projects on Solana."
        />
      </Col>
      <Col span={24}>
        <SenSuiteAnimation
          items={LIST_IMGS}
          baseImg={baseImgPng}
          isMobile={isMobile}
        />
      </Col>
      <Col span={24} className="bg-ss-cloud">
        <Image src={bgSsCloudSvg} preview={false} />
      </Col>
      <Col span={24}>
        <Button className="btn-readmore" type="ghost">
          Read more
        </Button>
      </Col>
    </Row>
  )
}

export default SenSuite
