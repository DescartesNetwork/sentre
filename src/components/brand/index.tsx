import { CSSProperties } from 'react'
import { useHistory } from 'react-router-dom'

import { senFullDarkPng, senFullPng, senLitePng } from 'static/images/systems'

const Brand = ({
  style,
  lite = false,
  darkTheme,
}: {
  lite?: boolean
  style: CSSProperties
  darkTheme?: boolean
}) => {
  const history = useHistory()

  return (
    <img
      src={lite ? senLitePng : darkTheme ? senFullDarkPng : senFullPng}
      style={style}
      alt="logo"
      onClick={() => history.push('/')}
    />
  )
}

export default Brand
