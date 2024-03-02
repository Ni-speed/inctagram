export type PublicUserRequest = {
  profileId: number
}

type AvatarType = {
  fileSize: number
  height: number
  url: string
  width: number
}

export type PublicUserResponse = {
  aboutMe: string
  avatars: AvatarType[]
  id: number
  userName: string
}

export type PublicUsersCountResponse = {
  totalCount: number
}
