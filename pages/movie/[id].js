import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../../components/Header'
import FooterContent from '../../components/Footer'
import * as S from '../../styles/Movie'
import api from '../../api'
import { useSearch } from "../../context/search";


function movie() {
  const { search } = useSearch();
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [video, setVideo] = useState();

  useEffect(() => {
    api.get(`/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`)
      .then(function (response) {
        setGenre(response.data.genres[0].name);
        setMovie(response.data);
      })
      .catch(function (error) {
        return null
      });

    // GET video
    api.get(`/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`)
      .then(function (response) {
        // console.log(response.data.results[0].key)
        setVideo(response.data.results[0].key);
      })
      .catch(function (error) {
        return null
      });
  });

  return (
    <>
      <Header />
      <S.Content className={`${search ? "filter" : ""}`}>
        <div className="content">
          <div className="image">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={`Capa do filme ${movie.title}`}
              height="470"
              width="318"
            />
          </div>
          <div className="info">
            <div className="title">
              <h1>{movie.title}</h1>
            </div>
            <div className="vote">
              <div>
                <p>{genre}</p>
              </div>
              <div className="star">
                <Image
                  src="/star-outline.svg"
                  alt="Estrela rosa"
                  height="19.09"
                  width="20.76"
                  alt="Uma estrela de cinco pontas rosa"
                />
                <p>{movie.vote_average}</p>
              </div>
            </div>
            <div className="desc">
              <h2>Sinopse</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>

        <div className="video">
          <div className="videoTitle">
            <h3>Trailer</h3>
          </div>
          <iframe id="iframe" width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="btn">
          <Link href="/">
            voltar
            </Link>
        </div>
      </S.Content>
      <FooterContent />
    </>
  );
}

export default movie;