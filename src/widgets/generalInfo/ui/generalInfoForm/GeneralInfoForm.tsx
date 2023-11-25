import React, { FormEvent, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { ControlledInput, Select, useTranslation } from '@/shared'
import { ControlledSelect } from '@/shared/ui/controlled/controlledSelect/ControlledSelect'
import { ControlledTextArea } from '@/shared/ui/controlled/controlledTextArea/ControlledTextArea'
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
    /*dateOfBirth?: Date*/
    firstname: string
    lastname: string
    username: string
  }>
  options: any
}
export const GeneralInfoForm = ({ className, onSubmit, options }: GeneralInfoFormProps) => {
  //todo change the 'username' to the "username" that came from the backend
  const { control, handleSubmit, register, setError } = useGeneralInfoForm(onSubmit, 'username')
  const { t } = useTranslation()
  const [birthday, setBirthday] = useState<Date | null>(null)
  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit()
  }

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
        <ControlledTextArea control={control} label={t.generalInfo.aboutMe} name={'aboutMe'} />

        <button type={'submit'}>submit</button>
      </form>
    </>
  )
}
