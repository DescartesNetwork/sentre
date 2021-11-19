import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { Row, Col, Empty, Button } from 'antd'
import Icon from 'components/icon'
import Post from './components/post'

import { RootState } from 'store'

type TypeArticleData = {
  description?: string
  title?: string
  thumbnail?: string
  pubDate?: string
  time?: string
  giud?: string
  categories?: string[]
}

const MEDIUM_CATEGORIES: Record<string, string[]> = {
  developers: ['developer', 'source-code', 'coding', 'code-tips'],
  sentizens: ['community', 'event', 'tutorial'],
  ecosystem: ['ecosystem', 'decentralized-apps'],
  news: ['defi', 'updates', 'partnerships'],
}

const Articles = ({
  maxPost,
  category = '',
}: {
  maxPost?: number
  category?: string
}) => {
  const history = useHistory()
  const {
    articles: { data: articleData },
  } = useSelector((state: RootState) => state)
  const [postPerPage, setPostPerPage] = useState(9)

  const articleCategories = useMemo(() => {
    return MEDIUM_CATEGORIES[category]
  }, [category])
  const filterArticle = useMemo(() => {
    if (!articleCategories) return articleData
    return articleData?.filter(({ categories }) => {
      let isExist = false
      for (const cat of articleCategories) {
        if (categories.includes(cat)) {
          isExist = true
          break
        }
      }
      return isExist
    })
  }, [articleCategories, articleData])

  const articleLength = useMemo(() => {
    return filterArticle?.length || 0
  }, [filterArticle])
  const getLimitArticle = useMemo(() => {
    const limitPost = maxPost || postPerPage
    return filterArticle?.slice(0, limitPost)
  }, [filterArticle, maxPost, postPerPage])

  if (!getLimitArticle || getLimitArticle?.length === 0) return <Empty />

  return (
    <Row gutter={[24, 24]}>
      {getLimitArticle?.map((art: TypeArticleData, index: number) => {
        const artURI = encodeURIComponent(art.title || '')
        return (
          <Col
            xl={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            key={art.title}
          >
            <Post
              title={art.title}
              description={art.description}
              src={art.thumbnail}
              date={art.pubDate}
              time={art.time}
              onClick={() => history.push(`/blogs/${artURI}`)}
            />
          </Col>
        )
      })}
      {!maxPost && articleLength > postPerPage && (
        <Col span={24}>
          <Row justify="center">
            <Col>
              <Button
                type="default"
                onClick={() => setPostPerPage(postPerPage + 3)}
                size="middle"
                icon={<Icon name="chevron-down-outline" />}
              >
                View more
              </Button>
            </Col>
          </Row>
        </Col>
      )}
    </Row>
  )
}

export default Articles
