import {
  mkCoin1Svg,
  mkCoin2Svg,
  rsCoin1Svg,
  rsCoin2Svg,
  rsCoin3Svg,
} from 'static/images/systems'

const REVENUE_IMGS = [rsCoin3Svg, rsCoin2Svg, rsCoin1Svg]
const MINING_IMGS = [mkCoin1Svg, mkCoin2Svg]

type RevenueAnimationProps = { items?: string[] }

export const RevenueAnimation = ({ items }: RevenueAnimationProps) => {
  return (
    <div className="wrap-animation-utilities revenue">
      {REVENUE_IMGS.map((img, idx) => (
        <div key={idx} className={`item-bounce bounce-${idx + 1}`}>
          <img src={img} alt={`coin-${idx}`} />
        </div>
      ))}
    </div>
  )
}
export const MiningAnimation = ({ items }: RevenueAnimationProps) => {
  return (
    <div className="wrap-animation-utilities mining">
      {MINING_IMGS.map((img, idx) => (
        <div key={idx} className={`item-bounce bounce-${idx + 1}`}>
          <img src={img} alt={`coin-${idx}`} />
        </div>
      ))}
    </div>
  )
}
