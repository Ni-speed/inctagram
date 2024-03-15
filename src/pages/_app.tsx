import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import type { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/app'
import { useLoader } from '@/shared/hooks/useNextLoader'

import '../styles/index.scss'
import '../styles/nprogress.css'
import '@fontsource-variable/inter'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page)

  useLoader()

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)} </Provider>
}
