function PaymentRecapSingleItem({ item }) {
  const { price, quantity, name } = item
  return (
    <div className='single-item-box'>
      <div className='img-container'>
        <img className='product-img' src='https://via.placeholder.com/75x75' />
      </div>
      <div className='product-details'>
        <div className='name-qty'>
          <div>{name}</div>
          <div>x {quantity}</div>
        </div>
        <div className='price'>{(price * quantity).toFixed(2)} €</div>
      </div>
    </div>
  )
}
export default PaymentRecapSingleItem
