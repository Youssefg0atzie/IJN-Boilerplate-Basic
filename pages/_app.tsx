import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'

import Header from 'contents/global/header'
import { pageview } from '@libs/analytics/gtm'
import { app } from '@config'
import { globalStyles } from 'views/theme/css/global'
import 'tailwindcss/tailwind.css'

type NextPageWithLayout = NextPage & {
  Layout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()
    Router.events.on('routeChangeStart', handleRouteStart)
    Router.events.on('routeChangeComplete', handleRouteDone)
    Router.events.on('routeChangeError', handleRouteDone)
    return () => {
      Router.events.off('routeChangeStart', handleRouteStart)
      Router.events.off('routeChangeComplete', handleRouteDone)
      Router.events.off('routeChangeError', handleRouteDone)
    }
  }, [])

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  const getLayout = Component.Layout ?? ((page) => page)

  return getLayout(
    <>
      <Script
        strategy='afterInteractive'
        id='GOOGLE_TAG_MANAGER'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${app.GOOGLE_TAG_MANAGER}');
          `,
        }}
      />
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
