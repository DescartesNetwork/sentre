import { useSelector } from 'react-redux'

import { Row, Col, Space, Typography, Grid } from 'antd'

import Icon from 'components/icon'
import Brand from 'components/brand'
import { RootState } from 'store'

export const SOCIALS = [
  { icon: 'paper-plane', src: 'https://t.me/Sentre' },
  { icon: 'logo-twitter', src: 'https://twitter.com/SentreProtocol' },
  { icon: 'logo-discord', src: 'https://discord.com/invite/VD7UBAp2HN' },
  { icon: 'mail', src: 'mailto: hi@sentre.io' },
]

const Footer = () => {
  const { sm, xs } = Grid.useBreakpoint() || {}
  const { theme } = useSelector((state: RootState) => state.theme)

  return (
    <Row className="footer" align="middle" justify="space-between">
      <Col span={12}>
        <Row gutter={[8, 4]} align="bottom">
          <Col sm={8} md={6} lg={5} xl={4}>
            <Brand
              style={{ height: 24, cursor: 'pointer' }}
              lite={!sm}
              darkTheme={theme === 'dark'}
            />
          </Col>
          <Col md={12} xs={24} sm={16}>
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              © 2022, All Rights Reserved
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col>
        <Space className="ico-social" size={xs ? 20 : 24}>
          {SOCIALS.map((social, index) => {
            return (
              <Icon
                name={social.icon}
                key={social.icon}
                style={{ fontSize: xs ? 18 : 24, color: '#7A7B85' }}
                onClick={() => window.open(social.src, '_blank')}
              />
            )
          })}
        </Space>
      </Col>
    </Row>
  )
}
export default Footer
