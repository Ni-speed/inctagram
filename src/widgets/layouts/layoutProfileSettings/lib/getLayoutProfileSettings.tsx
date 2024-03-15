import { ReactElement } from 'react'

import { Layout, LayoutSidebar } from '../..'
import { LayoutProfileSettings } from '@/widgets/layouts/layoutProfileSettings/ui/LayoutProfileSettings'

export const getLayoutProfileSettings = (page: ReactElement) => {
  return (
    <Layout>
      <LayoutSidebar>
        <LayoutProfileSettings>{page}</LayoutProfileSettings>
      </LayoutSidebar>
    </Layout>
  )
}
