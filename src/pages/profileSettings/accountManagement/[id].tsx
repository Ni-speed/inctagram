import { useEffect } from 'react'

import { useGetMeQuery } from '@/features'
import { getLayoutSidebar } from '@/widgets'
import { getLayoutProfileSettings } from '@/widgets/layouts'
import { useRouter } from 'next/router'

function AccountManagement() {
  //const { data, isLoading } = useGetMeQuery()
  //const router = useRouter()
  //http://localhost:3000/en/profile/profileSettings/generalInfo

  return (
    <div>
      <h2>AccountManagement</h2>
    </div>
  )
}

AccountManagement.getLayout = getLayoutProfileSettings
export default AccountManagement
