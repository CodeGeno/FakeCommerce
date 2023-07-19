import { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appContext.js'
import SingleOrder from './SingleOrder.js'

function MyOrders() {
  const { getOrders, myOrders } = useAppContext()
  const [show, setShow] = useState(false)
  useEffect(() => {
    getOrders()
  }, [])
  return (
    <div className='account-section'>
      <button
        className='btn'
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? 'Hide orders' : 'My orders'}
      </button>
      {show && myOrders.length === 0 && (
        <h4>There is no order for this account !</h4>
      )}
      {show &&
        myOrders.length > 0 &&
        myOrders.map((order, index) => {
          return <SingleOrder order={order} key={index} />
        })}
    </div>
  )
}
export default MyOrders
