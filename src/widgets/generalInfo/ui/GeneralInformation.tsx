import React from 'react'

import { useGetMeQuery, useGetProfileQuery, useUpdateProfileMutation } from '@/features'
import { GeneralInfoForm } from '@/widgets/generalInfo/ui/generalInfoForm/GeneralInfoForm'
import { omit } from 'remeda'

import s from './GeneralInformation.module.scss'

type GeneralInfo = {
  aboutMe: null | string
  birthDate: Date | string
  city: null | string
  country: null | string
  firstname: string
  lastname: string
  username: null | string
}
export const GeneralInformation = () => {
  const [updateProfile, { error: updateProfileError }] = useUpdateProfileMutation()
  const { data: me } = useGetMeQuery()
  const { data: profile, isLoading } = useGetProfileQuery({ profileId: me?.id })

  if (!profile) {
    return <div>Loading</div>
  }
  const onSubmitHandler = (generalIngo: GeneralInfo) => {
    updateProfile(omit(generalIngo, ['country']))
  }

  return (
    <div className={s.genContainer}>
      <GeneralInfoForm
        myUserName={me && me.username}
        onSubmitProfile={onSubmitHandler}
        profile={profile}
      />
    </div>
  )
}
