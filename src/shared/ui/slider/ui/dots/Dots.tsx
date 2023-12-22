import React, { useContext } from 'react'

import { SliderContext } from '../../model/sliderContext'
import { Dot } from './dot/Dot'

import s from './dots.module.scss'

export const Dots = () => {
  const { slidesCount } = useContext(SliderContext)

  const renderDots = () => {
    const dots = []

    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />)
    }

    return dots
  }

  return <div className={s.dots}>{renderDots()}</div>
}
