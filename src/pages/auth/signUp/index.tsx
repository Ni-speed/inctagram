import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { SignUp, getLayout } from '@/widgets'

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
