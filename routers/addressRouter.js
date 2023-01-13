import express from 'express'
const router = express.Router()
import {
  createAddress,
  updateAddress,
  deleteAddress,
  getAllAddresses,
  getSingleAddress,
} from '../controllers/addressController.js'

router.route('/').get(getAllAddresses).post(createAddress)
router
  .route('/:id')
  .patch(updateAddress)
  .delete(deleteAddress)
  .get(getSingleAddress)

export default router
