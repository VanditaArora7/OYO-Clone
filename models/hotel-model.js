import mongoose from 'mongoose'

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    banner: {
      type: String,
      required: true,
      //hotel's banner image
    },
    gallery: [
      {
        type: String,
      },
      //Other images of the hotel this is an array actually
    ],
    price: {
      type: Number,
    },
    facilities: [
      {
        img: { type: String }, //Jo facility hai  uska symbol
        name: String,
      },
    ],
    location: {
      type: String,
    },
  },
  { timestamps: true }
)

export default mongoose.models?.hotel || mongoose.model('hotel', hotelSchema)
