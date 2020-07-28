import React from 'react';
import MoviesList from '../movies-list/movies-list';
import {Movie} from '../../types';
import {SHOWN_SIMILAR_MOVIES_COUNT} from '../../const';

interface MoreLikeThisProps {
  movie: Movie;
  allMovies: Movie[];
}

const MoreLikeThis: React.FC<MoreLikeThisProps> = ({movie, allMovies}) => {
  const similarMovies = allMovies.filter((it) => it.genre === movie.genre && it.id !== movie.id);
  const shownSimilarMovies = similarMovies.length > SHOWN_SIMILAR_MOVIES_COUNT ? similarMovies.slice(0, SHOWN_SIMILAR_MOVIES_COUNT) : similarMovies;
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
