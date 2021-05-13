import styled from 'styled-components'

export const Card = styled.div`
  margin: 40px 0;

  .infos{
    display: flex;
    justify-content: space-between;
  }

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
`