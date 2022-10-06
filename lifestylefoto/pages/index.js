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
      <Navbar/>
      <div className='flex items-center justify-center h-screen'>
        <img src="/background.jpg" className='object-cover h-full w-fit custom_width:w-full custom_height:w-fit'/>
      </div>
      <div className='flex items-center justify-center h-screen bg-blue-200'>
      </div>
    </>
  )
}
