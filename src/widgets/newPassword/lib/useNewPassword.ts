import { useForm } from 'react-hook-form'

import { ErrorRegisterFormType } from '../../../../locales/ru'
import { useTranslation } from '@/shared/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const schema = (t: ErrorRegisterFormType) => {
  return z
    .object({
      confirmPassword: z
        .string({
          required_error: t.password.reqConfirmPassword,
        })
        .trim(),
      password: z
        .string({
          required_error: t.password.reqNewPassword,
        })
        .trim()
        .min(6, t.password.min)
        .max(20, t.password.max)
        .regex(/^[a-zA-Z0-9!@#$%^&'()*+,\-.:;<=>?[\\\]_`{|}~]*$/, t.login.characters),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: t.passwordConfirm,
      path: ['confirmPassword'],
    })
}

export type NewPasswordFormType = z.infer<ReturnType<typeof schema>>

export const useNewPassword = () => {
  const { t } = useTranslation()

  return useForm<NewPasswordFormType>({
    mode: 'onBlur',
    resolver: zodResolver(schema(t.registerForm.error)),
  })
}
