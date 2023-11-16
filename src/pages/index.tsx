import { getLayout } from '../widgets'
import { HeadMeta } from '@/shared/ui/headMeta/HeadMeta'

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
