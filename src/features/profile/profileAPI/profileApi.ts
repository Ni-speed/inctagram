import { ArgGetProfile } from '@/features'
import {
  AvatarsType,
  GetProfileResponseType,
  ProfileRequestType,
} from '@/features/auth/model/types'
import { PROFILE, baseApi } from '@/shared/api'

export const profileApi = baseApi.injectEndpoints({
  endpoints: build => ({
    deleteAvatar: build.mutation<any, void>({
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
    getProfile: build.query<GetProfileResponseType, ArgGetProfile>({
      providesTags: [PROFILE],

      query: ({ profileId }) => ({
        method: 'GET',
        url: `users/profile/${String(profileId)}`,
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
