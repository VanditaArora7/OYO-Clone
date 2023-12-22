import Image from 'next/image'
import Block from './Block'

const Header1 = () => {
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-300  h-24 px-5">
      <div>
        <Image
          src={'/logo.png'}
          alt="Logo"
          width={200}
          height={200}
          className="w-28 h-28"
        />
      </div>

      <div className=" h-full flex ">
        <Block
          title={'Become a Member'}
          para={'Additional 10% off on stays.'}
          imgsrc={'/demo.svg'}
        />
        <Block
          title={'OYO for business'}
          para={'Trusted by 5000 corporates'}
          imgsrc={'/demo.svg'}
        />
        <Block
          title={'List your property'}
          para={'Start earning in 30 min.'}
          imgsrc={'/demo.svg'}
        />
        <Block
          title={'9876543210'}
          para={'Call us to book your stay now.'}
          imgsrc={'/demo.svg'}
        />
        <div className="flex items-center pl-3">
          <Image
            src={'/demo.svg'}
            width={200}
            height={200}
            className="w-10 h-10 rounded-full mr-5"
          />
          <h3 className="font-bold">Login/Signup</h3>
        </div>
      </div>
    </div>
  )
}
export default Header1
