import Link from 'next/link'
import { home as CSS } from '../styles'

export default function home() {
  return (
    <>
      <div className={CSS.heroContainer} style={{ zIndex: 50 }}>
        <div className={CSS.main}>
          <h1>iFramework</h1>
          <Link href='https://theiceji.com' passHref>
            <button>Developer website</button>
          </Link>
        </div>
      </div>
    </>
  )
}