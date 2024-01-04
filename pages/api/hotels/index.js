import connectDB from '@/db'
import Hotel from '@/models/hotel-model.js'

// const handler = async (req, res) => {
//   try {
//     connectDB()
//     if (req.method === 'POST') {
//       const newHotel = await Hotel.create(req.body)
//       await newHotel.save()
//       res.status(201).json({
//         message: 'New Hotel added successfully',
//         result: newHotel,
//       })
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

const handler = async (req, res) => {
  try {
    await connectDB()
    if (req.method === 'GET') {
      const newhotel = await Hotel.find({ location: req.query.city })
      if (newhotel.length > 0) {
        res.status(200).json({
          message: 'Success',
          newhotel,
        })
      }
      const allhotels = await Hotel.find({})
      return res.status(200).json({ msg: 'Showing all hotels', allhotels })
    }
  } catch (err) {
    console.log(err)
  }
}
export default handler
