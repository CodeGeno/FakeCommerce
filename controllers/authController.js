import { StatusCodes } from 'http-status-codes'
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from '../errors/index.js'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Complete all values')
  }

  const user = await User.findOne({ email }).select('+password')

  let result = await user.comparePassword(password)

  if (!result) {
    throw new UnauthenticatedError('Bad credentials')
  }

  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user, token })
}
const register = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Complete all values')
  }
  const user = await User.findOne({ email })
  console.log(user)
  if (user) {
    throw new BadRequestError('Email already in use')
  }
  const createdUser = await User.create({ email, password })
  createdUser.password = undefined
  res.status(StatusCodes.CREATED).json({ createdUser })
}

const updateUser = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body

  if (!email || !oldPassword || !newPassword) {
    throw new BadRequestError('Complete all values')
  }
  let user = await User.findOne({ email }).select('+password')

  if (!user) {
    throw new BadRequestError('No user with this email')
  }
  let passwordTrue = await user.comparePassword(oldPassword)
  console.log(passwordTrue)
  if (!passwordTrue) {
    throw new BadRequestError('Wrong password')
  }
  user.password = newPassword
  user.email = email

  await user.save()
  res.status(StatusCodes.OK).json({ user })
}

export { login, register, updateUser }
