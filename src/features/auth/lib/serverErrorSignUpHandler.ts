import { UseFormSetError } from 'react-hook-form'

import { ErrorRegisterFormType } from '../../../../locales/ru'
import { serverErrorSignUp } from '../model/errors'
import { Form } from '../ui/signUp/lib'

export const serverErrorSignUpHandler = (
  code: number,
  setError: UseFormSetError<Form>,
  t: ErrorRegisterFormType
) => {
  const errors = serverErrorSignUp(t)

  errors.map(e => {
    e.type === String(code) &&
      setError(e.name, {
        message: e.message,
        type: e.type,
      })
  })
}
