import { SubmitHandler, useForm } from 'react-hook-form'

import { ErrorRegisterFormType } from '@/../locales/ru'
import { useTranslation } from '@/shared/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

/*{
  "username": "string",
    "firstname": "string",
    "lastname": "string",
    "city": "string",
    "dateOfBirth": "2023-11-17T11:51:20.585Z",
    "aboutMe": "string"
}*/

export const schema = (t: ErrorRegisterFormType) => {
  return z.object({
    aboutMe: z.string(),
    city: z.string(),
    country: z.string(),
    /* dateOfBirth: z.date(),*/
    firstname: z.string(),
    lastname: z.string(),
    username: z.string(),
  })
}

export type FormGeneralInfo = z.infer<ReturnType<typeof schema>>

export const useGeneralInfoForm = (
  onSubmit: SubmitHandler<{
    aboutMe: string
    city: string
    country: string
    /* dateOfBirth: Date*/
    firstname: string
    lastname: string
    username: string
  }>
) => {
  const { t } = useTranslation()
  const { handleSubmit, ...rest } = useForm<FormGeneralInfo>({
    defaultValues: {
      city: '',
      country: '',
      firstname: '',
      lastname: '',
      username: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema(t.registerForm.error)),
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
