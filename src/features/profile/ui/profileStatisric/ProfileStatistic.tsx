import { FC } from 'react'

import { Typography } from '@/shared'

import s from './ProfileStatistic.module.scss'

type ProfileStatisticType = {
  count: number
  label: string
}
export const ProfileStatistic: FC<ProfileStatisticType> = ({ count, label }) => {
  return (
    //TODO need fix Internationalization & add useTranslation
    <li className={s.statistic}>
      <Typography variant={'boldText14'}>{count}</Typography>
      <Typography variant={'regularText14'}>{label}</Typography>
    </li>
  )
}
