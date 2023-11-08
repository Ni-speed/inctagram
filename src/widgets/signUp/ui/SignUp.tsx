import React, { useState } from 'react'

import { useRegistrationMutation } from '../../../features/auth/api/authApi'
import { LoginErrors } from '../../../features/auth/model/types'
import { RegisterForm } from '../../../features/auth/ui/signUp/ui'
import { useTranslation } from '../../../shared/hooks'
import { Card, ModalEmailSent, Typography } from '../../../shared/ui'
import Link from 'next/link'

import s from './signUp.module.scss'

export const SignUp = () => {
  const { t } = useTranslation()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [email, setEmail] = useState<string>('')

  const [registration, { error, isLoading, isSuccess }] = useRegistrationMutation()

  const onSubimtHandler = async (body: { email: string; login: string; password: string }) => {
    await registration(body)
    setModalIsOpen(true)
    setEmail(body.email)
  }
  let loginError = undefined

  if (error) {
    loginError = error as LoginErrors
  }

  return (
    <Card className={`${s.signUp} ${isLoading && s.loading}`}>
      <Typography variant={'h1'}>{t.linksButtons.signUp}</Typography>
      <div className={s.icons}></div>
      <RegisterForm
        className={s.form}
        errorMessage={loginError && loginError}
        onSubmit={onSubimtHandler}
      ></RegisterForm>
      <div className={s.haveAcc}>
        <Typography variant={'regularText16'}>{t.other.haveAcc}</Typography>
      </div>

      <div className={s.link}>
        <Link href={'/signIn'}>
          <Typography className={s.textLink} variant={'h3'}>
            {t.linksButtons.signIn}
          </Typography>
        </Link>
      </div>
      <ModalEmailSent
        handleButtonClick={() => setModalIsOpen(false)}
        isOpen={isSuccess && modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        text={`${t.modalEmailSent.textSignUp} ${email} `}
      />
    </Card>
  )
}
