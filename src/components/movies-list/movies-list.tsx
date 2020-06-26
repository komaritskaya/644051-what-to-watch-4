import React from 'react';
import MovieCard from '../movie-card/movie-card';
import {Movie} from '../../types';

interface MoviesListProps {
  movies: Movie[];
  onTitleClick: () => void;
}

class MoviesList extends React.PureComponent<MoviesListProps> {
  constructor(props) {
    super(props);
    this.state = {activeMovieId: null};

    this._onCardHover = this._onCardHover.bind(this);
  }

  _onCardHover(id) {
    this.setState({
      activeMovieId: id,
    });
  }

  render() {
    const {movies, onTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onTitleClick={onTitleClick}
              onCardHover={this._onCardHover}
            />
          ))
        }
      </div>
    );
  }
}

export default MoviesList;
