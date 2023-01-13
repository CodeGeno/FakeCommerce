import styled from 'styled-components'

const Wrapper = styled.div`
  .selected {
    border-left-width: 10px;
    border-left-color: var(--primary-500);
    border-left-style: solid;
  }
  .label {
    width: 100%;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    display: flex;
    gap: 1rem;
    transition: var(--transition);
    padding: 0.5rem 1.5rem;
    margin: 1rem auto;
  }
  @media (max-width: 992px) {
    font-size: 0.8rem;
    .checkout-container {
    }
    .label {
      padding: 0.2rem 0.2rem;
      gap: 0.5rem;
    }
  }
`

export default Wrapper
