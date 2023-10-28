import { getLayout } from '../../widgets/ui'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { TermOfService } from '@/widgets/ui/termOfService/TermOfService'

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
