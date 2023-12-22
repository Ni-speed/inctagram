import { ReactElement } from 'react'

import { Layout } from '../..'
import { LayoutSidebar } from '../ui'

export const getLayoutSidebar = (page: ReactElement) => {
  return (
    <Layout>
      <LayoutSidebar>{page}</LayoutSidebar>
    </Layout>
  )
}
