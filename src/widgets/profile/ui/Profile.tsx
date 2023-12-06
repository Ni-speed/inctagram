import { FC } from 'react'

import { useGetProfileQuery } from '@/features'
import { Typography } from '@/shared'
import { HeroProfilePlaceholder } from '@/widgets/heroProfilePlaceholder/HeroProfilePlaceholder'
import Image from 'next/image'
import Link from 'next/link'

import s from './profile.module.scss'

type PropsType = {
  user: { avatar: string; name: string }
}
export const Profile: FC<PropsType> = ({ user }) => {
  const { data, isLoading } = useGetProfileQuery({ id: 1 })

  if (isLoading) {
    return <>Loading...</>
  }

  return (
    <>
      <div className={s.profilePageHeaderWrapper}>
        <Image
          alt={'avatar'}
          className={s.avatar}
          height={204}
          src={data!.avatars[0].url}
          width={204}
        />
        <div className={s.statisticWrapper}>
          <Typography>URLProfile</Typography>
          <ul className={s.profileStatistics}>
            <li className={s.statistic}>
              <span className={s.counterStats}>2218</span>
              <Typography className={s.listText}>Following</Typography>
            </li>
            <li className={s.statistic}>
              <span className={s.counterStats}>3358</span>
              <Typography className={s.listText}>Followers</Typography>
            </li>
            <li className={s.statistic}>
              <span className={s.counterStats}>4764</span>
              <Typography className={s.listText}>Publications</Typography>
            </li>
          </ul>
          <div className={s.textBlock}>
            <span className={s.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco
            </span>
            <Link className={s.link} href={'#'}>
              laboris nisi ut aliquip ex ea commodo consequat.
            </Link>
          </div>
        </div>
      </div>
      <HeroProfilePlaceholder />
    </>
  )
}
