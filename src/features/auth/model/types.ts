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
  recoveryCode: string
}
export type Token = {
  accessToken: 'string'
}

export type errorMessage = {
  field: string
  message: string
}

export type loginIncorrectData = {
  errorsMessages: errorMessage[]
}

export type errorLoginResponse<T> = {
  data: T
  error: string
  originalStatus: number
  status: string
}

export type loginErrors = errorLoginResponse<loginIncorrectData> | errorLoginResponse<string>
