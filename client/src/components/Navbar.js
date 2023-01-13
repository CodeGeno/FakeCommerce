import Wrapper from '../styles/NavbarWrapper'
import NavbarWrapper from '../styles/NavbarWrapper'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import { useAppContext } from '../context/appContext'
import { FaShoppingCart } from 'react-icons/fa'
import { RiAccountCircleFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
function Navbar() {
  const { user, setLastUrl } = useAppContext()
  const [showList, setShowMenu] = useState(false)
  return (
    <Wrapper className='mobile'>
      <div className='burger-section'>
        <NavLink to='/' className='logo-container'>
          <Logo />
          akecommerce
        </NavLink>

        <button
          className={showList ? 'burger animation' : 'burger'}
          onClick={() => {
            setShowMenu(!showList)
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div>
        <ul className={showList ? 'visible nav-list' : 'nav-list'}>
          <div className='nav-links'>
            {links.map((link) => {
              const { text, path, id, icon } = link

              return (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  key={id}
                >
                  <p>{text}</p>
                  <span className='icon'>{icon}</span>
                </NavLink>
              )
            })}
          </div>
        </ul>
      </div>
      <div className={showList ? 'visible btn-container' : 'btn-container'}>
        <NavLink to='/cart' className='btn'>
          <FaShoppingCart />
        </NavLink>
        <NavLink
          onClick={setLastUrl}
          to={user ? '/myaccount' : '/login'}
          className='btn'
        >
          <RiAccountCircleFill />
        </NavLink>
      </div>
    </Wrapper>
  )
}
export default Navbar
