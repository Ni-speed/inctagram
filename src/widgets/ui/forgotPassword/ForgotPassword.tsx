import React, { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { useTranslation } from '@/shared/hooks'
import { Button, Card, ControlledInput, Input, Typography } from '@/shared/ui'
import { useCaptcha } from '@/widgets/ui/forgotPassword/lib/ServerActions'
import {
  ForgotPasswordFormType,
  useForgotPassword,
} from '@/widgets/ui/forgotPassword/lib/useForgotPassword'

import s from './ForgotPassword.module.scss'

type ForgotPasswordPropsType = {
  onSubmitHandler: (data: ForgotPasswordFormType) => void
}

export const ForgotPassword = ({ onSubmitHandler }: ForgotPasswordPropsType) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [isVisible, setIsVisible] = React.useState(true)
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
          {!isVisible && (
            <Typography className={s.sentText} variant={'regularText14'}>
              {'The link has been sent by email.\n' +
                'If you don’t receive an email send link again '}
            </Typography>
          )}
          <Button disabled={isVerified} fullWidth type={'submit'}>
            {t.linksButtons.sendLink}
          </Button>
        </form>
        <Button as={'a'} className={s.link} fullWidth variant={'text'}>
          {t.linksButtons.backToSignIn}
        </Button>
        <div style={{ display: 'inline-block' }}>
          <ReCAPTCHA
            onChange={handleCaptchaSubmission}
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY!}
            theme={'dark'}
          />
        </div>
      </Card>
    </>
  )
}
