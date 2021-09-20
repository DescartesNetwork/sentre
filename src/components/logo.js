import React from 'react'
import PropType from 'prop-types'

function Logo(props) {
  const { src } = props
  return (
    <div className="logo">
      <img src={src} alt="" />
    </div>
  )
}

Logo.PropsType = {
  src: PropType.string.isRequired,
}

export default Logo
