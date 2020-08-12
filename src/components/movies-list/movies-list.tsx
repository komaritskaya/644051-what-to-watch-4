import React from 'react';
import MovieCard from '../movie-card/movie-card';
import withCardHover from '../../hocs/with-card-hover/with-card-hover';
import {Movie} from '../../types';

interface MoviesListProps {
  movies: Movie[];
  onCardHover: (id: string) => void;
  onCardLeave: () => void;
  activeMovieId: number;
}

const MovieCardWrapped = withCardHover(MovieCard);

const MoviesList: React.FC<MoviesListProps> = ({movies, onCardHover, onCardLeave, activeMovieId}) => {
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {
          movies.map((movie) => (
            <MovieCardWrapped
              key={movie.id}
              movie={movie}
              onCardHover={onCardHover}
              onCardLeave={onCardLeave}
              isActive={movie.id === activeMovieId}
            />
          ))
        }
      </div>
    </React.Fragment>
  );
};

export default MoviesList;
