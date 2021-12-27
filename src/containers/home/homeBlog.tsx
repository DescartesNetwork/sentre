import { useMemo } from 'react'

import { Row, Col, Typography, Image, Button, Grid } from 'antd'
import { useHistory } from 'react-router'

import { FSquare } from 'static/images/index'
import Articles from '../blogs/articles'

const HomeBlog = () => {
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
    <Row gutter={[24, 32]} className="home-blog" id="blog">
      <Col span={24}>
        <Row gutter={[16, 16]} align="middle">
          <Col span={24} flex="auto">
            <Typography.Title level={1} className="home-blog_title">
              Blog
            </Typography.Title>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Articles maxPost={maxPost} />
      </Col>
      <Col span={24} className="home-blog_img">
        <Image preview={false} src={FSquare} />
      </Col>
      <Col span={24} style={{ textAlign: 'center' }}>
        <Button
          type="text"
          className="btn-view-all"
          onClick={() => history.push('/blogs')}
        >
          View all
        </Button>
      </Col>
    </Row>
  )
}

export default HomeBlog
