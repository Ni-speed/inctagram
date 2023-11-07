import { PasswordRecoveryExpired, getLayout } from '../../widgets'
import { useAppSelector } from '@/app'
import { useNewPasswordMutation, usePasswordRecoveryMutation } from '@/features/auth/api/authApi'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { NewPassword } from '@/widgets/newPassword'
import { NewPasswordFormType } from '@/widgets/newPassword/lib/useNewPassword'
import { useRouter } from 'next/router'

function NewPasswordPage() {
  const router = useRouter()
  const recoveryCode = router.query.recoveryCode
  const [newPassword, { error }] = useNewPasswordMutation()

  const resetPasswordHandler = (data: NewPasswordFormType) => {
    if (recoveryCode) {
      const tempData = { password: data.password }

      newPassword({ ...tempData, recoveryCode })
        .unwrap()
        .then(() => {
          router.push('/signIn')
        })
    }
  }
  const passwordRecoveryExpiredHandler = () => {
    router.push('/forgotPassword')
  }

  return (
    <>
      {error ? (
        <>
          <HeadMeta title={'Link expired'} />
          <PasswordRecoveryExpired onSubmitHandler={passwordRecoveryExpiredHandler} />
        </>
      ) : (
        <>
          <HeadMeta title={'New Password'} />
          <NewPassword onSubmitHandler={resetPasswordHandler} />
        </>
      )}
    </>
  )
}

NewPasswordPage.getLayout = getLayout
export default NewPasswordPage
