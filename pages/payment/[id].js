// 'use client'
// import { useEffect } from 'react'
// import Razorpay from 'razorpay'
// import axios from 'axios'
// import Script from 'next/script'

// const Payment = () => {
//   const makePayment = async () => {
//     const { data } = await axios.post('/api/razorpay')

//     const options = {
//       key: process.env.RAZORPAY_KEY,
//       name: 'Vandita',
//       currency: data.currency,
//       order_id: data.id,
//       description: 'Your Payment is Successful',
//       handler: function (response) {},
//       prefill: {
//         name: 'Vandita Arora',
//         email: 'vanditaarora615@gmail.com',
//         contact: 9045139226,
//       },
//     }
//     const paymentObj = new window.Razorpay(options)
//     paymentObj.open()
//   }
//   useEffect(() => {
//     makePayment()
//   }, [])

//   return (
//     <>
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />
//     </>
//   )
// }
// export default Payment

import axios from 'axios'
import Script from 'next/script'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Payment = () => {
  const router = useRouter()

  const makePayment = async () => {
    const val = {
      id: router.query?.id,
    }
    const { data } = await axios.post(`/api/razorpay`, val)

    const options = {
      key: process.env.RAZORPAY_KEY,
      name: 'Vandita',
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: 'Thank You !',
      handler: function (response) {},
      prefill: {
        name: 'Vandita',
        email: 'vanditaarora615@gmail.com',
        contact: 9045139226,
      },
    }

    const paymentObj = new window.Razorpay(options)
    paymentObj.open()
  }

  useEffect(() => {
    makePayment()
  }, [])

  return (
    <>
      <Script src="http://checkout.razorpay.com/v1/checkout.js" />
    </>
  )
}

export default Payment
