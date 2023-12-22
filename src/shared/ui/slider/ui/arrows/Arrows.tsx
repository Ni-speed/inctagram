import React, { useContext } from 'react'

import { ArrowLeftIcon, ArrowRightIcon } from '../../../..'
import { SliderContext } from '../../model/sliderContext'

import s from './arrows.module.scss'

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
