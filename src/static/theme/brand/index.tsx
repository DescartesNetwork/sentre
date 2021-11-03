import React, { forwardRef } from 'react'

import { Avatar, Typography, Space } from 'antd'

import SEN from './sen.svg'

type TypeBrand = {
  lite?: string
  href?: string
  size?: number
}

const Brand = forwardRef<HTMLElement, TypeBrand>(
  ({ lite, href = '', size = 38 }, ref) => {
    return (
      <Space
        size={0}
        onClick={() => (window.location.href = href)}
        style={{ cursor: 'pointer' }}
      >
        <Avatar size={size} src={SEN} ref={ref} />
        {lite ? null : (
          <Typography.Text
            style={{
              fontSize: size / 2,
              fontWeight: 300,
            }}
          >
            Sentre
          </Typography.Text>
        )}
      </Space>
    )
  },
)

export default Brand
