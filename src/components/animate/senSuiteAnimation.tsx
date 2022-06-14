import { useCallback, useEffect, useRef, useState } from 'react'

import './index.less'

let timer: NodeJS.Timeout
const TRANSLATE_Y_RATIO_FIRST = 2.2
const TRANSLATE_Y_RATIO_SEC = 2.5
const TRANSLATE_Y_RATIO_LAST = 5.5

const TRANSLATE_Y_RATIO_MOBILE_FIRST = 1.8
const TRANSLATE_Y_RATIO_MOBILE_SEC = 2.2
const TRANSLATE_Y_RATIO_MOBILE_LAST = 6

const SPACING_HORIZONTAL_SEC = 80
const SPACING_HORIZONTAL_LAST = 30

const SPACING_HORIZONTAL_MOBILE_SEC = 50
const SPACING_HORIZONTAL_MOBILE_LAST = 15

type ImagesTypes = { img: string; imgLabel: string }
type SenSuiteAnimationProps = {
  items: ImagesTypes[]
  baseImg?: string
  isMobile?: boolean
}

const SenSuiteAnimation = ({
  items,
  baseImg = '',
  isMobile = false,
}: SenSuiteAnimationProps) => {
  const elemRef = useRef<HTMLDivElement>(null)
  const [positionY, setPositionY] = useState(0)
  const [isStoped, setIsStoped] = useState(false)

  const translateYRatioFirst = isMobile
    ? TRANSLATE_Y_RATIO_MOBILE_FIRST
    : TRANSLATE_Y_RATIO_FIRST
  const translateYRatioSec = isMobile
    ? TRANSLATE_Y_RATIO_MOBILE_SEC
    : TRANSLATE_Y_RATIO_SEC
  const translateYRatioLast = isMobile
    ? TRANSLATE_Y_RATIO_MOBILE_LAST
    : TRANSLATE_Y_RATIO_LAST

  const spaceHorizontalSec = isMobile
    ? SPACING_HORIZONTAL_MOBILE_SEC
    : SPACING_HORIZONTAL_SEC
  const spaceHorizontalLast = isMobile
    ? SPACING_HORIZONTAL_MOBILE_LAST
    : SPACING_HORIZONTAL_LAST

  const calculatePositionY = useCallback(
    (translate: number, index: number) => {
      switch (true) {
        case index === 0:
          return translate / translateYRatioFirst
        case index === 1:
        case index === 2:
          return translate / translateYRatioSec
        case index === 3:
        case index === 4:
          return translate / translateYRatioLast
        default:
          return 1
      }
    },
    [translateYRatioFirst, translateYRatioLast, translateYRatioSec],
  )

  const calculatePositionX = useCallback(
    (translate: number, index: number) => {
      switch (true) {
        case index === 0:
          return 0
        case index === 1:
        case index === 2:
          return translate * index + spaceHorizontalSec
        case index === 3:
        case index === 4:
          return translate * index + spaceHorizontalLast
        default:
          return 1
      }
    },
    [spaceHorizontalLast, spaceHorizontalSec],
  )

  const handleScroll = useCallback(
    (e: Event) => {
      if (!elemRef.current) return
      const boundingPosition = elemRef.current.getBoundingClientRect()

      const bPTop = boundingPosition.top
      const bPBottom = boundingPosition.bottom
      const bPHeight = boundingPosition.height
      const windowH = window.innerHeight

      const translateY = bPHeight - (bPBottom - windowH) - 0.2 * bPHeight
      const scaleRatio = 1 / bPHeight

      if (timer) clearTimeout(timer)

      // add translate style to image
      if (bPTop + 0.2 * bPHeight < windowH) {
        let reCalculateTranslateY = translateY

        if (bPBottom + 0.2 * bPHeight < windowH)
          reCalculateTranslateY = bPHeight

        for (const item in items) {
          const numItem = Number(item)
          const transY = calculatePositionY(reCalculateTranslateY, numItem)
          const tranX = calculatePositionX(reCalculateTranslateY / 10, numItem)
          document
            .querySelector(`.wrap-img.item-img_${numItem + 1}`)
            ?.setAttribute(
              'style',
              `transform: scale(${
                scaleRatio * reCalculateTranslateY
              }) translate3d(${
                (numItem + 1) % 2 === 0 ? '-' : ''
              }${tranX}px, -${transY}px, 0) perspective(0px)`,
            )
        }
      }

      // disabled image label when parent element hidden in viewport
      if (bPTop > windowH) setIsStoped(false)

      // set stoped position Y when scroll down
      if (positionY - 20 < window.scrollY)
        timer = setTimeout(() => setIsStoped(true), 100)
      setPositionY(window.scrollY)
    },
    [calculatePositionX, calculatePositionY, items, positionY],
  )

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const activeImgW = isMobile ? 120 : 185
  const labelImgW = isStoped ? activeImgW : 0

  return (
    <div className="sen-animation-wrapper" ref={elemRef}>
      {items.map(({ img, imgLabel }, idx) => (
        <div className={`wrap-img item-img_${idx + 1}`} key={idx}>
          <img src={img} alt="img-content" />
          <img
            className={`img-label img-label-${idx + 1}`}
            style={{ width: labelImgW }}
            src={imgLabel}
            alt="img-label"
          />
        </div>
      ))}
      <div className="base-img">
        <img src={baseImg} alt="base-img" />
      </div>
    </div>
  )
}

export default SenSuiteAnimation
