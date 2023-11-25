import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'

import { GeneralInfoForm } from '@/widgets/generalInfo/ui/generalInfoForm/GeneralInfoForm'

import s from './GeneralInformation.module.scss'

type GeneralIngo = {
  aboutMe?: string
  city?: string
  country?: string
  /* dateOfBirth?: Date*/
  firstname: string
  lastname: string
  username: string
}
export const GeneralInformation = () => {
  const onSubmitHandler = (generalIngo: GeneralIngo) => {
    console.log('generalIngo', generalIngo)
  }
  const options = useMemo(() => countryList(), [])

  console.log('ddd')

  return (
    <div className={s.genContainer}>
      <div className={s.photo}>Foto</div>
      <div className={s.form}>
        <GeneralInfoForm onSubmit={onSubmitHandler} options={options} />
      </div>
    </div>
  )
}
