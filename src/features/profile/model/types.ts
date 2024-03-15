export type NewAvatarType = {
  fileSize: number
  height: number
  url: string
  width: number
}
//todo add new type NewAvatarType

export type AvatarType = {
  fileSize: number
  height: number
  url: string
  width: number
}

export type GetProfileResponse = {
  aboutMe: null | string
  avatars: AvatarType[]
  birthDate: Date
  city: null | string
  createdAt: Date
  firstname: string
  id: number
  lastname: string
  username: string
}
export type ArgGetProfile = { profileId: string | symbol | undefined }

export type ArgUpdateProfile = {
  aboutMe: null | string
  birthDate: Date | string
  city: null | string
  firstname: string
  lastname: string
  username: null | string
}
export type ArgUploadAvatar = FormData
export type UploadAvatarResponse = { avatars: AvatarType[] }
