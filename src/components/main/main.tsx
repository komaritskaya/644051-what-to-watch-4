import React from 'react';
import MoviesList from '../movies-list/movies-list';
import GenresList from '../genres-list/genres-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import Header from '../header/header';
import withActiveMovie from '../../hocs/with-active-movie/with-active-movie';
import {Movie} from '../../types';

interface MainProps {
  movies: Movie[];
  currentMovie: Movie;
  activeGenre: string;
  setGenre: (genre: string | null) => void;
  addShownMovies: (count: number) => void;
  shownMoviesCount: number;
  authStatus: string;
}

const MoviesListWrapped = withActiveMovie(MoviesList);

const filterMoviesByGenre = (movies: Movie[], genre: string) => {
  if (!genre) {
    return movies;
  }

  return movies.filter((movie: Movie) => movie.genre === genre);
};

const Main: React.FC<MainProps> = ({
  movies,
  currentMovie,
  activeGenre,
  setGenre,
  addShownMovies,
  shownMoviesCount,
  authStatus,
}: MainProps) => {
  const {title, genre, year, cover, poster} = currentMovie;
  const filteredMovies = filterMoviesByGenre(movies, activeGenre);
  const shownMovies = filteredMovies.slice(0, shownMoviesCount);
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={cover} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header authStatus={authStatus} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster} alt={`${title} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            movies={movies}
            activeGenre={activeGenre}
            setGenre={setGenre}
          />

          <MoviesListWrapped
            movies={shownMovies}
          />

          {filteredMovies.length > shownMovies.length && <ShowMoreBtn onClick={addShownMovies} />}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Main;
