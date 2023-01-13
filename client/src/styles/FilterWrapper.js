import styled from 'styled-components'
export const Wrapper = styled.div`
  .form {
    width: 100%;
    max-width: 100%;
    margin-top: 0.5rem;
    padding: 20px 20px 40px 20px;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 45px;
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
  h5 {
    font-weight: 700;
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
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
