import connectDB from '@/db'
import Hotel from '@/models/hotel-model'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    connectDB()
    const hotelslist = await Hotel.find({ price: { $lte: req.query.price } })
    res.status(200).json({
      message: 'Range Filter',
      hotelslist,
    })
  }
}
export default handler

//Ye range api haiii--->ye done ho chuki hai
