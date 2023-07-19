import { useAppContext } from '../../context/appContext.js'
import PaymentRecapSingleItem from './PaymentRecapSingleItem.js'
import SingleAddress from '../SingleAddress.js'
function PaymentProductRecap() {
  const { cart, total, deliveryAddress } = useAppContext()
  return (
    <div className='recap'>
      <div>
        <h3>Recap</h3>
        <h4>Address</h4>
        <SingleAddress completeAddress={deliveryAddress} />
        <h4>Products</h4>
        {cart &&
          cart.map((item, index) => {
            return <PaymentRecapSingleItem key={index} item={item} />
          })}
      </div>
      <div className='due'>Total: {total.toFixed(2)} €</div>
    </div>
  )
}
export default PaymentProductRecap
