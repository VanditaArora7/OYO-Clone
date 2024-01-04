import connectDB from '@/db'
import User from '@/models/user-model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    connectDB()
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        message: 'All Fields are mandatory!',
      })
    }
    const emailExists = await User.findOne({ email })
    if (!emailExists) {
      return res.status(400).json({
        message: 'Please register first.',
      })
    }
    const passwordMatched = await bcrypt.compare(password, emailExists.password)
    if (!passwordMatched) {
      return res.status(404).json({
        message: 'Invalid Credentials',
      })
    }
    const token = jwt.sign(
      { token: emailExists._id },
      process.env.JWT_SECRET_LOGIN,
      {
        expiresIn: '365d',
      }
    )
    return res.status(200).json({
      message: 'Logged in successfully',
      token,
    })
  }
}
export default handler
