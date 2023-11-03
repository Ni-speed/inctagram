import React, { useState } from 'react'

import { getLayout } from '../../widgets'
import { ForgotPassword, ForgotPasswordFormType } from '../../widgets/forgotPassword'
import { useTranslation } from '@/shared/hooks'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { ModalEmailSent } from '@/shared/ui/modal/modalEmailSent'

type Props = {}

function ForgotPasswordIndex({}: Props) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [isSent, setIsSent] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const recoverPasswordHandler = (data: ForgotPasswordFormType) => {
    setModalIsOpen(true)
    setIsSent(false)
    setEmail(data.email)
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
