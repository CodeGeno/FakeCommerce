import { useNavigate } from 'react-router'
import { useAppContext } from '../../context/appContext'
import Alert from '../Alert'
function Disconnect() {
  const navigate = useNavigate()
  const { logoutUser } = useAppContext()

  const logOut = () => {
    logoutUser()
    setInterval(() => {
      navigate('/')
    }, [3000])
  }
  return (
    <div className='account-section'>
      <button className='btn' onClick={logOut}>
        Disconnect
      </button>
      <Alert />
    </div>
  )
}
export default Disconnect
