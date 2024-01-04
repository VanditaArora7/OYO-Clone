//Dynamic Routing Square bracket compulsory
'use client'
import Head from 'next/head'
import Image from 'next/image'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const SingleHotel = ({ hotel }) => {
  const [auth, setauth] = useState(false)
  useEffect(() => {
    const cookie = Cookies.get('user')
    if (cookie) {
      setauth(true)
      return
    }
    setauth(false)
  }, [])
  return (
    <>
      <Head>
        <title>OYO hotels {hotel?.name}</title>
      </Head>
      <div className="mx-auto w-7/12 my-10">
        <Image
          src={hotel?.banner}
          alt="Hotel"
          width={200}
          height={200}
          className="w-full h-350 mr-3 mx-auto my-5"
        />
        <div className="w-full">
          <h3 className="text-3xl font-bold ">{hotel?.name}</h3>
          <p className="text-xl my-5 text-justify">{hotel?.description}</p>
          <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
            Price: &#8377; {hotel?.price}
          </button>
          <p className="text-3xl font-bold my-5">Facilities:</p>
          <ul className="flex text-xl justify-between ">
            {hotel
              ? hotel.facilities?.map((ele) => {
                  return (
                    <li
                      key={ele.name}
                      className="mr-10 mb-3 flex items-center "
                    >
                      <span>
                        <Image
                          src={ele.img}
                          width={200}
                          height={200}
                          className="h-8 w-8 rounded-full"
                        />
                      </span>

                      <span className="ml-4"> {ele.name}</span>
                    </li>
                  )
                })
              : ''}
          </ul>
          {auth ? (
            <Link href={`/payment/${hotel?._id}`}>
              <button className="w-60 h-14 rounded-lg bg-green-400 text-lg my-5">
                Book Now
              </button>
            </Link>
          ) : (
            <span className="text-2xl">
              Please{' '}
              <Link href={'/login'} className="text-blue-500">
                Log in
              </Link>{' '}
              to book now
            </span>
          )}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`)
  const data = await res.json()
  return {
    props: {
      hotel: data.hotel,
    },
  }
}

export default SingleHotel
