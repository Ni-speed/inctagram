import React from 'react'

import { useNewPassword } from '../lib'
import { NewPasswordFormType } from '../lib/useNewPassword'
import { useTranslation } from '@/shared/hooks'
import { Button, Card, ControlledInput, Typography } from '@/shared/ui'

import s from './newPassword.module.scss'

type ForgotPasswordPropsType = {
  onSubmitHandler: (data: NewPasswordFormType) => void
}

export const NewPassword = ({ onSubmitHandler }: ForgotPasswordPropsType) => {
  const { control, handleSubmit } = useNewPassword()
  const onSubmit = handleSubmit(data => onSubmitHandler(data))
  const { t } = useTranslation()

  return (
    <Card className={s.wrapper}>
      <Typography variant={'h1'}>{t.linksButtons.newPass}</Typography>
      <form className={s.form} onSubmit={onSubmit}>
        <ControlledInput
          className={s.textField}
          classNameWrapper={s.newPassword}
          control={control}
          inputIsSearch={false}
          inputType={'password'}
          label={t.registerForm.fields.newPassword}
          name={'password'}
        />
        <ControlledInput
          className={s.textField}
          control={control}
          inputIsSearch={false}
          inputType={'password'}
          label={t.registerForm.fields.passwordConfirm}
          name={'confirmPassword'}
        />
        <Typography className={s.info} variant={'regularText14'}>
          {t.other.infoNewPass}
        </Typography>
        <Button className={s.submitButton} fullWidth>
          {t.linksButtons.newPass}
        </Button>
      </form>
    </Card>
  )
}
