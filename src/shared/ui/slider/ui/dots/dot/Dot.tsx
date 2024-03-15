import React, { useContext } from 'react'

import s from './dot.module.scss'

import { SliderContext } from '../../../model/sliderContext'

type PropsType = {
  number: number
}

export const Dot = ({ number }: PropsType) => {
  const { goToSlide, slideNumber } = useContext(SliderContext)

  return (
    <div
      className={`${s.dot} ${slideNumber === number ? s.selected : ''}`}
      onClick={() => goToSlide(number)}
    />
  )
}
