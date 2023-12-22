'use client'

import Image from 'next/image'

//Client side rendering

const Header4 = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-200 px-5 py-1">
      <div className="flex items-center">
        <Image
          src={'/fire.jpg'}
          alt="fire image"
          width={200}
          height={200}
          className="w-20 h-20 rounded-full mr-5"
        />
        <div className="text-xl">
          <p className="font-bold">Get access to exclusive deals</p>
          <p className="text-l text-gray-400">
            Only the best deals reach your inbox
          </p>
        </div>
      </div>
      <div className="flex mr-5">
        <input
          type="email"
          className="px-5 py-1 mr-4 w-80 h-14 outline-none border rounded-lg border-gray-300"
          placeholder="sam@gmail.com"
        />
        <button className="w-40 h-14 rounded-lg bg-red-500 text-xl text-white cursor-pointer">
          Notify
        </button>
      </div>
    </div>
  )
}
export default Header4
