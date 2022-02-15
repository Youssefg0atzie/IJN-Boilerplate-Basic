import Link from 'next/link'
import { errorPage as CSS } from '../styles'

export default function ErrorPage({ err, msg }: { err: string; msg: string }) {
  return (
    <div className={CSS.Container}>
      <div className={CSS.Content}>
        <p>SORRY</p>
        <h1>ERROR {err}</h1>
        <h2>{msg}</h2>
        <Link href='/home'>
          <a>
            <button className={CSS.BTN}>TAKE ME HOME</button>
          </a>
        </Link>
      </div>
    </div>
  )
}
