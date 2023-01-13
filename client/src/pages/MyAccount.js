import ChangePassword from '../components/MyAccount/ChangePassword'
import Disconnect from '../components/MyAccount/Disconnect'
import MyOrders from '../components/MyAccount/MyOrders'
import Wrapper from '../styles/MyAccountWrapper'

function MyAccount() {
  return (
    <Wrapper>
      <div className='settings-container'>
        <MyOrders />
        <ChangePassword />
        <Disconnect />
      </div>
    </Wrapper>
  )
}
export default MyAccount
