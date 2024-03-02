import { SubmitHandler, useForm } from 'react-hook-form'

import { ErrorRegisterFormType } from '../../../../../../locales/ru'
import { useTranslation } from '@/shared/hooks'
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
      password: z
        .string()
        .trim()
        .min(6, t.password.min)
        .max(20, t.password.max)
        .regex(/^[a-zA-Z0-9!@#$%^&'()*+,\-.:;<=>?[\\\]_`{|}~]*$/, t.password.characters),
      privacyPolicy: z.literal<boolean>(true),
      userName: z
        .string()
        .trim()
        .min(6, t.login.min)
        .max(30, t.login.max)
        .regex(/^[a-zA-Z0-9_-]*$/, t.login.characters),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: t.passwordConfirm,
      path: ['confirmPassword'],
    })
}

export type FormSignUp = z.infer<ReturnType<typeof schema>>

export const useRegisterForm = (
  onSubmit: SubmitHandler<{
    email: string
    password: string
    userName: string
  }>
) => {
  const { t } = useTranslation()
  const { handleSubmit, ...rest } = useForm<FormSignUp>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      privacyPolicy: true,
      userName: '',
    },
    mode: 'onBlur',
    resolver: zodResolver(schema(t.registerForm.error)),
  })

  return {
    handleSubmit: handleSubmit(({ confirmPassword, privacyPolicy, ...data }) => onSubmit(data)),
    ...rest,
  }
}
