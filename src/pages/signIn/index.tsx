import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { SignIn } from '@/shared/ui/signIn/SignIn'
import { SingIn, getLayout } from '@/widgets'
type Props = {}

function SignIpIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Sign In'} />
      {/*<SignIn />*/}
      <SingIn />
    </>
  )
}

SignIpIndex.getLayout = getLayout
export default SignIpIndex
