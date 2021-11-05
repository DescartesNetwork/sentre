import { useMemo } from 'react'

import { Row, Col, Typography, Image, Button, Grid } from 'antd'
import { useHistory } from 'react-router'

import { FSquare } from 'static/images/index'
import Icon from 'components/icon'
import Articles from '../blogs/components/articles'

const Blockchain = () => {
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
    <Row gutter={[24, 16]} className="blockchain">
      <Col span={24}>
        <Row gutter={[16, 16]} align="middle">
          <Col span={24} flex="auto">
            <Typography.Title level={2} className="blockchain-title">
              Blockchain
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
        </Row>
      </Col>
      <Col span={24}>
        <Articles maxPost={maxPost} category="blockchain" />
      </Col>
      <Col span={24} className="blockchain-img">
        <Image preview={false} src={FSquare} />
      </Col>
    </Row>
  )
}

export default Blockchain
