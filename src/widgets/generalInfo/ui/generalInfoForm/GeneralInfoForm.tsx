import React, { FormEvent, useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { AvatarType } from '@/features'
import { NewGetProfileResponseType } from '@/features/auth/model/types'
import { Button, ControlledDataPicker, ControlledInput, Typography, useTranslation } from '@/shared'
import { ControlledSelect } from '@/shared/ui/controlled/controlledSelect/ControlledSelect'
import { ControlledTextArea } from '@/shared/ui/controlled/controlledTextArea/ControlledTextArea'
import { useGeneralInfoForm } from '@/widgets/generalInfo/ui/generalInfoForm/useGeneralInfoForm'
import { getCities } from '@/widgets/generalInfo/ui/getCities'
import { CountriesList, getCountries } from '@/widgets/generalInfo/ui/getContries'
import { ProfileImageWithCrop } from '@/widgets/generalInfo/ui/profileImage/ProfileImageWithCrop'
import { clsx } from 'clsx'

import s from './GeneralInfoForm.module.scss'

export type ProfileProps = {
  aboutMe?: null | string
  avatars?: AvatarType[]
  birthDate?: Date
  city?: null | string
  createdAt?: Date
  firstname: string
  id?: number
  isFriend?: boolean
  lastname: string
  username: null | string
}

type GeneralInfoFormProps = {
  className?: string
  myUserName?: null | string
  onSubmitProfile: SubmitHandler<{
    aboutMe: null | string
    city: null | string
    country: null | string
    dateOfBirth: Date | null
    firstName: null | string
    lastName: null | string
    userName: string
  }>

  profile: NewGetProfileResponseType
}
export const GeneralInfoForm = ({
  className,
  myUserName,
  onSubmitProfile,
  profile,
}: GeneralInfoFormProps) => {
  //todo change the 'username' to the "username" that came from the backend
  const { t } = useTranslation()
  const { control, handleSubmit, resetField, setError, trigger, watch } = useGeneralInfoForm(
    onSubmitProfile,
    profile,
    myUserName
  )

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit()
  }

  const [countryList, setCountryList] = useState<CountriesList>(null)
  const [citiesList, setCitiesList] = useState<any>(null)

  useEffect(() => {
    getCountries(setCountryList)
  }, [])

  const countryFromForm = watch('country')?.toLocaleLowerCase()

  useEffect(() => {
    if (countryFromForm) {
      resetField('city', { defaultValue: '' })
      getCities(countryFromForm, setCitiesList)
    }
  }, [countryFromForm, resetField])

  return (
    <>
      <form className={clsx(s.form, className)} onSubmit={handleSubmitForm}>
        <div className={s.container}>
          <div className={s.profileImage}>
            <ProfileImageWithCrop avatars={profile?.avatars && profile?.avatars[0]?.url} />
          </div>
          <div className={s.profileForm}>
            <ControlledInput
              className={s.textField}
              classNameWrapper={s.username}
              control={control}
              inputIsSearch={false}
              inputType={'text'}
              label={t.generalInfo.username + '*'}
              name={'userName'}
            />
            <ControlledInput
              className={s.textField}
              classNameWrapper={s.username}
              control={control}
              inputIsSearch={false}
              inputType={'text'}
              label={t.generalInfo.firstname + '*'}
              name={'firstName'}
            />
            <ControlledInput
              className={s.textField}
              classNameWrapper={s.username}
              control={control}
              inputIsSearch={false}
              inputType={'text'}
              label={t.generalInfo.lastname + '*'}
              name={'lastName'}
            />
            <ControlledDataPicker
              className={s.dataPicker}
              control={control}
              label={t.generalInfo.dateOfBirth}
              name={'dateOfBirth'}
            />
            <div className={s.area}>
              <ControlledSelect
                className={s.areaItem}
                control={control}
                label={t.generalInfo.country}
                name={'country'}
                options={countryList}
                placeholder={'Country'}
                rootClassName={s.areaItem}
              />
              <ControlledSelect
                className={s.areaItem}
                control={control}
                label={t.generalInfo.country}
                name={'city'}
                options={citiesList}
                placeholder={'City'}
                rootClassName={s.areaItem}
              />
            </div>
            <ControlledTextArea control={control} label={t.generalInfo.aboutMe} name={'aboutMe'} />
          </div>
        </div>
        <Button className={s.buttonSubmit} type={'submit'}>
          <Typography variant={'h3'}>{t.generalInfo.saveSettingsChange}</Typography>
        </Button>
      </form>
    </>
  )
}
//https://inctagram-tau.vercel.app/api/v1/users/profile/9a113752-26c0-402c-96f4-65ee99349aba
//https://inctagram-tau.vercel.app/api/v1/users/profile/
