import styled from 'styled-components'

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
    margin-left: 50px;

    @media (max-width: 768px) {
      margin-left: 0
    }
`