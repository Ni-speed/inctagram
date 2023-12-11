export type AvatarType = {
  fileSize: number
  height: number
  url: string
  width: number
}
export type GetProfileResponse = {
  aboutMe: null | string
  avatars: AvatarType[]
  city: null | string
  createdAt: Date
  dateOfBirth: Date
  firstname: string
  id: number
  lastname: string
  username: string
}
export type ArgGetProfile = { profileId: number | string | undefined }

export type ArgUpdateProfile = {
  aboutMe: null | string
  city: null | string
  dateOfBirth: Date | string
  firstname: string
  lastname: string
  username: null | string
}
export type ArgUploadAvatar = FormData
export type UploadAvatarResponse = { avatars: AvatarType[] }
