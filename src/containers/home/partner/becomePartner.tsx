import { useEffect } from 'react'

import { Col, Row, Typography, Image, Space } from 'antd'
import RowSpaceVertical from '../components/rowSpaceVertical'

import { utilityBgPng } from 'static/images/systems'

const BENEFIT = [
  {
    title: 'SenHub Power-Up',
    description:
      'Grow together for a win-win partnership. Integrate on SenHub to get exposed to thousands of potential users and have a place in their favorite set of projects. Fill out our form for details!',
  },
  {
    title: 'Product Integration',
    description:
      'Powerful add-ons can bring your products to the next level. Explore the Sen Suite and integrate us on your platform for a maximum strength boost. Ping us if you’re in for the tech!',
  },
  {
    title: 'Co-Pools for liquidity',
    description:
      "Pool Creation is the quickest way to distribute your tokens to Solana users. Join our 'index fund' pool or Create a pool with us and have Sentre share your liquidity burden. If you're looking to distribute tokens and incentivize liquidity, get in touch!",
  },
  {
    title: 'Co-marketing support',
    description:
      'With a network of over 30 influential KOLs in fertile crypto lands and BIG partners all over the world such as Solana Foundation, Coin98, Serum, your Co-marketing campaigns with Sentre will bring tremendous branding effect. Ping us for more details!',
  },
]

const Content = ({
  title,
  description,
}: {
  title: string
  description: string
}) => (
  <Row gutter={[32, 32]} style={{ textAlign: 'center' }}>
    <Col span={24}>
      <Image src={utilityBgPng} preview={false} />
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
  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0)
  }, [])

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
          {BENEFIT.map((item) => (
            <Col xs={24} md={12} key={item.title}>
              <Content title={item.title} description={item.description} />
            </Col>
          ))}
          <Col span={24}>
            <Typography.Title> Type Form</Typography.Title>
          </Col>
        </Row>
      </Col>
      <Col span={24} />
    </Row>
  )
}

export default BecomePartner
