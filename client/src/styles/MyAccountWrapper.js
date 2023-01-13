import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .settings-container {
    padding: 1rem 2rem;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 1rem;
    background-color: var(--white);
  }
  .account-section {
    width: 100%;

    button {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }

  .single-order-box {
    background: var(--white);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.8rem 0.75rem;
    box-shadow: var(--shadow-1);
    width: 100%;
    margin: 0;
    text-transform: capitalize;
    display: inline-block;
  }

  .single-order-details {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 2rem;
  }
  .receipt-item-box {
    display: flex;
    justify-content: space-between;
    margin: 0.2rem;
  }
  .form-input {
    margin-bottom: 1rem;
  }

  @media (max-width: 992px) {
    .settings-container {
      width: 95%;
      padding: 1rem 0.5rem;
    }
    .single-order-details {
      font-size: 0.8rem;
      padding: 0 0.2rem;
    }
    .view-more {
      margin-top: 0.5rem;
    }
  }
`

export default Wrapper
