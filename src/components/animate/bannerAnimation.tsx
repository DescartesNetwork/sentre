import { useSelector } from 'react-redux'
import { AppState } from 'store'

type ImageList = Record<string, string[]>
type BannerAnimationProps = {
  baseImg?: string
  baseTitle?: string
  items: ImageList
}

const BannerAnimation = ({
  baseImg = '',
  baseTitle = 'Sen Store',
  items,
}: BannerAnimationProps) => {
  const theme = useSelector((state: AppState) => state.ui.theme)

  const titleColor = theme === 'dark' ? '#fff' : '#212433'

  return (
    <div className="wrap-animation-wave">
      <div className="wave-base-img">
        <img src={baseImg} alt="base-img" />
        <span style={{ color: titleColor }}>{baseTitle}</span>
      </div>
      <div className="wave-list-img">
        {Object.values(items).map((imgs, idx) => (
          <div key={idx} className="wave-imgs">
            {imgs.map((img, index) => (
              <div key={index} className="wave-img-item">
                <img
                  src={img}
                  alt={`item-${index}`}
                  style={{
                    animationDelay: `${2 + index / 5}s`,
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BannerAnimation
