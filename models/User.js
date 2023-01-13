import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv'
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 6,
    validate: {
      validator: validator.isEmail,
      message: 'please provide an email',
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 8,
    maxlength: 15,
  },
})
UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function (candidatePassword) {
  let isRight = await bcrypt.compare(candidatePassword, this.password)
  console.log(isRight)
  return isRight
}
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
}

export default mongoose.model('User', UserSchema)
