import { useState } from 'react'

import { Row, Col, Button } from 'antd'

import Articles from './components/articles'
import { Icon } from 'static/theme'

const Others = () => {
  const [maxPost, setMaxPost] = useState(9)

  const onViewMore = () => {
    setMaxPost(maxPost + 3)
  }

  return (
    <Row gutter={[16, 48]} justify="center">
      <Col span={24}>
        <Articles maxPost={maxPost} category="others" />
      </Col>
      <Button
        type="default"
        onClick={onViewMore}
        size="middle"
        icon={<Icon name="chevron-down-outline" />}
      >
        View more
      </Button>
    </Row>
  )
}
export default Others
