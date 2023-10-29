import { PrivacyPolicy, getLayout } from '../../widgets/ui'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'

type Props = {}

function TermOfServiceIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Term Of Service'} />
      <PrivacyPolicy />
    </>
  )
}

TermOfServiceIndex.getLayout = getLayout
export default TermOfServiceIndex
