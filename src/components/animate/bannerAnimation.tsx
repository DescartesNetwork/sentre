type ImageList = Record<string, string[]>
type BannerAnimationProps = { baseImg?: string; items: ImageList }

const BannerAnimation = ({ baseImg = '', items }: BannerAnimationProps) => {
  return (
    <div className="wrap-animation-wave">
      <div className="wave-base-img">
        <img src={baseImg} alt="base-img" />
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
