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
          onClick={() => {
            setSelectedAddress(index)
          }}
        >
          <div
            className={
              selectedAddress === index ? 'chosen address-text' : 'address-text'
            }
          >
            {firstName} {lastName} <br />
            {address} {houseNumber}, <br />
            {zipCode} {city} , Belgium
          </div>
        </label>
      )}
      {radio !== true && (
        <label className={selectedAddress === index ? 'label' : 'label'}>
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
