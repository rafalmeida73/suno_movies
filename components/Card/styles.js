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

  @media (min-width: 1100px) {
    width:  ${(props) => props.oneColumn === 'list' ? '45%' : '100%'};

    .image{
      width: auto
    }

    .info{
      width: fit-content;
    }
  }
`