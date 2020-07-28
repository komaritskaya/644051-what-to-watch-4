import React from 'react';
import MovieCard from '../movie-card/movie-card';
import {Movie} from '../../types';

interface MoviesListProps {
  movies: Movie[];
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
    const {movies} = this.props;
    const {activeMovieId} = this.state;
    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {
            movies.map((movie) => (
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
      </React.Fragment>
    );
  }
}

export default MoviesList;
