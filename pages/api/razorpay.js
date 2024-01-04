// import connectDB from '@/db'
// import Razorpay from 'razorpay'
// import shortid from 'shortid'

// const handler = async (req, res) => {
//   if (req.method === 'POST') {
//     connectDB()
//     const razorpay = new Razorpay({
//       key_id: process.env.RAZORPAY_KEY,
//       key_secret: process.env.RAZORPAY_SECRET,
//     })
//     //initialized a new Razorpay

//     const amount = 10 //10 rupees static
//     //1 rupee=100 paisa-->In razor pay if we r carrying out the transaction in INR it actually is done in paisa
//     const options = {
//       amount: (amount * 100).toString(),
//       currency: 'INR',
//       receipt: shortid.generate(),
//       payment_capture: 1,
//     }

//     //Now we ll make an API here
//     try {
//       const result = await razorpay.orders.create(options)
//       console.log(result)
//       res.status(201).json({
//         id: result.id,
//         currency: result.currency,
//         amount: result.amount,
//       })
//     } catch (err) {
//       console.log(err.msg)
//       return res.status(400).json({
//         msg: err.msg,
//       })
//     }
//   }
// }

// export default handler

import connectDB from '@/db'
import Razorpay from 'razorpay'
import shortid from 'shortid'
import Hotel from '@/models/hotel-model'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    connectDB()
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    })

    const hotel = await Hotel.findById(req.body.id)
    if (hotel) {
      const amount = hotel.price
      const options = {
        amount: (amount * 100).toString(),
        currency: 'INR',
        receipt: shortid.generate(),
        payment_capture: 1,
      }

      try {
        const result = await razorpay.orders.create(options)
        return res.status(201).json({
          id: result.id,
          currency: result.currency,
          amount: result.amount,
        })
      } catch (err) {
        res.status(400).json(err)
      }
    }
  }
}
