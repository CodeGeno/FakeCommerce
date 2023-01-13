import { relativeTimeRounding } from 'moment'
import { useAppContext } from '../context/appContext'
import SingleProduct from './SingleProduct'
import Wrapper from '../styles/ProductSectionWrapper'

function ProductSection() {
  const { products, productsCount } = useAppContext()

  return (
    <>
      <Wrapper>
        <div>{productsCount} products found</div>
        <div className='products-container'>
          {products.map((product, index) => {
            return <SingleProduct product={product} key={index} />
          })}
        </div>
      </Wrapper>
    </>
  )
}
export default ProductSection
