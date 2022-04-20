import { useSelector } from 'react-redux'

import { Card, Image, Space, Typography } from 'antd'
import { AppState } from 'store'
import { useMemo } from 'react'

type TypeCard = {
  src?: string
  title?: string
  description?: string
  date?: string
  time?: string
  onClick?: () => void
}
const SUBSTR_DESCRIPTION = 100
const PAGE_PADDING = 30
const ELEMENT_PADDING = 24
const HEIGHT_RATIO = 1.777778 // image ratio 16:9

const Post = ({ src, title, description, date, time, onClick }: TypeCard) => {
  const formatDate = date ? new Date(date).toDateString() : ''

  const {
    ui: { width },
  } = useSelector((state: AppState) => state)

  const isMobile = width < 768
  const elementPaddingCount = width < 1200 ? 1 : 2
  const heightRatio = isMobile
    ? HEIGHT_RATIO
    : width < 1200
    ? HEIGHT_RATIO * 2
    : HEIGHT_RATIO * 3
  const desktopSpacing = PAGE_PADDING + ELEMENT_PADDING * elementPaddingCount

  const imgHeight = useMemo(() => {
    if (isMobile) return (width - PAGE_PADDING) / heightRatio

    return Math.min(
      (1200 - desktopSpacing) / heightRatio,
      (width - desktopSpacing) / heightRatio,
    )
  }, [desktopSpacing, heightRatio, isMobile, width])

  return (
    <Card
      hoverable
      cover={
        <Image
          style={{
            height: imgHeight,
          }}
          preview={false}
          src={src}
        />
      }
      className="card-post"
      onClick={onClick}
      bordered={false}
    >
      <Space direction="vertical" size={9}>
        <Space style={{ fontSize: 12 }}>
          <Typography.Text type="secondary">{formatDate}</Typography.Text>
        </Space>
        <Typography.Title className="title" level={3} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        <Typography.Text className="description">
          {description
            ?.replace(/<\/?[^>]+(>|$)/g, '')
            .substr(0, SUBSTR_DESCRIPTION)
            .padEnd(SUBSTR_DESCRIPTION + 3, '.')}
        </Typography.Text>
      </Space>
    </Card>
  )
}
export default Post
