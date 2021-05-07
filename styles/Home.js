import styled from 'styled-components'

export const Content = styled.main`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("section.png");
  background-position: center;

  h1{
    display: flex;
    align-items: center;
    font-size: 16.67px;
    font-weight: 100;
    padding: 10vh 15vw 0 15vw; 
  }

  h1 p{
    font-weight: bold;
    font-size: 16.67px;
  }

  h1 span{
    height: 15px;
    width: 15px;
    background-color: var(--pink);
    margin-right: 15px;
    border-radius: 20px;
  }

  .carrousel{
    width: 100%
  }

  @media (min-width: 768px) {
    h1{
      font-size: 21px;
    }

    h1 p{
      font-size: 22px;
  }
}
`

export const Carousel  = styled.div`
  padding: 5vh 8vw;

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
  
  p{
    font-size: 22px;
    overflow: hidden;
    height: 33px
  }

  .vote{
    display:flex;
  }

  .vote p{
    font-weight: 500;
    font-size: x-large;
    margin-left: 10px;
  }

  .vote img{
    background: none
  }

  .genre p{
    font-size: 16px;
    font-weight: 300;
    color: var(--pink);
    height: 75px;
    max-height: 75px;
  }

  .rec-pagination{
    display: none
  }

  .rec-arrow-right, .rec-arrow-left{
    background: none;
    box-shadow: none;
    color: #fff;

    &:hover, &:focus{
      background-color: var(--primary-clean) !important;
      box-shadow: 0 0 2px 0px #333;
    }
  }
`

export const Item  = styled.div`
 
`