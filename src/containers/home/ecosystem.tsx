import { useState, useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { Row, Col, Typography, Image, Grid } from 'antd'
import { RootState } from 'store'

import {
  BallBlue,
  BallRed,
  EcoDark,
  EcoDarkMobile,
  EcoLight,
  EcoLightMobile,
} from 'static/images'

const DISABLE = {
  display: 'none',
}

const Ecosystem = () => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const { sm } = Grid.useBreakpoint() || {}

  const imageMobile = isDarkMode ? EcoDarkMobile : EcoLightMobile
  const imageDesktop = isDarkMode ? EcoDark : EcoLight

  const getEcosystemSrc = useMemo(() => {
    if (!sm) return imageMobile

    return imageDesktop
  }, [sm, imageMobile, imageDesktop])

  useEffect(() => {
    setIsDarkMode(theme === 'dark')
  }, [theme])

  return (
    <Row align="middle" className="ecosystem" id="eco">
      <Col span={24}>
        <Typography.Title level={2} className="title">
          Ecosystem
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Text type="secondary" className="description">
          Empowering DeFi Users & Developers
        </Typography.Text>
      </Col>
      <Col span={24}>
        <Image preview={false} src={getEcosystemSrc} />
      </Col>
      <Col span={24} className="ecosystem_ball-blue">
        <Image style={!sm ? DISABLE : {}} preview={false} src={BallBlue} />
      </Col>
      <Col span={24} className="ecosystem_ball-red">
        <Image style={!sm ? DISABLE : {}} preview={false} src={BallRed} />
      </Col>
    </Row>
  )
}

export default Ecosystem
