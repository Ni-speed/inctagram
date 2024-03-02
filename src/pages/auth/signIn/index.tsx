import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { getLayout } from '@/widgets'
import { SignIn } from '@/widgets/singIn/ui/SignIn'

function SignUpIndex({}) {
  return (
    <>
      <HeadMeta title={'Sign In'} />
      <SignIn />
    </>
  )
}

SignUpIndex.getLayout = getLayout
export default SignUpIndex
