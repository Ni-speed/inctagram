import {
  ArgGetProfile,
  ArgUpdateProfile,
  ArgUploadAvatar,
  GetProfileResponse,
  UploadAvatarResponse,
} from '@/features/profile/model'
import { baseApi } from '@/shared'

export const profileAPI = baseApi.injectEndpoints({
  endpoints: build => ({
    deleteAvatar: build.mutation<void, void>({
      invalidatesTags: ['Profile'],
      query: body => ({
        body,
        method: 'DELETE',
        url: `users/profile/avatar`,
      }),
    }),
    deleteProfile: build.mutation<void, void>({
      query: body => ({
        body,
        method: 'DELETE',
        url: `users/profile`,
      }),
    }),
    getProfile: build.query<GetProfileResponse, ArgGetProfile>({
      providesTags: ['Profile'],
      query: ({ profileId }) => ({
        url: `users/profile/${profileId}`,
      }),
    }),
    updateProfile: build.mutation<void, ArgUpdateProfile>({
      invalidatesTags: ['Profile'],
      query: body => ({
        body,
        method: 'PUT',
        url: `users/profile`,
      }),
    }),
    uploadAvatar: build.mutation<UploadAvatarResponse, ArgUploadAvatar>({
      invalidatesTags: ['Profile'],
      query: body => ({
        body,
        method: 'POST',
        url: `users/profile/avatar`,
      }),
    }),
  }),
})

export const {
  useDeleteAvatarMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
} = profileAPI
