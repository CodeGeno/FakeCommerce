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
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Wrapper>
      <div className='burger-section'>
        <NavLink
          to='/'
          className='logo-container'
          onClick={() => {
            setShowMenu(false)
          }}
        >
          <Logo />
          akecommerce
        </NavLink>

        <button
          className={showMenu ? 'animation burger' : 'burger'}
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div>
        <ul className={showMenu ? 'visible nav-list' : 'nav-list'}>
          <div className={showMenu ? 'active nav-links' : 'nav-links'}>
            {links.map((link) => {
              const { text, path, id, icon } = link

              return (
                <NavLink
                  to={path}
                  className='nav-link'
                  key={id}
                  onClick={() => {
                    setShowMenu(false)
                  }}
                >
                  <p>{text}</p>
                  <span className='icon'>{icon}</span>
                </NavLink>
              )
            })}
          </div>
        </ul>
      </div>
      <div className={showMenu ? 'visible btn-container' : 'btn-container'}>
        <NavLink
          to='/cart'
          className='btn'
          onClick={() => {
            setShowMenu(false)
          }}
        >
          <FaShoppingCart />
        </NavLink>
        <NavLink
          onClick={() => {
            setLastUrl()
            setShowMenu(false)
          }}
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
