import styled from 'styled-components'
import homeImage from '../assets/home/home.jpg'

export const Wrapper = styled.section`
  margin-top: 0.5rem;
  .top-section {
    display: flex;
    width: 100%;
    position: relative;
  }

  .title {
    font-family: var(--coverFont);
  }
  .wrapperText {
    position: absolute;
    top: 30%;
    left: 15%;
    font-size: 1.38rem;
    color: white;
    display: flex;
    flex-direction: column;
  }

  .home-btn {
    cursor: pointer;
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.5rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.38rem;
    width: 100%;
    margin: 30px 30px;
    font-family: var(--headingFont);
  }
  .hero-banner {
    height: auto;
    width: 100%;
    max-height: 80vh;
    object-fit: cover;
  }

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    .title {
      font-size: 2rem;
    }
    .btns-container {
      display: flex;
      flex-direction: column;
      margin: 0 0.5rem;
      .home-btn {
        width: 90%;
        margin: 0.5rem;
        padding: 1rem;
      }
    }
    .wrapperText {
      position: static;
      color: var(--primary-500);
    }
  }
`
export default Wrapper
