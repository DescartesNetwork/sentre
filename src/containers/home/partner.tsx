import { useSelector } from 'react-redux'

import { Card, Col, Image, Row, Typography } from 'antd'

import { AppState } from 'store'
import {
  darkLogoSolSvg,
  lightLogoSolSvg,
  logoCoin98Png,
  logoGateSvg,
} from 'static/images/logos'

const LOGO_BY_THEME = {
  dark: darkLogoSolSvg,
  light: lightLogoSolSvg,
}

const Partner = () => {
  const { theme } = useSelector((state: AppState) => state.ui)
  const Solana = LOGO_BY_THEME?.[theme]

  return (
    <Card className="partner-card shadowed" bordered={false} id="partners">
      <Row gutter={[32, 36]} justify="center" align="middle">
        <Col span={24}>
          <Row gutter={16}>
            <Col span={24}>
              <Typography.Title level={2} className="partner-card_title">
                The Blockchain & Our partners
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Text type="secondary" className="sub-title">
                Trusted by the best. Top investors make our brand.
              </Typography.Text>
            </Col>
          </Row>
        </Col>
        {[Solana, logoCoin98Png, logoGateSvg].map((elm, index) => {
          return (
            <Col xs={24} sm={8} key={index} style={{ textAlign: 'center' }}>
              <Image preview={false} src={elm} className="logo" />
            </Col>
          )
        })}
      </Row>
    </Card>
  )
}
export default Partner
