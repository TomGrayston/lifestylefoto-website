import Head from 'next/head'
import Navbar from '../components/navigation/Navbar'

export default function Home() {

  return (
    <>
      <Head>
        <title>LifestyleFoto – Photo &amp; Video Services</title>
        <meta name="LifestyleFoto – Photo &amp; Video Services" content="Created &amp; Designed by Tom Grayston" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex items-center justify-center h-screen'>
        <img src="/background.jpg" className='object-cover w-full h-full'/>
        <h1 className="text-white absolute text-[4rem] mini:text-[3rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] nav">
          LifestyleFoto
        </h1>
      </div>
      <div className='flex items-center justify-center h-screen bg-blue-200'>
      </div>
      <Navbar/>
    </>
  )
}
