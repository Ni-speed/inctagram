import React, { FormEvent } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { serverErrorResponseHandler } from '@/features/auth/lib/serverErrorResponseHandler'
import { serverErrorSignIn } from '@/features/auth/model/errors'
import { NewErrorSignUpResponse } from '@/features/auth/model/types'
import { Button, ControlledInput, Typography } from '@/shared'
import { useTranslation } from '@/shared/hooks'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './singInForm.module.scss'

import { useSingInForm } from '..'

type SingInFormProps = {
  className?: string
  errorMessage?: NewErrorSignUpResponse
  // todo fix comments
  /*errorMessage?: LoginErrors*/
  isQuery: boolean
  onSubmit: SubmitHandler<{
    email: string
    password: string
  }>
}

export const SingInForm = ({ className, errorMessage, isQuery, onSubmit }: SingInFormProps) => {
  const { control, handleSubmit, setError } = useSingInForm(onSubmit)
  const { t } = useTranslation()

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit()
  }

  //todo does it change from if to useEffect  and fix comments
  if (errorMessage) {
    serverErrorResponseHandler({
      /*code: errorMessage.originalStatus,*/
      errorResponse: errorMessage,
      serverErrorHandler: serverErrorSignIn,
      setError,
      t,
    })
  }

  return (
    <>
      <form className={clsx(s.form, className)} onSubmit={handleSubmitForm}>
        <ControlledInput
          autoComplete={'email'}
          className={s.textField}
          classNameWrapper={s.email}
          control={control}
          inputIsSearch={false}
          inputType={'email'}
          label={t.registerForm.fields.email}
          name={'email'}
          placeholder={t.logInForm.placeholder.email}
        />
        <ControlledInput
          className={s.textField}
          classNameError={s.errorResponse}
          classNameWrapper={clsx(s.password, errorMessage && s.errorHeight)}
          control={control}
          inputIsSearch={false}
          inputType={'password'}
          label={t.registerForm.fields.password}
          name={'password'}
          placeholder={t.logInForm.placeholder.password}
        />
        <div className={s.link}>
          <Link href={'/auth/forgotPassword'}>
            <Typography className={s.textLink} variant={'regularText14'}>
              {t.linksButtons.forgotPassword}
            </Typography>
          </Link>
        </div>
        <Button className={s.button} disabled={isQuery} fullWidth type={'submit'}>
          <Typography variant={'h3'}>{t.linksButtons.signIn}</Typography>
        </Button>
      </form>
    </>
  )
}
