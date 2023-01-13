import mongoose from 'mongoose'

const AddressSchema = new mongoose.Schema({
  lastName: { type: String, minlength: 2, required: true },
  firstName: { type: String, minlength: 3, required: true },
  zipCode: { type: Number, minlength: 4, maxlength: 4, required: true },
  address: { type: String, minlength: 5, required: true },
  houseNumber: { type: Number, required: true },
  city: { type: String, required: true },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Provide user'],
  },
})

export default mongoose.model('Address', AddressSchema)
