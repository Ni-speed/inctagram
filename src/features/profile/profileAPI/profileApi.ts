import {
  AvatarsType,
  GetProfileResponseType,
  ProfileRequestType,
} from '@/features/auth/model/types'
import { PROFILE, baseApi } from '@/shared/api'

export const profileApi = baseApi.injectEndpoints({
  endpoints: build => ({
    deleteAvatar: build.mutation<any, any>({
      query: () => ({
        method: 'DELETE',
        url: `users/profile/avatar`,
      }),
    }),
    deleteProfile: build.mutation<any, { id: number }>({
      invalidatesTags: [PROFILE],

      query: ({ id }) => ({
        method: 'DELETE',
        url: `users/profile/${id}`,
      }),
    }),
    getProfile: build.query<GetProfileResponseType, string>({
      providesTags: [PROFILE],

      query: id => ({
        method: 'GET',
        url: `users/profile/${id}`,
      }),
    }),
    updateProfile: build.mutation<any, ProfileRequestType>({
      invalidatesTags: [PROFILE],

      query: body => ({
        body: body,
        method: 'PUT',
        url: `users/profile`,
      }),
    }),
    uploadAvatar: build.mutation<AvatarsType, any>({
      invalidatesTags: [PROFILE],

      query: body => ({
        body: body,
        method: 'POST',
        url: `users/profile/avatar`,
      }),
    }),
  }),
})

export const {
  useDeleteAvatarMutation,
  useDeleteProfileMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
} = profileApi
