import React, { FormEvent, ReactElement, useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { ControlledInput, Select, useTranslation } from '@/shared'
import { ControlledSelect } from '@/shared/ui/controlled/controlledSelect/ControlledSelect'
import { ControlledTextArea } from '@/shared/ui/controlled/controlledTextArea/ControlledTextArea'
import { DatePicker } from '@/widgets/datePicker'
import { useGeneralInfoForm } from '@/widgets/generalInfo/ui/generalInfoForm/useGeneralInfoForm'
import { clsx } from 'clsx'

import s from './GeneralInfoForm.module.scss'

type CountryType = {
  label: string
  value: string
}
type CountriesList = CountryType[] | null

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
  const { control, handleSubmit, register, resetField, setError, watch } = useGeneralInfoForm(
    onSubmit,
    'username'
  )
  const { t } = useTranslation()
  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit()
  }
  const [birhD, setBirhD] = useState<any>()
  const [countryList, setCountryList] = useState<CountriesList>(null)
  const [citiesList, setCitiesList] = useState<any>(null)

  useEffect(() => {
    async function logMovies() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all')

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()

        const names = data.map((country: any) => {
          return { label: country.name.common, value: country.name.common }
        })

        names.sort((a: CountryType, b: CountryType) => {
          const nameA = a.label.toUpperCase()
          const nameB = b.label.toUpperCase()

          if (nameA < nameB) {
            return -1
          }
          if (nameA > nameB) {
            return 1
          }

          return 0
        })

        setCountryList(names)
      } catch (error) {
        console.error('Error fetching countries:')
      }
    }

    logMovies()
  }, [])

  const contryFromForm = watch('country')?.toLocaleLowerCase()

  useEffect(() => {
    resetField('city')

    async function fetchCities() {
      const url = 'https://countriesnow.space/api/v0.1/countries/cities'
      const requestBody = {
        country: contryFromForm,
      }

      try {
        const response = await fetch(url, {
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const citiesData = await response.json()

        const citiesList = citiesData.data.map((city: string[]) => {
          return { label: city, value: city }
        })

        setCitiesList(citiesList)
      } catch (error) {
        console.error('Error fetching cities:')
      }
    }

    fetchCities()
  }, [contryFromForm])

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
        <DatePicker className={s.dataPicker} setStartDate={setBirhD} startDate={birhD} />
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

        <button type={'submit'}>submit</button>
      </form>
    </>
  )
}