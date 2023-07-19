import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 0 0;
  font-size: 0.8rem;
  .selected {
    border-left-width: 30px;
    border-left-color: var(--primary-500);
    border-left-style: solid;
  }
  .label {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0rem 0.5rem;
    margin: 1rem auto;
    gap: 1rem;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    transition: var(--transition);
  }
  .address-text {
    margin: 1rem;
  }
  .chosen {
    font-weight: 900;
  }
  @media (max-width: 992px) {
    font-size: 0.8rem;
    .label {
      padding: 0.2rem 0.2rem;
      gap: 0.5rem;
    }
  }
`

export default Wrapper
