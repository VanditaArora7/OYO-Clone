'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'

const Filter = ({
  price,
  setprice,
  handlePrice,
  checkedlist,
  setcheckedlist,
}) => {
  const [list, setlist] = useState([])

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get('/api/facilities')

      if (data?.facilities) {
        setlist(data.facilities)
      }
    } catch (err) {
      console.log(err)
    }
  }
  let newlist = []
  const handleCheckedList = (e) => {
    if (e.target.checked) {
      //checkedlist.push(e.target.value)
      newlist.push(e.target.value)
      setcheckedlist(newlist)
      return
    }
    newlist = newlist.filter((i) => i == e.target.value)
    setcheckedlist(newlist)
  }
  useEffect(() => {
    fetchFacilities()
  }, []) //as soon as the page reloads->fetchFacilties will be executed once

  return (
    <>
      <div className="border-2 border-red-500 rounded-md m-5 h-auto py-10 px-3">
        <label htmlFor="price" className="text-xl mr-3 font-bold">
          Price :
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={500}
          max={2000}
          onChange={(e) => {
            setprice(e.target.value)
          }}
          defaultValue={price ? price : 0}
        />
        <div className="ml-10">&#8377; {price ? price : ''}</div>
        <button
          className="w-39 px-4 text-center h-10 bg-green-400 cursor-pointer my-2 rounded-lg ml-8"
          onClick={handlePrice}
        >
          Search
        </button>
        <div className="my-10">
          <h3 className="text-xl font-bold my-3">Filter By Facilities:</h3>
          {list?.map((e) => {
            return (
              <p key={e} className="grid grid-cols-3 my-3">
                <label htmlFor="checkbox" className="col-span-2">
                  {e}
                </label>
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  value={e}
                  className="w-5 h-5 ml-3 my-1 col-span-1"
                  onChange={handleCheckedList}
                />
              </p>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Filter
