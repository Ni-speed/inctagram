import { UserDataRequest, UserDataResponse } from '@/features'
import { baseApi } from '@/shared/api'

const userApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getUser: build.query<UserDataResponse, UserDataRequest>({
      providesTags: [],
      query: body => ({
        url: `users/${body.userName.toString()}`,
      }),
    }),
  }),
})

export const { useGetUserQuery } = userApi
