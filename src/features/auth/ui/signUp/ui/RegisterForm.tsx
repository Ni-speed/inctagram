import { FormEvent, useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form'

import { LoginErrors } from '../../../model/types'
import { useRegisterForm } from '../lib'
import { serverErrorResponseHandler } from '@/features/auth/lib/serverErrorResponseHandler'
import { serverErrorSignUp } from '@/features/auth/model/errors'
import { useTranslation } from '@/shared/hooks'
import { Button, ControlledCheckbox, ControlledInput, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './registerForm.module.scss'

type RegisterFormPropsType = {
  className?: string
  errorMessage?: LoginErrors
  onSubmit: SubmitHandler<{
    email: string
    login: string
    password: string
  }>
}

export const RegisterForm = ({ className, errorMessage, onSubmit }: RegisterFormPropsType) => {
  console.log(errorMessage)

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
    setError,
  } = useRegisterForm(onSubmit)
  const { t } = useTranslation()

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit()
    reset()
  }

  useEffect(() => {
    if (errorMessage) {
      serverErrorResponseHandler({
        code: errorMessage.originalStatus,
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
          name={'login'}
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
              <Link className={s.link} href={'/termsOfService'}>
                {t.privacyPolicy.termsOfService}
              </Link>{' '}
              {t.other.and}{' '}
              <Link className={s.link} href={'/privacyPolicy'}>
                {t.privacyPolicy.privacyPolicy}
              </Link>
            </Typography>
          }
          name={'privacyPolicy'}
        ></ControlledCheckbox>
        <Button className={s.button} disabled={!isValid} fullWidth type={'submit'}>
          <Typography variant={'h3'}>{t.linksButtons.signUp}</Typography>
        </Button>
      </form>
    </>
  )
}
