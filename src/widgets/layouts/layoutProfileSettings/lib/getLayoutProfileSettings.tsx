import { ReactElement } from 'react'

import { LayoutProfileSettings } from '@/widgets/layouts/layoutProfileSettings/ui/LayoutProfileSettings'

import { Layout, LayoutSidebar } from '../..'

export const getLayoutProfileSettings = (page: ReactElement) => {
  return (
    <Layout>
      <LayoutSidebar>
        <LayoutProfileSettings>{page}</LayoutProfileSettings>
      </LayoutSidebar>
    </Layout>
  )
}
