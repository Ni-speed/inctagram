import type {
  LogInArgs,
  NewMeResponse,
  NewPasswordArgs,
  PasswordRecovery,
  RegistrationArgs,
  RegistrationConfirmationArgs,
  Token,
} from '../model/types'

import { GET_ME, baseApi } from '@/shared'

const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getMe: build.query<NewMeResponse, void>({
      providesTags: [GET_ME],
      query: body => ({ body, url: 'auth/me' }),
    }),

    gitHubLogin: build.query<Token, void>({
      query: () => ({ url: 'auth/github/login' }),
    }),

    googleLogin: build.query<Token, void>({
      query: () => ({ url: 'auth/google/login' }),
    }),

    login: build.mutation<Token, LogInArgs>({
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          // `onSuccess` side-effect

          localStorage.setItem('accessToken', data.accessToken)
          dispatch(authApi.util.invalidateTags([GET_ME]))
        } catch (err) {
          // `onError` side-effect
        }
      },
      query: body => ({ body, method: 'POST', url: 'auth/login' }),
    }),

    logout: build.mutation<void, void>({
      invalidatesTags: [GET_ME],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(
          authApi.util.updateQueryData('getMe', undefined, draft => {
            draft.userName = undefined
          })
        )
        try {
          await queryFulfilled
        } catch {
          dispatch(authApi.util.invalidateTags([GET_ME]))
        }
      },
      query: () => ({ method: 'POST', url: 'auth/logout' }),
    }),

    newPassword: build.mutation<void, NewPasswordArgs>({
      query: body => ({ body, method: 'POST', url: 'auth/new-password' }),
    }),

    passwordRecovery: build.mutation<void, PasswordRecovery>({
      query: body => ({ body, method: 'POST', url: 'auth/password-recovery' }),
    }),

    refresh: build.mutation<void, void>({
      query: () => ({ method: 'POST', url: 'auth/refresh-token' }),
    }),

    registration: build.mutation<void, RegistrationArgs>({
      query: body => ({
        body: {
          email: body.email,
          password: body.password,
          userName: body.userName,
        },
        method: 'POST',
        url: 'auth/registration',
      }),
    }),

    registrationConfirmation: build.mutation<void, RegistrationConfirmationArgs>({
      query: body => ({
        body: { confirmationCode: body.code },
        method: 'POST',
        url: 'auth/registration-confirmation',
      }),
    }),

    registrationEmailResending: build.mutation<void, Pick<RegistrationArgs, 'email'>>({
      query: body => ({
        body: {
          email: body.email,
        },
        method: 'POST',
        url: 'auth/registration-email-resending',
      }),
    }),
  }),
})

export const {
  useGetMeQuery,
  useGitHubLoginQuery,
  useGoogleLoginQuery,
  useLoginMutation,
  useLogoutMutation,
  useNewPasswordMutation,
  usePasswordRecoveryMutation,
  useRefreshMutation,
  useRegistrationConfirmationMutation,
  useRegistrationEmailResendingMutation,
  useRegistrationMutation,
} = authApi
