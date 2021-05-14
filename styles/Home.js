import styled from 'styled-components'

export const Content = styled.main`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("section.png");
  background-position: center;
  background-size: cover;

  h1{
    display: flex;
    align-items: center;
    font-size: 16.67px;
    font-weight: 100;
    padding: 10vh 7vw 0 7vw; 
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

export const Carousel = styled.div`
  padding: 5vh 7vw;

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

    p{
      font-weight: 500;
      font-size: x-large;
      margin-left: 10px;
    }

    img{
      background: none
    }
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

  .container {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin-bottom: 15px;

    div:first-of-type{
      position: unset !important
    }
  }

  .image {
    display: block;
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    transition: .3s ease;
    background-color:rgba(254,49,137,0.3);
    display: none;

    img{
      background: none
    }
  }

  .container:hover .overlay{
    display: block
  }

  .container:hover .overlay {
    opacity: 1;
  }

  .icon {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .fa-user:hover {
    color: #eee;
  }
`

export const CatalogHeader = styled.div`
  background-color:  var(--primary-clean);
  border-top: 2px solid var(--pink);
  height: 107px;
  padding: 0 7vw;
  display: flex;
  align-items: center;
  box-shadow:  20px 20px 60px #17171a,
             -20px -20px 60px #1f1f24;

  h2{
    display: flex;
    align-items: center;
    font-size: 16.67px;
    font-weight: 100;
  }

  h2 p{
    font-weight: bold;
    font-size: 16.67px;
  }

  h2 span{
    height: 15px;
    width: 15px;
    background-color: var(--pink);
    margin-right: 15px;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    h2{
      font-size: 21px;
    }

    h2 p{
      font-size: 22px;
    }
  }
`

export const Catalog = styled.div`
 padding: 0 7vw;

  .options{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 30px;

    div:first-of-type{
      display: flex;
      justify-content: center;
      align-items: center;
    }
 }

 select{  
    -webkit-appearance: none;
    -moz-appearance: none; 
    appearance: none; 
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAICAYAAADJEc7MAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACBSURBVHgBhc5RCoAgDAZgN9F3T5BHqZPXTaon8clXEcRcFIgNGwiy/d8YeO93UUtrPRtjTjEo55xFxJX+CACiPptS2kII0x+iLBnMOS+1f4xwiyirlJrhHUgp6QRbSjnaszlEM2i39jjGCByiPPQntfgOMOgDe/y0PoiFHRYcoroAOlVU5pGXtGgAAAAASUVORK5CYII=')  no-repeat, linear-gradient(#212125, #2E2E35);
    background-position: left; 
    background-position-x: 20%;
    mix-blend-mode: normal;
    border: 2px solid #2E2D31;
    border-radius: 4px;
    width: 161px;
    height: 44.86px;
    direction: rtl;
    padding: 10px 30px 10px 10px;
    font-size: 14.42px;
    color: #EAEAEA;
    font-weight: 600;

    option{
      direction:ltr;
      color: black
    }
  }

  button{
    width: 161px;
    height: 44.86px;
    border: none;
    color: #EAEAEA;
    font-weight: 600;
    font-size: 14.42px;
    background: linear-gradient(180deg, var(--pink) 0%, var(--pink) 100%), var(--pink);
    mix-blend-mode: normal;
    border-radius: 3.20398px;

    &hover, &focus{
      background: linear-gradient(180deg, var(--pink-dark) 0%, var(--pink-dark) 100%), var(--pink-dark);
    }
  }

  .column{
    display: none
  }

  @media (min-width: 768px) {
    .options{
      display: flex;
      justify-content: space-between;

    div:first-of-type{
      flex-direction: row
    }
  }

    button{
      margin-left: 15px
    }
  }

  @media (min-width: 1100px) {
    .column{
      display: block
    }
  }
`

export const Movie = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const More = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button{
    margin: 60px 0;
  }
`