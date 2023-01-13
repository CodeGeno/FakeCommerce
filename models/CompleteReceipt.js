import mongoose from 'mongoose'

const ReceiptSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: [true, 'Provide user'],
  },
  date: {
    type: Date,
    required: true,
  },
  receiptItems: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      totalPrice: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
})

export default mongoose.model('Receipt', ReceiptSchema)
