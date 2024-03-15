import { FormEvent, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { NewErrorSignUpResponse } from '../../../model/types'
import { useRegisterForm } from '../lib'
import { serverErrorResponseHandler } from '@/features/auth/lib/serverErrorResponseHandler'
import { serverErrorSignUp } from '@/features/auth/model/errors'
import { Button, ControlledCheckbox, ControlledInput, Typography } from '@/shared'
import { useTranslation } from '@/shared/hooks'
import Link from 'next/link'

import s from './registerForm.module.scss'

type RegisterFormPropsType = {
  className?: string
  errorMessage?: NewErrorSignUpResponse
  isQuery?: boolean
  onSubmit: SubmitHandler<{
    email: string
    password: string
    userName: string
  }>
}

export const RegisterForm = ({
  className,
  errorMessage,
  isQuery,
  onSubmit,
}: RegisterFormPropsType) => {
  const { control, handleSubmit, setError } = useRegisterForm(onSubmit)
  const { t } = useTranslation()

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit()
  }

  useEffect(() => {
    if (errorMessage) {
      serverErrorResponseHandler({
        errorResponse: errorMessage,
        serverErrorHandler: serverErrorSignUp,
        setError,
        t,
      })
    }
  }, [errorMessage, setError, t])

  return (
    <>
      <form className={className} onSubmit={handleSubmitForm}>
        <ControlledInput
          className={s.textField}
          classNameWrapper={s.inputWrapper}
          control={control}
          inputIsSearch={false}
          label={t.registerForm.fields.username}
          name={'userName'}
        ></ControlledInput>
        <ControlledInput
          className={s.textField}
          classNameWrapper={s.inputWrapper}
          control={control}
          inputIsSearch={false}
          label={t.registerForm.fields.email}
          name={'email'}
        ></ControlledInput>
        <ControlledInput
          className={s.textField}
          classNameWrapper={s.inputWrapper}
          control={control}
          inputIsSearch={false}
          inputType={'password'}
          label={t.registerForm.fields.password}
          name={'password'}
        ></ControlledInput>
        <ControlledInput
          className={s.textField}
          classNameWrapper={s.inputWrapper}
          control={control}
          inputIsSearch={false}
          inputType={'password'}
          label={t.registerForm.fields.passwordConfirm}
          name={'confirmPassword'}
        ></ControlledInput>
        <ControlledCheckbox
          className={s.checkbox}
          control={control}
          label={
            <Typography className={s.textCheckbox} variant={'smallLink'}>
              {t.other.agree}{' '}
              <Link className={s.link} href={'/auth/termsOfService'}>
                {t.privacyPolicy.termsOfService}
              </Link>{' '}
              {t.other.and}{' '}
              <Link className={s.link} href={'/auth/privacyPolicy'}>
                {t.privacyPolicy.privacyPolicy}
              </Link>
            </Typography>
          }
          name={'privacyPolicy'}
        ></ControlledCheckbox>
        <Button className={s.button} disabled={isQuery} fullWidth type={'submit'}>
          <Typography variant={'h3'}>{t.linksButtons.signUp}</Typography>
        </Button>
      </form>
    </>
  )
}
