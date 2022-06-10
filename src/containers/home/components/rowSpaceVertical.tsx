import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

import { Space, Typography } from 'antd'

import { AppState } from 'store'

type RowSpaceVerticalProps = {
  title: ReactNode
  description: string
  fontSize?: number
}

const RowSpaceVertical = ({
  title,
  description,
  fontSize = 20,
}: RowSpaceVerticalProps) => {
  const width = useSelector((state: AppState) => state.ui.width)
  const isMobile = width < 575

  return (
    <Space direction="vertical">
      {title}
      <Typography.Text style={{ fontSize: isMobile ? 16 : fontSize }}>
        {description}
      </Typography.Text>
    </Space>
  )
}

export default RowSpaceVertical
