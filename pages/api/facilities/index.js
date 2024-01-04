import connectDB from '@/db'
import Hotel from '@/models/hotel-model'

const handler = async (req, res) => {
  connectDB()
  if (req.method === 'GET') {
    const facilities = await Hotel.find({}).distinct('facilities.name')
    res.status(200).json({
      message: 'Successful',
      facilities,
    })
  }
}
export default handler
