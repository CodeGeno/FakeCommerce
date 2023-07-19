import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Authentication, Error, Home, Chairs } from './pages'
import React, { Suspense, lazy } from 'react'
const Navbar = lazy(() => import('./components/Navbar'))
const Product = lazy(() => import('./pages/Product'))
const Cart = lazy(() => import('./pages/Cart'))
const Desks = lazy(() => import('./pages/Desks'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Payment = lazy(() => import('./pages/Payment'))
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'))
const MyAccount = lazy(() => import('./pages/MyAccount'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Authentication />} />
            <Route path='/myaccount' element={<MyAccount />} />
            <Route path='/chairs' element={<Chairs />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/desks' element={<Desks />} />
            <Route path='/products/:productID' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/payment/success' element={<PaymentSuccess />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
