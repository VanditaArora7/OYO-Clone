import connectDB from '@/db'
import Hotel from '@/models/hotel-model'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    connectDB()
    const key = req.query.val
    const hotels = await Hotel.find({ 'facilities.name': { $in: key } })
    res.status(200).json({
      message: 'Successful',
      hotels,
    })
  }
}

export default handler
