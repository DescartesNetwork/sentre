import { Row, Col, Tabs, Typography } from 'antd'
import Articles from './articles'

const ARTICLE_CATEGORIES = [
  'all',
  'news',
  'sentizens',
  'ecosystem',
  'developers',
]

const Blogs = () => {
  return (
    <Row gutter={[16, 19]} className="blogs">
      <Col span={24}>
        <Typography.Title style={{ margin: 0 }}>All posts</Typography.Title>
      </Col>
      <Col span={24}>
        <Tabs defaultActiveKey={ARTICLE_CATEGORIES[0]}>
          {ARTICLE_CATEGORIES.map((category, idx) => (
            <Tabs.TabPane tab={category} key={category}>
              <Articles category={category} />
            </Tabs.TabPane>
          ))}
        </Tabs>
      </Col>
    </Row>
  )
}

export default Blogs
