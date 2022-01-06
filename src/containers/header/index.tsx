import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import {
  Row,
  Col,
  Space,
  Grid,
  Divider,
  Affix,
  Drawer,
  List,
  Typography,
  Button,
} from 'antd'
import Icon from 'components/icon'
import Brand from 'components/brand'
import SelectSocials from './selectSocial'

import { RootState } from 'store'
import { setTheme, Theme } from 'store/theme.reducer'

export const SOCIALS = [
  { icon: 'logo-medium', src: 'https://sentre.medium.com' },
  { icon: 'paper-plane', src: 'https://t.me/Sentre' },
  { icon: 'logo-twitter', src: 'https://twitter.com/SentreProtocol' },
  { icon: 'logo-discord', src: 'https://discord.com/invite/VD7UBAp2HN' },
  { icon: 'logo-cgk', src: 'https://www.coingecko.com/en/coins/sentre' },
  { icon: 'document', src: 'https://docs.sentre.io/litepaper' },
]
const SECTIONS_LIST = [
  { title: 'Home', route: 'home' },
  { title: 'Ecosystem', route: 'eco' },
  { title: 'Blog', route: 'blog' },
  { title: 'Partners', route: 'partners' },
  { title: 'Contact us', route: 'contact' },
]
const SENTRE_URL = 'https://hub.sentre.io'

const DISABLE = {
  display: 'none',
}

const Header = () => {
  const [visible, setVisible] = useState(false)
  const [isChange, setIsChange] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()

  const { sm, md, xl } = Grid.useBreakpoint() || {}

  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  const scrollToSection = (id: string, flag: boolean) => {
    if (!id) return
    if (flag) {
      setVisible(false)
    }
    const yOffset = -100 //88px that the height of header
    const el = document.getElementById(`${id}`)!
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const { theme } = useSelector((state: RootState) => state.theme)

  const isDarkMode = useMemo(() => {
    return theme === 'dark'
  }, [theme])
  const iconTheme = useMemo(() => {
    return isDarkMode ? 'moon' : 'sunny'
  }, [isDarkMode])

  const onThemeChange = () => {
    let switchTheme: Theme = 'light'
    if (!isDarkMode) switchTheme = 'dark'
    dispatch(setTheme(switchTheme))
  }

  return (
    <Affix
      onChange={(affixed) => (affixed ? setIsChange(true) : setIsChange(false))}
    >
      <div className={isChange ? 'header sticky' : 'header'}>
        <Row gutter={16} align="middle" className="header-content">
          <Col
            style={{ display: 'flex', alignItems: 'center' }}
            span={24}
            flex="auto"
          >
            <Brand
              style={{ height: 24, cursor: 'pointer' }}
              lite={!sm}
              darkTheme={isDarkMode}
            />
            <Icon
              style={md || location.pathname !== '/home' ? DISABLE : {}}
              className="menu-icon"
              name="menu-outline"
              onClick={showDrawer}
            />

            <Drawer placement="left" onClose={onClose} visible={visible}>
              <List
                dataSource={SECTIONS_LIST}
                style={{ marginTop: '19px' }}
                renderItem={(item) => (
                  <List.Item
                    onClick={() => scrollToSection(item.route, true)}
                    style={{ borderBottom: 'none', cursor: 'pointer' }}
                  >
                    <Typography.Text>{item.title}</Typography.Text>
                  </List.Item>
                )}
              ></List>
            </Drawer>

            <ul
              style={!md || location.pathname !== '/home' ? DISABLE : {}}
              className="sections"
            >
              {SECTIONS_LIST.map((item) => (
                <li
                  onClick={() => scrollToSection(item.route, false)}
                  className="sections-item"
                  key={item.title}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            <Space size={10} className="ico-social">
              <Space size={20}>
                {xl ? (
                  SOCIALS.map((social) => {
                    return (
                      <Icon
                        name={social.icon}
                        key={social.icon}
                        onClick={() => window.open(social.src, '_blank')}
                        style={{ color: '#7A7B85' }}
                      />
                    )
                  })
                ) : (
                  <SelectSocials />
                )}
              </Space>

              {/* Theme mode */}
              <Divider type="vertical" />
              <Icon name={iconTheme} onClick={onThemeChange} />
              <Button
                type="primary"
                style={{ marginBottom: 6, marginLeft: 10 }}
                onClick={() => window.open(SENTRE_URL, '_blank')}
              >
                Launch App
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </Affix>
  )
}
export default Header
