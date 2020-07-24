import React from 'react';
import MovieCard from '../movie-card/movie-card';
import {Movie} from '../../types';

interface MoviesListProps {
  movies: Movie[];
  activeGenre: string;
}

interface MoviesListState {
  activeMovieId: string;
}

class MoviesList extends React.PureComponent<MoviesListProps, MoviesListState> {
  constructor(props: MoviesListProps) {
    super(props);
    this.state = {activeMovieId: null};

    this._onCardHover = this._onCardHover.bind(this);
    this._onCardLeave = this._onCardLeave.bind(this);
    this._filterMoviesByGenre = this._filterMoviesByGenre.bind(this);
  }

  _filterMoviesByGenre(movies: Movie[], genre: string) {
    if (!genre) {
      return movies;
    }

    return movies.filter((movie: Movie) => movie.genre === genre);
  }

  _onCardHover(id: string) {
    this.setState({
      activeMovieId: id,
    });
  }

  _onCardLeave() {
    this.setState({
      activeMovieId: null,
    });
  }

  render() {
    const {movies, activeGenre} = this.props;
    const {activeMovieId} = this.state;
    const filteredMovies = this._filterMoviesByGenre(movies, activeGenre);
    return (
      <div className="catalog__movies-list">
        {
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onCardHover={this._onCardHover}
              onCardLeave={this._onCardLeave}
              isActive={movie.id === activeMovieId}
            />
          ))
        }
      </div>
    );
  }
}

export default MoviesList;
