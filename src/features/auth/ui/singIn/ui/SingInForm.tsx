import React, { FormEvent } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { useSingInForm } from '..'
import { LoginErrors } from '@/features/auth/model/types'
import { useTranslation } from '@/shared/hooks'
import { Button, ControlledInput, Typography } from '@/shared/ui'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './singInForm.module.scss'

type SingInFormProps = {
  className?: string
  errorMessage?: LoginErrors
  onSubmit: SubmitHandler<{
    email: string
    password: string
  }>
}

export const SingInForm = ({ className, errorMessage, onSubmit }: SingInFormProps) => {
  const { control, handleSubmit, setError } = useSingInForm(onSubmit)
  const { t } = useTranslation()

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit()
  }

  if (errorMessage) {
    switch (errorMessage.originalStatus) {
      case 400:
        setError('email', {
          message: t.logInForm.error.incorrectInputData,
          type: 'manual',
        })
        break
      case 411:
        setError('email', {
          message: t.logInForm.error.userNotCreated,
          type: 'manual',
        })
        break
      case 412:
        setError('email', {
          message: t.logInForm.error.emailNotConfirmed,
          type: 'manual',
        })
        break
      case 413:
        setError('email', {
          message: t.logInForm.error.invalidPasswordOrEmail,
          type: 'manual',
        })
        setError('password', {
          message: t.logInForm.error.invalidPasswordOrEmail,
          type: 'manual',
        })
        break
      default:
        setError('email', {
          message: 'Some Error',
          type: 'manual',
        })
    }
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
          <Link href={'/forgotPassword'}>
            <Typography className={s.textLink} variant={'regularText14'}>
              {t.linksButtons.forgotPassword}
            </Typography>
          </Link>
        </div>
        <Button className={s.button} fullWidth type={'submit'}>
          <Typography variant={'h3'}>{t.linksButtons.signIn}</Typography>
        </Button>
      </form>
    </>
  )
}
