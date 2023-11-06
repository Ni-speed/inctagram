import { SubmitHandler, useForm } from 'react-hook-form'

import { ErrorRegisterFormType } from '@/../locales/ru'
import { useTranslation } from '@/shared/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const schema = (t: ErrorRegisterFormType) => {
  return z.object({
    email: z.string().trim().min(6).max(30),
    password: z.string().trim().min(6, t.password.min).max(20, t.password.max),
  })
}

export type Form = z.infer<ReturnType<typeof schema>>

export const useSingInForm = (
  onSubmit: SubmitHandler<{
    email: string
    password: string
  }>
) => {
  const { t } = useTranslation()
  const { handleSubmit, ...rest } = useForm<Form>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema(t.registerForm.error)),
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
