import { GetStaticProps } from 'next'
import { home as Home } from 'pages/home'

const Example = () => {
  return <Home />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'iFramework Pro | Home page',
      //   description: '',
      //   coverImg: '',
    },
  }
}

export default Example
