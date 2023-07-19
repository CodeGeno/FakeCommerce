import styled from 'styled-components'
import homeImage from '../assets/home/home.jpg'

export const Wrapper = styled.section`
  margin-top: 0.5rem;
  .top-section {
    display: flex;
    width: 100%;
    position: relative;
  }
  .discover-band {
    background-color: var(--primary-500);
    color: white;
    margin: 3rem 0 1.5rem 0;
    display: flex;
    text-align: center;
    justify-content: center;

    width: 100%;
  }
  .title {
    font-family: var(--coverFont);
  }
  .wrapperText {
    position: absolute;
    top: 20%;
    left: 15%;
    font-size: 1.2rem;
    color: white;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 1rem;
  }

  .hero-banner {
    height: auto;
    width: 100%;
    max-height: 80vh;
    object-fit: cover;
  }
  h2 {
    padding: 1rem 0;
    text-align: center;
    color: var(--white);
    font-weight: 700;
    margin: 0;
  }
  .category-container {
    display: flex;
    flex-direction: column;
  }
  .category-box:hover {
    opacity: 0.3;
  }
  .categories {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0 0 2rem 0;
  }
  .category-box {
    flex-basis: 45%;
    position: relative;
  }

  .img-box {
    display: flex;
    position: relative;
    img {
      height: auto;
      width: 100%;
    }
    img:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 10px;
    text-align: center;
    font-size: 3rem;
    background-color: rgba(77, 117, 141, 0.75);
    border-radius: 20px;
    padding: 1rem 2rem;
  }

  .text-overlay p {
    margin: 0;
  }

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    .title {
      font-size: 2rem;
    }

    .wrapperText {
      position: absolute;
      top: 15%;
      left: 20%;
      font-size: 1.2rem;
      color: white;
      display: flex;
      flex-direction: column;
    }
    .category-box {
      flex-basis: 100%;
      background-color: rgba(0, 0, 0, 0.7);
    }
    .wrapperText {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0.4rem;
      h1 {
        font-size: 2rem;
        font-weight: 800;
        padding: 0.5rem;
      }
    }
  }
`
export default Wrapper
