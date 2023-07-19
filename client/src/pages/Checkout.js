import AddAddress from '../components/AddAddress'
import Wrapper from '../styles/CheckoutWrapper.js'
import { useEffect, useState } from 'react'
import { useAppContext } from '../context/appContext'
import SingleAddress from '../components/SingleAddress'
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'

function Checkout() {
  const { getAllAddresses, user, allAddresses, deliveryAddressSetup } =
    useAppContext()
  const [show, setShow] = useState(false)

  useEffect(() => {
    getAllAddresses()
  }, [])
  const [selectedAddress, setSelectedAddress] = useState(0)
  useEffect(() => {
    if (allAddresses.length === 0) {
      setShow(true)
    }
  }, [allAddresses])
  const navigate = useNavigate()
  return (
    <Wrapper>
      <div className='section'>
        <div className='checkout-container'>
          <div>
            <h1>Checkout</h1>
            <h4>Select delivery address</h4>
            {allAddresses.length > 0 &&
              allAddresses.map((address, index) => {
                return (
                  <SingleAddress
                    key={index}
                    index={index}
                    completeAddress={address}
                    setSelectedAddress={setSelectedAddress}
                    selectedAddress={selectedAddress}
                    radio={true}
                  />
                )
              })}
            <Alert />
            <AddAddress show={show} />
          </div>
          <button
            className='margin btn'
            disabled={selectedAddress === null}
            onClick={() => {
              deliveryAddressSetup(selectedAddress)
              navigate('/payment')
            }}
          >
            {selectedAddress === null
              ? 'Please select a delivery address'
              : 'Payment Options'}
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
export default Checkout
