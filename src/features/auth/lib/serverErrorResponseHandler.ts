import { UseFormSetError } from 'react-hook-form'

import { FormSignUp } from '../ui/signUp/lib/useRegisterForm'
import { FormSignIn } from '../ui/singIn/lib/useSingInForm'
import { LocaleType } from '@/../locales/ru'
import { ErrorResponse, NewErrorSignUpResponse } from '@/features/auth/model/types'

type ServerErrorSignUpHandler = {
  code?: number
  errorResponse: NewErrorSignUpResponse
  serverErrorHandler: (t: LocaleType) => ErrorResponse
  // setError: UseFormSetError<FormSignIn | FormSignUp>
  //todo fix problem with types
  setError: any
  t: LocaleType
}

export const serverErrorResponseHandler = ({
  code,
  errorResponse,
  serverErrorHandler,
  setError,
  t,
}: ServerErrorSignUpHandler) => {
  const errors = serverErrorHandler(t)

  //todo fix problem with types
  if (errorResponse.data.messages) {
    typeof errorResponse.data.messages === 'string'
      ? setError('email', { message: errorResponse.data.messages, type: 'email' })
      : errorResponse.data.messages?.map(error => {
          setError(error.field, { message: error.message, type: error.field })
        })
  }
  errors.map(e => {
    e.type === String(code) &&
      setError(e.name, {
        message: e.message,
        type: e.type,
      })
  })
}
