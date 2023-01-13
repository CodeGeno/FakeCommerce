import { useState, useEffect } from 'react'
import CheckoutFormRow from './CheckoutFormRow.js'
import { useAppContext } from '../context/appContext'
import Wrapper from '../styles/AddAddressWrapper'
function AddAddress({ show }) {
  const initialValue = {
    country: 'BE',
    firstName: '',
    lastName: '',
    zipCode: '',
    address: '',
    houseNumber: '',
    city: '',
  }
  const [deliveryAddress, setDeliveryAddress] = useState(initialValue)
  const { addAddress, customAlert } = useAppContext()

  const handleChange = (e) => {
    e.preventDefault()
    setDeliveryAddress({ ...deliveryAddress, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { firstName, lastName, zipCode, address, houseNumber, city } =
      deliveryAddress
    if (
      !firstName ||
      !lastName ||
      !zipCode ||
      !address ||
      !houseNumber ||
      !city
    ) {
      customAlert('danger', 'Enter all values')
      return
    }
    try {
      addAddress(deliveryAddress)
      setDeliveryAddress(initialValue)
      setShowSection(false)
    } catch (error) {
      console.log('error')
    }
  }
  const [showSection, setShowSection] = useState(show || false)

  return (
    <Wrapper>
      <div className='checkout-section'>
        <button
          className='btn'
          onClick={() => {
            setShowSection(!showSection)
          }}
        >
          Add Address
        </button>
        <form
          className={showSection ? 'form-container' : 'hide form-container'}
          onSubmit={onSubmit}
        >
          <div className='name-row'>
            <div className='name'>
              <CheckoutFormRow
                type='text'
                value={deliveryAddress.firstName}
                name='firstName'
                handleChange={handleChange}
                className='form-input'
                labelText='First Name'
              />
            </div>
            <div className='name'>
              <CheckoutFormRow
                type='text'
                value={deliveryAddress.lastName}
                name='lastName'
                handleChange={handleChange}
                className='form-input'
                labelText='Last Name'
              />
            </div>
          </div>

          <div className='address-row'>
            <div className='street'>
              <CheckoutFormRow
                type='text'
                value={deliveryAddress.address}
                name='address'
                handleChange={handleChange}
                className='form-input'
                labelText='Street Name'
              />
            </div>
            <div className='nr'>
              <CheckoutFormRow
                type='number'
                value={deliveryAddress.houseNumber}
                name='houseNumber'
                handleChange={handleChange}
                className='form-input'
                labelText='Nr.'
              />
            </div>
          </div>
          <div className='city-row'>
            <div className='city'>
              <CheckoutFormRow
                type='text'
                value={deliveryAddress.city}
                name='city'
                handleChange={handleChange}
                className='form-input'
                labelText='City'
              />
            </div>
            <div className='zip'>
              <CheckoutFormRow
                type='number'
                value={deliveryAddress.zipCode}
                name='zipCode'
                handleChange={handleChange}
                className='form-input'
                labelText='Zip Code'
              />
            </div>
          </div>
          <div className='btn-container'>
            <button type='submit' className='btn'>
              Add
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}
export default AddAddress
