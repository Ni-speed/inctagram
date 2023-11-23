import { FC } from 'react'

import { Slider, Typography } from '@/shared'
import { HeroProfilePlaceholder } from '@/widgets/heroProfilePlaceholder/HeroProfilePlaceholder'
import { Sidebar } from '@/widgets/sidebar'
import Image from 'next/image'

import s from './profile.module.scss'
type PropsType = {
  user: { avatar: string; name: string }
}
export const Profile: FC<PropsType> = ({ user }) => {
  return (
    <>
      <Image alt={'avatar'} className={s.avatar} height={204} src={user.avatar} width={204} />
      <Typography>URLProfile</Typography>
      <ul>
        <li>
          <span className={s.counterStats}>2218</span>
          <Typography className={s.listText}>Following</Typography>
        </li>
        <li>
          <span className={s.counterStats}>3358</span>
          <Typography className={s.listText}>Followers</Typography>
        </li>
        <li>
          <span className={s.counterStats}>4764</span>
          <Typography className={s.listText}>Publications</Typography>
        </li>
      </ul>
      <div className={s.textBlock}>
        <span className={s.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco
        </span>
        <a className={s.link} href={'#'}>
          laboris nisi ut aliquip ex ea commodo consequat.
        </a>
      </div>
      <HeroProfilePlaceholder />
    </>
  )
}
