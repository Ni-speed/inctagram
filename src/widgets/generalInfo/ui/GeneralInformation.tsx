import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'

import { useGetMeQuery, useGetProfileQuery, useUpdateProfileMutation } from '@/features'
import { GeneralInfoForm } from '@/widgets/generalInfo/ui/generalInfoForm/GeneralInfoForm'
import { omit } from 'remeda'

import s from './GeneralInformation.module.scss'

type GeneralInfo = {
  aboutMe: null | string
  city: null | string
  country: null | string
  dateOfBirth: Date | string
  firstname: string
  lastname: string
  username: null | string
}
export const GeneralInformation = () => {
  const [updateProfile, { error: updateProfileError }] = useUpdateProfileMutation()
  const { data: me } = useGetMeQuery()
  const { data: profile, isLoading } = useGetProfileQuery({ profileId: me?.id })

  const onSubmitHandler = (generalIngo: GeneralInfo) => {
    updateProfile(omit(generalIngo, ['country']))
  }
  const options = useMemo(() => countryList(), [])

  return (
    <div className={s.genContainer}>
      <GeneralInfoForm
        myUserName={me && me.username}
        onSubmitProfile={onSubmitHandler}
        options={options}
        profile={profile}
      />
    </div>
  )
}
