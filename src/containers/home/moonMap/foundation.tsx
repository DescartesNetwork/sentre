import { useSelector } from 'react-redux'

import { Card, Col, Image, Row, Space, Typography } from 'antd'

import { MoonMapState } from 'constant'
import {
  mmFoundationDarkPng,
  mmFoundationPng,
  mmN1DarkSvg,
  mmN1Svg,
} from 'static/images/systems'
import { AppState } from 'store'

const IMAGE_NUMBER = {
  dark: mmN1DarkSvg,
  light: mmN1Svg,
}
const IMAGE_ROCKET = {
  dark: mmFoundationDarkPng,
  light: mmFoundationPng,
}

type FoundationProps = { isExpand?: boolean }
export const Foundation = ({ isExpand = false }: FoundationProps) => {
  const theme = useSelector((state: AppState) => state.ui.theme)
  const width = useSelector((state: AppState) => state.ui.width)

  const imgRocket = IMAGE_ROCKET[theme]
  const indexImg = IMAGE_NUMBER[theme]
  const mobileScreen = width < 768
  const imgNumMaxW = mobileScreen ? 60 : 95
  const imgMaxW = mobileScreen ? 140 : 200

  return (
    <Row className="wrap-mm-content" align="bottom" wrap={mobileScreen}>
      <Col flex="auto" className={isExpand ? 'h-full' : ''}>
        {isExpand ? (
          <Space direction="vertical" align="start">
            <Typography.Title level={5}>1. Foundation</Typography.Title>
            <Space direction="vertical">
              <Typography.Text style={{ fontSize: 16 }}>
                The <strong>'Foundation'</strong> Era started back in late 2020
                with the birth of our four fundamental pillars for users. Invest
                for profit on Sen LP, trade with less fees on Sen Swap, optimize
                liquidity on Sen Farming, and manage your wealth on Sen Assets.
              </Typography.Text>
              <Typography.Text style={{ fontSize: 16 }}>
                Along with the four pillars, Sentre developed Senhub as the core
                product for developers. Get free knowledge from Sen Academy, use
                available liquidity on the ecosystem, integrate your DApp on Sen
                Store, and have quality Sentizens use your DApps everyday. This
                era ended with the full release of all above functions.
              </Typography.Text>
            </Space>
          </Space>
        ) : (
          <Space align="baseline" className="wrap-img-nummber">
            <Image
              style={{ maxWidth: imgNumMaxW }}
              src={indexImg}
              preview={false}
            />
            <Typography.Title
              level={5}
              style={{ position: 'absolute', left: 0, bottom: 32 }}
            >
              Foundation
            </Typography.Title>
          </Space>
        )}
      </Col>
      {mobileScreen && isExpand ? null : (
        <Col xs={24} md={12} className="moon-map-img">
          <Image
            style={{ maxWidth: imgMaxW }}
            src={imgRocket}
            preview={false}
          />
        </Col>
      )}
    </Row>
  )
}

type CardFoundationProps = { onClick: (type: string) => void }
const CardFoundation = ({ onClick }: CardFoundationProps) => {
  const width = useSelector((state: AppState) => state.ui.width)

  const mobileScreen = width < 768
  const boderRadius = mobileScreen ? '16px 16px 0 0' : '16px 0 0 16px'

  return (
    <Card
      bordered={false}
      className="card-hoverable"
      style={{
        borderRadius: boderRadius,
        height: '100%',
        cursor: 'pointer',
        boxShadow: 'unset',
      }}
      bodyStyle={{ height: '100%', padding: '24px 0 0 24px' }}
      onClick={() => onClick(MoonMapState.foundation)}
    >
      <Foundation />
    </Card>
  )
}

export default CardFoundation
