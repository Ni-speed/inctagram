import { useState } from 'react'

import { useRegistrationEmailResendingMutation } from '@/features/auth/api/authApi'
import { ImageNotConfirmEmail } from '@/shared/assets/svg'
import { useTranslation } from '@/shared/hooks'
import { Button, ModalEmailSent, ModalInputEmail, Typography } from '@/shared/ui'

import s from './notConfirmEmail.module.scss'

export const NotConfirmEmail = () => {
  const { t } = useTranslation()
  const [modalInputIsOpen, setModalInptIsOpen] = useState(false)
  const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false)

  const [email, setEmail] = useState('')
  const [resend, { error, isLoading, isSuccess }] = useRegistrationEmailResendingMutation()
  const buttonInputHandler = async () => {
    await resend({ email })
    setModalInptIsOpen(false)
    setModalSuccessIsOpen(true)
  }

  return (
    <div className={s.wrapper}>
      <Typography className={s.title} variant={'h1'}>
        {t.notConfirmEmail.title}
      </Typography>
      <Typography className={s.subTitle} variant={'regularText16'}>
        {t.notConfirmEmail.subTitle}
      </Typography>
      <Button className={s.button} onClick={() => setModalInptIsOpen(true)}>
        <Typography variant={'h3'}>{t.notConfirmEmail.button}</Typography>
      </Button>
      <ImageNotConfirmEmail className={s.image}></ImageNotConfirmEmail>
      <ModalInputEmail
        handleButtonClick={buttonInputHandler}
        isOpen={modalInputIsOpen}
        onChange={email => setEmail(email)}
        onClose={() => setModalInptIsOpen(false)}
        value={email}
      />
      <ModalEmailSent
        handleButtonClick={() => setModalSuccessIsOpen(false)}
        isOpen={modalSuccessIsOpen}
        onClose={() => setModalSuccessIsOpen(false)}
        text={`${t.modalEmailSent.mailResend} ${email} `}
      />
    </div>
  )
}
