import express from 'express'
const router = express.Router()

import {
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProduct,
  getFilters,
} from '../controllers/productController.js'

router.route('/').get(getAllProducts).post(createProduct)
router.route('/filters/').get(getFilters)

router
  .route('/:id')
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct)
export default router
