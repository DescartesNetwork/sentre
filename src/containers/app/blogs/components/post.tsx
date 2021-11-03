import { Card, Image, Space, Typography } from 'antd'
import { Icon } from 'static/theme'

type TypeCard = {
  src?: string
  title?: string
  description?: string
  date?: string
  time?: string
  onClick?: () => void
}
const SUBSTR_DESCRIPTION = 120

const Post = ({ src, title, description, date, time, onClick }: TypeCard) => {
  return (
    <Card
      hoverable
      cover={<Image preview={false} src={src} />}
      className=" card-post"
      onClick={onClick}
    >
      <Space direction="vertical" size={9}>
        <Space style={{ fontSize: 12 }}>
          <Typography.Text type="secondary">{date}</Typography.Text>
          <Typography.Text type="secondary">
            <Icon name="time-outline" />
          </Typography.Text>
          <Typography.Text type="secondary">{time}</Typography.Text>
        </Space>
        <Card.Meta
          title={title}
          description={description
            ?.replace(/<\/?[^>]+(>|$)/g, '')
            .substr(0, SUBSTR_DESCRIPTION)
            .padEnd(SUBSTR_DESCRIPTION + 3, '.')}
          style={{ cursor: 'pointer' }}
        />
      </Space>
    </Card>
  )
}
export default Post
