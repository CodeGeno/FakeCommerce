import React, { useEffect, useState } from 'react'
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'

import Wrapper from '../../styles/StripeWrapper.js'
import { useAppContext } from '../../context/appContext.js'
import PaymentProductRecap from './PaymentProductRecap.js'
import { useNavigate } from 'react-router'

export default function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { addReceipt, client_Secret } = useAppContext()
  const navigate = useNavigate()
  const clientSecret = client_Secret
  console.log('Secret', clientSecret)

  useEffect(() => {
    if (!stripe) {
      return
    }

    stripe.retrievePaymentIntent(clientSecret)
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    setIsLoading(true)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/payment/success`,
      },
    })

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    console.log('Payment intent', paymentIntent)
    switch (paymentIntent.status) {
      case 'succeeded':
        setMessage('Payment succeeded!')
        break
      case 'processing':
        setMessage('Your payment is processing.')
        break
      case 'requires_payment_method':
        setMessage('Your payment was not successful, please try again.')
        break
      default:
        setMessage('Something went wrong.')
        break
    }

    if (error !== undefined) {
      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message)
      } else {
        setMessage('An unexpected error occurred.')
      }
    }

    if (paymentIntent && paymentIntent.status === 'succeeded') {
      addReceipt()
      setTimeout(() => {
        navigate('/payment/success')
      }, 3500)
    }
    setIsLoading(false)
  }

  const paymentElementOptions = {
    layout: 'tabs',
  }

  return (
    <Wrapper>
      <div className='payment-section'>
        <PaymentProductRecap />
        <div className='form-section'>
          <form id='payment-form' onSubmit={handleSubmit}>
            <PaymentElement
              id='payment-element'
              options={paymentElementOptions}
            />
            <button disabled={isLoading || !stripe || !elements} id='submit'>
              <span id='button-text'>
                {isLoading ? (
                  <div className='spinner' id='spinner'></div>
                ) : (
                  'Pay now'
                )}
              </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id='payment-message'>{message}</div>}
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
