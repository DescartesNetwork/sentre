import { useEffect } from 'react'
import { Widget } from '@typeform/embed-react'

import { Col, Row, Typography, Image, Space } from 'antd'
import RowSpaceVertical from '../components/rowSpaceVertical'

import {
  coMarketingDarkPng,
  coMarketingPng,
  coPoolDarkPng,
  coPoolPng,
  productIntegrationDarkPng,
  productIntegrationPng,
  senhubPowerUpDarkPng,
  senhubPowerUpPng,
} from 'static/images/systems'
import { useSelector } from 'react-redux'
import { AppState } from 'store'

const BENEFIT = {
  light: [
    {
      logo: senhubPowerUpPng,
      title: 'SenHub Power-Up',
      description:
        'Grow together for a win-win partnership. Integrate on SenHub to get exposed to thousands of potential users and have a place in their favorite set of projects. Fill out our form for details!',
    },
    {
      logo: productIntegrationPng,
      title: 'Product Integration',
      description:
        'Powerful add-ons can bring your products to the next level. Explore the Sen Suite and integrate us on your platform for a maximum strength boost. Ping us if you’re in for the tech!',
    },
    {
      logo: coPoolPng,
      title: 'Co-Pools for liquidity',
      description:
        "Pool Creation is the quickest way to distribute your tokens to Solana users. Join our 'index fund' pool or Create a pool with us and have Sentre share your liquidity burden. If you're looking to distribute tokens and incentivize liquidity, get in touch!",
    },
    {
      logo: coMarketingPng,
      title: 'Co-marketing support',
      description:
        'With a network of over 30 influential KOLs in fertile crypto lands and BIG partners all over the world such as Solana Foundation, Coin98, Serum, your Co-marketing campaigns with Sentre will bring tremendous branding effect. Ping us for more details!',
    },
  ],
  dark: [
    {
      logo: senhubPowerUpDarkPng,
      title: 'SenHub Power-Up',
      description:
        'Grow together for a win-win partnership. Integrate on SenHub to get exposed to thousands of potential users and have a place in their favorite set of projects. Fill out our form for details!',
    },
    {
      logo: productIntegrationDarkPng,
      title: 'Product Integration',
      description:
        'Powerful add-ons can bring your products to the next level. Explore the Sen Suite and integrate us on your platform for a maximum strength boost. Ping us if you’re in for the tech!',
    },
    {
      logo: coPoolDarkPng,
      title: 'Co-Pools for liquidity',
      description:
        "Pool Creation is the quickest way to distribute your tokens to Solana users. Join our 'index fund' pool or Create a pool with us and have Sentre share your liquidity burden. If you're looking to distribute tokens and incentivize liquidity, get in touch!",
    },
    {
      logo: coMarketingDarkPng,
      title: 'Co-marketing support',
      description:
        'With a network of over 30 influential KOLs in fertile crypto lands and BIG partners all over the world such as Solana Foundation, Coin98, Serum, your Co-marketing campaigns with Sentre will bring tremendous branding effect. Ping us for more details!',
    },
  ],
}
const TYPE_FORM_ID = 'AUZcmw6Z'

const Content = ({
  title,
  description,
  logo,
}: {
  title: string
  description: string
  logo: string
}) => (
  <Row gutter={[32, 32]} style={{ textAlign: 'center' }}>
    <Col span={24}>
      <Image src={logo} preview={false} />
    </Col>
    <Col span={24}>
      <Space direction="vertical">
        <Typography.Title level={3}>{title}</Typography.Title>
        <Typography.Text type="secondary">{description}</Typography.Text>
      </Space>
    </Col>
  </Row>
)

const BecomePartner = () => {
  const theme = useSelector((state: AppState) => state.ui.theme)

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0)
  }, [])

  const benefits = BENEFIT[theme]

  return (
    <Row
      gutter={[
        { xs: 32, sm: 32, md: 32, lg: 100 },
        { xs: 32, sm: 32, md: 32, lg: 100 },
      ]}
      className="body-content become-partner"
    >
      <Col span={24}>
        <RowSpaceVertical
          title={
            <Typography.Title level={1}>
              Become Our <span style={{ color: '#F9575E' }}>Partner</span>
            </Typography.Title>
          }
          description="Join us on our journey to the moon!"
        />
      </Col>
      <Col span={24}>
        <Row gutter={[24, 64]}>
          {benefits.map((item) => (
            <Col xs={24} md={12} key={item.title}>
              <Content
                logo={item.logo}
                title={item.title}
                description={item.description}
              />
            </Col>
          ))}
          <Col span={24} /> {/** Safe space */}
          <Col span={24}>
            <RowSpaceVertical
              title={
                <Typography.Title level={1}>Sign Up Form</Typography.Title>
              }
              description="Fill the form below so we know which collab method you want to do with us!"
            />
          </Col>
          <Col span={24} style={{ minHeight: 500 }}>
            <Widget
              id={TYPE_FORM_ID}
              style={{ width: '100%', height: '100%' }}
            />
          </Col>
        </Row>
      </Col>
      <Col span={24} />
    </Row>
  )
}

export default BecomePartner
