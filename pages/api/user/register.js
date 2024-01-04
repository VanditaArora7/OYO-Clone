import connectDB from '@/db'
import User from '@/models/user-model' //schema imported
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    connectDB()
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(404).json({
        message: 'All fields are mandatory',
      })
    }
    const emailExists = await User.findOne({ email })
    if (emailExists) {
      return res.status(400).json({
        message: 'User already registered.Please Login.',
      })
    }
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    })
    const result = await newUser.save()
    const token = jwt.sign(
      { token: result._id },
      process.env.JWT_SECRET_LOGIN,
      {
        expiresIn: '365d',
      }
    )
    return res.status(201).json({
      message: 'User Registered successfully',
      token,
      user: result,
    })
  }
}

export default handler
