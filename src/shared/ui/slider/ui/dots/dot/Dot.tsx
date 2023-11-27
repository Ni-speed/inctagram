import React, { useContext } from 'react'

import { SliderContext } from '../../../model/sliderContext'

import s from './dot.module.scss'

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
