import Link from 'next/link'

export default function ErrorPage({ err, msg }: { err: string; msg: string }) {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <p className='text-3xl sm:text-3xl'>SORRY</p>
      <h1 className='text-9xl font-semibold sm:text-10xl'>{err}</h1>
      <h2 className='-mt-4 text-2xl sm:text-3xl'>{msg}</h2>
      <Link href='/'>
        <a className='py-2 px-4 mt-6 bg-white/20 rounded-md border sm:mt-12'>
          <button className=''>TAKE ME HOME</button>
        </a>
      </Link>
    </div>
  )
}
