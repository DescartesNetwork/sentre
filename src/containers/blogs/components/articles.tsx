import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { useMemo } from 'react'

import { Row, Col } from 'antd'

import Post from './post'

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

const Articles = ({
  maxPost = 9,
  category,
}: {
  maxPost?: number
  category?: string
}) => {
  const history = useHistory()
  const {
    articles: { data: articleData },
  } = useSelector((state: RootState) => state)

  const articleWithCategories = useMemo(() => {
    if (!category) return articleData

    if (category === 'others')
      return articleData?.filter(
        ({ categories }) => !categories.includes('blockchain'),
      )

    return articleData?.filter(({ categories }) =>
      categories.includes(category),
    )
  }, [articleData, category])

  const mapArticleData = useMemo(() => {
    return articleWithCategories?.slice(0, maxPost)
  }, [articleWithCategories, maxPost])

  return (
    <Row gutter={[24, 24]}>
      {mapArticleData?.map((art: TypeArticleData, index: number) => {
        const artURI = encodeURIComponent(art.title || '')
        return (
          <Col
            xl={{ span: 8 }}
            lg={{ span: 12 }}
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
    </Row>
  )
}

export default Articles
