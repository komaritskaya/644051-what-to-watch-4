import React from 'react';
import MoviesList from '../movies-list/movies-list';
import {Movie} from '../../types';

interface MoreLikeThisProps {
  movie: Movie;
  allMovies: Movie[];
}

const MoreLikeThis: React.FC<MoreLikeThisProps> = ({movie, allMovies}) => {
  const similarMovies = allMovies.filter((it) => it.genre === movie.genre && it.id !== movie.id);
  const shownSimilarMovies = similarMovies.length > 4 ? similarMovies.slice(0, 4) : similarMovies;
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <MoviesList
        movies={shownSimilarMovies}
      />
    </section>
  );
};

export default MoreLikeThis;
