import { useTransition } from 'react'

import { TextArea } from '../../..'
import { Typography, useTranslation } from '../../../..'
import { useGetMeQuery, useGetProfileQuery } from '../../../../../features'
import { skipToken } from '@reduxjs/toolkit/query'
import Image from 'next/image'

import s from './addDescription.module.scss'
type IProps = {
  onChange: (value: string) => void
  value: string
}

export const AddDescription = ({ onChange, value }: IProps) => {
  const { data: meData, isLoading: isLoadingMe } = useGetMeQuery()
  const { data: profileData, isLoading: isLoadingProfile } = useGetProfileQuery({
    profileId: meData?.id ?? skipToken,
  })
  const imgUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ctio9d7UbPoFkuH6-h1kqcruqY3kgjwBSA&usqp=CAU'

  const { t } = useTranslation()

  return (
    <>
      <div className={s.avatarAndName}>
        <div className={s.avatar}>
          <Image
            alt={'avatar'}
            height={36}
            src={profileData?.avatars[0]?.url || imgUrl}
            width={36}
          ></Image>
        </div>
        <div className={s.name}>
          <Typography variant={'regularText16'}></Typography>URLProfile
        </div>
      </div>
      <div>
        <TextArea
          className={s.textarea}
          label={t.modalAddPost.titleTextarea}
          maxLength={500}
          onChange={e => onChange(e.currentTarget.value)}
          value={value}
        ></TextArea>
        <div className={s.text}>
          <Typography variant={'smallText'}>{`${value.length}/500`}</Typography>
        </div>
      </div>
    </>
  )
}
