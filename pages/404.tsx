import type { ReactElement } from 'react'
import { errorPage as ErrorPage } from 'pages/misc/components'

export default function Error404() {
  return <ErrorPage err='404' msg='NOT FOUND' />
}

Error404.getLayout = function getLayout(page: ReactElement) {
  return (
    <div className='Layout'>
      <div className='NestedLayout'>{page}</div>
    </div>
  )
}
