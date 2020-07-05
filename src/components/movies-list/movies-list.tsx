import React from 'react';
import MovieCard from '../movie-card/movie-card';
import {Movie} from '../../types';

interface MoviesListProps {
  movies: Movie[];
  onCardClick: (id: string) => void;
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
    const {movies, onCardClick} = this.props;
    const {activeMovieId} = this.state;
    return (
      <div className="catalog__movies-list">
        {
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onCardClick={onCardClick}
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
