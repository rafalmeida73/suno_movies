import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

function Card(props) {
  return (
    <>
      <S.Card oneColumn={props.column}>
        <div className="container">
          <div className="image">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${props.img}`}
              alt={`Capa do filme ${props.title}`}
              height="231.74"
              width="156.74"
            />
          </div>
          <div className="overlay">
            <Link href={`/movie/${props.id}`}>
              <a className="icon">
                <Image
                  src={`/play-circle-outline.png`}
                  alt={`Seta de play e pause branco`}
                  height="64"
                  width="64"
                  className="a fa-user"
                />
              </a>
            </Link>
          </div>
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
        </div>
      </S.Card>
    </>
  );
}

export default Card;