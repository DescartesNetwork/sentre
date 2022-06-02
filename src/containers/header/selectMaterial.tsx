import { Button, Popover, Space, Typography } from 'antd'
import Icon from 'components/icon'

export const MATERIALS = [
  {
    icon: 'logo-github',
    src: 'https://github.com/DescartesNetwork',
    content: 'Github',
  },
  {
    icon: 'logo-medium',
    src: 'https://sentre.medium.com',
    content: 'Medium',
  },
  {
    icon: 'logo-cgk',
    src: 'https://www.coingecko.com/en/coins/sentre',
    content: 'Coingecko',
  },
]

export type SelectMaterialsProps = {
  isDarkMode: boolean
  onThemeChange: () => void
}

const SelectMaterial = ({
  isDarkMode,
  onThemeChange,
}: SelectMaterialsProps) => {
  return (
    <Popover
      content={
        <Space
          direction="vertical"
          size={10}
          style={{ cursor: 'pointer', width: 186 }}
        >
          {MATERIALS.map((material) => (
            <Space
              size={15}
              key={material.content}
              onClick={() => window.open(material.src, '_blank')}
            >
              <Icon name={material.icon} style={{ color: '#7A7B85' }} />
              <Typography.Text>{material.content}</Typography.Text>
            </Space>
          ))}
          <Space size={15} onClick={onThemeChange}>
            <Icon
              style={{ color: '#7A7B85' }}
              name={isDarkMode ? 'moon' : 'sunny'}
            />
            <Typography.Text>
              {isDarkMode ? 'Light theme' : 'Dark theme'}
            </Typography.Text>
          </Space>
        </Space>
      }
      trigger="click"
      placement="bottomLeft"
    >
      <Button type="ghost" icon={<Icon name="ellipsis-horizontal" />} />
    </Popover>
  )
}
export default SelectMaterial
