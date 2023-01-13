import { useAppContext } from '../../context/appContext'

function CartItemRows() {
  const { cart, changeCartQuantity } = useAppContext()

  return (
    <>
      {cart.length > 0 &&
        cart.map((cartItem, index) => {
          const { name, price, quantity, _id } = cartItem

          return (
            <ul className='cart-row' key={index}>
              <li className='name'>{name}</li>

              <div className='quantity'>
                <button
                  className='btn'
                  onClick={() => {
                    changeCartQuantity(_id, -1, cart)
                  }}
                >
                  -
                </button>
                <div>{quantity}</div>
                <button
                  className='btn'
                  onClick={() => {
                    changeCartQuantity(_id, 1, cart)
                  }}
                >
                  +
                </button>
              </div>
              <li className='totalPrice'>{(price * quantity).toFixed(2)} €</li>
            </ul>
          )
        })}
      {cart.length < 1 && (
        <ul className='cart-row'>
          <li className='name'></li>

          <div className='quantity'>
            <div></div>
          </div>
          <li className='totalPrice'> </li>
        </ul>
      )}
    </>
  )
}
export default CartItemRows
