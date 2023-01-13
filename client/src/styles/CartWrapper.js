import styled from 'styled-components'

const Wrapper = styled.div`
  .cart-section {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .cart-container {
    width: 80%;
  }
  ul {
    margin: 0;
  }

  .cart-row-title {
    display: flex;
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: 10px 10px 0px 0px;
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    text-transform: capitalize;
    padding: 1rem 0 1rem 1rem;
    li {
    }
    .name {
      flex-basis: 50%;
    }
    .quantity,
    .price,
    .totalPrice {
      flex: 1;
      padding-left: 10px;
    }
  }
  .cart-row {
    min-height: 2.5rem;
    padding: 5px;
    border-left-style: solid;
    border-left-width: 5px;
    border-right-style: solid;
    border-right-width: 5px;
    border-bottom-width: 5px;
    border-bottom-style: solid;
    border-color: var(--primary-500);
    display: flex;
    flex-direction: row;

    .name {
      flex-basis: 50%;
      padding-left: 0.5rem;
    }
    .quantity,
    .price,
    .totalPrice {
      display: flex;
      flex-direction: row;
      justify-content: center;
      border-left-width: 5px;
      border-left-style: solid;
      flex: 1;
      padding-left: 10px;
      border-color: var(--primary-500);
    }
    .quantity {
      gap: 10px;
    }
    .qty-btn {
      color: var(--white);
      background: var(--primary-500);
      border: transparent;
      border-radius: 10px 10px 10px 10px;
      letter-spacing: var(--letterSpacing);
      padding: 0.375rem 0.75rem;
      box-shadow: var(--shadow-2);
      text-transform: capitalize;
    }
  }

  .price-section {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .price-container {
    width: 80%;
    display: flex;
  }
  .empty {
    flex-basis: 50%;
  }
  .total-price {
    padding: 1rem 0;
    flex: 1;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    color: var(--white);
    padding-left: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: var(--primary-500);
  }
  .price-recap {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .price-recap-row {
    justify-content: flex-start;
    flex-basis: 50%;
    padding-left: 5px;
  }
  .checkout-section {
    display: flex;
    justify-content: flex-end;
    justify-content: center;

    margin-top: 2rem;
    .checkout-container {
      display: flex;
      justify-content: flex-end;
      font-size: 1.6rem;
      width: 80%;
    }
  }
  @media (max-width: 992px) {
    .page-title {
      font-size: 1.4rem;
    }
    .cart-container,
    .price-container {
      width: 95%;
    }
    .cart-row-title {
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      padding: 0.4rem;
      .name {
        flex-basis: 40%;
        justify-content: center;
      }
      .quantity,
      .totalPrice {
        display: flex;
        flex-basis: 30%;
        justify-content: center;
      }
    }
    .cart-row {
      font-size: 0.7rem;
      .name {
        flex-basis: 40%;
      }
      .quantity {
        flex: 1;
      }

      .name,
      .quantity,
      .totalPrice {
        display: flex;
        align-items: center;
      }
    }
    .btn {
      padding: 0.5rem;
    }
    .quantity {
      margin: 5px;
    }
    .price-section {
      font-size: 0.8rem;
    }
    .checkout-btn {
      font-size: 1.4rem;
      margin-bottom: 2rem;
    }
  } ;
`

export default Wrapper
