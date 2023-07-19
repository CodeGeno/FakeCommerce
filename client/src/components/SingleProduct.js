import Wrapper from '../styles/ProductContainerWrapper.js'
import { Link } from 'react-router-dom'
import productImage from '../assets/150x150.png'
import chairImage1 from '../assets/home/c1.png'
import chairImage2 from '../assets/home/c2.png'
import chairImage3 from '../assets/home/C3.png'
import deskImage1 from '../assets/home/d1.png'
import deskImage2 from '../assets/home/d2.png'
import deskImage3 from '../assets/home/d3.png'
function SingleProduct({ product }) {
  const { _id, name, price, category, subCategory, description, image } =
    product
  let temp
  if (name.length > 25) {
    temp = name.slice(0, 25) + `...`
  } else {
    temp = name
  }

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
    <Wrapper>
      <Link to={`/products/${_id}`} className='product-container'>
        <div className='img-container'>
          <div className='img-box'>
            <img className='product-img' src={randomImage()} />
          </div>
        </div>
        <div>
          <h4>{temp}</h4>
          <p className='price-tag'>{price} €</p>
        </div>
      </Link>
    </Wrapper>
  )
}
export default SingleProduct

const chairImages = [chairImage1, chairImage2, chairImage3]

const deskImages = [deskImage1, deskImage2, deskImage3]
