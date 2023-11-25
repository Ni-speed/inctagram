import React, { useMemo } from 'react'
import countryList from 'react-select-country-list'

import { GeneralInfoForm } from '@/widgets/generalInfo/ui/generalInfoForm/GeneralInfoForm'

import s from './GeneralInformation.module.scss'

type GeneralIngo = {
  aboutMe?: string
  city?: string
  dateOfBirth?: Date
  firstname: string
  lastname: string
  username: string
}
export const GeneralInformation = () => {
  const handler = (generalIngo: GeneralIngo) => {
    console.log('generalIngo', generalIngo)
  }
  const options = useMemo(() => countryList(), [])

  console.log('ddd')

  return (
    <div className={s.genContainer}>
      <div className={s.photo}>Foto</div>
      <div className={s.form}>
        <GeneralInfoForm onSubmit={handler} options={options} />
      </div>
    </div>
  )
}
