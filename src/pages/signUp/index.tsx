import { SignUp, getLayout } from '../../widgets/ui'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'

type Props = {}

function SignUpIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Sign Up'} />
      <SignUp />
    </>
  )
}

SignUpIndex.getLayout = getLayout
export default SignUpIndex
