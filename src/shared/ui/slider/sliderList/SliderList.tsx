import React, { useContext } from 'react'

import { SliderContext } from '../Slider'
import Slide from './slide/Slide'

import s from './sliderList.module.scss'

export default function SlidesList() {
  const { items, slideNumber } = useContext(SliderContext)

  return (
    <div
      className={s.slideList}
      style={{ transform: `translateY(-${(slideNumber * 100) / items.length}%)` }}
    >
      {items.map((slide, index) => (
        <Slide data={slide} key={index} />
      ))}
    </div>
  )
}
