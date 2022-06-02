import { useState } from 'react'

import {
  Row,
  Col,
  Typography,
  Image,
  Button,
  Grid,
  Modal,
  Space,
  Tooltip,
} from 'antd'
import Icon from 'components/icon'

import pdfFile from '../../static/base/sentre_whitepaper.pdf'
import { SOCIALS } from 'containers/footer'
import { SENLITE_URL, SENTRE_URL } from 'containers/header'
import {
  bgBannerPng,
  imgSquareBlurPng,
  imgSquarePng,
} from 'static/images/systems'
import { flagEngSvg, flagIndoSvg, flagVnSvg } from 'static/images/languages'

const DISABLE = {
  display: 'none',
}

const contries = [
  { flag: flagVnSvg, name: 'Vietnam', src: pdfFile },
  { flag: flagEngSvg, name: 'English', src: pdfFile },
  { flag: flagIndoSvg, name: 'Indonesia', src: pdfFile },
]

const EXPLAIN_LITE_BTN =
  'This version with a simple interface and essential functions for daily users.'
const EXPLAIN_PRO_BTN =
  'This version with full functions for professionals and developers.'

const Banner = () => {
  const { xl } = Grid.useBreakpoint()
  const [visible, setvisible] = useState(false)

  return (
    <Row
      gutter={[12, { xs: 48, sm: 24, md: 24, lg: 24 }]}
      align="middle"
      className="banner"
      id="home"
    >
      <Col
        xl={{ span: 13, order: 1 }}
        lg={{ span: 12, order: 1 }}
        sm={{ span: 12, order: 1 }}
        xs={{ span: 24, order: 2 }}
        className="right-content"
      >
        <Row gutter={[16, { xs: 24, sm: 29, md: 40, lg: 40 }]}>
          <Col span={24}>
            <Row gutter={[16, { xs: 16, sm: 20, md: 27, lg: 27 }]}>
              <Col span={24}>
                <Typography.Title level={1} className="title">
                  An Open Liquidity Protocol on{' '}
                  <strong className="gradient-text">Solana</strong>
                </Typography.Title>
              </Col>
              <Col span={24} style={{ position: 'relative' }}>
                <Typography.Text type="secondary" className="description">
                  All-in-One Solana Open Platform with DApps Store and Universal
                  Protocol for Liquidity.
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={10} lg={8}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                <Space size={20}>
                  <Tooltip placement="topLeft" title={EXPLAIN_PRO_BTN}>
                    <Button
                      type="primary"
                      size="large"
                      style={{ width: 111 }}
                      onClick={() => window.open(SENTRE_URL, '_blank')}
                    >
                      Pro App
                    </Button>
                  </Tooltip>

                  <Tooltip placement="topLeft" title={EXPLAIN_LITE_BTN}>
                    <Button
                      type="ghost"
                      size="large"
                      style={{ width: 111 }}
                      onClick={() => window.open(SENLITE_URL, '_blank')}
                    >
                      Lite App
                    </Button>
                  </Tooltip>
                </Space>
              </Col>
              <Col>
                <Space size={20}>
                  {SOCIALS.map((social, idx) => (
                    <Icon
                      style={{
                        color: '#7A7B85',
                        fontSize: 20,
                        cursor: 'pointer',
                      }}
                      name={social.icon}
                      onClick={() => window.open(social.src, '_blank')}
                      key={idx}
                    />
                  ))}
                </Space>
              </Col>
            </Row>
          </Col>

          {/* <Col xs={12} md={10} lg={8}>
            <Button size="large" block onClick={() => setvisible(true)}>
              Instruction
            </Button>
          </Col> */}
        </Row>
        <Col span={24} className="banner-img">
          <Image preview={false} src={imgSquareBlurPng} />
        </Col>
        <Image preview={false} src={imgSquarePng} style={!xl ? DISABLE : {}} />
      </Col>
      <Col
        xl={{ span: 11, order: 2 }}
        lg={{ span: 12, order: 2 }}
        sm={{ span: 12, order: 2 }}
        xs={{ span: 24, order: 1 }}
        style={{ textAlign: 'right' }}
      >
        <Image preview={false} src={bgBannerPng} />
      </Col>
      <Modal
        closeIcon={<Icon name="close" />}
        title={null}
        footer={null}
        visible={visible}
        onCancel={() => setvisible(false)}
      >
        <Row gutter={[0, 48]} justify="center">
          <Col span={24} style={{ textAlign: 'center' }}>
            <Typography.Title level={5}>Choose the language</Typography.Title>
          </Col>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Row justify="center" gutter={48}>
              {contries.map(({ name, flag, src }) => (
                <Col key={name}>
                  <Space
                    direction="vertical"
                    style={{ cursor: 'pointer' }}
                    onClick={() => window.open(src)}
                  >
                    <Image
                      src={flag}
                      preview={false}
                      style={{ borderRadius: 8 }}
                    />
                    <Typography.Text>{name}</Typography.Text>
                  </Space>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Modal>
    </Row>
  )
}
export default Banner
