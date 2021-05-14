import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles';

function CardMobile(props) {
  return (
    <>
      <S.Card oneColumn={props.column}>
        <div className="infos">
          <div className="image">
            <Link href={`/movie/${props.id}`}>
              <a>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${props.img}`}
                  alt={`Capa do filme ${props.title}`}
                  height="231.74"
                  width="156.74"
                />
              </a>
            </Link>
          </div>
          <div className="info">
            <div className="title">
              <p>{props.title}</p>
            </div>
            <div className="genre">
              <p>
                {props.genrers}
              </p>
            </div>
            <div className="vote">
              <Image
                src="/star-outline.svg"
                height="18"
                width="16.36"
                alt="Uma estrela de cinco pontas rosa"
              />
              <p>
                {props.vote}
              </p>
            </div>
          </div>
        </div>
        <div className="desc">
          <p>
            {
              props.desc.length >= 200
                ?
                props.desc.substring(0, 200) + '...'
                :
                props.desc
            }
          </p>
        </div>
      </S.Card>
    </>
  );
}

export default CardMobile;