import { ErrorRegisterFormType } from '../../../../locales/ru'

export const serverErrorSignUp = (t: ErrorRegisterFormType) => {
  return [
    {
      message: t.email.incorrectInputData,
      name: 'email' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '400',
    },
    {
      message: t.login.loginExist,
      name: 'login' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '411',
    },
    {
      message: t.email.emailExist,
      name: 'email' as 'email' | 'login' | 'root' | `root.${string}`,
      type: '412',
    },
  ]
}
