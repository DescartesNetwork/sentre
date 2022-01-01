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
    <Row
      gutter={[0, 35]}
      align="middle"
      className="ecosystem"
      justify="center"
      id="eco"
    >
      <Col>
        <Row gutter={[0, 16]}>
          <Typography.Title level={1} className="title">
            Ecosystem
          </Typography.Title>
          <Col span={24}>
            <Typography.Text type="secondary" className="description">
              Empowering DeFi Users & Developers
            </Typography.Text>
          </Col>
        </Row>
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
