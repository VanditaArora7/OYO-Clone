import Header2 from '@/components/Header2'
import Block from '../components/Block'
import Header1 from '../components/Header1'
import Header3 from '@/components/Header3'
import Image from 'next/image'
import Head from 'next/head'
import Header4 from '@/components/Header4'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Head>
        <title>
          OYO: India's Best Online Hotel Booking Site For Sanitized Stay
        </title>
        <link rel="icon" href="/icon.png"></link>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20">
        <div className="my-10">
          <Image
            src={'/banner1.avif'}
            alt="banner1"
            width={180}
            height={180}
            className="h-60 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={'/banner2.avif'}
            alt="banner2"
            width={180}
            height={180}
            className="h-30 w-full"
          />
        </div>
        <Header4 />
      </div>
      <Footer />
    </div>
  )
}
export default Home
