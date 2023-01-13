import { useState } from 'react'
import { useAppContext } from '../../context/appContext'
import Alert from '../Alert'

function ChangePassword() {
  const { customAlert, updateUser } = useAppContext()
  const [show, setShow] = useState(false)
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    newPasswordVerification: '',
  })

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value })
  }
  const checkPassword = (e) => {
    e.preventDefault()
    const { oldPassword, newPassword, newPasswordVerification } = password

    if (!oldPassword || !newPassword || !newPasswordVerification) {
      customAlert('danger', 'Please enter all values')
      return
    }
    if (
      oldPassword.length < 8 ||
      newPassword.length < 8 ||
      newPasswordVerification.length < 8
    ) {
      customAlert('danger', 'Password must contain at least 8 characters')
      return
    }
    if (newPassword !== newPasswordVerification) {
      customAlert('danger', 'New password not matching')
      return
    }
    updateUser(oldPassword, newPassword)
  }
  return (
    <>
      <button
        className='btn'
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? 'Hide Change Password' : 'Change password'}
      </button>
      {show && (
        <form className='account-section' onSubmit={checkPassword}>
          <div className='input-container'>
            <Alert />

            <label htmlFor='old password' className='form-label'>
              Old password
            </label>
            <input
              type='password'
              name='oldPassword'
              value={password.oldPassword}
              onChange={handleChange}
              className='form-input'
            />
            <label htmlFor='old password' className='form-label'>
              New password (min 8 characters)
            </label>
            <input
              type='password'
              name='newPassword'
              value={password.newPassword}
              onChange={handleChange}
              className='form-input'
            />
            <label htmlFor='old password' className='form-label'>
              Confirm New Password
            </label>
            <input
              type='password'
              name='newPasswordVerification'
              value={password.newPasswordVerification}
              onChange={handleChange}
              className='form-input'
            />
          </div>
          <button
            className='btn'
            type='submit'
            onClick={() => {
              setShow(!show)
            }}
          >
            Submit
          </button>
        </form>
      )}
    </>
  )
}
export default ChangePassword
