import React, { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { ForgotPasswordFormType, useCaptcha, useForgotPassword } from '..'
import { useTranslation } from '@/shared/hooks'
import { Button, Card, ControlledInput, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './forgotPassword.module.scss'

type ForgotPasswordPropsType = {
  isSent: boolean
  onSubmitHandler: (data: ForgotPasswordFormType) => void
}

export const ForgotPassword = ({ isSent, onSubmitHandler }: ForgotPasswordPropsType) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const { handleCaptchaSubmission, isVerified } = useCaptcha()
  const { t } = useTranslation()

  const { control, handleSubmit } = useForgotPassword()
  const onSubmit = handleSubmit(data => onSubmitHandler(data))

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
          <Button disabled={isVerified} fullWidth type={'submit'}>
            {!isSent ? t.linksButtons.sendLink : t.linksButtons.resendLink}
          </Button>
        </form>
        <Button className={s.link} fullWidth variant={'text'}>
          <Link href={'/signUp'}>{t.linksButtons.backToSignIn}</Link>
        </Button>
        <div style={{ display: 'inline-block' }}>
          {!isSent && (
            <ReCAPTCHA
              onChange={handleCaptchaSubmission}
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_SITE_KEY!}
              theme={'dark'}
            />
          )}
        </div>
      </Card>
    </>
  )
}
