// import { useDispatch, useSelector } from 'react-redux'

import { Row, Col, Space } from 'antd'
import { Brand, Icon } from 'static/theme'

import WHITEPAPER from 'static/base/sentre_whitepaper.pdf'
// import { RootState } from 'store'
// import { setTheme } from 'store/theme.reducer'

export const SOCIALS = [
  { icon: 'logo-medium', src: 'https://sentre.medium.com' },
  { icon: 'paper-plane', src: 'https://t.me/Sentre' },
  { icon: 'logo-twitter', src: 'https://twitter.com/SentreProtocol' },
  { icon: 'document', src: WHITEPAPER },
]

const Header = () => {
  // const dispatch = useDispatch()
  // const {
  //   theme: { isDarkMode },
  // } = useSelector((state: RootState) => state)

  // const onThemeChange = () => {
  //   dispatch(setTheme())
  // }

  // const iconTheme = !isDarkMode
  //   ? 'cloudy-night-outline'
  //   : 'partly-sunny-outline'
  return (
    <Row gutter={[16, 16]} className="header" align="middle">
      <Col span={24} flex="auto">
        <Brand href="/home" />
      </Col>
      <Col>
        <Space size={8} className="ico-social">
          <Space size={24}>
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
          {/* Theme mode */}
          {/* <Divider type="vertical" />
          <Icon name={iconTheme} onClick={onThemeChange} /> */}
        </Space>
      </Col>
    </Row>
  )
}
export default Header
