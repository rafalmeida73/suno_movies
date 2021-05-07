import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import Item from '../components/Item'

import Header from '../components/Header'
import * as S from '../styles/Home'
import api from '../api'
import Image from 'next/image'

export default function Home() {
  const [newMovies, setNewMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreMovie, setGenreMovie] = useState([]);

  useEffect(() => {
    // Get movies of the week
    api.get(`/trending/movie/week?api_key=${process.env.API_KEY}&language=pt-BR`)
      .then(function (response) {
        // console.log(response.data.results);
        setNewMovies(response.data.results);
      })
      .catch(function (error) {
        console.warn("Ocorreu um erro ao consultar filmes!");
      });
    //GET genres
    api.get(`/genre/movie/list?api_key=${process.env.API_KEY}&language=pt-BR`)
      .then(function (response) {
        // console.log(response.data);
        setGenres(response.data.genres);
      })
      .catch(function (error) {
        console.warn("Ocorreu um erro ao consultar gêneros!");
      })
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 550, itemsToShow: 4, itemsToScroll: 4 },
    { width: 768, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 }
  ];

  function Genre(e) {
    let genreData = [];
    e.map(data => {
      const result = genres.find(genre => genre.id === data);
      if (result) {
        genreData.push(result.name)
      }
    })

    let generStr = genreData.join(', ')
    return generStr
  }

  return (
    <>
      <Header active="home" />
      <S.Content>
        <div className="carrousel">
          <h1> <span></span> <p>Lançamentos &nbsp;</p> da semana</h1>
          <S.Carousel>
            <Carousel breakPoints={breakPoints}>
              {newMovies.map(movie => {
                return (
                  <Item key={movie.id}>
                    <div>
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        height="328.27"
                        width="218.53"
                      />
                      <div>
                        <p>
                          {
                            movie.original_title.length >= 12
                              ?
                              movie.original_title.substring(0, 12) + '...'
                              :
                              movie.original_title
                          }
                        </p>
                        <div className="genre">
                          <p>
                            {Genre(movie.genre_ids)}
                          </p>
                        </div>
                        <div className="vote">
                          <Image
                            src="/star-outline.svg"
                            height="18"
                            width="16.36"
                          />
                          <p>
                            {movie.vote_average}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Item>
                )
              })}
            </Carousel>
          </S.Carousel>
        </div>
      </S.Content>
    </>
  )
}
