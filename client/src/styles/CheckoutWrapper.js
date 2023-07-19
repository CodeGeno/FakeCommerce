import styled from 'styled-components'
const Wrapper = styled.div`
  .section {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .checkout-container {
    width: 100%;
    min-width: 100%;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }
  h4 {
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  .navlink {
    width: 100%;
    background-color: red;
  }
  .margin {
    margin-top: 1rem;
    font-size: 2rem;
    padding: 0.5rem;
  }
  @media (max-height: 992px) {
    .checkout-container {
      width: 95%;
      padding: 0.6rem;
    }
  }
`
export default Wrapper
