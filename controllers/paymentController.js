import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
import Product from '../models/Product.js'
import Receipt from '../models/CompleteReceipt.js'
import { StatusCodes } from 'http-status-codes'

const getConfig = (req, res) => {
  res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY })
}

const calcOrderAmount = async (item) => {
  const product = await Product.findOne({ _id: item._id })
  const { price } = product
  return price * item.quantity
}

const createPaymentIntent = async (req, res) => {
  const cart = req.body
  let total = 0
  if (cart.length > 0) {
    for (let element of cart) {
      total += await calcOrderAmount(element)
    }

    // for (let i = 0; i < cart.length; i++) {
    //   total += await calcOrderAmount(cart[i])
    // }

    total = Math.ceil(total * 100)
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'eur',
      amount: total,
      automatic_payment_methods: {
        enabled: true,
      },
    })
    res.status(200).send({ clientSecret: paymentIntent.client_secret })
  } catch (error) {}
}

const createReceipt = async (req, res) => {
  let receipt = await Receipt.create(req.body)
  res.status(200).json(receipt)
}

const getAllOrders = async (req, res) => {
  const { id } = req.params
  const receipts = await Receipt.find({ createdBy: id })
  res.status(StatusCodes.OK).json(receipts)
}

export { getConfig, createPaymentIntent, createReceipt, getAllOrders }
