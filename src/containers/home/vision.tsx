import { Row, Col, Typography, Image, List, Grid } from 'antd'
import IonIcon from 'components/icon'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { VisionDark, VisionLight } from 'static/images'
import { RootState } from 'store'

const data = [
  {
    description:
      'A decentralized hub where developers can inherit available liquidity to develop their dApps while users gain access to well-developed innovative apps that generate a high yield of profits.',
  },
  {
    description:
      'Furthermore, Sentre has been cherished with the hope of opening up a new market for investors/users with multiple sources of Liquidity.',
  },
  {
    description:
      'As a Safe Haven, DeFi users can leverage Sentre for 100 applications usage at one time rather than going to 100 individual apps. This network also solves liquidity bootstrapping concern.',
  },
]

const Vision = () => {
  const { sm } = Grid.useBreakpoint() || {}
  const { theme } = useSelector((state: RootState) => state.theme)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsDarkMode(theme === 'dark')
  }, [theme])

  return (
    <Row align="middle" className="vision" justify="center" id="vision">
      <Col>
        <Typography.Title level={1}>Vision</Typography.Title>
      </Col>
      <Col span={24}>
        <Row justify="center">
          <Col
            className={!sm ? 'subtitle-mobile' : 'subtitle'}
            style={{ textAlign: 'center' }}
          >
            <Typography.Text type="secondary" className="sub-title">
              Sentre’s vision is to create an{' '}
              <strong>All-in-One Solana Open Platform</strong> with dApps Store
              and Universal Protocol for Liquidity; altogether become a{' '}
              <strong>Safe Haven</strong> for DeFi developers and users.
            </Typography.Text>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row style={{ justifyContent: 'center' }}>
          <Col
            span={!sm ? 24 : 12}
            style={{ paddingRight: !sm ? 0 : '56px', order: !sm ? 2 : 1 }}
          >
            <List
              itemLayout="horizontal"
              dataSource={data}
              className="list"
              renderItem={(item) => (
                <List.Item className="list-item">
                  <List.Item.Meta
                    avatar={
                      <IonIcon
                        name="checkmark-circle"
                        style={{
                          color: '#F9575E',
                          width: '16px',
                          height: '16px',
                        }}
                      />
                    }
                    description={item.description}
                    className="list-item-meta"
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col
            span={!sm ? 24 : 12}
            style={{ order: !sm ? 1 : 2, marginBottom: !sm ? '24px' : 0 }}
          >
            <Image
              preview={false}
              src={isDarkMode ? VisionDark : VisionLight}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Vision
