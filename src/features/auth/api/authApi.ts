import { baseApi } from '../../../shared/api'
import {
  LogInArgs,
  NewPasswordArgs,
  RegistrationArgs,
  RegistrationConfirmationArgs,
  Token,
} from '../model/types'

const authApi = baseApi.injectEndpoints({
  endpoints: build => ({
    gitHubLogin: build.query<Token, void>({
      query: () => ({ url: 'auth/github/login' }),
    }),

    googleLogin: build.query<Token, void>({
      query: () => ({ url: 'auth/google/login' }),
    }),

    login: build.mutation<void, LogInArgs>({
      query: params => ({ method: 'POST', params, url: 'auth/login' }),
    }),

    logout: build.mutation<void, void>({
      query: () => ({ method: 'POST', url: 'auth/logout' }),
    }),

    newPassword: build.mutation<void, NewPasswordArgs>({
      query: params => ({ method: 'POST', params, url: 'auth/logout' }),
    }),

    passwordRecovery: build.mutation<void, Pick<RegistrationArgs, 'email'>>({
      query: params => ({ method: 'POST', params, url: 'auth/password-recovery' }),
    }),

    registration: build.mutation<void, RegistrationArgs>({
      query: params => ({ method: 'POST', params, url: 'auth/registration' }),
    }),

    registrationConfirmation: build.mutation<void, RegistrationConfirmationArgs>({
      query: params => ({ method: 'POST', params, url: 'auth/registration-confirmation' }),
    }),

    registrationEmailResending: build.mutation<void, Pick<RegistrationArgs, 'email'>>({
      query: params => ({ method: 'POST', params, url: 'auth/registration-email-resending' }),
    }),
  }),
  overrideExisting: false,
})

export const {
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
