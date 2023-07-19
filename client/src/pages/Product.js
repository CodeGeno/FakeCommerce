import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAppContext } from '../context/appContext'
import Wrapper from '../styles/ProductPageWrapper'
import Alert from '../components/Alert'
import chairImage1 from '../assets/home/c1.png'
import chairImage2 from '../assets/home/c2.png'
import chairImage3 from '../assets/home/C3.png'
import deskImage1 from '../assets/home/d1.png'
import deskImage2 from '../assets/home/d2.png'
import deskImage3 from '../assets/home/d3.png'
function Product() {
  const { getSingleProduct, displayedProduct, addToCart, cart } =
    useAppContext()

  const { productID } = useParams()
  useEffect(() => {
    getSingleProduct(productID)
  }, [])

  const [quantity, setQuantity] = useState(1)
  const { _id, name, price, category, subCategory, description, image } =
    displayedProduct

  const randomImage = () => {
    let imagePath
    if (category == 'chair') {
      imagePath = chairImages[image]
    } else {
      imagePath = deskImages[image]
    }
    return imagePath
  }
  return (
    <>
      <Wrapper>
        <div className='top-section'>
          <div className='box'>
            <div className='name banner'>{name}</div>
            <div className='img-box'>
              <img className='product-img' src={randomImage()} />
            </div>
          </div>
          <div className='box'>
            <div className='name banner'>Description</div>
            {description}
          </div>
          <div className='price-box box'>
            <div className='price'>{price} €</div>

            <div className='add-cart-section'>
              <div className='qty-box'>
                <button
                  className='quantity-btn btn'
                  onClick={() => {
                    setQuantity((prev) => {
                      if (prev > 1) {
                        return prev - 1
                      } else {
                        return prev
                      }
                    })
                  }}
                >
                  -
                </button>
                <div className='quantity-text'>{quantity}</div>
                <button
                  className='quantity-btn btn'
                  onClick={() => {
                    setQuantity((prev) => prev + 1)
                  }}
                >
                  +
                </button>
              </div>
              <button
                className='add-cart-btn btn'
                onClick={() => {
                  addToCart(productID, quantity, cart)
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
          <Alert />
        </div>
      </Wrapper>
    </>
  )
}
export default Product

const chairImages = [chairImage1, chairImage2, chairImage3]

const deskImages = [deskImage1, deskImage2, deskImage3]
