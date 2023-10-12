import { HeadMeta } from '@/components/headMeta/HeadMeta'
import { getLayout } from '@/components/layout/Layout'
import { SignUp } from '@/components/signUp/signUp'

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
