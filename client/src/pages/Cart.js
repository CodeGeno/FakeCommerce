import { relativeTimeRounding } from 'moment/moment'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import CartItemRows from '../components/Cart/CartItemRow'
import { useAppContext } from '../context/appContext'
import Wrapper from '../styles/CartWrapper.js'
function Cart() {
  const { cart, total, calcTotal, user, setLastUrl } = useAppContext()
  useEffect(() => {
    getPriceValues()
    calcTotal(cart)
  }, [cart])
  function getPriceValues() {
    let subTotal, vat
    subTotal = total / 1.21
    subTotal = Number(subTotal.toFixed(2))
    vat = Number((total - subTotal).toFixed(2))
    let calcTotal = subTotal + vat
    return (
      <>
        <div className='price-recap'>
          <div className='price-recap-row'> Subtotal:</div>
          <div className='price-recap-row'> {subTotal.toFixed(2)} €</div>
        </div>
        <div className='price-recap'>
          <div className='price-recap-row'> VAT:</div>
          <div className='price-recap-row'> {vat.toFixed(2)} €</div>
        </div>
        <div className='price-recap'>
          <div className='price-recap-row'> Total:</div>
          <div className='price-recap-row'> {calcTotal.toFixed(2)} €</div>
        </div>
      </>
    )
  }

  return (
    <Wrapper>
      <div className='page-title'>Cart</div>
      {cart.length > 0 ? (
        <>
          {' '}
          <div className='cart-section'>
            <div className='cart-container'>
              <ul className='cart-row-title'>
                <li className='name'>Name</li>
                <li className='quantity'>Quantity</li>
                <li className='totalPrice'>Total Price</li>
              </ul>

              <CartItemRows />
            </div>
          </div>
          <div className='price-section'>
            <div className='price-container'>
              <div className='empty' />
              <div className='total-price'>{getPriceValues()}</div>
            </div>
          </div>
          <div className='checkout-section'>
            <div className='checkout-container'>
              {total > 0 && (
                <NavLink
                  onClick={setLastUrl}
                  to={user ? '/checkout' : '/login'}
                  className='checkout-btn btn'
                >
                  Proceed to checkout
                </NavLink>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='empty-cart-section'>
            <h2>Your cart is empty !</h2>
          </div>
          <div className='home-button-section'>
            <NavLink to='/' className='btn'>
              Go Back Home
            </NavLink>
          </div>
        </>
      )}
    </Wrapper>
  )
}
export default Cart
