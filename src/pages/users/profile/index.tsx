import { useEffect } from 'react'

import { useGetMeQuery } from '@/features'
import { HeadMeta } from '@/shared'
import { Profile, getLayoutSidebar } from '@/widgets'
import { useRouter } from 'next/router'

function MyProfileIndex() {
  const { data: meData, isLoading: isLoadingMe, isSuccess } = useGetMeQuery()
  const router = useRouter()

  if (!isSuccess) {
    router.push(`/auth/signIn}`)
  }

  router.push(`/users/profile/${meData?.userName}`)

  return (
    <>
      <HeadMeta title={'Profile'} />
      {isLoadingMe && <div>Loading...</div>}
    </>
  )
}

MyProfileIndex.getLayout = getLayoutSidebar
export default MyProfileIndex
