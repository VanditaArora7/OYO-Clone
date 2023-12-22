'use client'
const Header3 = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className="mx-10 p-5">
        <h2 className="font-bold text-white text-4xl text-center ">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="grid grid-cols-5 my-5 mx-10">
          <input
            type="text"
            placeholder="Search.."
            className="h-16 ouline-none px-3 text-lg border-r-2 border-gray-400 col-span-2"
          />
          <input
            type="text"
            placeholder="Search.."
            className="h-16 ouline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <input
            type="text"
            placeholder="Search.."
            className="h-16 ouline-none px-3 text-lg border-r-2 border-gray-400 col-span-1"
          />
          <button
            type="submit"
            className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white "
          >
            Search
          </button>
        </div>
        <div className="flex mx-20 my-5 font-bold">
          <button
            type="submit"
            className="h-16 px-3 py-2 hover:cursor-pointer hover:pointer text-white text-xl mr-5"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className="h-16 px-3 py-2  border-2 border-white hover:bg-slate-100 hover:cursor-pointer text-white mr-5 rounded-xl"
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  )
}
export default Header3
