import { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { Row, Col, Typography, Image, Grid } from 'antd'
import { RootState } from 'store'

import {
  RoadmapLight,
  RoadmapDark,
  RoadmapLightMobile,
  RoadmapDarkMobile,
} from 'static/images'

const RoadMap = () => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const { sm } = Grid.useBreakpoint() || {}

  const imageMobile = isDarkMode ? RoadmapDarkMobile : RoadmapLightMobile
  const imageDesktop = isDarkMode ? RoadmapDark : RoadmapLight

  const getRoadmapImgSrc = useMemo(() => {
    if (!sm) return imageMobile

    return imageDesktop
  }, [sm, imageMobile, imageDesktop])

  useEffect(() => {
    setIsDarkMode(theme === 'dark')
  }, [theme])

  return (
    <Row gutter={[24, 48]} className="road-map" justify="center">
      <Col>
        <Typography.Title level={1}>Roadmap</Typography.Title>
      </Col>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Image src={getRoadmapImgSrc} preview={false} />
      </Col>
    </Row>
  )
}

export default RoadMap
