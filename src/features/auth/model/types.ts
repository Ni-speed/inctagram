import { serverErrorSignUp } from '@/features/auth/model/errors'

export type LogInArgs = {
  loginOrEmail: string
  password: string
}
export type RegistrationArgs = {
  email: string
  login: string
  password: string
}

export type MeResponse = {
  email: string
  id: string
  username: string
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

export type ErrorResponse = ReturnType<typeof serverErrorSignUp>

export type LoginErrors = ErrorLoginResponse<LoginIncorrectData> | ErrorLoginResponse<string>
export type ProfileType = {
  aboutMe: string
  avatars: AvatarsType[]
  city: string
  createdAt: string
  dateOfBirth: string
  firstname: string
  id: number
  lastname: string
  username: string
}
export type AvatarsType = {
  fileSize: number
  height: number
  url: string
  width: number
}
