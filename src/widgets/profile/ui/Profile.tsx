import { FC } from 'react'

import { useGetProfileQuery } from '@/features'
import { Typography } from '@/shared'
import { HeroProfilePlaceholder } from '@/widgets/heroProfilePlaceholder/HeroProfilePlaceholder'
import Image from 'next/image'
import Link from 'next/link'

import s from './profile.module.scss'

type PropsType = {}
export const Profile: FC<PropsType> = () => {
  const { data, isLoading } = useGetProfileQuery({ id: 1 })

  if (isLoading) {
    return <>Loading...</>
  }
  const umgUrl = `https://s3-alpha-sig.figma.com/img/0864/e8b2/ce4393ce58c5a816b9c5719f6c95e12f?Expires=1701648000&Signature=UTkHB1b8st5qxm4hIryCgZ~nq4Ga7xAQ593q9bYQMpVrbISvm5Q17nPEQ1Hr9BiCYtVmaY5LcBoBx2mGhboK6JAsoTxzMXbtTChsn0vSaL4BVkcfSnvDANafnvwCY3K8-qjpgoMd~figRZQ0szqSVL-adOTU-cG73bRFWC9EFrfC92UlxX5KTQYDmlwD69gp2BpkzMsxwWJR9Y2X~nn6EUnBniE-STXovYwgn8MvrYHMvRzXegI16To6az7NIKUVa6OG6kJjXbsX2ZvKq6GCyK3ymVrA5EqzPM1tCQAOfOBTymN8s1QSk8Q-qNF21DkohDgXGfdeeezVThfqVc8Cwg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`

  return (
    <>
      <div className={s.profilePageHeaderWrapper}>
        <Image
          alt={'avatar'}
          className={s.avatar}
          height={204}
          src={data?.avatars[0].url || umgUrl}
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
