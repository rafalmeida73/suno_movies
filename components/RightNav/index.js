import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles';

function RightNav(props) {

  return (
    <>
      <S.Ul open={props.open}>

        <Link href="/menu1">
          <li className={`${props.active === 'home' ? 'active' : ''}`}>
            <a>
              INÍCIO
           </a>
          </li>
        </Link>
        <Link href="/menu2">
          <li className={`${props.active === 'catalog' ? 'active' : ''}`}>
            <a>
              CATÁLOGO
           </a>
          </li>
        </Link>
       <S.Search>
       <Image
          src="/search-outline.svg"
          alt="Picture of the author"
          width={24}
          height={24}
        />
       </S.Search>
      </S.Ul>



    </ >
  )
}

export default RightNav