import React, { useState } from 'react'

import { useRegistrationMutation } from '../../../features/auth/api/authApi'
import { RegisterForm } from '../../../features/auth/ui/signUp/ui'
import { Github, Google } from '../../../shared/assets/svg'
import { useTranslation } from '../../../shared/hooks'
import { Button, Card, ModalEmailSent, Typography } from '../../../shared/ui'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

import s from './signUp.module.scss'

export const SignUp = () => {
  const { t } = useTranslation()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [email, setEmail] = useState<string>('')

  const [registration, { isLoading, isSuccess }] = useRegistrationMutation()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams?.get('callbackUrl') || '/profile'
  const handleSignIn = (provider: string) => {
    signIn(provider, { callbackUrl })
  }

  const onSubimtHandler = async (body: { email: string; login: string; password: string }) => {
    await registration(body)
    setModalIsOpen(true)
    setEmail(body.email)
  }

  return (
    <Card className={`${s.signUp} ${isLoading && s.loading}`}>
      <Typography variant={'h1'}>{t.linksButtons.signUp}</Typography>
      <div className={s.icons}>
        <Button onClick={() => handleSignIn('google')} variant={'text'}>
          <Google />
        </Button>
        <Button onClick={() => handleSignIn('github')} variant={'text'}>
          <Github />
        </Button>
      </div>
      <RegisterForm className={s.form} onSubmit={onSubimtHandler}></RegisterForm>
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
