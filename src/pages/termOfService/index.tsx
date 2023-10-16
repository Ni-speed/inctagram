import { getLayout } from '@/components/layout/Layout'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'
import { TermOfService } from '@/shared/ui/termOfService/TermOfService'

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
