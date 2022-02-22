import { Card, Row, Col, Typography, Space, Image } from 'antd'
import IonIcon from 'components/icon'

import { Circle } from 'static/images/index'

const SOCIALS = [
  { icon: 'logo-telegram-color', src: 'https://t.me/Sentre' },
  { icon: 'logo-twitter-color', src: 'https://twitter.com/SentreProtocol' },
  { icon: 'logo-discord-color', src: 'https://discord.com/invite/VD7UBAp2HN' },
  { icon: 'logo-mail-color', src: 'mailto: hi@sentre.io' },
]

const Community = () => {
  return (
    <Card className="community" bordered={false} id="contact">
      <Row gutter={[16, { xs: 32, sm: 48, md: 48, lg: 48 }]} justify="center">
        <Col xl={{ span: 18 }} lg={{ span: 20 }} xs={{ span: 24 }}>
          <Space
            size={16}
            direction="vertical"
            align="center"
            style={{ textAlign: 'center' }}
          >
            <Typography.Title style={{ margin: 0 }}>
              A global community
            </Typography.Title>
            <Typography.Text type="secondary" className="description">
              Learn more about Sentre, chat with the team, others in the
              community, and have your say in shaping the future of the Sentre
              protocol.
            </Typography.Text>
          </Space>
        </Col>
        <Col
          xl={{ span: 10 }}
          lg={{ span: 16 }}
          xs={{ span: 24 }}
          style={{ textAlign: 'center' }}
        >
          <Space size={29}>
            {SOCIALS.map((social) => (
              <IonIcon
                name={social.icon}
                key={social.icon}
                style={{ fontSize: 35, cursor: 'pointer' }}
                onClick={() => window.open(social.src, '_blank')}
              />
            ))}
          </Space>
        </Col>
      </Row>
      <Image preview={false} src={Circle} />
    </Card>
  )
}
export default Community
