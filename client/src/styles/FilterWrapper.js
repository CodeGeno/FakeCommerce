import styled from 'styled-components'
export const Wrapper = styled.div`
  .fade-in {
    animation: fade-in 0.2s ease-in;
  }

  .fade-out {
    animation: fade-out 0.3s ease-out;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
  .page-title {
    margin: 0.5rem 0;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  .form-label {
    font-size: 0.8rem;
  }
  .form {
    width: 100%;
    max-width: 100%;
    margin-top: 0.5rem;
    padding: 1rem;
  }
  .form-input,
  .form-select,
  .btn-block {
    font-size: 0.7rem;
    height: 35px;
    text-transform: capitalize;
    color: black;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  .active {
    transition: max-height 0.8s ease-in;
  }
  h5 {
    font-weight: 700;
  }
  .btn-block {
    align-self: end;
    margin: 0.5rem 0;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .btn-block {
      margin-top: 0;
    }
  }
  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export default Wrapper
