import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import Router from 'next/router'
import NProgress from 'nprogress'

import Header from 'contents/global/header'
import { globalStyles } from 'views/theme/css/global'
import 'tailwindcss/tailwind.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

type NextPageWithLayout = NextPage & {
  Layout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.Layout ?? ((page) => page)

  return getLayout(
    <>
      <Header
        title={pageProps.title}
        description={pageProps.description}
        coverImg={pageProps.coverImg}
      />
      {globalStyles()}
      <Component {...pageProps} />
    </>
  )
}

export default App
