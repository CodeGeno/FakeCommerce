import Wrapper from '../styles/ProductContainerWrapper.js'
import { Link, useParams } from 'react-router-dom'

function SingleProduct({ product }) {
  const { _id, name, price, category, subCategory, description } = product
  let temp
  if (name.length > 25) {
    temp = name.slice(0, 25) + `...`
  } else {
    temp = name
  }

  return (
    <Wrapper>
      <Link to={`/products/${_id}`} className='product-container'>
        <div className='img-container'>
          <div className='img-box'>
            <img
              className='product-img'
              src='https://via.placeholder.com/150x150'
            />
          </div>
        </div>
        <h4>{temp}</h4>
        <p className='price-tag'>{price} €</p>
      </Link>
    </Wrapper>
  )
}
export default SingleProduct
