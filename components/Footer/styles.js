import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: #18181C;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: 13.59px;
    color: #EAEAEA;
    height: 112px
  }

  @media (min-width: 768px) {
    p{
      font-size: 18px;
    }
  }
`