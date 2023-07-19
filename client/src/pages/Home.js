import Wrapper from '../styles/HomeWrapper.js'
import homeImage from '../assets/home/home.jpg'

import chairImage from '../assets/home/chair.jpg'
import deskImage from '../assets/home/desk.jpeg'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <>
      <Wrapper>
        <div>
          <div className='top-section'>
            <img src={homeImage} className='hero-banner' />
            <div className='wrapperText'>
              <h1 className='title'>
                Better <br />
                your <br />
                posture
              </h1>
            </div>
          </div>
          <div className='category-container'>
            <div className='discover-band'>
              <h2>Discover products !</h2>
            </div>
            <div className='categories'>
              <NavLink to='/chairs' className='category-box'>
                <div className='img-box'>
                  <img src={chairImage} />
                  <div class='text-overlay'>
                    <p>Chairs</p>
                  </div>
                </div>
              </NavLink>
              <NavLink to='/desks' className='category-box'>
                <div className='img-box'>
                  <img src={deskImage} />
                  <div class='text-overlay'>
                    <p>Desks</p>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}
export default Home
