import React, { useState } from 'react'

import { usePasswordRecoveryMutation } from '@/features/auth/api/authApi'
import { useTranslation } from '@/shared/hooks'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { ModalEmailSent } from '@/shared/ui/modal/modalEmailSent'
import { getLayout } from '@/widgets'
import { ForgotPassword, ForgotPasswordFormType } from '@/widgets/forgotPassword'

type Props = {}

function ForgotPasswordIndex({}: Props) {
  const [recoverPassword] = usePasswordRecoveryMutation()
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [isSent, setIsSent] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const recoverPasswordHandler = (data: ForgotPasswordFormType) => {
    recoverPassword(data)
      .unwrap()
      .then(() => {
        setEmail(data.email)
        setIsSent(true)
        setModalIsOpen(true)
      })
  }
  const { t } = useTranslation()

  return (
    <>
      <HeadMeta title={'Forgot Password'} />
      <ForgotPassword isSent={isSent} onSubmitHandler={recoverPasswordHandler} />
      <ModalEmailSent
        handleButtonClick={() => setModalIsOpen(false)}
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        text={`${t.modalEmailSent.textForgotPassword} ${email} `}
      />
    </>
  )
}

ForgotPasswordIndex.getLayout = getLayout
export default ForgotPasswordIndex
