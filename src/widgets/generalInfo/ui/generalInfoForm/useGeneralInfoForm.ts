import { SubmitHandler, useForm } from 'react-hook-form'

import { LocaleType } from '@/../locales/ru'
import { aboutMeRegex, firstNameRegex, lastNameRegex, usernameRegex } from '@/shared'
import { useTranslation } from '@/shared/hooks'
import { ProfileProps } from '@/widgets/generalInfo/ui/generalInfoForm/GeneralInfoForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { parseISO } from 'date-fns'
import { z } from 'zod'

export const profileSettingsSchema = (t: LocaleType) => {
  return z.object({
    aboutMe: z.nullable(
      z
        .string()
        .trim()
        .max(200, t.generalInfo.errors.maxFieldLength(200))
        .regex(aboutMeRegex, t.generalInfo.errors.regexAboutMe)
    ),
    birthDate: z.date().refine(
      data => {
        if (data === null) {
          return true
        }
        if (data) {
          const dob = new Date(data)
          const today = new Date()
          const age = today.getFullYear() - dob.getFullYear()

          return age >= 13
        }
      },
      {
        message: t.generalInfo.errors.under13,
      }
    ),
    city: z.nullable(z.string().trim()),
    country: z.nullable(z.string()),
    firstname: z
      .string()
      .trim()
      .nonempty(t.generalInfo.errors.nonemptyFirstname)
      .max(50, t.generalInfo.errors.maxFirstname(50))
      .regex(firstNameRegex, t.generalInfo.errors.regexFirstname),
    lastname: z
      .string()
      .trim()
      .nonempty(t.generalInfo.errors.nonemptyLastname)
      .max(50, t.generalInfo.errors.maxLastname(50))
      .regex(lastNameRegex, t.generalInfo.errors.regexLastname),
    username: z
      .string()
      .trim()
      .nonempty(t.generalInfo.errors.nonemptyUsername)
      .min(6, t.generalInfo.errors.minUsername(6))
      .max(30, t.generalInfo.errors.maxUsername(30))
      .regex(usernameRegex, t.generalInfo.errors.regexUsername)
      .nullable(),
  })
}

export type FormGeneralInfo = z.infer<ReturnType<typeof profileSettingsSchema>>

export const useGeneralInfoForm = (
  onSubmit: SubmitHandler<{
    aboutMe: null | string
    birthDate: Date
    city: null | string
    country: null | string
    firstname: string
    lastname: string
    username: null | string
  }>,
  profile: ProfileProps | undefined,
  myUserName: string | undefined
) => {
  //console.log('profile useGeneralInfoForm', profile)
  const { t } = useTranslation()
  const { handleSubmit, ...rest } = useForm<FormGeneralInfo>({
    defaultValues: {
      aboutMe: profile?.aboutMe ?? '',
      birthDate: profile?.birthDate ? parseISO(`${profile.birthDate}`) : new Date(),
      city: profile?.city ?? 'City',
      country: '',
      firstname: profile?.firstname ?? '',
      lastname: profile ? profile.lastname : '',
      username: myUserName ?? '',
    },
    mode: 'onChange',
    resolver: zodResolver(profileSettingsSchema(t)),
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
