import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .container{
    height: 90vh;
    max-height: 90vh
  }

  h1{
    text-align: center;
    font-size: 20px;
    padding: 0 40px;
  }

  @media (min-width: 768px) {
    h1{
      font-size: 30px
    }
  }
`