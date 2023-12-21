import { useEffect } from 'react'

import { useGetMeQuery } from '@/features'
import { getLayoutSidebar } from '@/widgets'
import { getLayoutProfileSettings } from '@/widgets/layouts'
import { useRouter } from 'next/router'

function MyPayments() {
  //const { data, isLoading } = useGetMeQuery()
  //const router = useRouter()
  //http://localhost:3000/en/profile/profileSettings/generalInfo

  return (
    <div>
      <h2>My Payments</h2>
    </div>
  )
}

MyPayments.getLayout = getLayoutProfileSettings
export default MyPayments
