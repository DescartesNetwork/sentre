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
    <Row gutter={[24, 48]} className="must-read" justify="center">
      <Col>
        <Typography.Title level={1} className="must-read-title">
          Must Read
        </Typography.Title>
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
