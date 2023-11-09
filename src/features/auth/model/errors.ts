import { LocaleType } from '@/../locales/ru'

export const serverErrorSignUp = (t: LocaleType) => {
  return [
    {
      message: t.registerForm.error.email.incorrectInputData,
      name: 'email' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '400',
    },
    {
      message: t.registerForm.error.login.loginExist,
      name: 'login' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '411',
    },
    {
      message: t.registerForm.error.email.emailExist,
      name: 'email' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '412',
    },
  ]
}

export const serverErrorSignIn = (t: LocaleType) => {
  return [
    {
      message: t.logInForm.error.incorrectInputData,
      name: 'email' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '400',
    },
    {
      message: t.logInForm.error.userNotCreated,
      name: 'email' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '411',
    },
    {
      message: t.logInForm.error.emailNotConfirmed,
      name: 'email' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '412',
    },
    {
      message: t.logInForm.error.invalidPasswordOrEmail,
      name: 'email' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '413',
    },
    {
      message: t.logInForm.error.invalidPasswordOrEmail,
      name: 'password' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '413',
    },
  ]
}
