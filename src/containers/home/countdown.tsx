import { Col, Row, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { getRemainingTimeUntilMsTimestamp } from './untils/CountDownTimerUtils'

const DATE_RELEASE = '2021-12-17T14:00:00' // input date time release
const defaultRemainingTime = {
  minutes: '00',
  hours: '00',
  days: '00',
}

const Countdown = ({
  setDisable = () => {},
  disable = false,
}: {
  setDisable?: (disable: boolean) => void
  disable?: boolean
}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

  const date = new Date(DATE_RELEASE).toISOString() // get release time at timezone GMT+0
  const countdownTimestampMs = new Date(date).getTime()
  const nowGMT0 = new Date().toISOString() // now at timezone GMT+0
  const now = new Date(nowGMT0).getTime() // convert now to millisecond

  useEffect(() => {
    // +60000 millisecond to enable to join IDO early 1 minute
    if (now + 60000 >= countdownTimestampMs) return setDisable(false)
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [countdownTimestampMs, now, setDisable])

  const updateRemainingTime = (countdown: number) => {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
  }

  return (
    <Row gutter={[16, 16]}>
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
  )
}

export default Countdown
