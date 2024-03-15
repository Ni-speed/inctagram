import { useForm } from 'react-hook-form'

import { useTranslation } from '@/shared/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ErrorRegisterFormType } from '../../../../locales/ru'

export const schema = (t: ErrorRegisterFormType) => {
  return z.object({
    email: z
      .string({ required_error: t.email.requiredEmail })
      .trim()
      .email(t.email.format)
      .nonempty('Enter Email!'),
  })
}

export type ForgotPasswordFormType = z.infer<ReturnType<typeof schema>>

export const useForgotPassword = () => {
  const { t } = useTranslation()

  return useForm<ForgotPasswordFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema(t.registerForm.error)),
  })
}
