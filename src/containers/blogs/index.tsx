import { Row, Col, Tabs, Typography } from 'antd'
import Blockchain from './blockchain'
import Others from './others'

const Blogs = () => {
  return (
    <Row gutter={[16, 19]} className="blogs">
      <Col span={24}>
        <Typography.Title style={{ margin: 0 }}>All posts</Typography.Title>
      </Col>
      <Col span={24}>
        <Tabs defaultActiveKey="trending">
          <Tabs.TabPane tab="Blockchain" key="blockchain">
            <Blockchain />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Others" key="others">
            <Others />
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Row>
  )
}

export default Blogs
