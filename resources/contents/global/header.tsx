import Head from 'next/head'

const titleDefault = 'IJN Boilerplate Basic'
const url = 'https://#'
const descriptionDefault = '#'
const author = '#'
const coverImgDefault = '/cover.jpg'

const Header = ({
  title = titleDefault,
  description = descriptionDefault,
  coverImg = coverImgDefault,
}) => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={author} />
        <meta name='designer' content={author} />
        <meta name='publisher' content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='#'
        />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        {/* 
      Facebook Open Graph meta tags */}
        <meta name='og:title' content={title} />
        <meta name='og:type' content='site' />
        <meta name='og:url' content={url} />
        <meta name='og:image' content={coverImg} />
        <meta name='og:site_name' content={title} />
        <meta name='og:description' content={description} />
        <link rel='icon' href='/logo_white.svg' />
        <link rel='apple-touch-icon' href='/logo_white.svg' />
        <link rel='apple-touch-icon' sizes='16x16' href='/logo_white.svg' />
        <link rel='apple-touch-icon' sizes='32x32' href='/logo_white.svg' />
        <link rel='apple-touch-icon' sizes='180x180' href='/logo_white.svg' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' color='#000000' href='/logo_white.svg' />
        <link rel='apple-touch-startup-image' href='/logo_white.svg' />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1, initial-scale=1.0'
        />
        <meta name='theme-color' content='#000' />
        <link rel='shortcut icon' href='/logo_white.svg' />
        {/* Twitter Summary card */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@#' />
        {/* CDN and API link */}
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
    </>
  )
}

export default Header
