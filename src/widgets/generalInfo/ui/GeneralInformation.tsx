import React from 'react'

import { useNewGetProfileQuery, useNewUpdateProfileMutation } from '@/features'
import { GeneralInfoForm } from '@/widgets/generalInfo/ui/generalInfoForm/GeneralInfoForm'
import { omit } from 'remeda'

import s from './GeneralInformation.module.scss'

type GeneralInfo = {
  aboutMe: null | string
  city: null | string
  country: null | string
  dateOfBirth: Date | null
  firstName: null | string
  lastName: null | string
  userName: string
}
export const GeneralInformation = () => {
  //todo add another request for new back
  const [updateProfile, { error: updateProfileError }] = useNewUpdateProfileMutation()
  const { data: profileData, isLoading: isLoadingProfile } = useNewGetProfileQuery()

  if (!profileData) {
    return <div>Loading</div>
  }
  const onSubmitHandler = (generalIngo: GeneralInfo) => {
    updateProfile(omit(generalIngo, ['country']))
  }

  return (
    <div className={s.genContainer}>
      <GeneralInfoForm
        myUserName={profileData.userName}
        onSubmitProfile={onSubmitHandler}
        profile={profileData}
      />
    </div>
  )
}
