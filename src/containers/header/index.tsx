import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Col, Space, Grid, Divider } from 'antd'
import Icon from 'components/icon'
import Brand from 'components/brand'

import { RootState } from 'store'
import { setTheme, Theme } from 'store/theme.reducer'
import WHITEPAPER from 'static/base/sentre_whitepaper.pdf'

export const SOCIALS = [
  { icon: 'logo-medium', src: 'https://sentre.medium.com' },
  { icon: 'paper-plane', src: 'https://t.me/Sentre' },
  { icon: 'logo-twitter', src: 'https://twitter.com/SentreProtocol' },
  { icon: 'document', src: WHITEPAPER },
]

const Header = () => {
  const dispatch = useDispatch()
  const { theme } = useSelector((state: RootState) => state.theme)

  const isDarkMode = useMemo(() => {
    return theme === 'dark'
  }, [theme])
  const iconTheme = useMemo(() => {
    return isDarkMode ? 'moon' : 'sunny'
  }, [isDarkMode])
  const { sm } = Grid.useBreakpoint() || {}

  const onThemeChange = () => {
    let switchTheme: Theme = 'light'
    if (!isDarkMode) switchTheme = 'dark'
    dispatch(setTheme(switchTheme))
  }

  return (
    <Row gutter={[16, 16]} className="header" align="middle">
      <Col span={24} flex="auto">
        <Brand
          style={{ height: 24, cursor: 'pointer' }}
          lite={!sm}
          darkTheme={isDarkMode}
        />
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
          <Divider type="vertical" />
          <Icon name={iconTheme} onClick={onThemeChange} />
        </Space>
      </Col>
    </Row>
  )
}
export default Header
