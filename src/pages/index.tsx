import { HeadMeta } from '@/components/headMeta/HeadMeta'
import { getLayout } from '@/components/layout/Layout'

function Home() {
  return (
    <>
      <HeadMeta title={'Create Next App'} />

      <h1> Hello World</h1>
    </>
  )
}

Home.getLayout = getLayout
export default Home
