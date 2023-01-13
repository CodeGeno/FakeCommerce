import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from '../components/Checkout/PaymentForm.js'
import { useAppContext } from '../context/appContext.js'
import { useNavigate } from 'react-router'
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PRIVATE)

export default function Payment() {
  const navigate = useNavigate()
  const {
    cart,
    total,
    deliveryAddress,
    setClient_Secret,
    getPublishableKey,
    publishableKey,
    getPaymentIntent,
    client_Secret,
  } = useAppContext()
  const [clientSecret, setClientSecret] = useState('')
  const [stripePromise, setStripePromise] = useState(null)
  useEffect(() => {
    getPublishableKey()
  }, [])
  useEffect(() => {
    if (publishableKey !== '') {
      setStripePromise(loadStripe(publishableKey))
    }
  }, [publishableKey])

  useEffect(() => {
    if (cart && total > 0 && deliveryAddress !== '') {
      getPaymentIntent()
    } else {
      navigate('/cart')
    }
  }, [])
  useEffect(() => {
    if (client_Secret !== '') {
      try {
        setClientSecret(client_Secret)
      } catch (error) {}
    }
  }, [client_Secret])

  const appearance = {
    theme: 'stripe',
  }
  const options = {
    clientSecret,
    appearance,
  }

  return (
    <div className='App'>
      {clientSecret && stripePromise && (
        <Elements options={{ clientSecret }} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  )
}
