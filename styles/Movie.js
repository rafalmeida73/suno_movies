import styled from 'styled-components'

export const Content = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 7vw;

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

  .title{
    font-weight: bold;
    font-size: 27px;
  }

  .vote{
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    p{
      color: var(--pink);
      font-size: 24px;
    }

    img{
      background: none;
    }
  }

  .star{
    display: flex;
    margin-left: 5px;

    p{
    color: #EAEAEA
    }
  }

  .desc{
    margin: 45px 0;
    h2{
      font-weight: 700;
      color: #EAEAEA;
      font-size: 20px;
      margin-bottom: 20px;
    }

    p{
      color: #757575;
    }
  }

  .video{
    h3{
      width: 85px;
      padding: 10px;
      font-weight: 700;
      border-bottom: 0.57px solid var(--pink)
    }

    iframe{
      width: 100%;
      margin-top: 40px;
    }
  }

  .btn{
    display: flex;
    justify-content: center;
    margin: 40px 0 100px 0;

    a{
      background: linear-gradient(288.57deg, rgba(254, 49, 137, 0.5) 5.7%, rgba(255, 0, 110, 0.5) 70.08%), #FF559E;
      mix-blend-mode: normal;
      border-radius: 3.20398px;
      width: 161px;
      height: 44.86px;
      color: #EAEAEA;
      font-weight: 600;
      font-size: 14.4179px;
      line-height: 22px;
      border: none;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
  }

    .content{
      margin-top: 40px;
    }

  @media (min-width: 768px) {
    .image{
      display: flex;
      justify-content: center;
    }

    .video{
      width: 100%;
    }

  }

  @media (min-width: 1100px) {
    .content{
      display: flex;
      min-height: 100vh;
      justify-content: center;
      align-items: center;
    }

    .image{
      width: 100%;
      height: 494px;
    }

    .star{
      p{
      font-size: 26.45px;
      font-weight: 400;
      }
    }

    .info{
      height: 494px !important;
      justify-content: space-around;
      display: flex;
      flex-direction: column;
      padding-left: 30px;
    }

    .desc{
      margin: 0;
    }

    .video{
      width: 100%;

      h3{
        width: 100%;
      }
    }

    iframe{
      height: 579px
    }
  }
`