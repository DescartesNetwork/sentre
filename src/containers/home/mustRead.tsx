import { useMemo } from 'react'
import { useHistory } from 'react-router'

import { Row, Col, Typography, Button, Grid } from 'antd'
import Articles from '../blogs/articles'

const MustRead = () => {
  const history = useHistory()

  const { xl } = Grid.useBreakpoint() || {}

  const maxPost = useMemo(() => {
    if (xl) return 3
    return 2
  }, [xl])

  return (
    <Row gutter={[24, 48]} className="must-read">
      <Col span={24}>
        <Row gutter={[16, 0]} align="middle">
          <Col span={24} flex="auto">
            <Typography.Title level={2} className="must-read_title">
              Must Read
            </Typography.Title>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Articles maxPost={maxPost} />
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

export default MustRead
