import { UseFormSetError } from 'react-hook-form'

import { Form } from '../ui/signUp/lib'
import { LocaleType } from '@/../locales/ru'
import { ErrorResponse } from '@/features/auth/model/types'

type ServerErrorSignUpHandler = {
  code: number
  serverErrorHandler: (t: LocaleType) => ErrorResponse
  setError: UseFormSetError<Form>
  t: LocaleType
}

export const serverErrorResponseHandler = ({
  code,
  serverErrorHandler,
  setError,
  t,
}: ServerErrorSignUpHandler) => {
  const errors = serverErrorHandler(t /*.registerForm.error*/)

  errors.map(e => {
    e.type === String(code) &&
      setError(e.name, {
        message: e.message,
        type: e.type,
      })
  })
}
