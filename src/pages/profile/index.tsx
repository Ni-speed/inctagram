import { useGetMeQuery } from '@/features'
import { HeadMeta } from '@/shared'
import { Profile, getLayoutSidebar } from '@/widgets'
import { useRouter } from 'next/router'

function ProfileIndex() {
  const { data: meData, isLoading: isLoadingMe } = useGetMeQuery()
  const router = useRouter()

  router.push(`/profile/${meData?.userId}`)

  return (
    <>
      <HeadMeta title={'Profile'} />
      {isLoadingMe && <div>Loading...</div>}
    </>
  )
}

ProfileIndex.getLayout = getLayoutSidebar
export default ProfileIndex
