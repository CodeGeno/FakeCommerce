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
    enum: ['', 'electrical', 'manual', 'regular'],
    default: '',
  },
  description: {
    type: String,
    minlength: 30,
    maxlength: 2000,
    required: [true, 'provide a description'],
    default: ['This is a default description. It must be changed later...'],
  },
})

export default mongoose.model('Product', ProductSchema)
