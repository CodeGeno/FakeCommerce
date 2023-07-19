import styled from 'styled-components'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 2rem;
  align-items: center;
  .img-box {
    display: flex;
    width: 50%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .home-btn-section {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 1rem;
    font-size: 2rem;
  }
`

export default Wrapper
