import Wrapper from '../styles/SingleAddressWrapper'

function SingleAddress({
  index,
  setSelectedAddress,
  completeAddress,
  selectedAddress,
  radio,
}) {
  const { lastName, firstName, zipCode, address, houseNumber, city } =
    completeAddress
  return (
    <Wrapper>
      {radio && (
        <label
          className={selectedAddress === index ? 'selected label' : 'label'}
        >
          <input
            type='radio'
            checked={selectedAddress === index}
            onChange={() => {
              setSelectedAddress(index)
            }}
          />
          <div className='address-text'>
            {firstName} {lastName} <br />
            {address} {houseNumber}, <br />
            {zipCode} {city} , Belgium
          </div>
        </label>
      )}
      {radio !== true && (
        <label
          className={selectedAddress === index ? 'selected label' : 'label'}
        >
          <div type='radio' />
          <div>
            {firstName} {lastName} <br />
            {address} {houseNumber}, <br />
            {zipCode} {city} , Belgium
          </div>
        </label>
      )}
    </Wrapper>
  )
}
export default SingleAddress
