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
