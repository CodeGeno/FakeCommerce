import styled from 'styled-components'

const Wrapper = styled.div`
  flex-basis: 25%;
  display: flex;
  flex-wrap: wrap;

  .product-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
    margin: 20px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    box-shadow: var(--shadow-4);
    border-bottom-color: var(--primary-500);
    border-bottom-width: 0.5rem;
    border-bottom-style: solid;
    flex: 1;
    .img-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    .img-box {
      width: 85%;
      height: auto;
    }
    .product-img {
      height: 100%;
      width: 100%;
    }
  }

  h4 {
    font-size: 1.2rem;
    margin: 10px 0;
    color: black;
    font-weight: 500;
    word-wrap: normal;
  }
  .price-tag {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 0 0 0 0;
    margin-right: 0.5rem;
    color: black;
  }
  @media (max-width: 992px) {
    word-break: break-word;
    font-size: 1rem;
    display: flex;
    flex-basis: 50%;
    .product-container {
      flex-basis: 50%;
    }
    h4 {
      margin: 0;
      font-size: 1rem;
      margin: 10px 0;
      max-height: 2rem;
      max-width: 100%;
      line-height: 1rem;
      overflow: hidden;
    }
    .product-container {
      margin: 10px 5px;
    }
  }
`

export default Wrapper
