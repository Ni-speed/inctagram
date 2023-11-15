import { UseFormSetError } from 'react-hook-form'

import { FormSignUp } from '../ui/signUp/lib/useRegisterForm'
import { FormSignIn } from '../ui/singIn/lib/useSingInForm'
import { LocaleType } from '@/../locales/ru'
import { ErrorResponse } from '@/features/auth/model/types'

type ServerErrorSignUpHandler = {
  code: number
  serverErrorHandler: (t: LocaleType) => ErrorResponse
  setError: UseFormSetError<FormSignIn | FormSignUp>
  t: LocaleType
}

export const serverErrorResponseHandler = ({
  code,
  serverErrorHandler,
  setError,
  t,
}: ServerErrorSignUpHandler) => {
  const errors = serverErrorHandler(t)

  errors.map(e => {
    e.type === String(code) &&
      setError(e.name, {
        message: e.message,
        type: e.type,
      })
  })
}
