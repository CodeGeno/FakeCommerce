import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 2rem;
  background-color: var(--white);
  border: transparent;
  border-radius: var(--borderRadius);
  letter-spacing: var(--letterSpacing);
  box-shadow: var(--shadow-2);
  .quantity-btn {
    flex-basis: 33.33%;
  }
  .quantity-text {
    flex-basis: 33.33%;
    display: flex;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 900;
    padding: 1rem 0;
  }
  .top-section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 0.5rem;
    .price-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .box {
      flex-basis: 33.3%;
      padding: 0.5rem;
    }
    .name {
      font-size: 1.4rem;
      font-weight: 800;
      display: flex;
      justify-content: center;
      margin: 1rem 0;
    }
    .img-box {
      display: flex;
    }
    .product-img {
      width: 100%;
      height: auto;
    }
    .qty-box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0 0 10px 0;
    }
    .price {
      text-align: center;
      padding: 0.5rem;
      font-size: 2.5rem;
      font-weight: 900;
    }
    .quantity {
      display: flex;
      font-weight: 800;
      justify-content: center;
      flex-basis: 33.33%;
      font-size: 1.6rem;
    }
    .add-cart-btn {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 0.5rem 0;
      padding: 1rem;
      font-weight: 900;
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 992px) {
    margin: 0.5rem;
    padding: 0.5rem;
    .top-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem;
      margin: 0.5rem 0;
      .qty-section {
        color: black;
        background: var(--white);
        border: transparent;
        border-radius: var(--borderRadius);
        letter-spacing: var(--letterSpacing);
        padding: 0.375rem 0.75rem;
        box-shadow: var(--shadow-4);
        text-transform: capitalize;
        display: inline-block;
      }
    }

    .price {
      font-size: 2rem;
      font-weight: 900;
    }
    .name {
      margin: 1rem 0;
    }
    .quantity {
      width: 2rem;
      font-weight: 800;
      font-size: 1.6rem;
    }
    .add-cart-btn {
      display: flex;
      width: 150px;
    }
  }
`

export default Wrapper
