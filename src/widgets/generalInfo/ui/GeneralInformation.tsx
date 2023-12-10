import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'

import { useGetMeQuery, useGetProfileQuery, useUpdateProfileMutation } from '@/features'
import { GeneralInfoForm } from '@/widgets/generalInfo/ui/generalInfoForm/GeneralInfoForm'
import { omit } from 'remeda'

import s from './GeneralInformation.module.scss'

type GeneralInfo = {
  aboutMe?: string
  city?: string
  country?: string
  dateOfBirth?: Date
  firstname: string
  lastname: string
  username: string
}
export const GeneralInformation = () => {
  const [updateProfile, { error: updateProfileError }] = useUpdateProfileMutation()
  const { data: me } = useGetMeQuery()
  const { data: profile, isLoading } = useGetProfileQuery({ profileId: me?.id })

  console.log('profile', profile)
  const onSubmitHandler = (generalIngo: GeneralInfo) => {
    console.log('generalIngo', generalIngo)
    //updateProfile(omit(generalIngo, ['country']))
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
/*
"{
    --""username"": ""string"",
    --""firstname"": ""string"",
    --""lastname"": ""string"",
    --""city"": ""string"",
    --""dateOfBirth"": ""2023-11-17T11:51:20.585Z"",
    --""aboutMe"": ""string""
}"*/
