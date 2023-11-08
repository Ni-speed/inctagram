export type LogInArgs = {
  loginOrEmail: string
  password: string
}
export type RegistrationArgs = {
  email: string
  login: string
  password: string
}

export type RegistrationConfirmationArgs = {
  code: string
}
export type NewPasswordArgs = {
  password: string
  recoveryCode: string | string[]
}
export type Token = {
  accessToken: 'string'
}

export type ErrorMessage = {
  field: string
  message: string
}

export type LoginIncorrectData = {
  errorsMessages: ErrorMessage[]
}

export type ErrorLoginResponse<T> = {
  data: T
  error: string
  originalStatus: number
  status: string
}

export type LoginErrors = ErrorLoginResponse<LoginIncorrectData> | ErrorLoginResponse<string>
