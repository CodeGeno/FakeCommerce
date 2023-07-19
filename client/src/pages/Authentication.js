import { Wrapper } from '../styles/AuthenticationWrapper'
import { useAppContext } from '../context/appContext'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Authentication() {
  const {
    loginUser,
    registerUser,
    isLoading,
    user,
    showAlert,
    alertText,
    alertType,
    lastUrl,
  } = useAppContext()

  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate(`${lastUrl ? `${lastUrl}` : '/'}`)
      }, 3000)
    }
  }, [user, navigate])

  const initialState = {
    email: 'JohnDoe@gmail.com',
    password: 'admin1234',
  }
  const [isRegistering, setIsRegistering] = useState(false)
  const [credentials, setCredentials] = useState(initialState)
  const handleChange = (e) => {
    let temp = credentials
    temp[e.target.name] = e.target.value

    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (isRegistering) {
      registerUser(credentials)
    } else {
      loginUser(credentials)
    }
  }
  return (
    <Wrapper>
      <form className='form' onSubmit={onSubmit} autoComplete='on'>
        <h2 className='center'>{isRegistering ? 'Register' : 'Login'}</h2>
        {showAlert && (
          <>
            <div className={`alert alert-${alertType}`}>{alertText}</div>
          </>
        )}
        <label>E-mail</label>
        <input
          name='email'
          type='email'
          value={credentials.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          autoComplete='off'
          name='password'
          type='password'
          value={credentials.password}
          onChange={handleChange}
        />
        <div className='btn-section'>
          <p>
            {isRegistering ? 'Not a member yet ?' : 'Already a member ?'}

            <button
              type='button'
              onClick={(e) => {
                e.preventDefault()
                setIsRegistering(!isRegistering)
              }}
              className='member-btn'
            >
              {isRegistering ? 'Login' : 'Register'}
            </button>
          </p>
        </div>
        <button type='submit' className='btn' disabled={isLoading}>
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
    </Wrapper>
  )
}
export default Authentication
