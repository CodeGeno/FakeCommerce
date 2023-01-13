import Address from '../models/DeliveryAddress.js'

const createAddress = async (req, res) => {
  const { firstName, lastName, zipCode, address, houseNumber, city } = req.body

  req.body.createdBy = req.user.userId
  let result = await Address.create(req.body)
  res.status(200).json({ result })
}
const updateAddress = async (req, res) => {
  res.send('update address')
}
const deleteAddress = async (req, res) => {
  res.send('del')
}
const getAllAddresses = async (req, res) => {
  let allAddress = await Address.find({ createdBy: req.user.userId })
  res.status(200).json(allAddress)
}
const getSingleAddress = async (req, res) => {
  res.send('Get single address')
}
export {
  createAddress,
  updateAddress,
  deleteAddress,
  getAllAddresses,
  getSingleAddress,
}
