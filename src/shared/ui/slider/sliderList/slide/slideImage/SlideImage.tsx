import React from 'react'

import Image from 'next/image'

import s from './slideImage.module.scss'

type PropsType = {
  alt: string
  src: string
}

export default function SlideImage({ alt, src }: PropsType) {
  return <Image alt={alt} className={s.slideImage} height={240} src={src} width={234} />
}
