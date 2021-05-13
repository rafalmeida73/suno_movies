import { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Item from '../components/Item'
import CardMobile from '../components/CardMobile'
import Card from '../components/Card'
import * as S from '../styles/Home'
import api from '../api'

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [newMovies, setNewMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState("por gênero");
  const [oneColumn, setOneColumn] = useState();
  const [page, setPage] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth)
    // Get movies of the week
    api.get(`/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`)
      .then(function (response) {
        // console.log(response.data.results);
        setNewMovies(response.data.results);
      })
      .catch(function (error) {
        console.warn("Ocorreu um erro ao consultar filmes!");
      });
    //GET genres
    api.get(`/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`)
      .then(function (response) {
        // console.log(response.data);
        setGenres(response.data.genres);
      })
      .catch(function (error) {
        console.warn("Ocorreu um erro ao consultar gêneros!");
      });

    handleGetPopularMovies();

    if (localStorage.getItem("column") !== undefined) {
      setOneColumn(localStorage.getItem("column"))
    }
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 550, itemsToShow: 4, itemsToScroll: 4 },
    { width: 768, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 }
  ];

  function handleGetPopularMovies() {
    //GET movies popular
    api.get(`/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=${page + 1}`)
      .then(function (response) {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.warn("Ocorreu um erro ao consultar filmes!");
      });
    setPage(page + 1)
  }

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

  function handleColumn(e) {
    setOneColumn(e.target.value);
    localStorage.setItem("column", e.target.value)
  }

  function handleFilterByGenrer(e) {
    setGenre(e.id)
    //GET movies by genrer
    api.get(
      `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&with_genres=${e.id}&page=1sc&include_adult=false${e.popularity ? '&sort_by=popularity.desc' : 'vote_average.desc'}`
    )
      .then(function (response) {
        //  console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.warn("Ocorreu um erro ao consultar filmes!");
      })
  }

  return (
    <>
      <Header active="catalog" />
      <S.Content>
        <div className="carrousel">
          <h1> <span></span> <p>Lançamentos &nbsp;</p> da semana</h1>
          <S.Carousel>
            <Carousel breakPoints={breakPoints}>
              {newMovies.map(movie => {
                return (
                  <Item key={movie.id}>
                    <div>
                      <div className="container">
                        <Image
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={`Imagem com a capa do filme ${movie.original_title}`}
                          height="328.27"
                          width="218.53"
                        />
                        <div className="overlay">
                          <Link href={`/movie/${movie.id}`}>
                            <a className="icon">
                              <Image
                                src={`/play-circle-outline.png`}
                                alt={`Imagem com a capa do filme`}
                                height="64"
                                width="64"
                                className="a fa-user"
                              />
                            </a>
                          </Link>
                        </div>
                      </div>

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
                            {HandleGenreCarrousel(movie.genre_ids)}
                          </p>
                        </div>
                        <div className="vote">
                          <Image
                            src="/star-outline.svg"
                            alt="Estrela rosa"
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

      <S.CatalogHeader id="catalog">
        <h2><span></span> <p>CATÁLOGO &nbsp;</p> COMPLETO</h2>
      </S.CatalogHeader>

      <S.Catalog>
        <div className="options">
          <div>
            <select onChange={e => handleFilterByGenrer({ id: e.target.value, popularity: false })} value={genre}>
              <option value="">
                por gênero
               </option>
              {genres.map(genre => {
                return (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                )
              })}
            </select>
            <button onClick={() => handleFilterByGenrer({ id: genre, popularity: true })}>
              mais populares
          </button>
          </div>
          <div className="column">
            <select onChange={e => handleColumn(e)} value={oneColumn}>
              <option value="list">em lista</option>
              <option value="grid">em grid</option>
            </select>
          </div>
        </div>

        <S.Movie >
          {movies.map(movie => {
            if (width < 620) {
              return (
                <CardMobile
                  key={movie.id}
                  id={movie.id}
                  column={oneColumn}
                  img={movie.poster_path}
                  title={movie.original_title}
                  genrers={HandleGenreCarrousel(movie.genre_ids)}
                  vote={movie.vote_average}
                  desc={movie.overview}
                />
              )
            } else {
              return (
                <Card
                  key={movie.id}
                  id={movie.id}
                  column={oneColumn}
                  img={movie.poster_path}
                  title={movie.original_title}
                  genrers={HandleGenreCarrousel(movie.genre_ids)}
                  vote={movie.vote_average}
                  desc={movie.overview}
                />
              )
            }
          })}
        </S.Movie>

        <S.More>
          <Link href="/#catalog">
            <button onClickCapture={() => handleGetPopularMovies()}>
              carregar mais
          </button>
          </Link>
        </S.More>
      </S.Catalog>
      <Footer />
    </>
  )
}
