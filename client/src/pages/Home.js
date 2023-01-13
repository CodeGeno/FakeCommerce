import Wrapper from '../styles/HomeWrapper.js'
import homeImage from '../assets/home/home.jpg'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
function Home() {
  return (
    <>
      <Wrapper>
        <div>
          <div className='top-section'>
            <img src={homeImage} className='hero-banner' />
          </div>
          <div className='wrapperText'>
            <h1 className='title'>
              Better <br />
              your <br />
              posture
            </h1>
            <div className='btns-container'>
              <button className='home-btn'>Ergonomic Chairs</button>
              <button className='home-btn'>Standing Desks</button>
            </div>
          </div>

          <div className='products-section'>Top sales!</div>
        </div>
      </Wrapper>
    </>
  )
}
export default Home
