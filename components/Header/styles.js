import styled from 'styled-components'

export const Nav = styled.nav`
  height: 10vh;
  padding: 0 15vw;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-clean);
  align-items: center;
  position: relative;
  mix-blend-mode: normal;
  box-shadow: 0px 4px 25px 4px rgba(0, 0, 0, 0.3);
  
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
    justify-content: space-between;
  }
`

export const StyledBurger = styled.div`
  width: 24px;
  height: 24px;
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

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;

  a {
    text-decoration: none;
    text-transform: none;
    color: #fff;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  li {
    width: 106px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active{
    border-bottom: 2px solid var(--pink)
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--primary-clean);
    position: fixed;
    transform: ${(props) => props.open ? 'translateX(-100%)' : 'translateX(0)'};
    top: 0px;
    left: 0;
    height: 100vh;
    width: 180px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    justify-content: normal;

    li {
      color: #fff;
      margin-right: 34px;
      display: block;
      height: 20%;
      margin: 10%
    }

    .active{
      border-bottom: none
    }
  }
`

export const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div:first-of-type{
      padding: 0 20px;
    }

    @media (max-width: 768px) {
      margin-left: 0
    }
`

export const SearchBlock = styled.div`
  .view{
    min-height: 360px;
    background-color: var(--primary-clean);
    padding: 5vh 15vw;

    input{
      width: 100%;
      font-weight: 500;
      font-size: 32px;
      line-height: 48px;
      background: none;
      border: none;
      border-bottom: 2px solid var(--pink);
      color: #EAEAEA;
      padding: 0 0 30px 5px;
    }
  }

  .movies{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5vh;

    a{
      color: #EAEAEA;
      text-decoration: none;
    }

    .movie{
      display: flex;
      align-items: center;
      background: #252529;
      border: 1px solid #313136;
      box-sizing: border-box;
      border-radius: 4px;
      width: 302px;
      height: 191px;
      margin: 30px 0;
      padding: 0 15px;
    }

    .image{
      height: 147px;
      width: 40%;

      img {
      background: #f6f7f8;
      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );
      
      background-size: 80rem 14rem;
      animation: placeholderShimmer 1s linear infinite forwards;

      @keyframes placeholderShimmer {
        0% {
          background-position: -40rem 0;
        }
        100% {
          background-position: 40rem 0;
        }
      }
    }
    }

    .info{
      height: 147px;
      width: 60%;

      p{
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;
        white-space: nowrap;
      }
    }

    .genre{
      p{
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: var(--pink);
      }
    }

    .vote{
      display: flex;

      p{
        margin-left: 5px;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
`