import { ArgGetProfile } from '@/features'
import {
  AvatarsType,
  GetProfileResponseType,
  NewGetProfileResponseType,
  NewProfileInfoUpdateRequest,
  ProfileRequestType,
} from '@/features/auth/model/types'
import { PROFILE, baseApi } from '@/shared'

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
    //todo add new request for new backend
    newGetProfile: build.query<NewGetProfileResponseType, void>({
      providesTags: [PROFILE],
      query: body => ({ body, url: 'users/profile' }),
    }),
    //todo add new request for new backend
    newUpdateProfile: build.mutation<any, NewProfileInfoUpdateRequest>({
      invalidatesTags: [PROFILE],

      query: body => ({
        body: body,
        method: 'PUT',
        url: `users/profile`,
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
  useNewGetProfileQuery,
  useNewUpdateProfileMutation,
  useUpdateProfileMutation,
  useUploadAvatarMutation,
} = profileApi
