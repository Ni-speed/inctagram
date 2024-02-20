import React from 'react'

import { useGetMeQuery, useGetProfileQuery, useUpdateProfileMutation } from '@/features'
import { UpdateProfileError } from '@/features/auth/model/types'
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
  const [updateProfile, { error: updateProfileError, isSuccess: successProfileUpdate }] =
    useUpdateProfileMutation()
  const { data: me } = useGetMeQuery()
  const { data: profile, isLoading } = useGetProfileQuery({ profileId: me?.id })
  let profileUpdateError = undefined

  if (!profile) {
    return <div>Loading</div>
  }
  if (updateProfileError) {
    const error = updateProfileError as UpdateProfileError

    profileUpdateError = error

    alert('Error! Server is not available!')
  }
  if (successProfileUpdate) {
    alert('Your settings are saved!')
  }
  const onSubmitHandler = (generalIngo: GeneralInfo) => {
    updateProfile(omit(generalIngo, ['country']))
  }

  return (
    <div className={s.genContainer}>
      <GeneralInfoForm
        errorProfileUpdate={profileUpdateError}
        myUserName={me && me.username}
        onSubmitProfile={onSubmitHandler}
        profile={profile}
      />
    </div>
  )
}
