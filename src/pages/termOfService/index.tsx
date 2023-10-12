import { HeadMeta } from '@/components/headMeta/HeadMeta'
import { getLayout } from '@/components/layout/Layout'
import { TermOfService } from '@/components/termOfService/TermOfService'

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
