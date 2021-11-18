import { useSelector } from 'react-redux'

import { Row, Col, Space, Typography, Grid } from 'antd'

import Icon from 'components/icon'
import Brand from 'components/brand'
import { SOCIALS } from '../header'
import { RootState } from 'store'

const Footer = () => {
  const { sm } = Grid.useBreakpoint() || {}
  const {
    theme: { isDarkMode },
  } = useSelector((state: RootState) => state)

  return (
    <Row
      gutter={[16, 16]}
      className="footer"
      align="middle"
      justify="space-between"
    >
      <Col md={12} xs={24}>
        <Row gutter={[8, 0]} align="bottom">
          <Col>
            <Brand
              style={{ height: 24, cursor: 'pointer' }}
              lite={!sm}
              darkTheme={isDarkMode}
            />
          </Col>
          <Col md={12} xs={24}>
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              © 2021, All Rights Reserved
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col>
        <Space className="ico-social" size={24}>
          {SOCIALS.map((social, index) => {
            return (
              <Icon
                name={social.icon}
                key={social.icon}
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
