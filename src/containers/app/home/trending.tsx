import { Row, Col, Typography, Image, Button, Grid } from 'antd'
import { useMemo } from 'react'
import { useHistory } from 'react-router'

import { SquareBlur } from 'static/images/index'
import { Icon } from 'static/theme'
import Articles from '../blogs/components/articles'

const Trending = () => {
  const history = useHistory()
  const { xl } = Grid.useBreakpoint() || {}
  const maxPost = useMemo(() => {
    switch (true) {
      case xl:
        return 3
      case !xl:
        return 2
    }
  }, [xl])

  return (
    <Row gutter={[24, 16]} className="trending">
      <Col span={24}>
        <Row gutter={[16, 16]} align="middle">
          <Col span={24} flex="auto">
            <Typography.Title level={2} className="trending-title">
              Trending
            </Typography.Title>
          </Col>
          <Col>
            <Button
              type="text"
              className="btn-view-all"
              onClick={() => history.push('/blogs')}
            >
              View all
              <Icon name="chevron-forward-outline" />
            </Button>
          </Col>
          <Col span={24} className="trending-img">
            <Image preview={false} src={SquareBlur} />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Articles maxPost={maxPost} />
      </Col>
    </Row>
  )
}

export default Trending
