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
/*
//todo add validation and check dateOfBirth
 username: z
      .string()
      .trim()
      .nonempty(t.errors.nonemptyUsername)
      .min(6, t.errors.minUsername(6))
      .max(30, t.errors.maxUsername(30))
      .regex(usernameRegex, t.errors.regexUsername),
    firstname: z
      .string()
      .trim()
      .nonempty(t.errors.nonemptyFirstname)
      .max(50, t.errors.maxFirstname(50))
      .regex(firstNameRegex, t.errors.regexFirstname),
    lastname: z
      .string()
      .trim()
      .nonempty(t.errors.nonemptyLastname)
      .max(50, t.errors.maxLastname(50))
      .regex(lastNameRegex, t.errors.regexLastname),
    city: z.nullable(z.string().trim()),
    aboutMe: z.nullable(
      z
        .string()
        .trim()
        .max(200, t.errors.maxFieldLength(200))
        .regex(aboutMeRegex, t.errors.regexAboutMe)
    ),
    dateOfBirth: z.date().refine(
      data => {
        if (data === null) return true
        if (data) {
          const dateOB = new Date(data)
          const today = new Date()
          const age = today.getFullYear() - dateOB.getFullYear()
          return age >= 13
*/

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
  }>,
  name: string
) => {
  const { t } = useTranslation()
  const { handleSubmit, ...rest } = useForm<FormGeneralInfo>({
    defaultValues: {
      username: name,
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema(t.registerForm.error)),
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
