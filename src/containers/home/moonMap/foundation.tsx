import { Card, Col, Image, Row, Space, Typography } from 'antd'
import { MoonMapState } from 'constant'
import { mmFoundationPng, mmN1Svg } from 'static/images/systems'

type FoundationProps = { isExpand?: boolean }
export const Foundation = ({ isExpand = false }: FoundationProps) => {
  return (
    <Row style={{ height: '100%' }} align="bottom" wrap={false}>
      <Col flex="auto">
        {isExpand ? (
          <Space
            style={{ textAlign: 'start' }}
            direction="vertical"
            align="start"
          >
            <Typography.Title level={5}>1. Foundation</Typography.Title>
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
            <Image src={mmN1Svg} preview={false} />
            <Typography.Title level={5}>Foundation</Typography.Title>
          </Space>
        )}
      </Col>
      <Col span={12} style={{ textAlign: 'end' }}>
        <Image
          style={{ maxWidth: 200 }}
          src={mmFoundationPng}
          preview={false}
        />
      </Col>
    </Row>
  )
}

type CardFoundationProps = { onClick: (type: string) => void }
const CardFoundation = ({ onClick }: CardFoundationProps) => {
  return (
    <Card
      bordered={false}
      style={{
        borderRadius: 0,
        height: '100%',
        cursor: 'pointer',
        boxShadow: 'unset',
      }}
      bodyStyle={{ height: '100%' }}
      onClick={() => onClick(MoonMapState.foundation)}
    >
      <Foundation />
    </Card>
  )
}

export default CardFoundation
