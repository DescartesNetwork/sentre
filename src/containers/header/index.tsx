import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import {
  Row,
  Col,
  Space,
  Grid,
  Affix,
  Drawer,
  List,
  Typography,
  Button,
} from 'antd'
import Icon from 'components/icon'
import Brand from 'components/brand'
import SelectMaterial from './selectMaterial'

import { RootState } from 'store'
import { setTheme, Theme } from 'store/theme.reducer'

const SECTIONS_LIST = [
  { title: 'Home', route: 'home' },
  { title: 'Ecosystem', route: 'eco' },
  { title: 'Roadmap', route: 'road-map' },
  { title: 'Vision', route: 'vision' },
  { title: 'Partners', route: 'partners' },
  { title: 'Blog', route: 'blog' },
  { title: 'Contact us', route: 'contact' },
]
export const SENTRE_URL = 'https://hub.sentre.io'
export const SENLITE_URL = 'https://lite.sentre.com'

const DISABLE = {
  display: 'none',
}

const Header = () => {
  const [visible, setVisible] = useState(false)
  const [isChange, setIsChange] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()

  const { sm, lg } = Grid.useBreakpoint() || {}

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
              style={lg || location.pathname !== '/home' ? DISABLE : {}}
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
              />
            </Drawer>

            <ul
              style={!lg || location.pathname !== '/home' ? DISABLE : {}}
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
              <SelectMaterial
                isDarkMode={isDarkMode}
                onThemeChange={onThemeChange}
              />
              <Button
                type="ghost"
                onClick={() => window.open(SENLITE_URL, '_blank')}
              >
                Lite App
              </Button>
              <Button
                type="primary"
                onClick={() => window.open(SENTRE_URL, '_blank')}
              >
                Pro App
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </Affix>
  )
}
export default Header
