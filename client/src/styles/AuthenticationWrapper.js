import styled from 'styled-components'
export const Wrapper = styled.aside`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;

  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .center {
    display: flex;
    justify-content: center;
  }

  input {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .btn-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
`
