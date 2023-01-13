import Product from '../models/Product.js'

const getAllProducts = async (req, res) => {
  const productsList = await Product.find()

  res.status(200).json(productsList)
}
const getSingleProduct = async (req, res) => {
  const { id: productID } = req.params
  console.log(productID)
  const product = await Product.findOne({ _id: productID })
  res.status(200).json(product)
}
const updateProduct = async (req, res) => {
  res.send('hihi')
}
const deleteProduct = async (req, res) => {
  res.send('hihi')
}
const createProduct = async (req, res) => {
  const productData = req.body
  await Product.create(productData)
  res.status(200).json(productData)
}
const getFilters = async (req, res) => {
  const { name, category, subCategory, minPrice, maxPrice } = req.query
  const filters = {}

  if (category && category !== 'all') {
    filters.category = category
  }
  if (subCategory && subCategory !== 'all') {
    filters.subCategory = subCategory
  }
  if (name) {
    filters.name = { $regex: name, $options: 'i' }
  }

  let result = await Product.find(filters)
  if (minPrice) {
    result = result.filter((product) => {
      if (product.price > Number(minPrice)) return product
    })
  }
  if (maxPrice) {
    result = result.filter((product) => {
      if (product.price < Number(maxPrice)) return product
    })
  }
  let subCategoryOptions = await Product.find({ category }).distinct(
    'subCategory'
  )
  res.status(200).json({ count: result.length, result, subCategoryOptions })
}

export {
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProduct,
  getFilters,
}
