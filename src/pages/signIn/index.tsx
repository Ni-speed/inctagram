import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { getLayout } from '@/widgets'
import { SignIn } from '@/widgets/singIn/ui/SignIn'

type Props = {}

function SignIpIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Sign In'} />
      {/*<SignIn />*/}
      <SignIn />
    </>
  )
}

SignIpIndex.getLayout = getLayout
export default SignIpIndex
