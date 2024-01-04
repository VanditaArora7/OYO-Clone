import Filter from '@/components/Filter'
import Header1 from '@/components/Header1'
import Hotel from '@/components/Hotel'
//import { data } from 'autoprefixer'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Hotels = ({ hotels }) => {
  const [list, setlist] = useState([])
  const [price, setprice] = useState(1100)
  //use state created
  const [checkedlist, setcheckedlist] = useState([])

  const handleCheckList = async () => {
    const { data } = await axios.get(
      `/api/facilities/search?val=${checkedlist}`
    )
    if (data?.hotels) {
      setlist(data.hotels)
    }
  }
  useEffect(() => {
    if (checkedlist) {
      handleCheckList()
    }
  }, [checkedlist])

  const handlePrice = async () => {
    try {
      const res = await axios.get(`/api/facilities/range?price=${price}`)
      if (res.data?.hotelslist) {
        // console.log(res)
        setlist(res.data.hotelslist)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Filter
            price={price}
            setprice={setprice}
            handlePrice={handlePrice}
            checkedlist={checkedlist}
            setcheckedlist={setcheckedlist}
          />
        </div>
        <div className="col-span-10">
          {list.length > 0
            ? list.map((e) => {
                return (
                  <div className=" m-5 col-span-10" key={e._id}>
                    <Hotel e={e} />
                  </div>
                )
              })
            : hotels
            ? hotels.map((e) => {
                return (
                  <div className=" m-5 col-span-10" key={e._id}>
                    <Hotel e={e} />
                  </div>
                )
              })
            : ''}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const res = await fetch(
    `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
  ) //ek simple get request bhejni hai
  const data = await res.json()

  return {
    props: {
      hotels: data.newhotel ? data.newhotel : data.allhotels,
    },
  }
}

//This ctx is standard -->context

export default Hotels
