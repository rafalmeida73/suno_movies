import styled from 'styled-components'

export const Nav = styled.nav`
  height: 10vh;
  padding: 0 15vw;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-clean);
  align-items: center;
  position: relative;
  
  .logo{
    color: #fff;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: bold
  }

  span{
    color: var(--pink)
  }

  @media (max-width: 678px) {
    width: 100vw;
    justify-content: center;
  }
`

export const StyledBurger = styled.div`
  width: 24px;
  height: 24px;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 24px;
    height: 0.25rem;
    background-color: ${(props) => props.open ? '#fff' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;
    &:nth-child(1) {
      transform: ${(props) => !props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${(props) => !props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${(props) => !props.open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${(props) => !props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`