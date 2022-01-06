import { Popover, Space, Typography } from 'antd'
import Icon from 'components/icon'

export const SOCIALS = [
  { icon: 'logo-medium', src: 'https://sentre.medium.com', content: 'Medium' },
  { icon: 'paper-plane', src: 'https://t.me/Sentre', content: 'Telegram' },
  {
    icon: 'logo-twitter',
    src: 'https://twitter.com/SentreProtocol',
    content: 'Twitter',
  },
  {
    icon: 'logo-discord',
    src: 'https://discord.com/invite/VD7UBAp2HN',
    content: 'Discord',
  },
  {
    icon: 'logo-cgk',
    src: 'https://www.coingecko.com/en/coins/sentre',
    content: 'Coingecko',
  },
  {
    icon: 'document',
    src: 'https://docs.sentre.io/litepaper',
    content: 'Litepaper',
  },
]
const SelectIcon = () => {
  return (
    <Popover
      content={
        <Space direction="vertical" style={{ cursor: 'pointer' }}>
          {SOCIALS.map((social) => (
            <Space
              size={14}
              key={social.content}
              onClick={() => window.open(social.src, '_blank')}
            >
              <Icon name={social.icon} style={{ color: '#7A7B85' }} />
              <Typography.Text>{social.content}</Typography.Text>
            </Space>
          ))}
        </Space>
      }
      trigger="click"
    >
      <Icon name="share-social" />
    </Popover>
  )
}
export default SelectIcon
