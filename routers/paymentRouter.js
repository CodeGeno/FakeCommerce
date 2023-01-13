import express from 'express'
const router = express.Router()
import {
  getConfig,
  createPaymentIntent,
  createReceipt,
  getAllOrders,
} from '../controllers/paymentController.js'

router.route('/config').get(getConfig)
router.route('/paymentIntent').post(createPaymentIntent)
router.route('/receipt').post(createReceipt)
router.route('/allOrders/:id').get(getAllOrders)

export default router
