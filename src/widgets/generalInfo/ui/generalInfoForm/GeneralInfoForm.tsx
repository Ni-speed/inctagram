import React, { FormEvent, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { ControlledInput, Select, useTranslation } from '@/shared'
import { ControlledSelect } from '@/shared/ui/controlled/controlledSelect/controlledSelect'
import { DatePicker } from '@/widgets/datePicker'
import { useGeneralInfoForm } from '@/widgets/generalInfo/ui/generalInfoForm/useGeneralInfoForm'
import { clsx } from 'clsx'

import s from './GeneralInfoForm.module.scss'

type GeneralInfoFormProps = {
  className?: string
  onSubmit: SubmitHandler<{
    aboutMe?: string
    city?: string
    country?: string
    dateOfBirth?: Date
    firstname: string
    lastname: string
    username: string
  }>
  options: any
}
export const GeneralInfoForm = ({ className, onSubmit, options }: GeneralInfoFormProps) => {
  const { control, handleSubmit, register, setError } = useGeneralInfoForm(onSubmit)
  const { t } = useTranslation()
  const [birthday, setBirthday] = useState<Date | null>(null)
  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
    /*await handleSubmit()*/
  }

  //const [value, setValue] = useState<string>('s')

  console.log('options', options)
  /*const changeHandler = (country: string) => {
            const countryList = options.getValueList()
        
            setValue(countryList[country.toLowerCase()])
          }*/

  return (
    <>
      <form className={clsx(s.form, className)} onSubmit={handleSubmitForm}>
        <ControlledInput
          className={s.textField}
          classNameWrapper={s.username}
          control={control}
          inputIsSearch={false}
          inputType={'text'}
          label={t.generalInfo.username + '*'}
          name={'username'}
        />
        <ControlledInput
          className={s.textField}
          classNameWrapper={s.username}
          control={control}
          inputIsSearch={false}
          inputType={'text'}
          label={t.generalInfo.firstname + '*'}
          name={'firstname'}
        />
        <ControlledInput
          className={s.textField}
          classNameWrapper={s.username}
          control={control}
          inputIsSearch={false}
          inputType={'text'}
          label={t.generalInfo.lastname + '*'}
          name={'lastname'}
        />
        {/* <DatePicker setStartDate={setBirthday} startDate={birthday} />*/}
        <ControlledSelect
          control={control}
          label={t.generalInfo.country}
          name={'country'}
          options={options.data}
        />
        <ControlledSelect
          control={control}
          label={t.generalInfo.country}
          name={'city'}
          options={options.data}
        />
        <button type={'submit'}>submit</button>
      </form>
    </>
  )
}
