import { useAppContext } from '../context/appContext'
import thankYouImage from '../assets/home/thankyou.png'
import Wrapper from '../styles/PaymentSuccessWrapper'
import { NavLink } from 'react-router-dom'
function PaymentSuccess() {
  return (
    <Wrapper>
      <div className='img-box'>
        <img src={thankYouImage} />
      </div>
      <div className='home-btn-section'>
        <NavLink className='btn' to='/'>
          Go Back Home
        </NavLink>
      </div>
    </Wrapper>
  )
}
export default PaymentSuccess
