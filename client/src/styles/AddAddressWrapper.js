import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  .hide {
    visibility: hidden;
    display: none;
  }

  .checkout-section {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .form-container {
    width: 100%;
    min-width: 100%;
    max-width: var(--fixed-width);
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    border-top-color: var(--primary-500);
    border-top-style: solid;
    border-top-width: 5px;
    padding: 2rem 2.5rem;
    margin: 1rem auto;
    flex-wrap: wrap;
  }

  .name-row {
    display: flex;
    width: 100%;
    gap: 20px;
  }
  .name {
    flex-basis: 35%;
  }
  .address-row {
    width: 100%;
    display: flex;
    gap: 20px;
  }
  .street {
    flex-basis: 55%;
  }
  .nr {
    flex-basis: 15%;
  }
  .city-row {
    display: flex;
    width: 100%;
    gap: 20px;
  }
  .city {
    flex-basis: 35%;
  }
  .zip {
    flex-basis: 20%;
  }
  @media (max-height: 992px) {
    .name-row {
      flex: 1;
    }
    .form-container {
      padding: 0.2rem;
    }
    .form-row {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 4rem;
    }
    .form-label {
      font-size: 0.9rem;
    }
    .nr {
      flex-basis: 20%;
    }
    .zip {
      flex-basis: 30%;
    }
    .btn-container {
      display: flex;
      justify-content: center;
      margin: 0 0 1rem 0;
      button {
        display: flex;
        justify-content: center;
        width: 3rem;
        padding: 0.5rem 2rem;
      }
    }
  }
`

export default Wrapper
