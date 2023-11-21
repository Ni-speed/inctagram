import { useEffect, useRef } from 'react'

import { Slider, Typography } from '@/shared'
import Image from 'next/image'

import s from './publicPost.module.scss'

type PropsType = {
  description: string
  items: { title: string; url: string }[]
  time: string
  user: { avatar: string; name: string }
}

export const PublicPost = ({ description, items, time, user }: PropsType) => {
  return (
    <div className={s.wrapper}>
      <Slider items={items}></Slider>
      <div className={s.avatarName}>
        <Image
          alt={'Avatar of the autor'}
          className={s.avatar}
          height={36}
          src={user.avatar}
          width={36}
        />

        <Typography className={s.name} variant={'h3'}>
          {user.name}
        </Typography>
      </div>
      <div className={s.timeOnline}>
        <Typography variant={'smallText'}>{time}</Typography>
      </div>
      <Typography as={'p'} className={s.text} variant={'regularText14'}>
        {description}
      </Typography>
    </div>
  )
}
