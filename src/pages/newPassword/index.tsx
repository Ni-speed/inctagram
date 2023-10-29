import { getLayout } from '../../widgets/ui'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { NewPassword } from '@/widgets/ui/newPassword'

type Props = {}

function NewPasswordPage({}: Props) {
  const resetPasswordHandler = () => {
    alert('Not implemented yet')
  }

  return (
    <>
      <HeadMeta title={'New Password'} />
      <NewPassword onSubmitHandler={resetPasswordHandler} />
    </>
  )
}

NewPasswordPage.getLayout = getLayout
export default NewPasswordPage
