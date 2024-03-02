import { PublicUserRequest, PublicUserResponse, PublicUsersCountResponse } from '@/features'
import { baseApi } from '@/shared'

const publicUserApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getPublicUser: build.query<PublicUserResponse, PublicUserRequest>({
      providesTags: [],
      query: body => ({
        url: `public-user/profile/${body.profileId}`,
      }),
    }),
    getPublicUsersCount: build.query<PublicUsersCountResponse, void>({
      providesTags: [],
      query: body => ({
        url: `public-user`,
      }),
    }),
  }),
})

export const { useGetPublicUserQuery, useGetPublicUsersCountQuery } = publicUserApi
