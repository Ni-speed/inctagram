import { SubmitHandler, useForm } from 'react-hook-form'

import { ErrorRegisterFormType } from '../../../../../../locales/ru'
import { useTranslation } from '../../../../../shared/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export const schema = (t: ErrorRegisterFormType) => {
  return z
    .object({
      confirmPassword: z.string().trim(),
      email: z
        .string()
        .trim()
        .email(t.email.format)
        .regex(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/, t.email.format),
      login: z
        .string()
        .trim()
        .min(6, t.login.min)
        .max(30, t.login.max)
        .regex(/^[a-zA-Z0-9_-]*$/, t.login.characters),
      password: z
        .string()
        .trim()
        .min(6, t.password.min)
        .max(20, t.password.max)
        .regex(/^[a-zA-Z0-9_-]*$/, t.password.characters),
      privacyPolicy: z.literal<boolean>(true),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: t.passwordConfirm,
      path: ['confirmPassword'],
    })
}
const ewq = () => {
  return 'fgh'
}

export type Form = z.infer<ReturnType<typeof schema>>

export const useRegisterForm = (
  onSubmit: SubmitHandler<{
    email: string
    login: string
    password: string
  }>
) => {
  const { t } = useTranslation()
  const { handleSubmit, ...rest } = useForm<Form>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      login: '',
      password: '',
      privacyPolicy: true,
    },
    mode: 'onBlur',
    resolver: zodResolver(schema(t.registerForm.error)),
  })

  return {
    handleSubmit: handleSubmit(({ confirmPassword, privacyPolicy, ...data }) => onSubmit(data)),
    ...rest,
  }
}
