import { useNavigate } from 'react-router-dom'

function ReceiptItem({ item }) {
  const { price, name, quantity, _id } = item
  return (
    <div className='receipt-item-box'>
      <div>
        {name.substring(0, 20)} X{quantity}
      </div>
      <div>{price}</div>
    </div>
  )
}
export default ReceiptItem
