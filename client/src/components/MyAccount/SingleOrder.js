import { useState } from 'react'
import Moment from 'react-moment'
import ReceiptItem from './ReceiptItem'

function SingleOrder({ order }) {
  const [show, setShow] = useState(false)
  const { date, receiptItems, total } = order
  return (
    <div className='single-order-box'>
      <div className='single-order-details'>
        <div className='date'>
          Order Date:<Moment format='DD/MM/YYYY'>{date}</Moment>
        </div>
        <div className='price'>Total: {total.toFixed(2)}€</div>
      </div>
      {show &&
        receiptItems.map((item, index) => {
          return <ReceiptItem key={index} item={item} />
        })}
      <button
        className='btn view-more'
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? 'Close' : 'Show More'}
      </button>
    </div>
  )
}
export default SingleOrder
