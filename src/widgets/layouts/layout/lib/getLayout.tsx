import { ReactElement } from 'react'

import { Layout } from '..'

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
