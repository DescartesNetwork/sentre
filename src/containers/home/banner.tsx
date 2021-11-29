import { useState, useEffect } from 'react'

import { Row, Col, Typography, Image, Button, Grid } from 'antd'
import { getRemainingTimeUntilMsTimestamp } from './untils/CountDownTimerUtils'
import { BgHero, Square, SquareBlur } from 'static/images/index'

const SENTRE_URL = 'https://app.sentre.io'

const DISABLE = {
  display: 'none',
}

const DATE_RELEASE = '11/30/2021 17:20:00' // input date time release

const Banner = () => {
  const { xl } = Grid.useBreakpoint() || {}

  let date = new Date(DATE_RELEASE)
  let countdownTimestampMs = date.getTime()

  const defaultRemainingTime = {
    minutes: '00',
    hours: '00',
    days: '00',
  }

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
  const [isDisable, setIsDisable] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [countdownTimestampMs])

  useEffect(() => {
    setIsDisable(remainingTime.minutes === '00')
  }, [remainingTime])

  const updateRemainingTime = (countdown: number) => {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

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
                  The #1 AMM built on Solana to enrich the proficiency of DeFi
                  ecosystem.
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={9} lg={8} xl={6}>
                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={() => window.open(SENTRE_URL, '_blank')}
                  disabled={isDisable}
                >
                  <span style={{ fontSize: '14px' }}>Launch Sentre</span>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Typography.Paragraph className="btn-launch">
              Official Sentre launch in
            </Typography.Paragraph>
          </Col>
          <Col span={24}>
            <Row gutter={{ xs: 44, sm: 28, md: 28, lg: 28, xl: 54 }}>
              <Col xs={8} sm={8} md={8} lg={6}>
                <div className="count-down">
                  <p>{remainingTime.days}</p>
                  <Typography.Text type="secondary" className="count-down_text">
                    days
                  </Typography.Text>
                  <p className="separation">:</p>
                </div>
              </Col>
              <Col xs={8} sm={8} md={8} lg={6}>
                <div className="count-down">
                  <p>{remainingTime.hours}</p>
                  <Typography.Text type="secondary" className="count-down_text">
                    hours
                  </Typography.Text>
                  <p className="separation">:</p>
                </div>
              </Col>
              <Col xs={8} sm={8} md={8} lg={6}>
                <div className="count-down">
                  <p>{remainingTime.minutes}</p>
                  <Typography.Text type="secondary" className="count-down_text">
                    minutes
                  </Typography.Text>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col span={24} className="banner-img">
          <Image preview={false} src={SquareBlur} />
        </Col>
        <Image preview={false} src={Square} style={!xl ? DISABLE : {}} />
      </Col>
      <Col
        xl={{ span: 11, order: 2 }}
        lg={{ span: 12, order: 2 }}
        sm={{ span: 12, order: 2 }}
        xs={{ span: 24, order: 1 }}
        style={{ textAlign: 'right' }}
      >
        <Image preview={false} src={BgHero} />
      </Col>
    </Row>
  )
}
export default Banner
