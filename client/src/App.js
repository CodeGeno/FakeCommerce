import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Authentication, Error, Home, Chairs } from './pages'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Desks from './pages/Desks'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'
import MyAccount from './pages/MyAccount'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

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
      </BrowserRouter>
    </>
  )
}

export default App
