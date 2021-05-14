import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import * as S from './styles'
import api from '../../api'
import { useSearch } from "../../context/search";
import SearchIcon from '../../components/SearchIcon'

function Header(props) {
  const { search, setSearch } = useSearch();
  const [open, setOpen] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    //GET genres
    api.get(`/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`)
      .then(function (response) {
        // console.log(response.data);
        setGenres(response.data.genres);
      })
      .catch(function (error) {
        console.warn("Ocorreu um erro ao consultar gêneros!");
      });
  }, []);

  function handleSubmit(e) {
    let movie = e.target.value.replace(" ", "+");

    // Get movies
    api.get(`/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${movie}&language=pt-BR`)
      .then(function (response) {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.warn("Ocorreu um erro ao consultar filmes!");
      });

    console.log(movies)
  };

  function HandleGenreCarrousel(e) {
    let genreData = [];
    e.map(data => {
      const result = genres.find(genre => genre.id === data);
      if (result) {
        genreData.push(result.name)
      }
    })

    // let generStr = genreData.join(', ')
    let generStr = `${genreData[0]}, ${genreData[1]}`
    return generStr
  };

  return (
    <>
      <S.Nav>
        <S.StyledBurger open={open} onClick={() => { setOpen(!open); setSearch(false) }}>
          <div />
          <div />
          <div />
        </S.StyledBurger>
        <Link href="/">
          <a className="logo" title="Página inicial">
            SUNO <span>MOVIES</span>
          </a>
        </Link>
        <S.SearchMobile onClick={() => { setSearch(!search); setOpen(true) }}>
          <SearchIcon />
        </S.SearchMobile>
        <S.Ul open={open}>
          <Link href="/">
            <li className={`${props.active === 'home' ? 'active' : ''}`}>
              <a>
                INÍCIO
           </a>
            </li>
          </Link>
          <Link href="/#catalog">
            <li className={`${props.active === 'catalog' ? 'active' : ''}`}>
              <a>
                CATÁLOGO
           </a>
            </li>
          </Link>
          <S.Search onClick={() => { setSearch(!search); setOpen(true) }}>
            <SearchIcon />
          </S.Search>
        </S.Ul>
      </S.Nav>

      {search && (
        <S.SearchBlock>
          <div className="view">
            <input type="text" onChange={e => handleSubmit(e)} />
            <div className="movies">
              {movies.map(movie => {
                return (
                  <Link href={`/movie/${movie.id}`}>
                    <a>
                      <div className="movie">
                        <div className="image">
                          <Image
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={`Capa do filme ${movie.title}`}
                            width={98}
                            height={147}
                          />
                        </div>
                        <div className="info">
                          <p>
                            {
                              movie.title.length >= 11
                                ?
                                movie.title.substring(0, 11) + '...'
                                :
                                movie.title
                            }
                          </p>
                          <div className="genre">
                            <p>
                              {
                                HandleGenreCarrousel(movie.genre_ids).length >= 14
                                  ?
                                  HandleGenreCarrousel(movie.genre_ids).substring(0, 14) + '...'
                                  :
                                  HandleGenreCarrousel(movie.genre_ids)
                              }
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
                              {movie.vote_average}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </S.SearchBlock>
      )}

    </>
  )
}

export default Header;