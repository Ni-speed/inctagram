import { AvatarType, NewAvatarType } from '@/features'
import { serverErrorSignUp } from '@/features/auth/model/errors'

export type LogInArgs = {
  email: string
  password: string
}
export type RegistrationArgs = {
  email: string
  password: string
  userName: string
}
export type PasswordRecovery = {
  email: string
  recaptcha: null | string
}
//todo
export type NewMeResponse = {
  email: string
  isBlocked: boolean
  userId: number
  userName: string | undefined
}

export type MeResponse = {
  email: string
  id: string
  username: string | undefined
}

export type RegistrationConfirmationArgs = {
  code: string
}

//todo
export type NewPasswordArgs = {
  newPassword: string
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

export type DataSignUpResponse = {
  error: string
  messages: ErrorMessage[]
  statusCode: number
}
export type NewErrorSignUpResponse = {
  data: DataSignUpResponse
  status: number
}

export type ErrorResponse = ReturnType<typeof serverErrorSignUp>

export type LoginErrors =
  | ErrorLoginResponse<LoginIncorrectData>
  | ErrorLoginResponse<string>
  | NewErrorSignUpResponse

//todo add new type for new backend
export type NewGetProfileResponseType = {
  aboutMe: null | string
  avatars: NewAvatarType[]
  city: null | string
  createdAt: Date
  dateOfBirth: Date | null
  firstName: string
  id: number
  lastName: string
  userName: null | string
}

export type GetProfileResponseType = {
  aboutMe?: null | string
  avatars: AvatarType[]
  birthDate?: Date
  city?: null | string
  createdAt?: Date
  firstname: string
  id?: number
  // TODO need add friend status " isFriend: boolean "
  isFriend?: boolean
  lastname: string
  username: null | string
}

export type AvatarsType = {
  fileSize: number
  height: number
  url: string
  width: number
}

//todo add new type for new backend
export type NewProfileInfoUpdateRequest = {
  aboutMe: null | string
  city: null | string
  dateOfBirth: Date | null
  firstName: null | string
  lastName: null | string
  userName: string
}

export type ProfileRequestType = {
  aboutMe: null | string
  birthDate: Date | string
  city: null | string
  firstname: string
  lastname: string
  username: null | string
}
//TODO privies version types
/*
export type GetProfileResponseType = {
  aboutMe: string
  avatars: AvatarsType[]
  city: string
  createdAt: string
  dateOfBirth: string
  firstname: string
  id: number
  // TODO need add friend status " isFriend: boolean "
  isFriend: boolean
  lastname: string
  username: string
}*/

/*
export type ProfileRequestType = {
  aboutMe: string
  city: string
  dateOfBirth: string
  firstname: string
  lastname: string
  username: string
}*/
