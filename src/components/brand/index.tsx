import { CSSProperties } from 'react'
import { useHistory } from 'react-router-dom'

import fullLogo from 'static/images/sen-full.png'
import liteLogo from 'static/images/sen-lite.png'

const Brand = ({
  style,
  lite = false,
}: {
  lite?: boolean
  style: CSSProperties
}) => {
  const history = useHistory()

  return (
    <img
      src={lite ? liteLogo : fullLogo}
      style={style}
      alt="logo"
      onClick={() => history.push('/')}
    />
  )
}

export default Brand
