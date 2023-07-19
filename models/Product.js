import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: [true, 'provide a name'],
  },
  price: { type: Number, min: 0.1 },
  category: {
    type: String,
    required: true,
    enum: ['chair', 'desk'],
  },
  subCategory: {
    type: String,
    required: false,
    enum: ['gaming', 'office', 'electrical', 'manual', 'regular', 'ergonomic'],
    default: '',
  },
  description: {
    type: String,
    minlength: 30,
    maxlength: 2000,
    required: [true, 'provide a description'],
    default: ['This is a default description. It must be changed later...'],
  },
  image: {
    type: Number,
    required: true,
    default: 0,
  },
})

export default mongoose.model('Product', ProductSchema)
