import { useSelector } from 'react-redux'

import { Card, Col, Image, Row, Space, Typography } from 'antd'

import { MoonMapState } from 'constant'
import { mmAccelerationPng, mmN3DarkSvg, mmN3Svg } from 'static/images/systems'
import { AppState } from 'store'

const IMAGE_NUMBER = {
  dark: mmN3DarkSvg,
  light: mmN3Svg,
}

type AccelerationProps = { isExpand?: boolean }
export const Acceleration = ({ isExpand = false }: AccelerationProps) => {
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
            <Typography.Title level={5}>3. Acceleration</Typography.Title>
            <Typography.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Where does it come from? Contrary to popular belief,
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin
              words, consectetur, from a Lorem Ipsum passage, and going through
              the cites of the word in classical literature, discovered the
            </Typography.Text>
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
              Acceleration
            </Typography.Title>
          </Space>
        )}
      </Col>
      {mobileScreen && isExpand ? null : (
        <Col xs={24} md={12} className="moon-map-img">
          <Image
            style={{ maxWidth: 200 }}
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
