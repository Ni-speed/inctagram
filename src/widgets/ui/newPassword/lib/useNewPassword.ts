import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const NewPasswordSchema = z
  .object({
    confirmPassword: z
      .string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Confirm password is required',
      })
      .trim(),
    password: z
      .string({
        invalid_type_error: 'Email must be a string',
        required_error: 'New password is required',
      })
      .trim()
      .min(6, 'min simbols')
      .max(20, 'max simbols')
      .regex(/^[a-zA-Z0-9_-]*$/, 'krch chet ne tak'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'ne sofpadaet',
    path: ['confirmPassword'],
  })
export type NewPasswordFormType = z.infer<typeof NewPasswordSchema>

export const useNewPassword = () => {
  return useForm<NewPasswordFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(NewPasswordSchema),
  })
}
