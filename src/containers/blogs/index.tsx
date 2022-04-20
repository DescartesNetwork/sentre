import { useEffect } from 'react'

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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Row gutter={[16, 19]} className="blogs">
      <Col span={24}>
        <Typography.Title style={{ margin: 0 }}>All posts</Typography.Title>
      </Col>
      <Col span={24}>
        <Tabs
          defaultActiveKey={ARTICLE_CATEGORIES[0]}
          style={{ overflow: 'unset' }}
        >
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
