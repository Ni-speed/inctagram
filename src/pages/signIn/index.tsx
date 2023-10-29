import { SignIn } from '../../shared/ui'
import { getLayout } from '../../widgets/ui'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'

type Props = {}

function SignIpIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Sign In'} />
      <SignIn />
    </>
  )
}

SignIpIndex.getLayout = getLayout
export default SignIpIndex
