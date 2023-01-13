import styled from 'styled-components'
const Wrapper = styled.div`
  .section {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .checkout-container {
    width: 80%;
    min-width: 80%;

    max-width: var(--fixed-width);
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    border-top-color: var(--primary-500);
    border-top-style: solid;
    border-top-width: 5px;
    padding: 2rem 2.5rem;
    margin: 3rem auto;
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
  }
  @media (max-height: 992px) {
    .checkout-container {
      width: 95%;
      padding: 0.6rem;
    }
  }
`
export default Wrapper
