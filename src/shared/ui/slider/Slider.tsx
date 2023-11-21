import React, { TouchEvent, createContext, useEffect, useState } from 'react'

import Arrows from './arrows/Arrows'
import { Dots } from './dots/Dots'
import SlidesList from './sliderList/SliderList'

import s from './slider.module.scss'

type ContextType = {
  changeSlide: (direction?: number) => void
  goToSlide: (number: number) => void
  items: { title: string; url: string }[]
  slideNumber: number
  slidesCount: number
}

export const SliderContext = createContext<ContextType>({
  changeSlide: (direction?: number | undefined) => {},
  goToSlide: (number: number) => {},
  items: [{ title: '', url: '' }],
  slideNumber: 0,
  slidesCount: 0,
})

type PropsType = {
  autoPlay: boolean
  autoPlayTime: number
  height: string
  items: { title: string; url: string }[]
  width: string
}

export const Slider = ({ autoPlay, autoPlayTime, height, items, width }: PropsType) => {
  const [slide, setSlide] = useState(0)
  const [touchPosition, setTouchPosition] = useState<null | number>(null)

  const changeSlide = (direction = 1) => {
    let slideNumber = 0

    if (slide + direction < 0) {
      slideNumber = items.length - 1
    } else {
      slideNumber = (slide + direction) % items.length
    }

    setSlide(slideNumber)
  }

  const goToSlide = (number: number) => {
    setSlide(number % items.length)
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX

    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (touchPosition === null) {
      return
    }

    const currentPosition = e.touches[0].clientX
    const direction = touchPosition - currentPosition

    if (direction > 10) {
      changeSlide(1)
    }

    if (direction < -10) {
      changeSlide(-1)
    }

    setTouchPosition(null)
  }

  useEffect(() => {
    if (!autoPlay) {
      return
    }

    const interval = setInterval(() => {
      changeSlide(1)
    }, autoPlayTime)

    return () => {
      clearInterval(interval)
    }
  }, [items.length, slide]) // when images uploaded or slide changed manually we start timer

  return (
    <div
      className={s.slider}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      style={{ height, width }}
    >
      <SliderContext.Provider
        value={{
          changeSlide,
          goToSlide,
          items,
          slideNumber: slide,
          slidesCount: items.length,
        }}
      >
        <Arrows />
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  )
}

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  height: '240px',
  width: '234px',
}
