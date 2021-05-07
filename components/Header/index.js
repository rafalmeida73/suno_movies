import { useState } from 'react'
import Link from 'next/link'

import * as S from './styles'
import RightNav from '../RightNav'

function Header(props) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <S.Nav>
        <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </S.StyledBurger>
        <Link href="/">
          <a className="logo" title="Página inicial">
            SUNO <span>MOVIES</span>
          </a>
        </Link>
        <RightNav open={open} active={props.active} />
      </S.Nav>
      {props.children}
    </>
  )
}

export default Header;