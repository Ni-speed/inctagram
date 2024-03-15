import React, { useState } from 'react'

import { PasswordRecovery } from '@/features/auth/model/types'
import { useTranslation } from '@/shared/hooks'
import { Nullable } from '@/shared/types/nullableType'
import { Button, Card, ControlledInput, Recaptcha, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './forgotPassword.module.scss'

import { useForgotPassword } from '..'

type ForgotPasswordPropsType = {
  isSent: boolean
  onSubmitHandler: (data: PasswordRecovery) => void
}

export const ForgotPassword = ({ isSent, onSubmitHandler }: ForgotPasswordPropsType) => {
  const [recaptchaKey, setRecaptchaKey] = useState<Nullable<string>>(null)

  const { t } = useTranslation()

  const { control, handleSubmit } = useForgotPassword()
  const onRecaptchaChangeHandler = (key: Nullable<string>) => {
    setRecaptchaKey(key)
  }
  const onSubmit = handleSubmit(data =>
    onSubmitHandler({ email: data.email, recaptcha: recaptchaKey })
  )

  return (
    <>
      <Card className={s.wrapper}>
        <Typography variant={'h1'}>{t.titles.forgotPassword}</Typography>
        <form className={s.form} onSubmit={onSubmit}>
          <ControlledInput
            control={control}
            inputIsSearch={false}
            label={t.registerForm.fields.email}
            name={'email'}
            placeholder={t.registerForm.fields.email}
          />
          <Typography className={s.info} variant={'regularText14'}>
            {t.other.infoForgotPass}
          </Typography>
          {isSent && (
            <Typography className={s.sentText} variant={'regularText14'}>
              {t.other.infoSent}
            </Typography>
          )}
          <Button disabled={!recaptchaKey} fullWidth type={'submit'}>
            {!isSent ? t.linksButtons.sendLink : t.linksButtons.resendLink}
          </Button>
        </form>
        <Button className={s.link} fullWidth variant={'text'}>
          <Link href={'/auth/signIn'}>{t.linksButtons.backToSignIn}</Link>
        </Button>
        <div style={{ display: 'inline-block' }}>
          <Recaptcha onRecaptchaChangeHandler={onRecaptchaChangeHandler} />
        </div>
      </Card>
    </>
  )
}
