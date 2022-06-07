import { useSelector } from 'react-redux'

import { Card, Col, Image, Row, Space, Typography } from 'antd'

import { MoonMapState } from 'constant'
import { mmAccelerationPng, mmN2DarkSvg, mmN2Svg } from 'static/images/systems'
import { AppState } from 'store'

const IMAGE_NUMBER = {
  dark: mmN2DarkSvg,
  light: mmN2Svg,
}

type AccelerationProps = { isExpand?: boolean }
export const Acceleration = ({ isExpand = false }: AccelerationProps) => {
  const theme = useSelector((state: AppState) => state.ui.theme)
  const width = useSelector((state: AppState) => state.ui.width)

  const indexImg = IMAGE_NUMBER[theme]
  const mobileScreen = width < 768
  const imgNumMaxW = mobileScreen ? 60 : 95
  const imgMaxW = isExpand ? 250 : 200

  return (
    <Row className="wrap-mm-content" align="bottom" wrap={mobileScreen}>
      <Col flex="auto" className={isExpand ? 'h-full' : ''}>
        {isExpand ? (
          <Space direction="vertical" align="start">
            <Typography.Title level={5}>3. Acceleration</Typography.Title>
            <Space direction="vertical">
              <Typography.Text style={{ fontSize: 16 }}>
                The <strong>‘Acceleration’</strong> era starts in 2022 with the
                anticipated birth of <strong>Sen Suite</strong> - A collection
                of five solutions to aching problems that Solana projects are
                trying to solve. You will find the answers on how to leverage
                your funds, increase your TVL, save time and fees on your
                marketing activities, manage your project in a true
                decentralized fashion, and keep your private transactions from
                privy eyes on the blockchain.
              </Typography.Text>
              <Typography.Text style={{ fontSize: 16 }}>
                Coupled with our new business model and refreshed token
                utilities, Sentre Protocol aims to become{' '}
                <strong>
                  the first Acceleration Platform for newly launched projects
                </strong>{' '}
                on the Solana blockchain - helping small projects grow the way
                we have always been doing since even before the Foundation.
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
              Acceleration
            </Typography.Title>
          </Space>
        )}
      </Col>
      {mobileScreen && isExpand ? null : (
        <Col xs={24} md={12} className="moon-map-img">
          <Image
            style={{ maxWidth: imgMaxW }}
            src={mmAccelerationPng}
            preview={false}
          />
        </Col>
      )}
    </Row>
  )
}

type CardAccelerationProps = { onClick: (type: string) => void }
const CardAcceleration = ({ onClick }: CardAccelerationProps) => {
  return (
    <Card
      bordered={false}
      style={{
        borderRadius: '0 0 16px 0',
        height: '100%',
        cursor: 'pointer',
        boxShadow: 'unset',
        overflow: 'hidden',
      }}
      bodyStyle={{ height: '100%', padding: '24px 0 0 24px' }}
      onClick={() => onClick(MoonMapState.acceleration)}
    >
      <Acceleration />
    </Card>
  )
}

export default CardAcceleration
