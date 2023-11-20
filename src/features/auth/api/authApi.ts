import type {
  LogInArgs,
  NewPasswordArgs,
  RegistrationArgs,
  RegistrationConfirmationArgs,
  Token,
} from '../model/types'

import { baseApi } from '../../../shared/api'

const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getMe: build.query<any, void>({
      query: () => ({ url: 'auth/me' }),
    }),

    gitHubLogin: build.query<Token, void>({
      query: () => ({ url: 'auth/github/login' }),
    }),

    googleLogin: build.query<Token, void>({
      query: () => ({ url: 'auth/google/login' }),
    }),

    login: build.mutation<void, LogInArgs>({
      query: body => ({ body, method: 'POST', url: 'auth/login' }),
    }),

    logout: build.mutation<void, void>({
      query: () => ({ method: 'POST', url: 'auth/logout' }),
    }),

    newPassword: build.mutation<void, NewPasswordArgs>({
      query: body => ({ body, method: 'POST', url: 'auth/new-password' }),
    }),

    passwordRecovery: build.mutation<void, Pick<RegistrationArgs, 'email'>>({
      query: body => ({ body, method: 'POST', url: 'auth/password-recovery' }),
    }),

    registration: build.mutation<void, RegistrationArgs>({
      query: body => ({ body, method: 'POST', url: 'auth/registration' }),
    }),

    registrationConfirmation: build.mutation<void, RegistrationConfirmationArgs>({
      query: body => ({ body, method: 'POST', url: 'auth/registration-confirmation' }),
    }),

    registrationEmailResending: build.mutation<void, Pick<RegistrationArgs, 'email'>>({
      query: body => ({ body, method: 'POST', url: 'auth/registration-email-resending' }),
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
  useRegistrationConfirmationMutation,
  useRegistrationEmailResendingMutation,
  useRegistrationMutation,
} = authApi
