import { TermOfService, getLayout } from '../../widgets/ui'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'

type Props = {}

function TermOfServiceIndex({}: Props) {
  return (
    <>
      <HeadMeta title={'Term Of Service'} />
      <TermOfService />
    </>
  )
}

TermOfServiceIndex.getLayout = getLayout
export default TermOfServiceIndex
