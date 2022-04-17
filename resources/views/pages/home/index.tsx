import Link from 'next/link'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <h1 className='text-8xl font-semibold uppercase'>IJN Boilerplate Basic</h1>
      <Link href='https://TheIceJi.com' passHref>
        <button className='py-2 px-4 mt-6 hover:text-black bg-white/10 hover:bg-white rounded-md border  duration-300 hover:duration-200'>
          Developer website
        </button>
      </Link>
    </div>
  )
}

export default Home
