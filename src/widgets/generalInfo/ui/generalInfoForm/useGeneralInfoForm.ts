import { SubmitHandler, useForm } from 'react-hook-form'

import { LocaleType } from '@/../locales/ru'
import { NewGetProfileResponseType } from '@/features/auth/model/types'
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
        //.regex(aboutMeRegex, t.generalInfo.errors.regexAboutMe)
        .nullable()
    ),
    city: z.nullable(z.nullable(z.string().trim())),
    country: z.nullable(z.string()),
    dateOfBirth: z.nullable(
      z.date().refine(
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
      )
    ),
    firstName: z
      .string()
      .trim()
      .nonempty(t.generalInfo.errors.nonemptyFirstname)
      .max(50, t.generalInfo.errors.maxFirstname(50))
      .regex(firstNameRegex, t.generalInfo.errors.regexFirstname),
    lastName: z
      .string()
      .trim()
      .nonempty(t.generalInfo.errors.nonemptyLastname)
      .max(50, t.generalInfo.errors.maxLastname(50))
      .regex(lastNameRegex, t.generalInfo.errors.regexLastname),

    userName: z
      .string()
      .trim()
      .nonempty(t.generalInfo.errors.nonemptyUsername)
      .min(6, t.generalInfo.errors.minUsername(6))
      .max(30, t.generalInfo.errors.maxUsername(30))
      .regex(usernameRegex, t.generalInfo.errors.regexUsername),
  })
}

export type FormGeneralInfo = z.infer<ReturnType<typeof profileSettingsSchema>>

export const useGeneralInfoForm = (
  onSubmit: SubmitHandler<{
    aboutMe: null | string
    city: null | string
    country: null | string
    dateOfBirth: Date | null
    firstName: null | string
    lastName: null | string
    userName: string
  }>,
  profile: NewGetProfileResponseType | undefined,
  myUserName: null | string | undefined
) => {
  //console.log('profile useGeneralInfoForm', profile)
  const { t } = useTranslation()
  const { handleSubmit, ...rest } = useForm<FormGeneralInfo>({
    defaultValues: {
      aboutMe: profile?.aboutMe ?? '',
      city: profile?.city ?? 'City',
      country: '',
      dateOfBirth: profile?.dateOfBirth ? parseISO(`${profile.dateOfBirth}`) : new Date(),
      firstName: profile?.firstName ?? '',
      lastName: profile ? profile.lastName : '',
      userName: myUserName ?? '',
    },

    resolver: zodResolver(profileSettingsSchema(t)),
  })

  return {
    handleSubmit: handleSubmit(onSubmit),
    ...rest,
  }
}
