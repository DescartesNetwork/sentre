import { useSelector } from 'react-redux'

import { Row, Col, Space, Typography, Grid } from 'antd'

import Icon from 'components/icon'
import Brand from 'components/brand'
import { SOCIALS } from '../header'
import { RootState } from 'store'

const Footer = () => {
  const { sm } = Grid.useBreakpoint() || {}
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
