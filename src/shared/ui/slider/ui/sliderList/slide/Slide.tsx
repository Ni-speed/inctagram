import React from 'react'

import SlideImage from './slideImage/SlideImage'

import s from './slide.module.scss'

type PropsType = {
  data: { title: string; url: string }
}

export default function Slide({ data: { title, url } }: PropsType) {
  return (
    <div className={s.slide}>
      <SlideImage alt={title} src={url} />
    </div>
  )
}
