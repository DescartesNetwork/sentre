import { useSelector } from 'react-redux'

import { Card, Col, Image, Row, Space, Typography } from 'antd'

import { MoonMapState } from 'constant'
import { mmDappStorePng, mmN2DarkSvg, mmN2Svg } from 'static/images/systems'
import { AppState } from 'store'

const IMAGE_NUMBER = {
  dark: mmN2DarkSvg,
  light: mmN2Svg,
}

type DAppStoreProps = { isExpand?: boolean }
export const DAppStore = ({ isExpand = false }: DAppStoreProps) => {
  const theme = useSelector((state: AppState) => state.ui.theme)
  const width = useSelector((state: AppState) => state.ui.width)

  const indexImg = IMAGE_NUMBER[theme]
  const mobileScreen = width < 768
  const imgNumMaxW = mobileScreen ? 60 : 95

  return (
    <Row className="wrap-mm-content" align="bottom" wrap={mobileScreen}>
      <Col flex="auto" className={isExpand ? 'h-full' : ''}>
        {isExpand ? (
          <Space direction="vertical" align="start">
            <Typography.Title level={5}>2. DAppStore</Typography.Title>
            <Space direction="vertical">
              <Typography.Text style={{ fontSize: 16 }}>
                In the <strong>'DApp Store'</strong> Era, we will see the bloom
                of hundreds of DApps integrated into Sen Hub. By the time we
                reach this, Sentre Protocol will have become the true{' '}
                <strong>DApp Store for all things Solana</strong> - be it DeFi,
                GameFi, or PriFi products.
              </Typography.Text>
              <Typography.Text style={{ fontSize: 16 }}>
                Play your game, earn your tokens or NFTs, then trade with less
                fees or farm for profit on the same platform. Cover your
                sensitive transactions from privy eyes if you need. Participate
                in shaping the future of the Sentre ecosystem through your own
                customized DAO. Everything is in your hands - our community of
                devoted and talented Sentizens, from users to developers.
              </Typography.Text>
            </Space>
          </Space>
        ) : (
          <Space align="baseline">
            <Image
              style={{ maxWidth: imgNumMaxW }}
              src={indexImg}
              preview={false}
            />
            <Typography.Title
              level={5}
              style={{ position: 'absolute', left: 0, bottom: 32 }}
            >
              DApp Store
            </Typography.Title>
          </Space>
        )}
      </Col>
      {mobileScreen && isExpand ? null : (
        <Col xs={24} md={12} className="moon-map-img">
          <Image
            style={{ maxWidth: 200 }}
            src={mmDappStorePng}
            preview={false}
          />
        </Col>
      )}
    </Row>
  )
}

type CardDAppStoreProps = { onClick: (type: string) => void }
const CardDAppStore = ({ onClick }: CardDAppStoreProps) => {
  const width = useSelector((state: AppState) => state.ui.width)

  const mobileScreen = width < 768
  const boderRadius = mobileScreen ? '0 0 0 16px' : '0 16px 0 0'

  return (
    <Card
      bordered={false}
      style={{
        borderRadius: boderRadius,
        height: '100%',
        cursor: 'pointer',
        boxShadow: 'unset',
      }}
      bodyStyle={{ height: '100%', padding: '24px 0 0 24px' }}
      onClick={() => onClick(MoonMapState.dAppStore)}
    >
      <DAppStore />
    </Card>
  )
}

export default CardDAppStore
