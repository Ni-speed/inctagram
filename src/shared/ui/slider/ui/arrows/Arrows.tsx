import React, { useContext } from 'react'

import s from './arrows.module.scss'

import { ArrowLeftIcon, ArrowRightIcon } from '../../../..'
import { SliderContext } from '../../model/sliderContext'

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext)

  return (
    <div className={s.arrows}>
      <ArrowLeftIcon
        className={s.arrow}
        height={14}
        onClick={() => changeSlide(-1)}
        viewBox={'0 0 10 10'}
        width={14}
      />
      <ArrowRightIcon
        className={s.arrow}
        height={14}
        onClick={() => changeSlide(1)}
        viewBox={'0 0 10 10'}
        width={14}
      />
    </div>
  )
}
