import React, { FormEvent } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { useSingInForm } from '..'
import { useTranslation } from '@/shared/hooks'
import { Button, ControlledInput, Typography } from '@/shared/ui'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './singInForm.module.scss'

type SingInFormProps = {
  className?: string
  errorMessage?: string
  onSubmit: SubmitHandler<{
    email: string
    password: string
  }>
}

export const SingInForm = ({ className, errorMessage, onSubmit }: SingInFormProps) => {
  const { control, handleSubmit } = useSingInForm(onSubmit)
  const { t } = useTranslation()

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit()
  }

  return (
    <>
      <form className={clsx(s.form, className)} onSubmit={handleSubmitForm}>
        <ControlledInput
          className={s.textField}
          classNameWrapper={s.email}
          control={control}
          inputIsSearch={false}
          label={t.registerForm.fields.email}
          name={'email'}
        />
        <ControlledInput
          className={s.textField}
          classNameError={s.errorResponse}
          classNameWrapper={clsx(s.password, errorMessage && s.errorHeight)}
          control={control}
          errorMessage={errorMessage}
          inputIsSearch={false}
          inputType={'password'}
          label={t.registerForm.fields.password}
          name={'password'}
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
