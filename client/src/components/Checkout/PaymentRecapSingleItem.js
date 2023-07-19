import Wrapper from '../../styles/SingleItemRowWrapper'
import chairImage1 from './../../assets/home/c1.png'
import chairImage2 from './../../assets/home/c2.png'
import chairImage3 from './../../assets/home/C3.png'
import deskImage1 from './../../assets/home/d1.png'
import deskImage2 from './../../assets/home/d2.png'
import deskImage3 from './../../assets/home/d3.png'

function PaymentRecapSingleItem({ item }) {
  const { price, quantity, name, image, category } = item
  console.log(image)
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
      <div className='single-item-box'>
        <div className='img-container'>
          <img className='product-img' src={randomImage()} />
        </div>
        <div className='product-details'>
          <div className='name-qty'>
            <div>{name}</div>
            <div>x {quantity}</div>
          </div>
          <div className='price'>{(price * quantity).toFixed(2)} €</div>
        </div>
      </div>
    </Wrapper>
  )
}
export default PaymentRecapSingleItem
const chairImages = [chairImage1, chairImage2, chairImage3]

const deskImages = [deskImage1, deskImage2, deskImage3]
