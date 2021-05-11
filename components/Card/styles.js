import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  margin: 40px 0;

  .image{
    width: 45%
  }

  .info{
    width: 45%
  }

  .genre{
    color: var(--pink);
    font-weight: 300;
    font-size: 15.39px
  }

  .vote{
    display: flex;
  }

  .desc p{
    text-align: left;
    color: #9F9FA0;
    font-weight: 300
  }

  .image div:first-of-type{
    height: 100%
 }
 
 .info{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-left: 5%;
  }

  .title, .vote, .genre{
    width: 100%
  }

  .vote{
    margin-bottom: 1px;
  }

  .container {
    position: relative;
  }

  .container div:first-of-type{
    position: unset !important
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
    display: none
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

  .overlay img{
    background: none
  }

  .fa-user:hover {
    color: #eee;
  }

  @media (min-width: 1100px) {
    width:  ${(props) => props.oneColumn === 'list' ? '45%' : '100%'};

    .image{
      width: auto
    }

    .info{
      width: 100%;
    }
  }
`