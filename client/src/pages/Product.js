import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAppContext } from '../context/appContext'
import Wrapper from '../styles/ProductPageWrapper'
function Product() {
  const { getSingleProduct, displayedProduct, addToCart, cart } =
    useAppContext()

  const { productID } = useParams()
  console.log(productID)
  useEffect(() => {
    getSingleProduct(productID)
  }, [])
  const [quantity, setQuantity] = useState(1)
  const { _id, name, price, category, subCategory, description } =
    displayedProduct
  return (
    <>
      <Wrapper>
        <div className='top-section'>
          <div className='top-left-section'>
            <div className='img-box'>
              <img
                className='product-img'
                src='https://via.placeholder.com/400x400'
              />
            </div>
          </div>
          <div className='top-mid-section'>
            <h1 className='name'>{name}</h1>
            <div>
              <h2 className='banner'>Description</h2>
              <p>{description}</p>
            </div>
          </div>
          <div className='top-right-section'>
            <h1 className='price'>{price} €</h1>
            <div className='add-cart-section'>
              <div className='qty-section'>
                <button
                  className='qty-btn'
                  onClick={() => {
                    setQuantity((prev) => {
                      if (prev > 0) {
                        return prev - 1
                      } else {
                        return prev
                      }
                    })
                  }}
                >
                  -
                </button>
                <div className='quantity'>
                  <p>{quantity}</p>
                </div>
                <button
                  className='qty-btn'
                  onClick={() => {
                    setQuantity((prev) => prev + 1)
                  }}
                >
                  +
                </button>
              </div>
              <button
                className='qty-btn add-cart-btn '
                onClick={() => {
                  addToCart(productID, quantity, cart)
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
export default Product
