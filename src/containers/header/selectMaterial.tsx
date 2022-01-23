import { Button, Popover, Space, Switch, Typography } from 'antd'
import Icon from 'components/icon'

export const MATERIALS = [
  {
    icon: 'logo-github',
    src: 'https://github.com/DescartesNetwork',
    content: 'Github',
  },
  {
    icon: 'book',
    src: 'https://docs.sentre.io/litepaper',
    content: 'Docs',
  },
  {
    icon: 'logo-cgk',
    src: 'https://www.coingecko.com/en/coins/sentre',
    content: 'Coingecko',
  },
]

export type SelectMaterialsProps = {
  isDarkMode: boolean
  onThemeChange?: () => void
}

const SelectMaterial = ({
  isDarkMode,
  onThemeChange,
}: SelectMaterialsProps) => {
  return (
    <Popover
      content={
        <Space direction="vertical" style={{ cursor: 'pointer' }}>
          {MATERIALS.map((material) => (
            <Space
              size={14}
              key={material.content}
              onClick={() => window.open(material.src, '_blank')}
            >
              <Icon name={material.icon} style={{ color: '#7A7B85' }} />
              <Typography.Text>{material.content}</Typography.Text>
            </Space>
          ))}
          <Space size={14}>
            <Icon name={isDarkMode ? 'moon' : 'sunny'} />
            <Typography.Text>
              {isDarkMode ? 'Dark theme' : 'Light theme'}
            </Typography.Text>
            <Switch size="small" onChange={onThemeChange} />
          </Space>
        </Space>
      }
      trigger="click"
      placement="bottomLeft"
    >
      <Button icon={<Icon name="ellipsis-horizontal" />} />
    </Popover>
  )
}
export default SelectMaterial
