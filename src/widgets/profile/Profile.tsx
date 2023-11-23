import { FC } from 'react'

import s from ''
import { Typography } from '@/shared'
import Image from 'next/image'
type Props = {
  user: { avatar: string; name: string }
}
export const Profile: FC<Props> = ({ user }) => {
  return (
    <>
      <Image
        alt={'avatar'}
        className={s.avatar}
        height={204}
        placeholder={'blur'}
        src={user.avatar}
        width={204}
      />
      <Typography>URLProfile</Typography>
    </>
  )
}
