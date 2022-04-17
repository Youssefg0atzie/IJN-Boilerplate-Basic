import { GetStaticProps } from 'next'
import Home from 'pages/home'

const Example = () => {
  return <Home />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'IJN Boilerplate Basic',
    },
  }
}

export default Example
