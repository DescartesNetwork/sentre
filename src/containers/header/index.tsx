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
} from 'antd'
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

const SECTIONS_LIST = [
  {
    title: 'Home',
    route: 'home',
  },
  {
    title: 'Ecosytem',
    route: 'eco',
  },
  {
    title: 'Blog',
    route: 'blog',
  },
  {
    title: 'Partners',
    route: 'partners',
  },
  {
    title: 'Contact us',
    route: 'contact',
  },
]

const DISABLE = {
  display: 'none',
}

const Header = () => {
  const { sm, md } = Grid.useBreakpoint() || {}

  const [visible, setVisible] = useState(false)
  const [isChange, setIsChange] = useState(false)

  const dispatch = useDispatch()
  const location = useLocation()

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

          <Col xl={6} lg={5}>
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
      </div>
    </Affix>
  )
}
export default Header
