import styled from 'styled-components'

const Wrapper = styled.nav`
  transition: var(--transition);

  .burger-section {
    display: flex;
  }
  .burger {
    display: none;
    visibility: hidden;
  }
  padding: 0;
  background: var(--white);
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  height: auto;
  .logo {
    display: flex;
    align-items: center;
    width: 50px;
  }
  p {
    margin: 5px;
  }
  .logo-container {
    display: flex;
    align-items: center;
    font-family: var(--headingFont);
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--primary-500);
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .nav-links {
    display: flex;
  }
  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 25px 0 25px;
    color: var(--primary-500);
    font-size: 1.6rem;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .btn-container {
    display: flex;
    gap: 10px;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    padding: 1rem;
    margin-right: 5px;
    font-size: 1.38rem;
  }

  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }

  @media (max-width: 992px) {
    padding: 1rem 0 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    overflow: hidden;

    .nav-links {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
    }
    ul {
      margin: 0.5rem 0;
    }

    .icon {
      visibility: hidden;
      display: none;
    }
    .nav-links {
      display: flex;
      height: auto;
      flex-direction: column;
      align-items: center;
    }
    .nav-link {
      margin: 0;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: auto;
    }
    a {
      padding: 0;
    }
    p {
      margin: 0 0 0.5rem 0;
      font-size: 3rem;
      font-weight: 800;
    }
    .btn-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
    }

    .btn {
      font-size: 3rem;
      color: var(--primary-500);
      background-color: var(--white);
      box-shadow: none;
      justify-content: flex-start;
      margin: 0px;
      padding: 0.5rem 0.5rem 0 0;
    }
    .account-text {
      display: none;
    }
    .burger-section {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .burger {
      display: flex;
      visibility: visible;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      background-color: transparent;
      border-style: none;
      font-size: 3rem;
      color: var(--primary-500);
      padding: 5px;
      margin: 5px;
      transition: var(--transition);
    }
    .animation {
      transform: rotate(180deg);
    }
    .nav-list {
      visibility: hidden;
      height: 0px;
      transition: var(--transition);
    }
    .btn-container {
      visibility: hidden;
      height: 0;
      display: none;
      .btn {
        display: flex;
        flex-direction: row;
      }
    }

    .visible {
      visibility: visible;
      height: auto;
      display: unset;
    }
  }
`
export default Wrapper
