import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 40px;
  background-color: var(--white);
  border: transparent;
  border-radius: var(--borderRadius);
  letter-spacing: var(--letterSpacing);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-2);

  .top-section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem 0;
    padding: 0 1rem;
    width: 100%;

    .top-left-section {
      display: flex;
      justify-content: center;
      flex-basis: 33%;
      .img-box {
        object-fit: contain;
      }
      .product-img {
        width: 100%;
        height: auto;
      }
    }
    .top-mid-section {
      flex-basis: 33.3%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      h1 {
        margin: 0 0 2rem 0;
      }
      h2 {
        margin: 0;
        font-size: 1.5rem;
      }
    }
    .top-right-section {
      flex-basis: 33.3%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .qty-section {
        display: flex;
        flex-direction: row;
      }
      h1 {
        margin: 0 0 rem 0;
      }
      .price {
        text-align: center;
      }
      .quantity {
        display: flex;
        width: 3rem;
        justify-content: center;
      }
      .add-cart-btn {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
  }
  @media (max-width: 992px) {
    margin: 0.5rem;
    padding: 0.5rem;
    .top-section {
      display: flex;
      flex-direction: column;
    }
    .top-left-section {
      .img-box {
        width: 100%;
      }
    }
    .top-mid-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .top-right-section {
      padding: 1rem;
      .price {
        padding: 0.5rem;
      }
    }
  }
`

export default Wrapper
