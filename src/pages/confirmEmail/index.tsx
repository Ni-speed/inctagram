import { ConfirmEmail, NotConfirmEmail, getLayout } from '../../widgets/ui'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'

const ConfirmEmailPage = () => {
  const isConfirm = false

  return (
    <>
      <HeadMeta title={'Confirm email'} />
      {isConfirm ? <ConfirmEmail></ConfirmEmail> : <NotConfirmEmail></NotConfirmEmail>}
    </>
  )
}

ConfirmEmailPage.getLayout = getLayout
export default ConfirmEmailPage
