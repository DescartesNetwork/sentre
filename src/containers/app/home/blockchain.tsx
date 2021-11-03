import { useMemo } from 'react'

import { Row, Col, Typography, Image, Button, Grid } from 'antd'
import { useHistory } from 'react-router'

import { FSquare } from 'static/images/index'
import { Icon } from 'static/theme'
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
    <Row gutter={[24, 16]}>
      <Col span={24} className="blockchain-title">
        <Row gutter={[16, 16]} align="middle">
          <Col span={24} flex="auto">
            <Typography.Title level={3} style={{ margin: 0 }}>
              Blockchain
            </Typography.Title>
          </Col>
          <Col>
            <Button
              type="text"
              style={{
                color: '#212433',
                fontWeight: 300,
                padding: 0,
                height: 'auto',
                cursor: 'pointer',
              }}
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
