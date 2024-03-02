type AvatarType = {
  fileSize: number
  height: number
  url: string
  width: number
}

export type UserDataResponse = {
  aboutMe: null | string
  avatars: AvatarType[]
  city: null | string
  dateOfBirth: Date | null
  firstName: string
  followersCount: number
  followingCount: number
  id: number
  isFollowedBy: boolean
  isFollowing: boolean
  lastName: string
  publicationsCount: number
  userName: null | string
}

export type UserDataRequest = {
  userName: string | string[] | symbol
}
